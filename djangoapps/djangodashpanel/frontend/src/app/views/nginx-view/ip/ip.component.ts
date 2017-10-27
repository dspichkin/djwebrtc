import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter, Input, Output } from '@angular/core';

import { AppSettings } from '../../../app.settings';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'ip-dialog',
  //styleUrls: ['./ip.css'],
  templateUrl: './ip.template.html',
  
})
export class IpComponent  {
    @Input() public closable = true;
    @Input() public visible: boolean = false;
    @Input() public currentLogger;
    @Input() public dateRange = [];

    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    loading: boolean = false;
    
    listRemoteAddr = [];

    // Doughnut
    public doughnutCountryChartLabels:string[] = [];
    public doughnutCitiesChartLabels:string[] = [];
    public doughnutCountryChartData:number[] = [];
    public doughnutCitiesChartData:number[] = [];
    public doughnutChartType:string = 'doughnut';


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
        self.dataService.getData(AppSettings.urlNginxAccessIpAddrUrl + self.currentLogger.slug, params)
        .subscribe(
            function(data) {
                self.loading = false;
                self.listRemoteAddr = data.remote_addr;
                self.doughnutCountryChartLabels = data.location.country_label;
                self.doughnutCitiesChartLabels = data.location.cities_label;
                self.doughnutCountryChartData = data.location.country_value;
                self.doughnutCitiesChartData = data.location.cities_value;
                //console.log(data)
            })
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    
    

    
    
}