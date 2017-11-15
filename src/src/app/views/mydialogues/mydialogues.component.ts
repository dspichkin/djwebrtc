import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter, ChangeDetectorRef,
    ViewRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

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

export class MyDialoguesViewComponent implements OnInit, OnDestroy {

    user;
    public dialogs = [];
    public loading = false;

    private new_dialog_name = '';
    private show_create_dialog = false;
    private subscribes = [];

    public modalRef: BsModalRef;
    @ViewChild('template') template;

    constructor(
        private dialogsService: DialogsService,
        private statusService: StatusService,
        private router: Router,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef,
        private modalService: BsModalService,
        ) {
    }

    ngOnInit() {
        this.subscribes.push(this.statusService.ready.subscribe((date) => {
            this.user = this.statusService.user;
            if (!this.user) {
                return;
            }
        }));

        if (this.statusService.user) {
            this.user = this.statusService.user;
        } else {
            this.statusService.getStatus();
        }
        this._updateActiveDialogs();
    }

    public ngOnDestroy(): any {
        this.subscribes.map(subscribe => {
          subscribe.unsubscribe();
        });
    }

    private _updateActiveDialogs() {
        this.loading = true;
        this.dialogsService.getMyDialogs().subscribe((data) => {
            this.dialogs = data;
            this.loading = false;
        });
    }


    private turnActiveDialog(dialog) {
        const self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe((data) => {
            self.loading = false;
            if (data.status) {
                const dialogIndex = self.dialogs.findIndex(d => +d.id === +dialog.id);
                self.dialogs[dialogIndex] = data.dialog;
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
        this.loading = true;
        const params = {
            is_published: item.is_published
        };
        this.dialogsService.saveMyDialogs(item.id, params).subscribe((data) => {
            this.loading = false;
        });
    }

    public showCreateDialog() {
        if (!this.show_create_dialog) {
            this.show_create_dialog = true;
            this.new_dialog_name = '';
            this.modalRef = this.modalService.show(this.template, {
                class: 'modal-sm',
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: true
            });
        } else {
            this.closeCreateDialog();
        }
    }


    private closeCreateDialog() {
        this.show_create_dialog = false;
        this.modalRef.hide();
        this.modalRef = null;
    }

    private createDialog() {
        const params = {
            dialog_name: this.new_dialog_name
        };

        if (this.new_dialog_name) {
            this.loading = true;
            this.dialogsService.createDialog(params).subscribe((data) => {
                this.loading = false;
                this.closeCreateDialog();
                this.router.navigate(['/mydialogues', data.id]);
            });
        }
    }



}
