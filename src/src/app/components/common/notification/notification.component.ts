import { Component,  EventEmitter, Input, Output  } from '@angular/core';

import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/notification.model';

@Component({
    selector: 'notifications',
    templateUrl: './notifications.template.html'
})
export class NotificationComponent {
    @Input() public closable = true;
    @Input() public visible: boolean = false;

    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    loading: boolean = false;

    private note: Notification;

    constructor(private _notifications: NotificationService) {
        this.note = new Notification();

        _notifications.noteAdded.subscribe(_note => {
            this.note = _note;
            this.visible = true;
        });
    }

    ngOnChanges() {
        if (this.visible) {
            let body = document.getElementsByTagName('body')[0];
            body.classList.add("modal-open");
        } else {
            let body = document.getElementsByTagName('body')[0];
            body.classList.remove("modal-open");
        }
    }

    close(note) {
        this.visible = false;
        this.visibleChange.emit(this.visible);

    }
    /*
    private hide(note) {
        let index = this._notes.indexOf(note);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    }
    */
}