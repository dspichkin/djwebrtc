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
    public dialogs;
    public activedialogs;

    public callingdialog;

    public mode: string = 'mode_list'; // 1 - all dialogs 'wait_pupil' - activedialogs 3 - calling
    public activedialog = null;
    public activedialog_id = null;
    public loading = true;
    public calling_time;
    
    public reject_call_from = null;

    private _CALLING_TIME_INTERVAL = 3000;
    private _intervalid;

    public constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService,
        private router: Router,
        private ref: ChangeDetectorRef) {
        
    }

    public ngOnInit():any {
        let self = this;
        self.statusService.ready.subscribe((date)=> {
            self.user = this.statusService.user;
            //console.log('self.user', self.user)
            if (!self.user) {
                return;
            }

            self.mode = this.statusService.mode;
            self.activedialog = self.statusService.activedialog;
            if (!this.activedialog) {
                this._updateDialogs();
            }
        });

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            //console.log("1!!!!message", message)
            //if (message.command == "UPDATE") {
            //    if (message.target == "activedialogs") {
            //        self._updateActiveDialogs();
            //    }
            //}

            //if (message.command == "START_DIALOG_MASTER") {
            //    self.activedialog_id = message.dialog;
            //    self.mode = AppSettings.MODE_DIALOG_MASTER
            //}
            
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

        this.dialogsService.getDialogs().subscribe((data) => {
            this.dialogs = data;
            this.loading = false;
        });

        //if (self.loading) {
        //    self._updateDialogs();
        //}
    }

    

    public ngOnDestroy():any {
    }
    

    private _updateDialogs() {
        //this.loading = true;
        
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
            //    self.router.navigate(['/wait']);
            //    self.mode = AppSettings.MODE_WAIT_PUPIL;
            //    self.activedialog = data.activedialog;
            }
        });
    }
    

    /*

    public runDialog(dialog) {
        let self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe((data) => {
            //console.log(data)
            self.loading = false;
            if (data.status) {
                self.router.navigate(['/wait']);
            //    self.mode = AppSettings.MODE_WAIT_PUPIL;
            //    self.activedialog = data.activedialog;
            }
        });
    }

    
    
    public callDialog(dialog) {
        let self = this;
        self.callingdialog = dialog;
        self.mode = AppSettings.MODE_CALLING;
        self._callingDialog(dialog.id);
    }

    

    private _callingDialog(activedialog_id) {
        let self = this;
        if (self.mode == AppSettings.MODE_CALLING) {
            self.calling_time = new Date();

            self.webSocketService.sendCommand({
                command: 'CALLING',
                target: activedialog_id,
                source: self.user.key_id
            })

            setTimeout(function() {
                self._callingDialog(activedialog_id);
            }, AppSettings.CALLING_TIME_INTERVAL);
        }
        
    }
    */
    public handlerStopCalling($event) {
        this.callingdialog = null;
        this.mode = AppSettings.MODE_LIST;
        //this._updateActiveDialogs();
    }

    //public handelerStopWaitDialog(data) {
    //    if (data.status) {
    //        this.mode = AppSettings.MODE_LIST;
            //this.showDialogs();
    //    }
    //}

    public handlerAcceptCall(user_key_id) {
        let self = this;
        self.webSocketService.sendCommand({
            command: 'START_DIALOG',
            target: self.activedialog.id,
            master: self.user.key_id,
            pupil: user_key_id
        })
    }
    /*
    public handelerStopDialog(data) {
        let self = this;
        self.loading = true;
        let command;
        if (data.type == 'pupil') {
            command = {
                command: 'EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL',
                target: data.activedialogid,
            }
        }
        if (data.type == 'master') {
            command = {
                command: 'EXIT_FROM_ACTIVE_DIALOG_BY_MASTER',
                target: data.activedialogid
            }
        }
        self.webSocketService.sendCommand(command)
       // this._updateActiveDialogs();
    }

    */


}
