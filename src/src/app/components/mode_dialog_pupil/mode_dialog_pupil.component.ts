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
    activedialog;
    peer;
    peerid;
    user;
    loading: boolean = false;
    localStream;
    callingCall;
    status_activedialog = 'starting';
    last_hearbeat_from_master;

    private _timeout;

    constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService
        ) {
        var self = this;
    }

    ngOnInit() {
        let self = this;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe((data) => {
            self.activedialog = data;
            //console.log('this.user ', self.activedialog)
            self._startPeer();
        })

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            if (message.command == "DIALOG_STOP") {
                self._closeDialog();
                self.status_activedialog = 'stop';
            }
            if (message.command == "HEARBEAT_DIALOG_MASTER") {
                self.last_hearbeat_from_master = new Date();
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


    private _startPeer() {
        let self = this;


        self.peer = new Peer({
            socket: self.webSocketService,
            //key: this.user.key,
            host: AppSettings.URL_WEBSOKET_PEER,
            //path: '/peerjs',
            //path: '/',
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
            console.log("ERROR:", err.message);
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



        this.userMedia.getUserMedia(
            {
                audio: {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                },video: true
            }, (stream)=>{
                self.localVideo.nativeElement.src =  URL.createObjectURL(stream);
                //$('#local-video').prop('src', URL.createObjectURL(stream));
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
            self.status_activedialog = 'run';
        });
        
        call.on('close', function() {
            console.log("CLOSE");
            self._closeDialog();
        });

    }

    private _closeDialog() {
        let self = this;
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
        this._closeDialog();
        this.stopdialog.emit({
            activedialogid: this.activedialogid,
            type: 'pupil'
        });
        
    }    

    public hangPhone() {
        let self = this;
        this._closeDialog();
        self.webSocketService.sendCommand({
            command: "DIALOG_STOP",
            target: self.activedialog.id,
        })

    } 

    private _runHearbeatPupil(): void {
        let self = this;
        if (self._checkLastMessageFromPupil) {
            if (self.webSocketService.ws.socket.readyState == 1) {
                if (self.callingCall && self.callingCall.open) {
                    self.webSocketService.sendCommand({
                        command: "HEARBEAT_DIALOG_PUPIL",
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
}
