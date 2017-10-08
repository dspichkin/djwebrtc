import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'jquery-slimscroll';
import { FormsModule } from '@angular/forms';

// import { AuthenticationService } from '../../../services/authentication.service';

//declare var jQuery:any;

import { AppSettings } from '../../app.settings';

@Component({
  selector: 'callingfroms',
  templateUrl: 'callingfroms.template.html'
})

export class CallingFromsComponent implements OnInit, OnDestroy {
    @Input() public listin: any = [];
    @Output() public listout: any = [];
    @Output() public rejectfrom = new EventEmitter();
    @Output() public takecall = new EventEmitter();
    

    loading: boolean = false;

    constructor(
        ) {
        var self = this;
    }

    ngOnInit() {
        this._checkInterval();

    }

    ngAfterViewInit() {
        this.loading = false;
    }

    ngOnChanges(changes) {
        //console.log('changes', changes)
        if (this.loading) {
            this.loading = false;
        }
        this._checkInterval();    
    }
    


    ngOnDestroy() {
    }

    rejectCall(item) {
        this.loading = true;
        this.rejectfrom.emit(item);
    }

    takeCall(item) {
        this.loading = true;
        this.takecall.emit(item.key_id);
    }

    private _checkInterval() {
        //console.log('_checkInterval')
        var self = this;
        for (let i = 0; i < self.listin.length; i++) {
            if (new Date(self.listin[i].lasttime).getTime() + AppSettings.CALLING_TIME_INTERVAL < new Date().getTime()) {
                self.listin.splice(i, 1);
            }
        }

        if (this.listin.length > 0) {
            setTimeout(function() {
                self._checkInterval();
            }, 1000);  
        }
    }
    
}
