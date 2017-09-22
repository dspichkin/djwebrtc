import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppSettings } from '../../app.settings';
import { StatusService } from '../../services/status.service';
import { DialogsService } from '../../services/dialogs.service';

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

    public userMedia = <any>navigator;
    activedialog;
    peer;
    peerid;
    user;
    loading: boolean = false;
    localStream;
    answeringCall;

    constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService
        ) {
        var self = this;
    }

    ngOnInit() {
        let self = this;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe((data) => {
            self.activedialog = data;

            console.log('this.user ', self.activedialog)
            this._startPeer();
        })
        
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
            //key: self.user.key,
            host: AppSettings.URL_WEBSOKET_PEER,
            //path: '/peerjs',
            //path: '/',
            debug: 3,
            secure: true,
            port: 8000
        });

        self.peer.on('open', function(id) {
            self.peerid = id;
            console.log('Peer: My peer ID is: ' + id);
        });

        self.peer.on('error', function(err) {
            console.log("ERROR:", err.message);
        });

        // Receiving a call
        self.peer.on('call', function(receivecall) {
            console.log('Receiving a call')
            console.log("!!!!!", receivecall)
            self._startLocalVideo(function() {
                receivecall.answer(self.localStream);
                self._prepareCall(receivecall);
            })
            
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
                $('#local-video').prop('src', URL.createObjectURL(stream));
                console.log("!!!!!$('#local-video')", $('#local-video'))
                self.localStream = stream;
                if (callback) {
                    callback();
                }
            },
            (error)=>{
                console.log("ERROR getUserMedia: ", error);
            });
        /*
        // Get audio/video stream
        window.navigator.getUserMedia({
            audio: true,
            video: true
        }, function(stream) {
            $('#local-video').prop('src', URL.createObjectURL(stream));
            console.log("!!!!!$('#local-video')", $('#local-video'))
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function(error) {
            console.log("ERROR getUserMedia: ", error);
        });
        */
    }


    private _prepareCall(call) {
        let self = this;
        if (self.answeringCall) {
            self.answeringCall.close();
        }
        self.answeringCall = call;

        call.on('stream', function(stream) {
            console.log('XXX!!! got stream')
            // get call stream from remote host
            $('#remote-video').prop('src', URL.createObjectURL(stream));
            // turn on local video for answer
            //startLocalVideo(function() {
            //    window.peer.call(call.peer, window.localStream);
            //});
        });
        
        call.on('close', function() {
            console.log("CLOSE");
            if (self.answeringCall) {
                self.answeringCall.close();
            }

            if (self.localStream) {
                self.localStream.getTracks().forEach(function (track) {
                    track.stop();
                });
                self.localStream.src = "";
            }
            if ($('#remote-video')) {
                $('#remote-video').src = "";
            }

        });

    }
    public stopDialog() {
        this.stopdialog.emit(this.activedialogid);
    }   

    public hangPhone() {
        if (this.answeringCall) {
            this.answeringCall.close();
        }
    } 
}
