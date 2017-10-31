import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'jquery-slimscroll';
import { FormsModule } from '@angular/forms';

import { WebSocketService } from '../../services/websocket.service';
import { DialogsService } from '../../services/dialogs.service';
import { StatusService } from '../../services/status.service';

import { AppSettings } from '../../app.settings';

@Component({
  selector: 'modecalling',
  templateUrl: 'view_mode_calling.template.html'
})

export class ModeCallingViewComponent implements OnInit, OnDestroy {
    @Input() public  user;

    public callingdialog;
    public callingfroms = [];
    public calling_time;
    public start_calling_time;
    public mode = 'calling'; //calling  mode_dialog_pupil
    public activedialogid;

    public audio_enable: boolean = true;
    private audio;
    private loading: boolean = false;
    private timeout_id;
    private running_call = true;


    constructor(
        private webSocketService: WebSocketService,
        private activatedRoute: ActivatedRoute,
        private dialogsService: DialogsService,
        private statusService: StatusService,
        private router: Router,
        ) {
    }

    ngOnInit() {
        let self = this;
        self.start_calling_time = new Date();

        self._createCallingAudio();

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            //console.log("Calling message", message)

            if (message.command == 'CALLING_MASTER_REJECT') {
                self.stopCallingDialog();
            }

            if (message.command == "START_DIALOG_PUPIL") {
                self.activedialogid = message.dialog;
                self.running_call = false;
                self.mode = 'mode_dialog_pupil';

            }

            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL") {
                self.stopCallingDialog();
            }

            if (message.command == "STOP_CALLING") {
                this.running_call = false;
                if (message.reason == "DIALOG_STOP") {
                    this.router.navigate(['/activedialogues']);
                }
                if (message.reason == "NOT FOUND") {
                    this.router.navigate(['/activedialogsue']);
                }
            }

            
            
        })

        self.statusService.ready.subscribe((date)=> {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
            if (!self.callingdialog) {
                self._getActiveDialog();
            }
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;
        } else {
            self.statusService.getStatus();
        }

        if (self.user) {
            //self._getActiveDialog();
            self._getActiveDialog();
        }
       
        
    }

    ngAfterViewInit() {
        
    }

    ngOnChanges(changes) {
        console.log('changes', changes)
    }
    


    ngOnDestroy() {
        this.running_call = false;
        if (this.timeout_id) {
            clearTimeout(this.timeout_id);
        } 
    }

    private _createCallingAudio() {
        this.audio = new Audio();
        this.audio.src = "/static/assets/music/calling.mp3";
        this.audio.load();
    }

    private _playCallingAudo() {
        if (this.audio_enable && this.running_call) {
            try {
                this.audio.play();
            } catch (e) {
                console.log(e);
            }
        }
    }

    public stopCallingDialog() {
        this.running_call = false;
        this.router.navigate(['/activedialogues']);
    }

     /*
    private _startCalling() {
        let self = this;
        this.activatedRoute.params
                .pluck('id')
                .subscribe((id) => {
                    self._callingDialog(id)
                })
    }
    */
   
    private _getActiveDialog() {
        let self = this;
        this.activatedRoute.params
                .pluck('id')
                .switchMap(id => this.dialogsService.getActiveDialog(id))
                .subscribe((dialog) => {
                    self.callingdialog = dialog;
                    self._callingDialog(self.callingdialog.id);
                });
    }

    private _callingDialog(activedialog_id) {
        //console.log('_callingDialog')

        let self = this;
        if (self.running_call) {
            self.calling_time = new Date();
            
            self.webSocketService.sendCommand({
                command: 'CALLING',
                target: activedialog_id,
                source: self.user.key_id
            })

            if (self.timeout_id) {
                clearTimeout(self.timeout_id);
            } 
        
            self._playCallingAudo();

            self.timeout_id = setTimeout(function() {
                self._callingDialog(activedialog_id);
            }, AppSettings.CALLING_TIME_INTERVAL);
        }
        
        
    }
    

    public handelerStopDialog(data) {
        let self = this;
        self.loading = true;
        let command = {
                command: 'EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL',
                target: data.activedialogid,
            }
        
        self.webSocketService.sendCommand(command)
       // this._updateActiveDialogs();
    }
    
    
}
