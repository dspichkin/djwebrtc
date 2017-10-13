import { Injectable, EventEmitter } from "@angular/core";

import { $WebSocket, WebSocketConfig } from "angular2-websocket/angular2-websocket";
import { AppSettings } from "../app.settings";
import { ErrorService } from './error.service';

const webSocketConfig = { 
    reconnectIfNotNormalClose: false,
    initialTimeout: 1000,
    maxTimeout: 1000
} as WebSocketConfig;

@Injectable()
export class WebSocketService {
    public ws;
    public open: EventEmitter<any> = new EventEmitter();
    public ready: EventEmitter<any> = new EventEmitter();
    public message: EventEmitter<any> = new EventEmitter();
    public error: EventEmitter<any> = new EventEmitter();

    constructor(
        private errorService: ErrorService) {
        
    }

    init(user_key, callback) {
        let self = this;
        this.ws = new $WebSocket(AppSettings.URL_WEBSOKET + '?id=' + user_key, null, webSocketConfig);
        this.ws.onOpen((data)=> {
            self.open.emit(new Date());
            if (callback) {
                callback();
            }
        })
        this.ws.onMessage((msg: MessageEvent) => {
            //console.log("onMessage", msg)
            if (msg.type == 'message') {
                self.message.emit(msg.data);
            }
        });

        this.ws.onError((msg: MessageEvent) => {
            self.errorService.errors
            var error = {
                code: 1000,
                message: 'Ошибка доступа к серверу',
            }
            self.errorService.errors[error.code] = error;
            self.errorService.errors_update.emit(new Date())
        });
        
    }


    public sendCommand(command) {
        this.ws.send(command).subscribe(
            (msg)=> {
                //console.log("msg", msg);
            },
            (error)=> {
                //console.log("error", error);
            },
            ()=> {
                //console.log("complete");
            }
        );
    }




}