import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'jquery-slimscroll';
import { FormsModule } from '@angular/forms';

import { DialogsService } from '../../services/dialogs.service';
import { WebSocketService } from '../../services/websocket.service';


import { AppSettings } from '../../app.settings';

@Component({
  selector: 'modewaitpupil',
  templateUrl: 'mode_wait_pupil.template.html'
})

export class ModeWaitPupilComponent implements OnInit, OnDestroy {
    @Input() public  user;
    @Input() public activedialog;
    @Output() public stopwaitingdialog = new EventEmitter();
    @Output() public acceptcall = new EventEmitter();


    public callingfroms = [];

    private loading: boolean = false;


    constructor(
        private webSocketService: WebSocketService,
        private dialogsService: DialogsService
        ) {
    }

    ngOnInit() {
        let self = this;

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            if (message.command == 'CALLING') {
                if (message.target == 'TAKEPHONE') {
                    self._calling(message.user)
                }
            }
        })

    }

    ngAfterViewInit() {
        
    }

    ngOnChanges(changes) {
    }
    


    ngOnDestroy() {
    }

    public handlerRejectfrom(user_key_id) {
        this.webSocketService.sendCommand({
            command: 'CALLING_MASTER_REJECT',
            target: user_key_id,
            source: this.user.key_id
        })
    }

    public handlerTakeCall(user_key_id) {
        this.acceptcall.emit(user_key_id);
    }

    private _calling(callfrom) {
        let cl = {};
        for (let i = 0; i < this.callingfroms.length; i++) {
            cl[this.callingfroms[i].key_id] = this.callingfroms[i]
        }
        callfrom.lasttime = new Date();
        cl[callfrom.key_id] = callfrom;

        this.callingfroms = []
        for (let i in cl) {
            this.callingfroms.push(cl[i]);
        }

    }
    

    public stopWaitCallDialog() {
        let self = this;
        self.loading = true;
        self.dialogsService.stopDialog().subscribe((data) => {
            self.loading = false;
            self.stopwaitingdialog.emit(data)
            console.log(data)
            
            
        });
    }
    
}
