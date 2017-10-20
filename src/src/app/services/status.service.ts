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
    mode: string = 'mode_list';
    activedialog;
    runhearbeatid;
    runcheckloginid;

    constructor(
        private _http: Http,
        private webSocketService: WebSocketService,
        private router: Router
        ) {}


    init() {
        let self = this;
        this.getStatus().subscribe((data) => {
            self.user = data.user;
            if (data.status) {
                if (data.activedialog) {
                    self.activedialog = data.activedialog;
                }
            }
            self.webSocketService.init(self.user.key_id, function() {
                self.ready.emit(new Date());
                self.runHearbeat();
                self.runCheckLogin();
            });
        });


        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            if (message.command == 'CALLING') {
                if (message.target == 'TAKEPHONE') {
                    self.calling.emit(message);
                }
            }
            
        })
    }
    
    getStatus(): any {
        return this._http.get(AppSettings.URL_STATUS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    runHearbeat(): void {
        let self = this;
        if (this.webSocketService.ws.socket.readyState == 1) {
            self.webSocketService.sendCommand({
                type: "HEARBEAT",
            })
            if (self.runhearbeatid) {
                clearTimeout(self.runhearbeatid);
            }

            self.runhearbeatid = setTimeout(function() {
                self.runHearbeat();
            }, 20000);
        }
    }

    runCheckLogin(): void {
        let self = this;
        this._http.get(AppSettings.URL_CHECK_USER)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError)
            .subscribe((result) => {
                console.log("runCheckLogin", result)
                if (self.runcheckloginid) {
                    clearTimeout(self.runcheckloginid);
                }
                self.runcheckloginid = setTimeout(function() {
                    self.runCheckLogin();
                }, 1200000);
        })
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
        //error.json().error || 
        if (error.status == 403) {
            console.log("XXXX")
            this.router.navigate(['/accounts/login/']);
        }
        if (error.status == 404) {
            this.router.navigate(['/dialogues']);
        }
        return Observable.throw('Server error');
    }
}

