import { Component, OnInit, OnDestroy, Input, Output, 
    OnChanges, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppSettings } from '../../app.settings';
import { StatusService } from '../../services/status.service';
import { DialogsService } from '../../services/dialogs.service';
import { WebSocketService } from '../../services/websocket.service';

declare var Peer:any;
declare var $:any;
declare const navigator;

@Component({
  selector: 'modedialogmaster',
  templateUrl: 'mode_dialog_master.template.html'
})

export class ModeDialogMasterComponent implements OnInit, OnDestroy {
    @Input() public activedialogid;
    @Output() public stopdialog = new EventEmitter();

    @ViewChild('remoteVideo') private remoteVideo: ElementRef;
    @ViewChild('localVideo') private localVideo: ElementRef;

    private userMedia = <any>navigator;
    private activedialog;
    private peer;
    private peerid;
    private user;
    private loading: boolean = false;
    private localStream;
    private answeringCall;
    private last_message_from_pupil;
    private status_activedialog = 'starting'; //starting, run, stop
    private status_voice_connection = 'starting'; //starting, run, stop
    private last_hearbeat_from_pupil;
    private connection_error_message;

    // продолжительность диалога
    private during_conversation;
    private start_converstion;

    private personageName;
    private _timeout;

    constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService,
        private router: Router,
        ) {
        var self = this;
    }

    ngOnInit() {
        let self = this;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe((data) => {
            self.activedialog = data;
            self._getPersonageName();
            self._startPeer();
            //console.log('self.activedialog', self.activedialog)
        })

        
        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            if (message.command == "DIALOG_STOP") {
                self._closeVoiceConnection();
                self.status_activedialog = 'stop';
            }
            if (message.command == "HEARBEAT_DIALOG_PUPIL") {
                self.status_activedialog = 'run';
                self.last_hearbeat_from_pupil = new Date();
                let value = Math.round((self.last_hearbeat_from_pupil - self.start_converstion) / 1000);
                if (value) {
                   self.during_conversation = value;
                }
            }
            if (message.command == "DIALOG_STOP_ERROR") {
                self.status_activedialog = 'error_connection';
            }
        });

        self._runHearbeatPupil();
        
        
    }

    ngAfterViewInit() {
    }

    ngOnChanges(changes) {
    }
    


    ngOnDestroy() {
    }

    private callPhone() {
         this._startPeer();
    }

    private _getPersonageName() {
        for (let i = 0; i < this.activedialog.dialog.scenario.personages.length; i++) {
            if (this.activedialog.dialog.scenario.personages[i].role == 'master') {
                this.personageName = this.activedialog.dialog.scenario.personages[i].name;
            }
        }
    }

    private _startPeer() {
        let self = this;
        self.status_voice_connection = 'starting';
        self.peer = new Peer({
            socket: self.webSocketService,
            host: AppSettings.URL_WEBSOKET_PEER,
            debug: 0,
            secure: true,
            port: 8000,
            id: self.user.key_id
        });

        self.peer.on('open', function(id) {
            self.peerid = id;
        });

        self.peer.on('error', function(err) {
            console.log("ERROR:", err.message);
            self.status_voice_connection = 'stop';
            if (err.message) {
                self.connection_error_message = err.message;
            }
            self.webSocketService.sendCommand({
                command: "DIALOG_STOP_ERROR",
                target: self.activedialog.id,
            })
        });

        // Receiving a call
        self.peer.on('call', function(receivecall) {
            self._startLocalVideo(function() {
                self.status_voice_connection = 'run';
                self.start_converstion = new Date();

                receivecall.answer(self.localStream);
                self._prepareCall(receivecall);
            })
        });
    }

    private _startLocalVideo(callback) {
        let self = this;
        if (!navigator.getUserMedia)
            this.userMedia.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!navigator.cancelAnimationFrame)
            this.userMedia.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
        if (!navigator.requestAnimationFrame)
            this.userMedia.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;
       /*
       {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                }
       */
        this.userMedia.getUserMedia(
            {
                audio: true,
                video: false
            }, (stream)=>{
                self.localVideo.nativeElement.src = URL.createObjectURL(stream);
                self.localStream = stream;
                if (callback) {
                    callback();
                }
            },
            (error)=>{
                console.log("ERROR getUserMedia: ", error);
            });
    }


    private _prepareCall(call) {
        let self = this;
        if (self.answeringCall) {
            self.answeringCall.close();
        }
        self.answeringCall = call;

        call.on('stream', function(stream) {
            // get call stream from remote host
            self.remoteVideo.nativeElement.src = URL.createObjectURL(stream);
        });
        
        call.on('close', function() {
            //console.log("CLOSE");
            self._closeVoiceConnection();
            
        });

    }

    private _closeVoiceConnection() {
        let self = this;

        self.status_voice_connection = 'stop';

        if (self.answeringCall) {
            self.answeringCall.close();
        }

        if (self.localStream) {
            self.localStream.getTracks().forEach(function (track) {
                track.stop();
            });
            self.localStream.src = "";
        }
        if (self.remoteVideo.nativeElement.src) {
            self.remoteVideo.nativeElement.src = "";
        }
    }

    public exitDialog() {
        this._closeVoiceConnection();
        this.stopdialog.emit({
            activedialogid: this.activedialogid,
            type: 'master'
        });
        let self = this;
        setTimeout(function() {
            if (self.router.url == '/wait') {
                self.router.navigate(['/dialogs']);
            }
        }, 2000);
    }   


    public hangPhone() {
        let self = this;
        this._closeVoiceConnection();
    } 

    public displayTime(_seconds) {
        let hours   = Math.floor(_seconds / 3600);
        let minutes = Math.floor((_seconds - (hours * 3600)) / 60);
        let seconds = _seconds - (hours * 3600) - (minutes * 60);
        var time = "";

        if (hours != 0) {
          time = hours+":";
        }
        if (minutes != 0 || time !== "") {
            let sminutes = (minutes < 10 && time !== "") ? "0"+ minutes : String(minutes);
            time += sminutes + ":";
        }
        if (time === "") {
            time = seconds + "сек";
        }
        else {
            time += (seconds < 10) ? "0"+ seconds : String(seconds);
        }
        return time;
    }


    private _runHearbeatPupil(): void {
        let self = this;
        if (self._checkLastMessageFromPupil) {
            if (self.webSocketService.ws.socket.readyState == 1) {
                if (self.answeringCall && self.answeringCall.open) {
                    self.webSocketService.sendCommand({
                        command: "HEARBEAT_DIALOG_MASTER",
                        target: self.activedialog.id
                    })
                }
            }
        }
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self._runHearbeatPupil();
        }, 4000);
    }

    private _checkLastMessageFromPupil(): boolean {
        let self = this;
        if (new Date(self.last_hearbeat_from_pupil).getTime() + 
                AppSettings.HEARTBEAT_DIALOG_TIMEOUT < new Date().getTime()) {
            self.webSocketService.sendCommand({
                command: "DIALOG_STOP",
                target: self.activedialog.id,
            })
            return false;
        }
        return true;
    }

    private handlerChangeActiveDialog(activedialog) {
        this.activedialog = activedialog;
        this.activedialogid = activedialog.id;
    }
}
