import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { StatusService } from '../services/status.service';
import { DialogsService } from '../services/dialogs.service';
import { WebSocketService } from '../services/websocket.service';
import { AppSettings } from '../app.settings';

//declare var moment:any;
//declare var $:any;

@Component({
  selector: 'dialogsview',
  templateUrl: 'dialogsview.template.html'
})
export class DialogsViewComponent implements OnInit  {

    public user;
    public dialogs: Array<any> = [];
    public activedialogs;
    public callingdialog;
    public mode: string = 'mode_list'; // 1 - all dialogs 'wait_pupil' - activedialogs 3 - calling
    public activedialog = null;
    public activedialog_id = null;
    public loading = true;
    public calling_time;
    public reject_call_from = null;
    public count = 0;
    public next = false;
    public previous = false;
    public next_url = false;
    public previous_url = false;
    public levels = [
        {
            id: 0,
            title: "Выберите уровень знания"
        }, {
            id: 10,
            title: "Beginner, Elementary"
        },{
            id: 20,
            title: "Pre-Intermediate"
        },{
            id: 30,
            title: "Intermediate"
        },{
            id: 40,
            title: "Upper-Intermediate"
        },{
            id: 50,
            title: "Advanced"
        },{
            id: 60,
            title: "Proficiency"
        },
    ]
    public selectedDialogLevel;
    public show_inputed_dialogs: boolean = false;
    public tags = [];

    private _CALLING_TIME_INTERVAL = 3000;
    private _intervalid;
    private webSocketSubscription;
    private statusSubscription
    private _searchValue = "";

    public constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService,
        private router: Router,
        private ref: ChangeDetectorRef) {
        
    }

    public ngOnInit():any {
        let self = this;

        self.selectedDialogLevel = self.levels[0].id;

        self.statusSubscription = self.statusService.ready.subscribe((date)=> {
            self.user = this.statusService.user;
            //console.log('self.user', self.user)
            if (!self.user) {
                return;
            }

            self.mode = this.statusService.mode;
            self.activedialog = self.statusService.activedialog;
            
        });

        self.webSocketSubscription = self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            
            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL") {
                console.log("EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL")
                self.mode = AppSettings.MODE_LIST;
                self.statusService.init();
            }
            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_MASTER") {
                console.log("EXIT_FROM_ACTIVE_DIALOG_BY_MASTER")
                self.mode = AppSettings.MODE_LIST;
                self.statusService.init();
            }

        })

        self.webSocketService.error.subscribe((err) => {
            console.log("Error", err)
        })

        self._getDialogs();
    }


    private _getDialogs(page?) {
        let params = {}
        if (page) {
            params['page'] = page;
        }
        if (!this.show_inputed_dialogs) {
            if (this.selectedDialogLevel) {
                params['level'] = this.selectedDialogLevel;
            }
            if (this._searchValue) {
                params['search']= this._searchValue;
            }
        } else {
            params['inputed'] = true;
        }
        this.dialogsService.getDialogs(params).subscribe((data) => {
            this.next = data.next;
            this.previous = data.previous;
            this.count = data.count;
            this.dialogs = data.dialogs;
            this.loading = false;
        });
    }
    

    public ngOnDestroy():any {
        this.statusSubscription.unsubscribe();
        this.webSocketSubscription.unsubscribe();
    }
    



    private turnActiveDialog(dialog) {
        let self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe((data) => {
            self.loading = false;
            if (data.status) {
                for (let i = 0; i < self.dialogs.length; i++) {
                    if (self.dialogs[i].id == dialog.id) {
                         self.dialogs[i] = data.dialog;
                    }
                }
                self.ref.detectChanges();
            }
        });
    }
    

   
    public handlerStopCalling($event) {
        this.callingdialog = null;
        this.mode = AppSettings.MODE_LIST;
        //this._updateActiveDialogs();
    }

    

    public handlerAcceptCall(user_key_id) {
        let self = this;
        self.webSocketService.sendCommand({
            command: 'START_DIALOG',
            target: self.activedialog.id,
            master: self.user.key_id,
            pupil: user_key_id
        })
    }
    
    public nextPage() {
        this._getDialogs(this.next);
    }

    public prevPage() {
        this._getDialogs(this.previous);
    }

    public showInputDialogs() {
        this.show_inputed_dialogs = !this.show_inputed_dialogs;
    }

    public searchTags(value:any) {
        this.dialogsService.getTags(value).subscribe((res)=>{
            this.tags = res;
        })
    }

    public selectedTag(value:any):void {
        this._getDialogs();
    }

    public changeLevel() {
        this._getDialogs();
    }

    public onChangeSearchValue(data) {
        this._searchValue = data;
    }
}
