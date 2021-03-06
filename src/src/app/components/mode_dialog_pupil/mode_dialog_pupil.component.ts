import { Component, OnInit, OnDestroy, Input, Output, 
    OnChanges, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { StatusService } from '../../services/status.service';
import { AppSettings } from '../../app.settings';
import { DialogsService } from '../../services/dialogs.service';
import { WebSocketService } from '../../services/websocket.service';


declare var Peer:any;
declare var $:any;
declare const navigator;

@Component({
  selector: 'modedialogpupil',
  templateUrl: 'mode_dialog_pupil.template.html'
})

export class ModeDialogPupilComponent implements OnInit, OnDestroy {
    @Input() public activedialogid;
    @Output() public stopdialog = new EventEmitter();

    @ViewChild('remoteVideo') private remoteVideo: ElementRef;
    @ViewChild('localVideo') private localVideo: ElementRef;

    public userMedia = <any>navigator;
    public activedialog;
    public user;
    public loading: boolean = false;
    // продолжительность диалога
    public during_conversation;
    public connection_error_message = "";
    public personageName;
    public status_activedialog = 'starting';
    public status_voice_connection = 'starting'; //starting, run, stop, error_connection
    public last_hearbeat_from_master;

    private peer;
    private peerid;
    private localStream;
    private callingCall;
    private start_converstion;
    private webSocketSubscription;
    private _timeout;
    private _run_hearbeat_pupil: boolean;

    constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService
        ) {
        var self = this;
    }

    ngOnInit() {
        let self = this;
        self._run_hearbeat_pupil = true;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe((data) => {
            self.activedialog = data;
            self._getPersonageName();
            self._startPeer();
        })

        self.webSocketSubscription = self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            if (message.command == "DIALOG_STOP") {
                self._closeVoiceConnection();
                self.status_activedialog = 'stop';
            }
            if (message.command == "DIALOG_STOP_VOICE_CONNECTION") {
                self._closeVoiceConnection();
            }
            if (message.command == "HEARBEAT_DIALOG_MASTER") {
                self.status_activedialog = 'run';
                self.last_hearbeat_from_master = new Date();
                let value = Math.round((self.last_hearbeat_from_master - self.start_converstion) / 1000);
                if (value) {
                   self.during_conversation = value;
                }
            }
            if (message.command == "DIALOG_STOP_ERROR") {
                self._run_hearbeat_pupil = false;
                self.status_activedialog = 'error_connection';
            }
            if (message.command == "DIALOG_VOICE_CONNECTION_ERROR") {
                self.status_voice_connection = 'error_connection';
                self._closeVoiceConnection();
            }
            
        });

        self.status_activedialog = 'run';
        self._runHearbeatPupil();


        
    }

    ngAfterViewInit() {
        
    }

    ngOnChanges(changes) {
    }
    


    ngOnDestroy() {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this._run_hearbeat_pupil = false;
        this.webSocketSubscription.unsubscribe();
    }

    private callPhone() {
         this._startPeer();
    }

    private _getPersonageName() {
        for (let i = 0; i < this.activedialog.dialog.scenario.personages.length; i++) {
            if (this.activedialog.dialog.scenario.personages[i].role == 'pupil') {
                this.personageName = this.activedialog.dialog.scenario.personages[i].name;
            }
        }
    }

    private _startPeer() {
        let self = this;


        self.peer = new Peer({
            socket: self.webSocketService,
            host: AppSettings.URL_WEBSOKET_PEER,
            debug: 0,
            secure: true,
            port: 8000,
            id: self.user.key_id
        });

        self.peer.on('open', function(id) {
            //console.log('Peer: My peer ID is: ' + id);
            self.peerid = id;
            self._startLocalVideo(function() {
                let call = self.peer.call(self.activedialog.master.key_id, self.localStream);
                self._prepareCall(call);
            })
            
        });

        self.peer.on('error', function(err) {
            self.status_voice_connection = 'error_connection';
            console.log("ERROR:", err.message);
            let command = {
                command: "DIALOG_VOICE_CONNECTION_ERROR",
                target: self.activedialog.id,
            }

            if (err.message) {
                self.connection_error_message = err.message;
                command['message'] = err.message;
            }
            
            self.webSocketService.sendCommand(command);
        });

        // Receiving a call
        self.peer.on('call', function(call) {
            //console.log('Receiving a call')
            // ответный звонок на вызов
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
                self.localVideo.nativeElement.src =  URL.createObjectURL(stream);
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
        if (self.callingCall) {
            self.callingCall.close();
        }
        self.callingCall = call;

        call.on('stream', function(stream) {
            //console.log('got stream')
            // get call stream from remote host
            self.remoteVideo.nativeElement.src = URL.createObjectURL(stream); 
            self.status_voice_connection = 'run';
            self.start_converstion = new Date();
        });
        
        call.on('close', function() {
            //console.log("CLOSE");
            self._closeVoiceConnection();
        });

    }

    private _closeVoiceConnection() {
        let self = this;

        self.status_voice_connection = 'stop';

        if (self.callingCall) {
            self.callingCall.close();
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
            type: 'pupil'
        });
        
    }    

    public hangPhone() {
        let self = this;
        this._closeVoiceConnection();
        self.webSocketService.sendCommand({
            command: "DIALOG_STOP_VOICE_CONNECTION",
            target: self.activedialog.id,
        })
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
        if (self._checkLastMessageFromPupil && this._run_hearbeat_pupil) {
            if (self.activedialog && self.activedialog.id) {
                self.webSocketService.sendCommand({
                    command: "HEARBEAT_DIALOG_PUPIL",
                    target: self.activedialog.id
                })
            }
        }
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        if (this._run_hearbeat_pupil) {
            self._timeout = setTimeout(function() {
                self._runHearbeatPupil();
            }, 10000);
        }
    }

    private _checkLastMessageFromPupil(): boolean {
        let self = this;
        if (new Date(self.last_hearbeat_from_master).getTime() + 
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
