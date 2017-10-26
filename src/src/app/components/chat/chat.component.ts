import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter,
    ChangeDetectorRef, ViewRef, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WebSocketService } from '../../services/websocket.service';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'chat',
  templateUrl: 'chat.template.html'
})

export class ChatComponent implements OnInit, OnDestroy {
    @Input() public activedialog;
    @Input() public user;

    @ViewChild('chatContent') private chatContainer: ElementRef;

    messages = [];
    message = "";
    chat_loading = false;
    
    constructor(
        private webSocketService: WebSocketService,
        private ref: ChangeDetectorRef,
        ) {
    }


    ngOnInit() {
        let self = this;
        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);

            if (message.command == "CHAT_UPDATE") {
                self.chat_loading = false;
                self.activedialog.chat_messages = message.chat_messages;
                self._detectChanges();
                self.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
            }
        })
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.ref.detach();
    }



    public send() {
        if (!this.message) {
            return;
        }
        let command = {
            command: 'CHAT_SEND_MESSAGE',
            activedialogid: this.activedialog.id,
            message: this.message,
            source: this.user.key_id
        }
        this.chat_loading = true;
        this.webSocketService.sendCommand(command);
        this.message = "";
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

}