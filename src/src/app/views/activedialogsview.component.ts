import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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
export class ActiveDialogsViewComponent implements OnInit, OnDestroy  {

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

    private subscribes = [];

    public constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService,
        private router: Router) {
    }

    public ngOnInit(): any {
        this.subscribes.push(this.statusService.ready.subscribe((date) => {
            this.user = this.statusService.user;
            if (!this.user) {
                return;
            }
        }));

        this.subscribes.push(this.webSocketService.message.subscribe((data) => {
            const message = JSON.parse(data);
            if (message.command === 'UPDATE') {
                if (message.target === 'activedialogs') {
                    this._updateActiveDialogs();
                }
            }
        }));

        this.subscribes.push(this.webSocketService.error.subscribe((err) => {
            console.log('Error', err);
        }));


        if (this.loading) {
            this._updateActiveDialogs();
        }
    }


    public ngOnDestroy(): any {
        this.subscribes.map(subscribe => {
          subscribe.unsubscribe();
        });
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
        this.router.navigate(['/calling/' + activedialog.id  ]);
    }


}
