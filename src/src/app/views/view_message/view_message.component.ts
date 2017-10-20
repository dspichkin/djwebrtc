import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'jquery-slimscroll';
import { FormsModule } from '@angular/forms';

import { WebSocketService } from '../../services/websocket.service';
import { DialogsService } from '../../services/dialogs.service';
import { StatusService } from '../../services/status.service';

import { AppSettings } from '../../app.settings';

@Component({
  selector: 'viewmessage',
  templateUrl: 'view_message.template.html'
})

export class MessageViewComponent implements OnInit, OnDestroy {
    
    user;
    name: string = "";
    email: string = "";
    message: string = "";
    loading: boolean = false;

    constructor(
        private statusService: StatusService,
        private router: Router,
        ) {
    }

    ngOnInit() {
        let self = this;
        self.statusService.ready.subscribe((date)=> {
            self.user = self.statusService.user;
        });
        if (!self.user) {
            self.user = self.statusService.user;
            if (!self.user) {
                self.statusService.getStatus();
            }
        }
       
        
    }

    ngAfterViewInit() {
        
    }

    ngOnChanges(changes) {
        console.log('changes', changes)
    }
    


    ngOnDestroy() {
    }

    send() {
        this.loading = true;
        let data = {
            message: this.message
        };
        if (this.name) {
            data['name'] = this.name;
        }
        if (this.email) {
            data['email'] = this.email;
        }

        this.statusService.sendMessage(data).subscribe((data) => {
            this.loading = false;
            this.router.navigate(['activedialogues']);
        })
        
    }
   


    
    
}
