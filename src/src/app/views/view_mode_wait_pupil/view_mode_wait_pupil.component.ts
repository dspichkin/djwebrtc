import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter,
    ChangeDetectorRef, ViewRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DialogsService } from '../../services/dialogs.service';
import { WebSocketService } from '../../services/websocket.service';
import { StatusService } from '../../services/status.service';


import { AppSettings } from '../../app.settings';

@Component({
  selector: 'viewmodewaitpupil',
  templateUrl: 'view_mode_wait_pupil.template.html'
})

export class ModeWaitPupilViewComponent implements OnInit, OnDestroy {
    //@Input() public  user;
    //@Input() public activedialog;
    @Output() public stopwaitingdialog = new EventEmitter();
    @Output() public acceptcall = new EventEmitter();

    public activedialog;
    public user;
    public callingfroms = [];
    public mode = 'wait';
    
    public audio_enable: boolean = true;
    private audio;
    private loading: boolean = false;


    constructor(
        private webSocketService: WebSocketService,
        private dialogsService: DialogsService,
        private statusService: StatusService,
        private ref: ChangeDetectorRef,
        private router: Router
        ) {
    }

    ngOnInit() {
        let self = this;

        self.createAudioIncoming();

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            if (message.command == 'CALLING') {
                if (message.target == 'TAKEPHONE') {
                    if (!self.activedialog) {
                        self._getActiveDialog(message.activedialogid, function() {
                            self._calling(message);
                        })
                    } else {
                        self._calling(message);
                    }
                    
                }
            }
            if (message.command == 'CALLING_MASTER_REJECT') {
                let index = -1;
                for (let i = 0; i < self.callingfroms.length; i++) {
                    if (self.callingfroms[i].key_id == message.pupil) {
                        index = i;
                        break;
                    }
                } 
                if (index != -1) {
                    self.callingfroms.splice(index, 1);
                    this._detectChanges();
                }
                
            }

            if (message.command == "START_DIALOG_MASTER") {
                self.mode = 'mode_dialog_master';

            }

            if (message.command == "CALLING_REJECT") {
                self.router.navigate(['/activedialogues/']);
            }

            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_MASTER") {
                self.router.navigate(['/activedialogues/']);
            }
        })

        self.statusService.ready.subscribe((date)=> {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
            //if (self.statusService.activedialog) {
            //    self.activedialog = self.statusService.activedialog;
            //}
        });

        if (!self.user) {
            self.user = self.statusService.user;
        }
        
        setTimeout(function() {
            if (!this.activedialog) {
                this.router.navigate(['/dialogues/']);
            }
        }.bind(this), 10000)
        
    }



    private _getActiveDialog(activedialogid, callback) {
        let self = this;
        this.dialogsService.getActiveDialog(activedialogid)
            .subscribe((activedialog) => {
                self.activedialog = activedialog;
                if (callback) {
                    callback();
                }
            });
    }

    ngAfterViewInit() {
    }

    ngOnChanges(changes) {
        //console.log('changes', changes)
    }
    


    ngOnDestroy() {
        this.ref.detach(); 
        //this.statusService.ready.unsubscribe();
    }

    private _detectChanges () {
        // Programmatically run change detection to fix issue in Safari
        setTimeout(() => {
            if ( this.ref !== null &&
                this.ref !== undefined &&
                ! (this.ref as ViewRef).destroyed ) {
                    this.ref.detectChanges();
            }

        }, 250);
    }

    private createAudioIncoming() {
        this.audio = new Audio();
        this.audio.src = "/static/assets/music/incoming-phone-call.mp3";
        this.audio.load();
    }

    private _playCallingAudo() {
        if (this.audio_enable) {
            this.audio.play();
        }
    }


    public handlerRejectfrom(item) {
        let user_key_id = item.key_id;
        let command = {
            command: 'CALLING_MASTER_REJECT',
            target: user_key_id,
            source: this.user.key_id,
            activedialigid: this.activedialog.id
        }
        this.webSocketService.sendCommand(command);
    }

    public handlerTakeCall(user_key_id) {
        let self = this;
        let command = {
            command: 'START_DIALOG',
            target: self.activedialog.id,
            master: self.user.key_id,
            pupil: user_key_id
        }
        self.webSocketService.sendCommand(command);
    }

    private _calling(message) {
        //console.log('_calling')
        let exists = false;
        for (let i = 0; i < this.callingfroms.length; i++) {
            if (this.callingfroms[i].key_id == message.user.key_id) {
                exists = true;
                this.callingfroms[i].lasttime = new Date();
            }
        }
        if (!exists) {
            message.user.lasttime = new Date();
            this.callingfroms.push(message.user);
        }
        if (this.callingfroms.length > 0) {
            this._playCallingAudo();
        }
        this._detectChanges();
        
    }
    

    public stopWaitCallDialog() {
        let self = this;
        self.loading = true;
        let command = {
            command: 'CALLING_REJECT',
            target: self.activedialog.id
        }
        self.webSocketService.sendCommand(command);
    }



    public handelerStopDialog(data) {
        let self = this;
        self.loading = true;
        let command = {
            command: 'EXIT_FROM_ACTIVE_DIALOG_BY_MASTER',
            target: data.activedialogid
        }
        self.webSocketService.sendCommand(command)
    }
    
}
