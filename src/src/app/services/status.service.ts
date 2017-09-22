import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Http, Response } from '@angular/http';


import { AppSettings } from '../app.settings';
import { Dialog } from '../models/dialog';
import { WebSocketService } from './websocket.service';


@Injectable()
export class StatusService {

    ready: EventEmitter<any> = new EventEmitter();

    user;
    mode: string = 'mode_list';
    activedialog;

    constructor(
        private _http: Http,
        private webSocketService: WebSocketService
        ) {}


    init() {
        let self = this;
        this.getStatus().subscribe((data) => {
            console.log('data', data)
            self.user = data.user;
            if (data.status) {
                if (data.activedialog) {
                    self.mode = 'mode_wait_pupil';
                    self.activedialog = data.activedialog;
                }
            }

            self.webSocketService.init(self.user.key_id, function() {
                self.ready.emit(new Date());
                self.runHearbeat();
            });
            
        });
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
            setTimeout(function() {
                self.runHearbeat();
            }, 20000);
        }
    }

    private handleError(error: Response) {
        console.error(error);
        //error.json().error || 
        return Observable.throw('Server error');
    }
}

