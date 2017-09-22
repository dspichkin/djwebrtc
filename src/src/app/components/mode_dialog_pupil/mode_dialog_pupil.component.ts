import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { StatusService } from '../../services/status.service';
import { AppSettings } from '../../app.settings';
import { DialogsService } from '../../services/dialogs.service';


declare var Peer:any;
declare var $:any;
declare var window: any;

@Component({
  selector: 'modedialogpupil',
  templateUrl: 'mode_dialog_pupil.template.html'
})

export class ModeDialogPupilComponent implements OnInit, OnDestroy {
    @Input() public activedialogid;
    @Output() public stopdialog = new EventEmitter();

    activedialog;
    peer;
    peerid;
    user;
    loading: boolean = false;
    localStream;
    callingCall;

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
            //key: this.user.key,
            host: AppSettings.URL_WEBSOKET_PEER,
            path: '/peerjs',
            debug: 3,
            secure: true,
            port: 8000
        });

        self.peer.on('open', function(id) {
            console.log('Peer: My peer ID is: ' + id);
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
            console.log('Receiving a call')
            // ответный звонок на вызов
        });
    }

    private _startLocalVideo(callback) {
        let self = this;
        // Compatibility shim
        window.navigator.getUserMedia = window.navigator.getUserMedia || 
            window.navigator.webkitGetUserMedia || 
            window.navigator.mediaDevices.getUserMedia;

        // Get audio/video stream
        window.navigator.getUserMedia({
            audio: true,
            video: true
        }, function(stream) {
            $('#local-video').prop('src', URL.createObjectURL(stream));
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function(error) {
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
            console.log('got stream')
            // get call stream from remote host
            $('#remote-video').prop('src', URL.createObjectURL(stream));
            // turn on local video for answer
            //startLocalVideo(function() {
            //    window.peer.call(call.peer, window.localStream);
            //});
        });
        
        call.on('close', function() {
            console.log("CLOSE");
            if (self.callingCall) {
                self.callingCall.close();
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
}
