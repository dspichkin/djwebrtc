import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter, Input, Output } from '@angular/core';

import { AppSettings } from '../../../app.settings';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'ref-dialog',
  //styleUrls: ['./ref.css'],
  templateUrl: './ref.template.html',
  
})
export class RefComponent  {
    @Input() public closable = true;
    @Input() public visible: boolean = false;
    @Input() public currentLogger;
    @Input() public dateRange = [];

    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    loading: boolean = false;
    
    listHttpReferrer = [];

    constructor (private dataService: DataService) {
    }

    ngOnInit() { 
        //console.log('ngOnInit', this.dialogue) 
    }

    ngOnChanges() {
        if (this.visible) {
            let body = document.getElementsByTagName('body')[0];
            body.classList.add("modal-open");
            this.getIpAddresses();
        } else {
            let body = document.getElementsByTagName('body')[0];
            body.classList.remove("modal-open");
        }
    }
    
    getIpAddresses(_params?) {
        let self = this;
        let params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        }
        self.loading = true;
        self.dataService.getData(AppSettings.urlNginxAccessHttpRefUrl + self.currentLogger.slug, params)
        .subscribe(
            function(data) {
                self.loading = false;
                self.listHttpReferrer = data.http_referrer;
                console.log(data)

            })
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    
    

    
    
}