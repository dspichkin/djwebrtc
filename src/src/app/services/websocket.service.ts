import { Injectable, EventEmitter } from "@angular/core";

import { $WebSocket, WebSocketConfig } from "angular2-websocket/angular2-websocket";
import { AppSettings } from "../app.settings";

const webSocketConfig = { 
    reconnectIfNotNormalClose: true,
    initialTimeout: 10,
    maxTimeout: 1000
} as WebSocketConfig;

@Injectable()
export class WebSocketService {
    public ws;
    public ready: EventEmitter<any> = new EventEmitter();
    public message: EventEmitter<any> = new EventEmitter();
    public error: EventEmitter<any> = new EventEmitter();

    constructor() {
        
    }

    init(user_key, callback) {
        let self = this;
        this.ws = new $WebSocket(AppSettings.URL_WEBSOKET + '?id=' + user_key, null, webSocketConfig);
        this.ws.onOpen((data)=> {
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
            self.error.emit(msg);
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