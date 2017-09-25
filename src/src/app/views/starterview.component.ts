import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { StatusService } from '../services/status.service';
import { DialogsService } from '../services/dialogs.service';
import { WebSocketService } from '../services/websocket.service';
import { AppSettings } from '../app.settings';

//declare var moment:any;
//declare var $:any;

@Component({
  selector: 'starter',
  templateUrl: 'starterview.template.html'
})
export class StarterViewComponent implements OnInit  {

    public user;
    public dialogs;
    public activedialogs;

    public callingdialog;

    public mode: string = 'mode_list'; // 1 - all dialogs 'wait_pupil' - activedialogs 3 - calling
    public mode_select_dialog: number = 1;
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
        private webSocketService: WebSocketService) {
        
    }

    public ngOnInit():any {
        let self = this;
        
        self.statusService.ready.subscribe((date)=> {
            self.user = this.statusService.user;
            self.mode = this.statusService.mode;
            self.activedialog = self.statusService.activedialog;
            if (!this.activedialog) {
                this.showActiveDialogs();
            }
        });

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            //console.log("1!!!!message", message)
            if (message.command == "UPDATE") {
                if (message.target == "activedialogs") {
                    self._updateActiveDialogs();
                }
            }

            if (message.command == "START_DIALOG_MASTER") {
                self.activedialog_id = message.dialog;
                self.mode = AppSettings.MODE_DIALOG_MASTER
            }
            if (message.command == "START_DIALOG_PUPIL") {
                self.activedialog_id = message.dialog;
                self.mode = AppSettings.MODE_DIALOG_PUPIL
            }
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

        //self._runGetActiveDialogs();
        
    }

    

    public ngOnDestroy():any {
    }
    
    public showDialogs() {
        this.mode_select_dialog = 1;
        this._updateDialogs();
    }

    private _updateDialogs() {
        this.loading = true;
        this.dialogsService.getDialogs().subscribe((data) => {
            this.dialogs = data;
            this.loading = false;
        });
    }

    public showActiveDialogs() {
        this.mode_select_dialog = 2;
        this._updateActiveDialogs();
        
    }

    private _updateActiveDialogs() {
        console.log('_updateActiveDialogs')
        this.loading = true;
        this.dialogsService.getActiveDialogs().subscribe((data) => {
            this.activedialogs = data;
            this.loading = false;
        });
    }

    private _runGetActiveDialogs() {
        let self = this;
        if (self._intervalid) {
            clearInterval(self._intervalid);
        }

        self._intervalid = setInterval(function() {
            if (self.mode == AppSettings.MODE_LIST) {
                self._updateActiveDialogs();
            }
        }, 10000);
    }
    public runDialog(dialog) {
        let self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe((data) => {
            console.log(data)
            self.loading = false;
            if (data.status) {
                self.mode = AppSettings.MODE_WAIT_PUPIL;
                self.activedialog = data.activedialog;
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

    public handlerStopCalling($event) {
        this.callingdialog = null;
        this.mode = AppSettings.MODE_LIST;
        this._updateActiveDialogs();
    }

    public handelerStopWaitDialog(data) {
        if (data.status) {
            this.mode = AppSettings.MODE_LIST;
            this.showDialogs();
        }
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
        this._updateActiveDialogs();
    }


}
