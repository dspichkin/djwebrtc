import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Notification } from '../models/notification.model';

@Injectable()
export class NotificationService {

    constructor () {}

    private _notifications = new Subject<Notification>();

    public noteAdded = this._notifications.asObservable();

    public add(notification: Notification) {
        this._notifications.next(notification);
    }

}