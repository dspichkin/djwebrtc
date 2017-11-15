import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


import { AppSettings } from '../app.settings';
import { Dialog } from '../models/dialog';
import { WebSocketService } from './websocket.service';


@Injectable()
export class StatusService {

    ready: EventEmitter<any> = new EventEmitter();
    calling: EventEmitter<any> = new EventEmitter();

    user;
    mode = 'mode_list';
    activedialog;
    runhearbeatid;
    runcheckloginid;

    constructor(
        private _http: Http,
        private webSocketService: WebSocketService,
        private router: Router
        ) {}


    init() {
        const self = this;
        this.getStatus((data) => {
            if (data.status) {
                if (data.activedialog) {
                    self.activedialog = data.activedialog;
                }
            }
            this.webSocketService.init(self.user.key_id, function() {
                self.ready.emit(new Date());
                self.runHearbeat();
                self.runCheckLogin();
            });
        });

        this.webSocketService.message.subscribe((data) => {
            const message = JSON.parse(data);
            if (message.command === 'CALLING') {
                if (message.target === 'TAKEPHONE') {
                    self.calling.emit(message);
                }
            }
        });
    }

    getStatus(callback?) {
        return this._http.get(AppSettings.URL_STATUS)
            .map((response: Response) => {
                return response.json();
            })
            .subscribe((data) => {
                this.user = data.user;
                if (callback) {
                    callback(data);
                }
            }, (error) => {
                this.handleError(error);
            });
    }

    runHearbeat(): void {
        const self = this;
        self.webSocketService.sendCommand({
            type: 'HEARBEAT',
        });
        if (self.runhearbeatid) {
            clearTimeout(self.runhearbeatid);
        }

        self.runhearbeatid = setTimeout(function() {
            self.runHearbeat();
        }, 20000);
    }

    runCheckLogin(): void {
        const self = this;
        this._http.get(AppSettings.URL_CHECK_USER)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError)
            .subscribe((result) => {
                if (self.runcheckloginid) {
                    clearTimeout(self.runcheckloginid);
                }
                self.runcheckloginid = setTimeout(function() {
                    self.runCheckLogin();
                }, 1200000);
        });
    }

    changeAcceptCall(status) {
        return this._http.post(AppSettings.URL_CHANGE_ACCEPT_CALL, {accept_call: status})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    sendMessage(data) {
        return this._http.post(AppSettings.URL_MESSAGE, data)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    saveUser(params) {
        return this._http.post(AppSettings.URL_USER_SETTING, params)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        if (error.status === 403) {
            console.log("XXXX")
            this.router.navigate(['/accounts/login/']);
        }
        if (error.status === 404) {
            this.router.navigate(['/dialogues']);
        }
        return Observable.throw('Server error');
    }
}

