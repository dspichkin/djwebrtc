import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';

import { BaseChartDirective } from '../../libs/ng2-charts/ng2-charts';

import { NouisliderComponent } from 'ng2-nouislider';

//import { Notification } from '../../models/notification.model';
//import { NotificationService } from '../../services/notification.service';

import { AppSettings } from '../../app.settings';
import { DataService } from '../../services/data.service';



declare var moment: any;

interface NouiFormatter {
    to(value: number): string;
    from(value: string): any;
}


@Component({
    selector: 'nginxView',
    templateUrl: 'nginx-view.template.html'
})
export class nginxViewComponent implements OnInit {
	@ViewChild( BaseChartDirective ) chart: BaseChartDirective;
    @ViewChild( NouisliderComponent ) slider: NouisliderComponent;

    loading: boolean = false;
    currentLogger: any = {
    	name: "",
    	slug: ""
    };
    loggers = [];
    current_log = 'access';

    
    dateRange = [0, 100];
    rangeStartDate;
    rangeEndDate;
    dateRangeMin = 0;
    dateRangeMax = 10;

    onInitTime = false;

    showIPAddr: boolean = false;
    showRef: boolean = false;
    showAgents: boolean = false;

    //selectedRule;

    public lineChartReqData:Array<any> = [
        {data: [], label: ''}
    ];
    public lineChartIpAddrData:Array<any> = [
        {data: [], label: ''}
    ];
    public lineChartBytesData:Array<any> = [
        {data: [], label: ''}
    ];

    public lineChartNumberErrorsData:Array<any> = [
        {data: [], label: ''}
    ];
    //public lineChartNumberNaxisErrorsData:Array<any> = [
    //    {data: [], label: ''}
    //];

    public lineChartLabels:Array<any> = [];
    public lineChartErrorsLabels:Array<any> = [];
    //public lineChartNaxisErrorsLabels:Array<any> = [];


    public lineChartOptions:any = {
        animation: false,
        responsive: true,
    };

    public lineChartBytesOptions:any = {
        animation: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value: number, index, values) {
                        let k = 1000, dm = 2;
                        let bytes = value;
                        if (value == 0) {
                            return '0 Bytes';
                        }
                        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                        i = Math.floor(Math.log(bytes) / Math.log(k));
                        let s = "";
                        if (i >= 0) {
                        	s = sizes[i];
                        }
                        let data = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
                        if (data) {
	                        let result = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + s;
	                        return result;
	                    }
                        
                    }
                }
           }]
         }
    };

    public lineChartColors:Array<any> = [{
      backgroundColor: 'rgba(51,122,183,0.5)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(10,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(10,10,24,0.2)'
    }];

    public lineChartIpAddrColors:Array<any> = [{
      backgroundColor: 'rgba(35,198,177,0.8)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(10,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(10,10,24,0.2)'
    }];

    public lineChartBytesColors:Array<any> = [{
      backgroundColor: 'rgba(248,172,89,0.5)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(10,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(10,10,24,0.2)'
    }];


    

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';


    listRequestUrls = [];
    listHttpReferrer = [];
    listErrorPids = [];
    //listNaxisPids = [];

    formatter: NouiFormatter = {
         to(value: number): string {
            if (value) {
                return moment(value, 'X').format('YYYY-DD-MM HH:mm');
            }
          },
          from(value: string): any {
              if (value) {
                  if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                      let d = moment(value, 'YYYY-DD-MM HH:mm').format('X')
                      return parseFloat(d);
                  }
                  return value;
              }
          }
         

    };

    constructor (private dataService: DataService, private chRef: ChangeDetectorRef) {
    }

    ngOnInit() { 
    	let self= this;
    	

    	this.getLoggers(function() {
    		self.currentLogger = self.loggers[0];

    		self.onInitTime = true;
    		self.loading = true;
	        self.dataService.getData(AppSettings.urlNginxAccessUrl + self.currentLogger.slug, {})
	        .subscribe(
	            function(data) {
	            	self.loading = false;
	            	
	            	self.lineChartReqData = data.requests;
	            	self.lineChartIpAddrData = data.addresses;
	            	self.lineChartBytesData = data.body_bytes_sent;
	                self.lineChartLabels = data.dates;

	                self.lineChartNumberErrorsData = data.numbers_errors;
                    self.lineChartErrorsLabels = data.errors_dates;

	                self.listRequestUrls = data.request_urls;
	                self.listHttpReferrer = data.http_referrer;

                    self.listErrorPids = data.errors;


	                self.chart.ngOnChanges({});

	                self.dateRangeMin =  data.date_range.start_date;
	                self.dateRangeMax =  data.date_range.end_date;
	                self.slider.slider.updateOptions({
	                    start: [data.date_range.start, data.date_range.end_date],
	                    range: {
	                        'min': data.date_range.start,
	                        'max': data.date_range.end_date
	                    }
	                });
	                self.dateRange = [data.date_range.start, data.date_range.end_date];

	                self.chRef.detectChanges();
	                setTimeout(function() {
	                    self.onInitTime = false;
	                }, 1000);

	            	//console.log(data)

	            })
    	});
    }

    getLoggers(callback?) {
    	let self = this;
        self.loading = true;
        self.dataService.getData(AppSettings.urlNginxLoggersUrl,{})
        .subscribe(
            function(data) {
            	self.loading = false;
            	self.loggers = data;

            	if (callback) {
            		callback();
            	}
            })
    }

    selectLogger(item) {
    	if (item.slug != this.currentLogger.slug) {
	    	this.currentLogger = item;
	    	this.getAccessData();
	    }
    }


    getAccessData(_params?, callback?) {
    	if (this.loading || this.onInitTime ) {
            return;
        }

    	let self = this;
    	let params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        }
        self.loading = true;
        self.dataService.getData(AppSettings.urlNginxAccessUrl + self.currentLogger.slug, params)
        .subscribe(
            function(data) {
            	self.loading = false;
            	
            	self.lineChartReqData = data.requests;
            	self.lineChartIpAddrData = data.addresses;
            	self.lineChartBytesData = data.body_bytes_sent;
                self.lineChartLabels = data.dates;

                self.listRequestUrls = data.request_urls;
                self.listHttpReferrer = data.http_referrer;

                self.lineChartNumberErrorsData = data.numbers_errors;
                self.lineChartErrorsLabels = data.errors_dates;

                self.listErrorPids = data.errors;

                self.chart.ngOnChanges({});

            	if (callback) {
            		callback(data);
            	}
            	//console.log(data)

            })
    }

    public onChangeAccess($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getAccessData();
    }

    public refreshAccessChart() {
    	let self = this;
        self.getAccessData({}, function(data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    }

    public makeWhitelistRule(rule) {
        let self = this;
        //self.selectedRule = rule;
        //self.showNaxsiRule = true;

        /*
        let params = {
            id: pk,
            index: index,
            logger: self.currentLogger.slug
        }
        self.loading = true;
        self.dataService.postData(AppSettings.urlNginxNaxsiRulesUrl, params).subscribe(
            function(data) {
                self.loading = false;

                console.log(data);
                if (!data.status) {
                    self.notification.add(new Notification('Error', 'alert alert-danger', data.message));
                } else {
                    self.notification.add(new Notification('Message', 'alert alert-success', data.message));
                }
                
            }
        )
        */
    }
    
    /*
    showIPAddresses() {
    	this.showIPAddr = true;
    }
    */

}