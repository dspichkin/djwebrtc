import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';

import { StatusService } from '../services/status.service';
import { DialogsService } from '../services/dialogs.service';
import { WebSocketService } from '../services/websocket.service';
import { AppSettings } from '../app.settings';

//declare var moment:any;
//declare var $:any;

@Component({
  selector: 'activedialogsview',
  templateUrl: 'activedialogsview.template.html'
})
export class ActiveDialogsViewComponent implements OnInit  {

    public user;
    public activedialogs = [];
    public callingdialog;
    public activedialog = null;
    public activedialog_id = null;
    public loading = true;
    public calling_time;
    public reject_call_from = null;

    private _CALLING_TIME_INTERVAL = 3000;
    private _intervalid;
    private webSocketSubscription;
    private webSocketSubscriptionError;
    private statusSubscription

    public constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService,
        private router: Router) {
        
    }

    public ngOnInit():any {
        let self = this;
        self.statusSubscription = self.statusService.ready.subscribe((date)=> {
            self.user = this.statusService.user;
            if (!self.user) {
                return;
            }
        });

        self.webSocketSubscription = self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            //console.log('message', message)
            if (message.command == "UPDATE") {
                console.log("UPDATE")
                if (message.target == "activedialogs") {
                    self._updateActiveDialogs();
                }
            }

        })

        self.webSocketSubscriptionError = self.webSocketService.error.subscribe((err) => {
            console.log("Error", err)
        })


        if (self.loading) {
            self._updateActiveDialogs();
        }
    }

    

    public ngOnDestroy():any {
        this.webSocketSubscription.unsubscribe();
        this.statusSubscription.unsubscribe();
        this.webSocketSubscriptionError.unsubscribe();
    }
    

    public showActiveDialogs() {
        this._updateActiveDialogs();
        
    }

    private _updateActiveDialogs() {
        this.loading = true;
        this.dialogsService.getActiveDialogs().subscribe((data) => {
            this.activedialogs = data;
            this.loading = false;
        });
    }

    

    

    public callDialog(activedialog) {
        this.router.navigate(['/calling/' + activedialog.id  ])
    }

    

}
