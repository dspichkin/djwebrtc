import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter, ChangeDetectorRef,
    ViewRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WebSocketService } from '../../services/websocket.service';
import { DialogsService } from '../../services/dialogs.service';
import { StatusService } from '../../services/status.service';


import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';

import { AppSettings } from '../../app.settings';

@Component({
  selector: 'mydialogues',
  templateUrl: 'mydialogues.template.html'
})

export class MyDialoguesViewComponent implements OnInit {

    user;
    private dialogs = [];
    private loading: boolean = false;

    constructor(
        private dialogsService: DialogsService,
        private statusService: StatusService,
        private router: Router,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef,
        ) {
    }

    ngOnInit() {
        let self = this;
        

        self.statusService.ready.subscribe((date)=> {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;
        } else {
            self.statusService.getStatus();
        }
        this._updateActiveDialogs();
    }

    ngAfterViewInit() {
        
    }

    private _updateActiveDialogs() {
        this.loading = true;
        this.dialogsService.getMyDialogs().subscribe((data) => {
            this.dialogs = data;
            this.loading = false;
        });
    }

    
    private turnActiveDialog(dialog) {
        let self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe((data) => {
            self.loading = false;
            if (data.status) {
                for (let i = 0; i < self.dialogs.length; i++) {
                    if (self.dialogs[i].id == dialog.id) {
                         self.dialogs[i] = data.dialog;
                    }
                }
                self._detectChanges();
            }
        });
    }
    

    private _detectChanges() {
        // Programmatically run change detection to fix issue in Safari
        setTimeout(() => {
            if ( this.ref !== null &&
                this.ref !== undefined &&
                ! (this.ref as ViewRef).destroyed ) {
                    this.ref.detectChanges();
            }
        }, 250);
    }
    
    private publishDialog(item) {
        item.is_published = !item.is_published;
        console.log('item', item)
        this.loading = true;
        let params = {
            is_published: item.is_published
        }
        this.dialogsService.saveMyDialogs(item.id, params).subscribe((data) => {
            this.loading = false;
        });
    }
    
    
    
}
