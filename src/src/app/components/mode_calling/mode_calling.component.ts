import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'jquery-slimscroll';
import { FormsModule } from '@angular/forms';

import { WebSocketService } from '../../services/websocket.service';


import { AppSettings } from '../../app.settings';

@Component({
  selector: 'modecalling',
  templateUrl: 'mode_calling.template.html'
})

export class ModeCallingComponent implements OnInit, OnDestroy {
    @Input() public  user;
    @Input() public callingdialog;
    @Output() public stopcalling = new EventEmitter();

    public callingfroms = [];


    constructor(
        private webSocketService: WebSocketService
        ) {
    }

    ngOnInit() {
        let self = this;

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            //console.log("Calling message", message)

            if (message.command == 'CALLING_MASTER_REJECT') {
                self.stopCallingDialog();
            }
            
        })

    }

    ngAfterViewInit() {
        
    }

    ngOnChanges(changes) {
    }
    


    ngOnDestroy() {
    }


    public stopCallingDialog() {
        this.stopcalling.emit();
    }
    
    
    
}
