webpackJsonp([1,5],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(258);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });

//# sourceMappingURL=ng2-charts.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 226;


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(272);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
        this.title = 'app works!';
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("AppComponent");
    };
    AppComponent.prototype.getUser = function () {
        var self = this;
        self.loading = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(391),
        styles: [__webpack_require__(377)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_timepicker__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_layouts_layouts_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_main_view_main_view_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_minor_view_minor_view_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_perf_view_perf_view_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_processes_view_processes_view_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_backup_view_backup_view_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_urlstat_view_urlstat_view_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_nginx_view_nginx_view_module__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_data_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_window_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_notification_service__ = __webpack_require__(259);
/* unused harmony export CookieXSRFStrategyFactory */
/* unused harmony export AppCSRF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { SelectModule } from 'ng2-select/ng2-select';
// App modules/components

// App views







// App services
//import { ChartsService } from "./services/charts.services";




//import { SelectComponent } from "ng2-select/ng2-select";
function CookieXSRFStrategyFactory() {
    return new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* CookieXSRFStrategy */]('csrftoken', 'X-CSRFToken');
}
var AppCSRF = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XSRFStrategy */],
    useFactory: CookieXSRFStrategyFactory,
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"],
            // Views
            __WEBPACK_IMPORTED_MODULE_10__views_main_view_main_view_module__["a" /* MainViewModule */],
            __WEBPACK_IMPORTED_MODULE_11__views_minor_view_minor_view_module__["a" /* MinorViewModule */],
            __WEBPACK_IMPORTED_MODULE_12__views_perf_view_perf_view_module__["a" /* PerfViewModule */],
            __WEBPACK_IMPORTED_MODULE_13__views_processes_view_processes_view_module__["a" /* ProcessesViewModule */],
            __WEBPACK_IMPORTED_MODULE_14__views_backup_view_backup_view_module__["a" /* BackupViewModule */],
            __WEBPACK_IMPORTED_MODULE_15__views_urlstat_view_urlstat_view_module__["a" /* UrlStatViewModule */],
            __WEBPACK_IMPORTED_MODULE_16__views_nginx_view_nginx_view_module__["a" /* NginxViewModule */],
            // Modules
            __WEBPACK_IMPORTED_MODULE_9__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            //SelectModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot()
        ],
        providers: [
            AppCSRF,
            //ChartsService,
            __WEBPACK_IMPORTED_MODULE_17__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_18__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_19__services_window_service__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_20__services_notification_service__["a" /* NotificationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_perf_view_perf_view_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_processes_view_processes_view_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basic_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_urlstat_view_urlstat_view_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_backup_view_backup_view_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_nginx_view_nginx_view_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });







var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    //{path: '', redirectTo: '', pathMatch: 'full'},
    // App views
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basic_component__["a" /* basicComponent */],
        children: [
            { path: 'dash', component: __WEBPACK_IMPORTED_MODULE_0__views_main_view_main_view_component__["a" /* mainViewComponent */] },
            { path: 'perf', component: __WEBPACK_IMPORTED_MODULE_1__views_perf_view_perf_view_component__["a" /* perfViewComponent */] },
            { path: 'processes', component: __WEBPACK_IMPORTED_MODULE_2__views_processes_view_processes_view_component__["a" /* processesViewComponent */] },
            { path: 'urlstat', component: __WEBPACK_IMPORTED_MODULE_4__views_urlstat_view_urlstat_view_component__["a" /* urlstatViewComponent */] },
            { path: 'backups', component: __WEBPACK_IMPORTED_MODULE_5__views_backup_view_backup_view_component__["a" /* backupViewComponent */] },
            { path: 'backups/result', component: __WEBPACK_IMPORTED_MODULE_5__views_backup_view_backup_view_component__["a" /* backupViewComponent */] },
            { path: 'nginx', component: __WEBPACK_IMPORTED_MODULE_6__views_nginx_view_nginx_view_component__["a" /* nginxViewComponent */] },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'dash' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CpuComponent = (function () {
    function CpuComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 5,
                            stepValue: 5,
                            max: 100,
                            callback: function (value, index, values) {
                                return value + "%";
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(10,159,177,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    CpuComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfCpuUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    CpuComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    CpuComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    CpuComponent.prototype.onChange = function ($event) {
        //console.log('this.dateRange', this.dateRange)
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    CpuComponent.prototype.getData = function (_params, callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfCpuUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            if (callback) {
                callback(data);
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    CpuComponent.prototype.refresh = function () {
        var self = this;
        this.getData({}, function (data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    };
    return CpuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], CpuComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], CpuComponent.prototype, "slider", void 0);
CpuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cpu-chart',
        template: __webpack_require__(392),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], CpuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cpu.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiskComponent = (function () {
    function DiskComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 5,
                            stepValue: 5,
                            max: 100,
                            callback: function (value, index, values) {
                                return value + "%";
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(248,172,89,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    DiskComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfDiskUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    DiskComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DiskComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DiskComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    DiskComponent.prototype.getData = function (_params, callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfDiskUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            if (callback) {
                callback(data);
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    DiskComponent.prototype.refresh = function () {
        var self = this;
        this.getData({}, function (data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    };
    return DiskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], DiskComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], DiskComponent.prototype, "slider", void 0);
DiskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disk-chart',
        template: __webpack_require__(393),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], DiskComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=disk.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemoryComponent = (function () {
    function MemoryComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }, { data: [], label: '' }, { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                var k = 1000, dm = 2;
                                var bytes = value;
                                if (value == 0) {
                                    return '0 Bytes';
                                }
                                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
                                var data = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                                return data;
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(28,132,198,0.3)',
                borderColor: 'rgba(35,198,200,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(200,159,177,0.8)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(35,198,177,0.8)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    MemoryComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfMemoryUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    MemoryComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    MemoryComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    MemoryComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    MemoryComponent.prototype.getData = function (_params, callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfMemoryUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            if (callback) {
                callback(data);
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    MemoryComponent.prototype.refresh = function () {
        var self = this;
        this.getData({}, function (data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    };
    return MemoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], MemoryComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], MemoryComponent.prototype, "slider", void 0);
MemoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'memory-chart',
        template: __webpack_require__(394),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], MemoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=memory.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NetworkComponent = (function () {
    function NetworkComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }, { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                var k = 1000, dm = 2;
                                var bytes = value;
                                if (value == 0) {
                                    return '0 Bytes';
                                }
                                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
                                var data = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                                return data;
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(28,132,198,0.3)',
                borderColor: 'rgba(35,198,200,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(200,159,177,0.8)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    NetworkComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfNetworkUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    NetworkComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    NetworkComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    NetworkComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    NetworkComponent.prototype.getData = function (_params, callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].perfNetworkUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            if (callback) {
                callback(data);
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    NetworkComponent.prototype.refresh = function () {
        var self = this;
        this.getData({}, function (data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    };
    return NetworkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], NetworkComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], NetworkComponent.prototype, "slider", void 0);
NetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'network-chart',
        template: __webpack_require__(395),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], NetworkComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProcessesComponent = (function () {
    function ProcessesComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(10,159,177,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    ProcessesComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].processesUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    ProcessesComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ProcessesComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ProcessesComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    ProcessesComponent.prototype.getData = function (_params, callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].processesUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartLabels = data.dates;
            self.chart.ngOnChanges({});
            if (callback) {
                callback(data);
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    ProcessesComponent.prototype.refresh = function () {
        var self = this;
        this.getData({}, function (data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    };
    return ProcessesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], ProcessesComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], ProcessesComponent.prototype, "slider", void 0);
ProcessesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'processes-chart',
        template: __webpack_require__(396),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], ProcessesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=processes.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__(397)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_component__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__footer_component__["a" /* FooterComponent */]],
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var blankComponent = (function () {
    function blankComponent() {
    }
    blankComponent.prototype.ngAfterViewInit = function () {
        jQuery('body').addClass('gray-bg');
    };
    blankComponent.prototype.ngOnDestroy = function () {
        jQuery('body').removeClass('gray-bg');
    };
    return blankComponent;
}());
blankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blank',
        template: __webpack_require__(399)
    })
], blankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__blank_component__["a" /* blankComponent */], __WEBPACK_IMPORTED_MODULE_4__basic_component__["a" /* basicComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */], __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_module__["a" /* TopnavbarModule */], __WEBPACK_IMPORTED_MODULE_7__footer_footer_module__["a" /* FooterModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__blank_component__["a" /* blankComponent */], __WEBPACK_IMPORTED_MODULE_4__basic_component__["a" /* basicComponent */]]
    })
], LayoutsModule);

//# sourceMappingURL=layouts.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = {
            username: ""
        };
        this.apps = {
            backup: false
        };
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
    };
    NavigationComponent.prototype.ngOnInit = function () {
        var self = this;
        this.userService.getUserFromServer(function (data) {
            self.user = data.user;
            self.apps = data.apps;
        });
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__(400),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_component__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* NavigationComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navigation_component__["a" /* NavigationComponent */]],
    })
], NavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopnavbarComponent = (function () {
    function TopnavbarComponent() {
        this.menuState = 'out';
    }
    TopnavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        // smoothlyMenu();
    };
    return TopnavbarComponent;
}());
TopnavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__(401),
    })
], TopnavbarComponent);

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnavbar_component__ = __webpack_require__(255);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopnavbarModule = (function () {
    function TopnavbarModule() {
    }
    return TopnavbarModule;
}());
TopnavbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__topnavbar_component__["a" /* TopnavbarComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__topnavbar_component__["a" /* TopnavbarComponent */]],
    })
], TopnavbarModule);

//# sourceMappingURL=topnavbar.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            if (changes.hasOwnProperty('labels')) {
                this.chart.data.labels = changes.labels.currentValue;
            }
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseChartDirective.prototype, "datasets", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "labels", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BaseChartDirective.prototype, "chartType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaseChartDirective.prototype, "colors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], BaseChartDirective.prototype, "legend", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BaseChartDirective.prototype, "chartClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], BaseChartDirective.prototype, "chartHover", void 0);
BaseChartDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'canvas[baseChart]', exportAs: 'base-chart' }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], BaseChartDirective);

function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            BaseChartDirective
        ],
        exports: [
            BaseChartDirective
        ],
        imports: []
    })
], ChartsModule);

var _a, _b, _c;
//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__charts_charts__ = __webpack_require__(257);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__charts_charts__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__charts_charts__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService() {
        this._notifications = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.noteAdded = this._notifications.asObservable();
    }
    NotificationService.prototype.add = function (notification) {
        this._notifications.next(notification);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () {
        return window;
    };
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WindowRef);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backup_view_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_timepicker__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackupViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BackupViewModule = (function () {
    function BackupViewModule() {
    }
    return BackupViewModule;
}());
BackupViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__backup_view_component__["a" /* backupViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot()
        ],
    })
], BackupViewModule);

//# sourceMappingURL=backup-view.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_view_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainViewModule = (function () {
    function MainViewModule() {
    }
    return MainViewModule;
}());
MainViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__main_view_component__["a" /* mainViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
        ],
    })
], MainViewModule);

//# sourceMappingURL=main-view.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minorViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var minorViewComponent = (function () {
    function minorViewComponent() {
    }
    return minorViewComponent;
}());
minorViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'minorView',
        template: __webpack_require__(404)
    })
], minorViewComponent);

//# sourceMappingURL=minor-view.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minor_view_component__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinorViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MinorViewModule = (function () {
    function MinorViewModule() {
    }
    return MinorViewModule;
}());
MinorViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__minor_view_component__["a" /* minorViewComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
    })
], MinorViewModule);

//# sourceMappingURL=minor-view.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgentComponent = (function () {
    function AgentComponent(dataService) {
        this.dataService = dataService;
        this.closable = true;
        this.visible = false;
        this.dateRange = [];
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
        this.listAgents = [];
    }
    AgentComponent.prototype.ngOnInit = function () {
    };
    AgentComponent.prototype.ngOnChanges = function () {
        if (this.visible) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add("modal-open");
            this.getAgents();
        }
        else {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove("modal-open");
        }
    };
    AgentComponent.prototype.getAgents = function (_params) {
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].urlNginxAccessAgentUrl + self.currentLogger.slug, params)
            .subscribe(function (data) {
            self.loading = false;
            self.listAgents = data.http_user_agents;
        });
    };
    AgentComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return AgentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AgentComponent.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AgentComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AgentComponent.prototype, "currentLogger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AgentComponent.prototype, "dateRange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AgentComponent.prototype, "visibleChange", void 0);
AgentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'agent-dialog',
        template: __webpack_require__(405),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], AgentComponent);

var _a, _b;
//# sourceMappingURL=agent.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IpComponent = (function () {
    function IpComponent(dataService) {
        this.dataService = dataService;
        this.closable = true;
        this.visible = false;
        this.dateRange = [];
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
        this.listRemoteAddr = [];
        // Doughnut
        this.doughnutCountryChartLabels = [];
        this.doughnutCitiesChartLabels = [];
        this.doughnutCountryChartData = [];
        this.doughnutCitiesChartData = [];
        this.doughnutChartType = 'doughnut';
    }
    IpComponent.prototype.ngOnInit = function () {
        //console.log('ngOnInit', this.dialogue) 
    };
    IpComponent.prototype.ngOnChanges = function () {
        if (this.visible) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add("modal-open");
            this.getIpAddresses();
        }
        else {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove("modal-open");
        }
    };
    IpComponent.prototype.getIpAddresses = function (_params) {
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].urlNginxAccessIpAddrUrl + self.currentLogger.slug, params)
            .subscribe(function (data) {
            self.loading = false;
            self.listRemoteAddr = data.remote_addr;
            self.doughnutCountryChartLabels = data.location.country_label;
            self.doughnutCitiesChartLabels = data.location.cities_label;
            self.doughnutCountryChartData = data.location.country_value;
            self.doughnutCitiesChartData = data.location.cities_value;
            //console.log(data)
        });
    };
    IpComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return IpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IpComponent.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], IpComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IpComponent.prototype, "currentLogger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IpComponent.prototype, "dateRange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], IpComponent.prototype, "visibleChange", void 0);
IpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ip-dialog',
        //styleUrls: ['./ip.css'],
        template: __webpack_require__(406),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], IpComponent);

var _a, _b;
//# sourceMappingURL=ip.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nginx_view_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ip_ip_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ref_ref_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agent_agent_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NginxViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { NotificationComponent } from "../../components/common/notification/notification.component";


var NginxViewModule = (function () {
    function NginxViewModule() {
    }
    return NginxViewModule;
}());
NginxViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__nginx_view_component__["a" /* nginxViewComponent */],
            //NotificationComponent,
            __WEBPACK_IMPORTED_MODULE_4__ip_ip_component__["a" /* IpComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ref_ref_component__["a" /* RefComponent */],
            __WEBPACK_IMPORTED_MODULE_6__agent_agent_component__["a" /* AgentComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_nouislider__["NouisliderModule"]
        ],
    })
], NginxViewModule);

//# sourceMappingURL=nginx-view.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RefComponent = (function () {
    function RefComponent(dataService) {
        this.dataService = dataService;
        this.closable = true;
        this.visible = false;
        this.dateRange = [];
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
        this.listHttpReferrer = [];
    }
    RefComponent.prototype.ngOnInit = function () {
        //console.log('ngOnInit', this.dialogue) 
    };
    RefComponent.prototype.ngOnChanges = function () {
        if (this.visible) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add("modal-open");
            this.getIpAddresses();
        }
        else {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove("modal-open");
        }
    };
    RefComponent.prototype.getIpAddresses = function (_params) {
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].urlNginxAccessHttpRefUrl + self.currentLogger.slug, params)
            .subscribe(function (data) {
            self.loading = false;
            self.listHttpReferrer = data.http_referrer;
            console.log(data);
        });
    };
    RefComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return RefComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RefComponent.prototype, "closable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RefComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RefComponent.prototype, "currentLogger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RefComponent.prototype, "dateRange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RefComponent.prototype, "visibleChange", void 0);
RefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ref-dialog',
        //styleUrls: ['./ref.css'],
        template: __webpack_require__(408),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], RefComponent);

var _a, _b;
//# sourceMappingURL=ref.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perf_view_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_charts_cpu_cpu_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_charts_memory_memory_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_charts_disk_disk_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_charts_network_network_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PerfViewModule = (function () {
    function PerfViewModule() {
    }
    return PerfViewModule;
}());
PerfViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__perf_view_component__["a" /* perfViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_charts_cpu_cpu_component__["a" /* CpuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_charts_memory_memory_component__["a" /* MemoryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_charts_disk_disk_component__["a" /* DiskComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_charts_network_network_component__["a" /* NetworkComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_nouislider__["NouisliderModule"]
        ],
    })
], PerfViewModule);

//# sourceMappingURL=perf-view.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__processes_view_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_charts_processes_processes_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessesViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProcessesViewModule = (function () {
    function ProcessesViewModule() {
    }
    return ProcessesViewModule;
}());
ProcessesViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__processes_view_component__["a" /* processesViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_charts_processes_processes_component__["a" /* ProcessesComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_nouislider__["NouisliderModule"]
        ],
    })
], ProcessesViewModule);

//# sourceMappingURL=processes-view.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlstat_view_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlStatViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UrlStatViewModule = (function () {
    function UrlStatViewModule() {
    }
    return UrlStatViewModule;
}());
UrlStatViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__urlstat_view_component__["a" /* urlstatViewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_4__libs_ng2_charts_ng2_charts__["b" /* ChartsModule */]
        ],
    })
], UrlStatViewModule);

//# sourceMappingURL=urlstat-view.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 91,
	"./af.js": 91,
	"./ar": 98,
	"./ar-dz": 92,
	"./ar-dz.js": 92,
	"./ar-kw": 93,
	"./ar-kw.js": 93,
	"./ar-ly": 94,
	"./ar-ly.js": 94,
	"./ar-ma": 95,
	"./ar-ma.js": 95,
	"./ar-sa": 96,
	"./ar-sa.js": 96,
	"./ar-tn": 97,
	"./ar-tn.js": 97,
	"./ar.js": 98,
	"./az": 99,
	"./az.js": 99,
	"./be": 100,
	"./be.js": 100,
	"./bg": 101,
	"./bg.js": 101,
	"./bn": 102,
	"./bn.js": 102,
	"./bo": 103,
	"./bo.js": 103,
	"./br": 104,
	"./br.js": 104,
	"./bs": 105,
	"./bs.js": 105,
	"./ca": 106,
	"./ca.js": 106,
	"./cs": 107,
	"./cs.js": 107,
	"./cv": 108,
	"./cv.js": 108,
	"./cy": 109,
	"./cy.js": 109,
	"./da": 110,
	"./da.js": 110,
	"./de": 113,
	"./de-at": 111,
	"./de-at.js": 111,
	"./de-ch": 112,
	"./de-ch.js": 112,
	"./de.js": 113,
	"./dv": 114,
	"./dv.js": 114,
	"./el": 115,
	"./el.js": 115,
	"./en-au": 116,
	"./en-au.js": 116,
	"./en-ca": 117,
	"./en-ca.js": 117,
	"./en-gb": 118,
	"./en-gb.js": 118,
	"./en-ie": 119,
	"./en-ie.js": 119,
	"./en-nz": 120,
	"./en-nz.js": 120,
	"./eo": 121,
	"./eo.js": 121,
	"./es": 123,
	"./es-do": 122,
	"./es-do.js": 122,
	"./es.js": 123,
	"./et": 124,
	"./et.js": 124,
	"./eu": 125,
	"./eu.js": 125,
	"./fa": 126,
	"./fa.js": 126,
	"./fi": 127,
	"./fi.js": 127,
	"./fo": 128,
	"./fo.js": 128,
	"./fr": 131,
	"./fr-ca": 129,
	"./fr-ca.js": 129,
	"./fr-ch": 130,
	"./fr-ch.js": 130,
	"./fr.js": 131,
	"./fy": 132,
	"./fy.js": 132,
	"./gd": 133,
	"./gd.js": 133,
	"./gl": 134,
	"./gl.js": 134,
	"./gom-latn": 135,
	"./gom-latn.js": 135,
	"./he": 136,
	"./he.js": 136,
	"./hi": 137,
	"./hi.js": 137,
	"./hr": 138,
	"./hr.js": 138,
	"./hu": 139,
	"./hu.js": 139,
	"./hy-am": 140,
	"./hy-am.js": 140,
	"./id": 141,
	"./id.js": 141,
	"./is": 142,
	"./is.js": 142,
	"./it": 143,
	"./it.js": 143,
	"./ja": 144,
	"./ja.js": 144,
	"./jv": 145,
	"./jv.js": 145,
	"./ka": 146,
	"./ka.js": 146,
	"./kk": 147,
	"./kk.js": 147,
	"./km": 148,
	"./km.js": 148,
	"./kn": 149,
	"./kn.js": 149,
	"./ko": 150,
	"./ko.js": 150,
	"./ky": 151,
	"./ky.js": 151,
	"./lb": 152,
	"./lb.js": 152,
	"./lo": 153,
	"./lo.js": 153,
	"./lt": 154,
	"./lt.js": 154,
	"./lv": 155,
	"./lv.js": 155,
	"./me": 156,
	"./me.js": 156,
	"./mi": 157,
	"./mi.js": 157,
	"./mk": 158,
	"./mk.js": 158,
	"./ml": 159,
	"./ml.js": 159,
	"./mr": 160,
	"./mr.js": 160,
	"./ms": 162,
	"./ms-my": 161,
	"./ms-my.js": 161,
	"./ms.js": 162,
	"./my": 163,
	"./my.js": 163,
	"./nb": 164,
	"./nb.js": 164,
	"./ne": 165,
	"./ne.js": 165,
	"./nl": 167,
	"./nl-be": 166,
	"./nl-be.js": 166,
	"./nl.js": 167,
	"./nn": 168,
	"./nn.js": 168,
	"./pa-in": 169,
	"./pa-in.js": 169,
	"./pl": 170,
	"./pl.js": 170,
	"./pt": 172,
	"./pt-br": 171,
	"./pt-br.js": 171,
	"./pt.js": 172,
	"./ro": 173,
	"./ro.js": 173,
	"./ru": 174,
	"./ru.js": 174,
	"./sd": 175,
	"./sd.js": 175,
	"./se": 176,
	"./se.js": 176,
	"./si": 177,
	"./si.js": 177,
	"./sk": 178,
	"./sk.js": 178,
	"./sl": 179,
	"./sl.js": 179,
	"./sq": 180,
	"./sq.js": 180,
	"./sr": 182,
	"./sr-cyrl": 181,
	"./sr-cyrl.js": 181,
	"./sr.js": 182,
	"./ss": 183,
	"./ss.js": 183,
	"./sv": 184,
	"./sv.js": 184,
	"./sw": 185,
	"./sw.js": 185,
	"./ta": 186,
	"./ta.js": 186,
	"./te": 187,
	"./te.js": 187,
	"./tet": 188,
	"./tet.js": 188,
	"./th": 189,
	"./th.js": 189,
	"./tl-ph": 190,
	"./tl-ph.js": 190,
	"./tlh": 191,
	"./tlh.js": 191,
	"./tr": 192,
	"./tr.js": 192,
	"./tzl": 193,
	"./tzl.js": 193,
	"./tzm": 195,
	"./tzm-latn": 194,
	"./tzm-latn.js": 194,
	"./tzm.js": 195,
	"./uk": 196,
	"./uk.js": 196,
	"./ur": 197,
	"./ur.js": 197,
	"./uz": 199,
	"./uz-latn": 198,
	"./uz-latn.js": 198,
	"./uz.js": 199,
	"./vi": 200,
	"./vi.js": 200,
	"./x-pseudo": 201,
	"./x-pseudo.js": 201,
	"./yo": 202,
	"./yo.js": 202,
	"./zh-cn": 203,
	"./zh-cn.js": 203,
	"./zh-hk": 204,
	"./zh-hk.js": 204,
	"./zh-tw": 205,
	"./zh-tw.js": 205
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 382;


/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;padding: 0;\">\n    <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n        <i class=\"fa fa-refresh\"></i>\n    </button>\n    <canvas baseChart\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n\n    <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n    <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n    <!-- Loading -->\n    <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n        <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n        </div>\n        <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n            <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n        </div>\n    </div>\n    <!-- END Loading -->\n    \n</div>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"pull-right\">\n        Version: <strong>0.0.2</strong>\n    </div>\n    <div>\n        <strong>Copyright</strong> Example Company &copy; 2017\n    </div>\n</div>"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n    <!-- Left navigation bar -->\n    <navigation></navigation>\n\n    <!-- Main page wrapper -->\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n\n        <!-- Top navigation -->\n        <topnavbar></topnavbar>\n\n        <!-- Main view/routes wrapper-->\n        <router-outlet></router-outlet>\n\n        <!-- Footer -->\n        <footer></footer>\n\n    </div>\n    <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <a href=\"#\">\n                    <i class=\"fa fa-user\"></i>\n                    <span class=\"nav-label\"> <strong class=\"font-bold\">{{user.username}}</strong> </span>\n                        <!-- <span class=\"text-muted text-xs block\">Example <b class=\"caret\"></b> </span> -->\n                </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('dash')}\">\n                <a [routerLink]=\"['/']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Dashboard</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('perf')}\">\n                <a [routerLink]=\"['/perf']\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Perfomance</span> </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('processes')}\">\n                <a [routerLink]=\"['/processes']\"><i class=\"fa fa-tasks\"></i> <span class=\"nav-label\">Processes</span> </a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('correctlogin') || activeRoute('incorrectlogin')}\">\n                <a href=\"\" class=\"auto\">      \n                  <span class=\"pull-right text-muted\">\n                    <i class=\"fa fa-fw fa-angle-right text\"></i>\n                    <i class=\"fa fa-fw fa-angle-down text-active\"></i>\n                  </span>\n                  <i class=\"fa fa-shield\"></i>\n                  <span>Security</span>\n                </a>\n                <ul class=\"nav nav-sub dk\">\n                  <li [ngClass]=\"{active: activeRoute('correctlogin')}\">\n                    <a [routerLink]=\"['/correctlogin']\" style=\"font-size: 11px;\">\n                      <i class=\"fa fa-square-o\"></i><span>Number of login </span>\n                    </a>\n                  </li>\n                  <li [ngClass]=\"{active: activeRoute('incorrectlogin')}\">\n                    <a [routerLink]=\"['/incorrectlogin']\" style=\"font-size: 11px;\">\n                      <i class=\"fa  fa-exclamation\"></i><span>Incorrect attempt login</span>\n                    </a>\n                  </li>\n                </ul>\n            </li>\n            <li *ngIf=\"apps.urlstat\" [ngClass]=\"{active: activeRoute('urlstat')}\">\n                <a [routerLink]=\"['/urlstat']\"><i class=\"fa fa-sitemap\"></i> <span class=\"nav-label\">Url statistics</span> </a>\n            </li>\n            <li *ngIf=\"apps.backup\" [ngClass]=\"{active: activeRoute('backups')}\">\n                <a [routerLink]=\"['/backups']\"><i class=\"fa fa-truck\"></i> <span class=\"nav-label\">Backups</span> </a>\n            </li>\n            <li *ngIf=\"apps.nginx\" [ngClass]=\"{active: activeRoute('nginx')}\">\n                <a [routerLink]=\"['/nginx']\"><i class=\"fa fa-filter\"></i> <span class=\"nav-label\">Nginx</span> </a>\n            </li>\n            <li *ngIf=\"apps.naxsi\" [ngClass]=\"{active: activeRoute('naxsi')}\">\n                <a [routerLink]=\"['/naxsi/configs']\"><i class=\"fa fa-bug\"></i> <span class=\"nav-label\">Naxsi</span> </a>\n            </li>\n        </ul>\n\n    </div>\n</nav>"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n        <div class=\"navbar-header\">\n            <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n            <!--\n            <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n                </div>\n            </form>\n            -->\n        </div>\n        <ul class=\"nav navbar-top-links navbar-right\">\n            <li>\n                <a href=\"/admin/logout/\">\n                    <i class=\"fa fa-sign-out\"></i> Log out\n                </a>\n            </li>\n        </ul>\n\n    </nav>\n</div>"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    \n    <a [href]=\"backupMakeUrl\" class=\"btn btn-success\" target=\"_blank\">Make and download database backup</a>\n    <a [href]=\"backupMakeMediaUrl\" class=\"btn btn-primary\" target=\"_blank\">Make and download media backup</a>\n    \n\n    <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-lg-9\">\n            <div class=\"wrapper-md\">\n                <div class=\"tab-container\">\n                    <ul class=\"nav nav-tabs nav-stacked nav-justified\">\n                        <li [ngClass]=\"{active: router.url=='/backups'}\">\n                            <a [routerLink]=\"['/backups']\">Settings</a>\n                        </li>\n                        <li [ngClass]=\"{active: router.url=='/backups/result'}\">\n                            <a [routerLink]=\"['/backups/result']\">Result</a>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div *ngIf=\"router.url=='/backups'\" class=\"tab-pane active\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\">\n                                    <form>\n                                        <div class=\"form-group\">\n                                            <label>Day time for running backup (will be run everyday):</label>\n                                            <div style=\"display: flex;align-items: center;\">\n                                                <timepicker [(ngModel)]=\"model.backuptime\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"changedTime()\"></timepicker>\n                                                <button type=\"button\" class=\"btn btn-info\" style=\"margin-left: 20px;height:40px;\" (click)=\"saveBackTime()\">Save</button>\n                                                <span *ngIf=\"backuptime_is_dirty\" class=\"text-warning\" style=\"margin-left: 10px;\">Time is not save</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Absolute path for media directory (optional):</label>\n                                            <div class=\"input-group\">\n                                                <input name=\"inputedDir\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model.inputedDir\" (keyup.enter)=\"addDirectory()\"/>\n                                                <span class=\"input-group-addon\" style=\"padding: 0;\"> \n                                                    <button type=\"button\" class=\"btn btn-info\" (click)=\"addDirectory()\" [disabled]=\"!model.inputedDir || loading\" style=\"margin: -2px;\">Add</button></span>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"mediadirs.length > 0\" class=\"form-group\">\n                                            <div class=\"panel panel-default\">\n                                                <div class=\"panel-body\">\n                                                    <p *ngIf=\"mediadirs.length == 0\">No directories specified</p>\n                                                    <div *ngFor=\"let obj of mediadirs; let i = index;\" style=\"margin-top: 2px;\">\n                                                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"deletePath(i)\" [disabled]=\"loading\"><i class=\"fa fa-times\"></i></button>\n                                                        <span style=\"margin-left:20px;\">{{obj.path}}</span>\n                                                        <span>\n                                                            <i *ngIf=\"obj.checked\" class=\"fa fa-check text-info\"></i>\n                                                        </span>\n                                                        <span *ngIf=\"!obj.checked\">\n                                                            <i class=\"fa fa-exclamation text-warning\"></i> \n                                                            <small>(Path doesn't exist)</small>\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"router.url=='/backups/result'\" class=\"tab-pane active\">\n                            \n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\">\n                                    <div *ngIf=\"backups_daily\" class=\"panel panel-info\">\n                                        <div class=\"panel-heading \">\n                                            Daily Database Backups\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <table class=\"table\">\n                                                <tr *ngFor=\"let backup of backups_daily\">\n                                                    <td>{{getDateFromTimestap(backup.created_at)}}</td>\n                                                    <td>{{backup.filename}}</td>\n                                                    <td>{{backup.size}}</td>\n                                                    <td><a [href]=\"getFileUrl(backup.filename)\" type=\"button\" class=\"btn btn-default btn-xs\" target=\"_blank\"><i class=\"fa fa-download\"></i></a></td>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n\n                                    <div *ngIf=\"backups_weekly\" class=\"panel panel-info\">\n                                        <div class=\"panel-heading \">\n                                            Weekly Database Backups\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <table class=\"table\">\n                                                <tr *ngFor=\"let backup of backups_weekly\">\n                                                    <td>{{getDateFromTimestap(backup.created_at)}}</td>\n                                                    <td>{{backup.filename}}</td>\n                                                    <td>{{backup.size}}</td>\n                                                    <td><a [href]=\"getFileUrl(backup.filename)\" type=\"button\" class=\"btn btn-default btn-xs\" target=\"_blank\"><i class=\"fa fa-download\"></i></a></td>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n\n                                    <div *ngIf=\"backups_monthly\" class=\"panel panel-info\">\n                                        <div class=\"panel-heading \">\n                                            Monthly Database Backups\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <table class=\"table\">\n                                                <tr *ngFor=\"let backup of backups_monthly\">\n                                                    <td>{{getDateFromTimestap(backup.created_at)}}</td>\n                                                    <td>{{backup.filename}}</td>\n                                                    <td>{{backup.size}}</td>\n                                                    <td><a [href]=\"getFileUrl(backup.filename)\" type=\"button\" class=\"btn btn-default btn-xs\" target=\"_blank\"><i class=\"fa fa-download\"></i></a></td>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n\n\n                                    <div *ngIf=\"backups_media.length > 0\" class=\"panel panel-success\">\n                                        <div class=\"panel-heading \">\n                                            Media Backups\n                                        </div>\n                                        <div class=\"panel-body\">\n                                            <table class=\"table\">\n                                                <tr *ngFor=\"let backup of backups_media\">\n                                                    <td>{{getDateFromTimestap(backup.created_at)}}</td>\n                                                    <td>{{backup.filename}}</td>\n                                                    <td>{{backup.size}}</td>\n                                                    <td><a [href]=\"getFileUrl(backup.filename)\" type=\"button\" class=\"btn btn-default btn-xs\" target=\"_blank\"><i class=\"fa fa-download\"></i></a></td>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Loading -->\n        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n            </div>\n            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n            </div>\n        </div>\n        <!-- END Loading -->\n\n        <div class=\"col-lg-3\">\n            <div class=\"wrapper-md\">\n                <div class=\"panel panel-success\">\n\n                    <div class=\"panel-heading \">\n                        Info\n                        <button type=\"button\" class=\"btn btn-success btn-xs pull-right\" (click)=\"refresh()\">\n                            <i class=\"fa fa-refresh\"></i>\n                        </button>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p class=\"text-success\">\n                            <span>Last run: </span>\n                            <span>{{ last_run_backup| date: 'yyyy-MM-dd HH:mm' || \"None\"}} </span>\n                        </p>\n                        <p>\n                            <span class=\"text-success\">State: </span>\n                            <span *ngIf=\"backups_enable\" class=\"text-primary\" style=\"margin-right: 20px;\">backup is enable</span>\n                            <span *ngIf=\"!backups_enable\" class=\"text-danger\" style=\"margin-right: 20px;\">backup is disabled</span>\n                        </p>\n                        <div style=\"margin-top: 20px\">\n                            <button *ngIf=\"backups_enable\" type=\"button\" class=\"btn btn-primary\" (click)=\"backupSwitch()\">Turn off backup</button>\n                            <button *ngIf=\"!backups_enable\" type=\"button\" class=\"btn btn-danger\" (click)=\"backupSwitch()\">Turn on backup</button>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"text-muted font-thin pull-right\" style=\"font-size: 12px;margin: 10px;\">\n        Running time: {{ boottime || 0 }}\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <div class=\"wrapper-md\">\n                <small>Last {{ avarage.hours || 0}} hours</small>\n                <div class=\"row row-sm\">\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_cpu > 60 && avarage.avarage_cpu < 90,\n                            'bg-danger': avarage.avarage_cpu >= 90\n                        }\" style=\"height: 90px;\" >\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_cpu || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage cpu used</span><br>\n\n                            <div class=\"top text-info text-right w-full\">\n                                \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_memory > 60 && avarage.avarage_memory < 90,\n                            'bg-danger': avarage.avarage_memory >= 90\n                        }\" style=\"height: 90px;\">\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_memory || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage memory used</span><br>\n                            <div class=\"top text-right w-full\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"panel padder-v item text-center bg-primary\" [ngClass]=\"{\n                            'bg-warning': avarage.avarage_disk > 60 && avarage.avarage_disk < 90,\n                            'bg-danger': avarage.avarage_disk >= 90\n                        }\" style=\"height: 90px;\">\n                            <div class=\"h1 text-white font-thin\">{{ avarage.avarage_disk || 0 }}%</div>\n                            <span class=\"text-white text-xs\" translate>Avarage disk space used</span>\n                            <div class=\"top text-right w-full\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"panel panel-default\" style=\"padding-top: 20px;\">\n                <div class=\"text-center wrapper m-b-sm\">              \n                    <h4>Current users</h4>\n                    <ul class=\"list-group\" stlye=\"text-align: left;\">\n                        <li class=\"list-group-item\" style=\"text-align: left;\" *ngFor=\"let user of users; let i = index;\">\n                            <p style=\"margin:0;font-size: 8px;text-align: right;\">{{getDateFromTimestap(user[3])}}</p>\n                            <div>\n                                <span class=\"label bg-primary\">{{i}}</span>\n                                <span>{{user[0]}} / {{user[1]}}</span>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Simple example of second view\n                </h1>\n                <small>Written as an minor-view.</small>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"dialog\">\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"btn btn-primary pull-right\">X</button>\n\n    <p *ngIf=\"loading\">Loading ...</p>\n    <div *ngIf=\"!loading\">\n\t    <h4>Top 100 user agents</h4>\n\t    \n\t    <div class=\"panel\">\n\t    \t<div class=\"panel-body\" style=\"overflow-y: auto;max-height: 400px;\">\n\t    \t\t<div class=\"col-md-12\">\n\t    \t\t\t<div class=\"panel panel-default\">\n                        <div class=\"panel-body\">\n                            <table *ngIf=\"listAgents.length > 0\" class=\"table\">\n                                <tr *ngFor=\"let p of listAgents\">\n                                    <td style=\"word-break: break-word;\">\n                                        {{p.agent}}\n                                    </td>\n                                    <td><b>{{p.count}}</b> </td>\n                                </tr>\n                            </table>\n                            <p *ngIf=\"listAgents.length == 0\">No data available</p>\n                        </div>\n                    </div>\n\n                    <!-- Loading -->\n\t\t            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n\t\t                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n\t\t                </div>\n\t\t                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n\t\t                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n\t\t                </div>\n\t\t            </div>\n\t\t            <!-- END Loading -->\n            \n\t\t    \t</div>\n\t    \t</div>\n\t    </div>\n\n    </div>\n  \n\n  \n</div>\n<div *ngIf=\"visible\" class=\"overlay\"></div>"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"dialog\">\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"btn btn-primary pull-right\">X</button>\n\n    <p *ngIf=\"loading\">Loading ...</p>\n    <div *ngIf=\"!loading\">\n\t    <h4>Top 100 IP address</h4>\n\t    \n\t    <div class=\"panel\">\n\t    \t<div class=\"panel-body\" style=\"overflow-y: auto;max-height: 400px;\">\n\t    \t\t<div class=\"col-md-12\">\n                    <div *ngIf=\"doughnutCountryChartData.length > 0\" class=\"col-md-6\">\n                        <canvas baseChart\n                            [data]=\"doughnutCountryChartData\"\n                            [labels]=\"doughnutCountryChartLabels\"\n                            [chartType]=\"doughnutChartType\"></canvas>\n                    </div>\n                    <div *ngIf=\"doughnutCitiesChartData.length > 0\" class=\"col-md-6\">\n                        <canvas baseChart\n                            [data]=\"doughnutCitiesChartData\"\n                            [labels]=\"doughnutCitiesChartLabels\"\n                            [chartType]=\"doughnutChartType\"></canvas>\n                    </div>\n\n\t    \t\t\t<div class=\"panel panel-default\">\n                        <div class=\"panel-body\">\n                            <table *ngIf=\"listRemoteAddr.length > 0\" class=\"table\">\n                                <tr *ngFor=\"let p of listRemoteAddr\">\n                                    <td>\n                                        {{p.ipaddr}}\n                                        <p style=\"font-size: 8px;word-break: break-word;margin:0;\">{{p.last_url}}</p>\n                                        <p *ngIf=\"p.location && (p.location.country_name || p.location.city)\" style=\"font-size: 8px;word-break: break-word;margin:0;margin-top:5px;\">\n                                            <span *ngIf=\"p.location && p.location.country_name\">{{p.location.country_name}}</span>\n                                            <span *ngIf=\"p.location && p.location.country_name && p.location.city\">/</span>\n                                            <span *ngIf=\"p.location && p.location.city\">{{p.location.city}}</span>\n                                        </p>\n                                    </td>\n                                    <td><b>{{p.count}}</b> </td>\n                                    <td>{{p.last_date}}</td>\n                                </tr>\n                            </table>\n                            <p *ngIf=\"listRemoteAddr.length == 0\">No data available</p>\n                        </div>\n                    </div>\n\n                    <!-- Loading -->\n\t\t            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n\t\t                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n\t\t                </div>\n\t\t                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n\t\t                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n\t\t                </div>\n\t\t            </div>\n\t\t            <!-- END Loading -->\n            \n\t\t    \t</div>\n\t    \t</div>\n\t    </div>\n\n    </div>\n  \n\n  \n</div>\n<div *ngIf=\"visible\" class=\"overlay\"></div>"

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <!-- Loading -->\n            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                </div>\n                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                </div>\n            </div>\n            <!-- END Loading -->\n\n            <div class=\"col-md-7\">\n                <div class=\"panel panel-info\">\n                    <div class=\"tab-container\">\n                        <ul class=\"nav nav-tabs nav-stacked nav-justified\">\n                            <li [ngClass]=\"{active: current_log == 'access'}\">\n                                <a (click)=\"current_log='access'\">Access Log</a>\n                            </li>\n                            <li [ngClass]=\"{active: current_log == 'error'}\">\n                                <a (click)=\"current_log='error'\">Error Log</a>\n                            </li>\n                            <li *ngIf=\"has_naxsi\" [ngClass]=\"{active: current_log == 'naxsi'}\">\n                                <a (click)=\"current_log='naxsi'\">NAXSI</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\">\n                            <div *ngIf=\"current_log == 'access'\" class=\"tab-pane active\" style=\"padding: 10px;\">\n                                \n                                <button class=\"btn btn-success\" (click)=\"showIPAddr=true\">Show 100 IP address</button>\n                                <button class=\"btn btn-primary\" (click)=\"showRef=true\">Top 100 HTTP referrer</button>\n                                <button class=\"btn btn-info\" (click)=\"showAgents=true\">User agents</button>\n    \n\n                                <div class=\"panel panel-default\" style=\"margin-top:20px;\">\n                                    <div class=\"panel-heading \">\n                                        Top 100 Urls ({{listRequestUrls.length}})\n                                    </div>\n                                    <div class=\"panel-body\">\n                                        <table class=\"table\">\n                                            <tr *ngFor=\"let p of listRequestUrls\">\n                                                <td style=\"word-break: break-word;\">\n                                                    {{p.url}}\n                                                    <p style=\"font-size: 10px;\">{{p.method}} {{p.status}}</p>\n                                                </td>\n                                                <td><b>{{p.count}}</b> </td>\n                                                <td>{{p.last_date}}</td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div *ngIf=\"current_log == 'error'\" class=\"tab-pane active\" style=\"padding: 10px;\">\n                                <div class=\"panel panel-default\" style=\"margin-top:20px;\">\n                                    <div class=\"panel-heading \">\n                                        Last 100 Errors ({{listErrorPids.length}})\n                                    </div>\n                                    <div class=\"panel-body\">\n                                        <ul class=\"list-group\">\n                                            <li class=\"list-group-item\" *ngFor=\"let p of listErrorPids\">\n                                                <div>   \n                                                    <p><b>{{p.pid}}</b> <small class=\"pull-right\">{{p.error}}</small></p>\n                                                    <p *ngIf=\"p.last_request_url\"><b>Last url:</b> {{p.last_request_method}} {{p.last_request_url}}</p>\n                                                </div>\n                                                <div>   \n                                                    <p style=\"word-break: break-word;\"><b>Error description:</b> {{p.error_desc}}</p>\n                                                </div>\n                                                <div>\n                                                    <small style=\"margin: 0;\">Last host: {{p.client}}\n                                                        <span *ngIf=\"p.location && (p.location.country_name || p.location.city)\" style=\"font-size: 8px;word-break: break-word;margin:0;margin-top:5px;\">\n                                                                <span *ngIf=\"p.location && p.location.country_name\">{{p.location.country_name}}</span>\n                                                                <span *ngIf=\"p.location && p.location.country_name && p.location.city\">/</span>\n                                                                <span *ngIf=\"p.location && p.location.city\">{{p.location.city}}</span>\n                                                            </span>\n                                                    </small>\n                                                    <br>\n                                                    <small>Last date: {{p.date}}</small>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n\n                            \n                            <div *ngIf=\"current_log == 'naxsi'\" class=\"tab-pane active\" style=\"padding: 10px;\">\n                                <div class=\"panel panel-default\" style=\"margin-top:20px;\">\n                                    <div class=\"panel-heading\" style=\"height: 56px;\">\n                                        <h4 style=\"display: inline-block;\">Top 100 Naxis errors ({{listNaxisPids.length}})</h4>\n                                    </div>\n                                    <div class=\"panel-body\">\n                                        <ul class=\"list-group\">\n                                            <li class=\"list-group-item\" *ngFor=\"let p of listNaxisPids\">\n                                                <div>  \n                                                    <p>\n                                                        <b>Pid: {{p.pid}}</b> \n                                                        <span class=\"pull-right\">\n                                                            <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"makeWhitelistRule(p)\">Make whitelist rule</button>\n                                                        </span>\n                                                    </p>\n                                                    <p><b>Url:</b> {{p.request_method}} {{p.request_url}}</p>\n                                                    <p *ngIf=\"p.last_request_url\"><b>Last url:</b> {{p.request_method}} {{p.request_url}}</p>\n                                                </div>\n                                                <div>   \n                                                    <p><b>Rules:</b></p>\n                                                    <p *ngFor=\"let item of p.ids\" style=\"margin;0\">\n                                                        {{item.id}}\n                                                        {{item.description}}\n                                                       \n                                                    </p>\n                                                    <p><b>Zones:</b></p>\n                                                    <p *ngFor=\"let item of p.zones\" style=\"margin;0\">{{item}}</p>\n                                                    <p><b>Variables:</b></p>\n                                                    <p *ngFor=\"let item of p.var_names\" style=\"margin;0\">{{item}}</p>\n                                                </div>\n                                                <div>   \n                                                    <p style=\"word-break: break-word;\"><b>Error description:</b> {{p.error_desc}}</p>\n                                                </div>\n                                                <div>\n                                                    <small style=\"margin: 0;\">Last host: {{p.client}}\n                                                        <span *ngIf=\"p.location && (p.location.country_name || p.location.city)\" style=\"font-size: 8px;word-break: break-word;margin:0;margin-top:5px;\">\n                                                                <span *ngIf=\"p.location && p.location.country_name\">{{p.location.country_name}}</span>\n                                                                <span *ngIf=\"p.location && p.location.country_name && p.location.city\">/</span>\n                                                                <span *ngIf=\"p.location && p.location.city\">{{p.location.city}}</span>\n                                                            </span>\n                                                    </small>\n                                                    <br>\n                                                    <small>Last date: {{p.date}}</small>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div> \n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"panel\">\n                    <div class=\"panel-body\">\n                        <div class=\"btn-group\" style=\"text-align: center;margin: 10px 0;width: 100%;\">\n                            <button type=\"button\" class=\"btn btn-primary btn-lg dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" [disabled]=\"loading\" style=\"width: 100%;\">\n                                {{currentLogger.name}} <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li *ngFor=\"let item of loggers\">\n                                    <a (click)=\"selectLogger(item)\">{{item.name}}</a>\n                                </li>\n                            </ul>\n                        </div>\n\n\n                        <div style=\"text-align: center;\">\n                            <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refreshAccessChart()\">\n                                <i class=\"fa fa-refresh\"></i>\n                            </button>\n                            <div *ngIf=\"current_log == 'access'\">\n                                <div>\n                                    <canvas baseChart\n                                            [datasets]=\"lineChartReqData\"\n                                            [labels]=\"lineChartLabels\"\n                                            [options]=\"lineChartOptions\"\n                                            [colors]=\"lineChartColors\"\n                                            [chartType]=\"lineChartType\"></canvas>\n                                </div>\n\n                                <div>\n                                    <canvas baseChart\n                                            [datasets]=\"lineChartIpAddrData\"\n                                            [labels]=\"lineChartLabels\"\n                                            [options]=\"lineChartOptions\"\n                                            [colors]=\"lineChartIpAddrColors\"\n                                            [chartType]=\"lineChartType\"></canvas>\n                                </div>\n\n                                <div>\n                                    <canvas baseChart\n                                            [datasets]=\"lineChartBytesData\"\n                                            [labels]=\"lineChartLabels\"\n                                            [options]=\"lineChartBytesOptions\"\n                                            [colors]=\"lineChartBytesColors\"\n                                            [chartType]=\"lineChartType\"></canvas>\n                                </div>\n                            </div>\n                            \n                            <div *ngIf=\"current_log == 'error'\">\n                                <div>\n                                    <canvas baseChart\n                                            [datasets]=\"lineChartNumberErrorsData\"\n                                            [labels]=\"lineChartErrorsLabels\"\n                                            [options]=\"lineChartOptions\"\n                                            [colors]=\"lineChartIpAddrColors\"\n                                            [chartType]=\"lineChartType\"></canvas>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"current_log == 'naxsi'\">\n                                <div>\n                                    <canvas baseChart\n                                            [datasets]=\"lineChartNumberNaxisErrorsData\"\n                                            [labels]=\"lineChartNaxisErrorsLabels\"\n                                            [options]=\"lineChartOptions\"\n                                            [colors]=\"lineChartIpAddrColors\"\n                                            [chartType]=\"lineChartType\"></canvas>\n                                </div>\n                            </div>\n\n                            <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n                            <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChangeAccess($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n\n                            <div *ngIf=\"current_log == 'naxsi'\">\n                                <button type=\"button\" class=\"btn btn-info\" (click)=\"showNaxsiWhitelist=true\">Show whitelist rules</button>\n                            </div>\n\n\n                            <!-- Loading -->\n                            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                                </div>\n                                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                                </div>\n                            </div>\n                            <!-- END Loading -->\n                        </div>\n\n\n                     </div>\n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n\n\n<!-- <notifications></notifications> -->\n<!--\n<naxsirule-dialog [(visible)]=\"showNaxsiRule\" [closable]=\"true\" [(rule)]=\"selectedRule\"></naxsirule-dialog>\n-->\n<ip-dialog [(visible)]=\"showIPAddr\" [closable]=\"true\" [dateRange]=\"dateRange\" [currentLogger]=\"currentLogger\">\n</ip-dialog>\n<ref-dialog [(visible)]=\"showRef\" [closable]=\"true\" [dateRange]=\"dateRange\" [currentLogger]=\"currentLogger\">\n</ref-dialog>\n<agent-dialog [(visible)]=\"showAgents\" [closable]=\"true\" [dateRange]=\"dateRange\" [currentLogger]=\"currentLogger\">\n</agent-dialog>\n<!--\n<naxsiwhitelist-dialog [(visible)]=\"showNaxsiWhitelist\" [closable]=\"true\" [currentLogger]=\"currentLogger\">\n</naxsiwhitelist-dialog>\n-->"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"dialog\">\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"btn btn-primary pull-right\">X</button>\n\n    <p *ngIf=\"loading\">Loading ...</p>\n    <div *ngIf=\"!loading\">\n\t    <h4>Top 100 HTTP referrer</h4>\n\t    \n\t    <div class=\"panel\">\n\t    \t<div class=\"panel-body\" style=\"overflow-y: auto;max-height: 400px;\">\n\t    \t\t<div class=\"col-md-12\">\n\t    \t\t\t<div class=\"panel panel-default\">\n                        <div class=\"panel-body\">\n                            <table *ngIf=\"listHttpReferrer.length > 0\" class=\"table\">\n                                <tr *ngFor=\"let p of listHttpReferrer\">\n                                    <td style=\"word-break: break-word;\">\n                                        {{p.url}}\n                                    </td>\n                                    <td><b>{{p.count}}</b> </td>\n                                </tr>\n                            </table>\n                            <p *ngIf=\"listHttpReferrer.length == 0\">No data available</p>\n                        </div>\n                    </div>\n\n                    <!-- Loading -->\n\t\t            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n\t\t                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n\t\t                </div>\n\t\t                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n\t\t                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n\t\t                </div>\n\t\t            </div>\n\t\t            <!-- END Loading -->\n            \n\t\t    \t</div>\n\t    \t</div>\n\t    </div>\n\n    </div>\n  \n\n  \n</div>\n<div *ngIf=\"visible\" class=\"overlay\"></div>"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\" style=\"margin-bottom: 20px;\">\n                <h1>\n                    Perfomance charts\n                </h1>\n                <small>\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\n                </small>\n            </div>\n\n            <div class=\"col-md-6\">\n                <cpu-chart></cpu-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <memory-chart></memory-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <disk-chart></disk-chart>\n            </div>\n            <div class=\"col-md-6\">\n                <network-chart></network-chart>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-md-7\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading \">\n                        <small>Last time update: {{last_time }}</small>\n                        <button type=\"button\" class=\"btn btn-info btn-xs pull-right\" (click)=\"refresh()\">\n                            <i class=\"fa fa-refresh\"></i>\n                        </button>\n                    </div>\n                    <div class=\"panel-body\">\n                        <table class=\"table\">\n                            <tr *ngFor=\"let p of last_processes\">\n                                <td>\n                                    <span style=\"font-size: 8px;\">{{p.pid}}</span>\n                                </td>\n                                <td><b>{{p.name}}</b> </td>\n                                <td>{{p.status}}</td>\n                                <td>{{p.cpu}}</td>\n                                <td>{{p.create_time}}</td>\n                            </tr>\n                        </table>\n\n                        <!-- Loading -->\n                        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                            </div>\n                            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                            </div>\n                        </div>\n                        <!-- END Loading -->\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"panel\">\n                    <div class=\"panel-body\">\n                        <div class=\"wrapper-md\">\n                            <small>Last {{ hours }} hours</small>\n                            <div class=\"row row-sm\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"panel padder-v item text-center bg-primary\" style=\"height: 90px;\" >\n                                        <div class=\"h1 text-white font-thin\">{{ avarage_number || 0 }}</div>\n                                        <span class=\"text-white text-xs\" translate>Number of processes</span><br>\n\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <processes-chart></processes-chart>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"col-md-7\">\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading \">\n                        <small>Last time update: {{last_time }}</small>\n                        <button type=\"button\" class=\"btn btn-info btn-xs pull-right\" (click)=\"refresh()\">\n                            <i class=\"fa fa-refresh\"></i>\n                        </button>\n                    </div>\n                    <div class=\"panel-body\">\n                        <p *ngIf=\"!debug\" class=\"text-danger\">Django in mode DEBUG = False so we can't get sql statistics</p>\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"font-size: 10px;\">Count</th>\n                                        <th style=\"font-size: 10px;\">URL</th>\n                                        <th style=\"font-size: 10px;\">Duration</th>\n                                        <th style=\"font-size: 10px;\">Queries count</th>\n                                        <th style=\"font-size: 10px;\">Max query durations</th>\n                                        <th style=\"font-size: 10px;\">Last req</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let p of allRequests\" [ngClass]=\"{\n                                        'text-warning': p.request_code >= 400,\n                                        'text-danger': p.request_code >= 500}\">\n                                        <td>\n                                            <span>{{p.count}}</span>\n                                        </td>\n                                        <td style=\"word-break: break-word;\">\n                                            <b>{{p.url}}</b> \n                                            <p style=\"font-size: 8px\">{{p.method }} {{p.request_code}}</p>\n                                        </td>\n                                        <td>{{toFixed(p.request_duration)}}</td>\n                                        <td>{{p.request_sql_count}}</td>\n                                        <td>{{toFixed(p.request_sql_time)}}</td>\n                                        <td>{{getDateFromTimestap(p.last_time_request)}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- Loading -->\n                        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                            </div>\n                            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                            </div>\n                        </div>\n                        <!-- END Loading -->\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"panel\">\n                    <div class=\"panel-body\">\n                        <div style=\"text-align: center;padding: 0;\">\n                            <button type=\"button\" class=\"btn btn-default btn-xs pull-right\" (click)=\"refresh()\">\n                                <i class=\"fa fa-refresh\"></i>\n                            </button>\n                            <div>\n                                <canvas baseChart\n                                        [datasets]=\"lineChartData\"\n                                        [labels]=\"lineChartLabels\"\n                                        [options]=\"lineChartOptions\"\n                                        [colors]=\"lineChartColors\"\n                                        [chartType]=\"lineChartType\"\n                                        ></canvas>\n                            </div>\n                            <div>\n                                <canvas baseChart\n                                        [datasets]=\"lineChartTimeData\"\n                                        [labels]=\"lineChartLabels\"\n                                        [options]=\"lineChartOptions\"\n                                        [colors]=\"lineChartTimeColors\"\n                                        [chartType]=\"lineChartType\"\n                                        ></canvas>\n                            </div>\n\n                            <h3 style=\"color: #337ab7\">{{ rangeStartDate }} - {{ rangeEndDate }}</h3>\n                            <nouislider [min]=\"dateRangeMin\" [max]=\"dateRangeMax\"  [connect]=\"true\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" [disabled]=\"loading\" [format]=\"formatter\" [tooltips]=\"false\" [step]=\"1000\"></nouislider>\n\n                            <!-- Loading -->\n                            <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                                <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                                </div>\n                                <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                    <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                                </div>\n                            </div>\n                            <!-- END Loading -->\n                            \n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserFromServer = function (callback) {
        var self = this;
        var data = {
            t: new Date().getTime()
        };
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].userUrl, options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (data) {
            if (!data.is_authenticated) {
                window.location.href = "/";
            }
            self.user = data.user;
            if (callback) {
                callback(data);
            }
        }, function (error) {
        });
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/Observable';



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function (url, _params) {
        var data = _params || {};
        data.t = new Date().getTime();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.postData = function (url, _params) {
        var data = _params || {};
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        return this.http.post(url, data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.putData = function (url, _params) {
        var data = _params || {};
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        return this.http.put(url, data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.deleteData = function (url, _params) {
        var data = _params || {};
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var val = data[key];
                params.set(key, val);
            }
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            search: params
        });
        return this.http.delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            errMsg = body.message;
            //const err = body.error || JSON.stringify(body);
            //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //return errMsg;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.baseUrl = '/dash/api/';
AppSettings.userUrl = AppSettings.baseUrl + 'user/';
AppSettings.perfCpuUrl = AppSettings.baseUrl + 'perf/cpu/';
AppSettings.perfMemoryUrl = AppSettings.baseUrl + 'perf/memory/';
AppSettings.perfDiskUrl = AppSettings.baseUrl + 'perf/disk/';
AppSettings.perfNetworkUrl = AppSettings.baseUrl + 'perf/network/';
AppSettings.bootTimeUrl = AppSettings.baseUrl + 'perf/boottime/';
AppSettings.usersUrl = AppSettings.baseUrl + 'perf/users/';
AppSettings.dashUrl = AppSettings.baseUrl + 'perf/dash/';
AppSettings.processesUrl = AppSettings.baseUrl + 'processes/';
AppSettings.processesAvarageNumberUrl = AppSettings.baseUrl + 'processes/hours/';
AppSettings.processesLastUrl = AppSettings.baseUrl + 'processes/last/';
AppSettings.secCorrectLoginUrl = AppSettings.baseUrl + 'security/correctlogins/';
AppSettings.secIncorrectLoginUrl = AppSettings.baseUrl + 'security/incorrectlogins/';
AppSettings.backupMakeUrl = AppSettings.baseUrl + 'backups/make/';
AppSettings.backupMakeMediaUrl = AppSettings.baseUrl + 'backups/make/media/';
AppSettings.backupsUrl = AppSettings.baseUrl + 'backups/';
AppSettings.backupsEnableUrl = AppSettings.baseUrl + 'backups/stoprun/';
AppSettings.backupsSetTimeUrl = AppSettings.baseUrl + 'backups/time/';
AppSettings.backupsPathDirUrl = AppSettings.baseUrl + 'backups/dirs/';
AppSettings.backupGetMediaUrl = AppSettings.baseUrl + 'backups/file/';
AppSettings.urlStatUrl = AppSettings.baseUrl + 'urlstat/';
AppSettings.urlNginxLoggersUrl = AppSettings.baseUrl + 'nginx/loggers/';
AppSettings.urlNginxAccessUrl = AppSettings.baseUrl + 'nginx/access/';
AppSettings.urlNginxAccessIpAddrUrl = AppSettings.baseUrl + 'nginx/access/ipaddr/';
AppSettings.urlNginxAccessHttpRefUrl = AppSettings.baseUrl + 'nginx/access/href/';
AppSettings.urlNginxAccessAgentUrl = AppSettings.baseUrl + 'nginx/access/agent/';
AppSettings.urlNginxNaxsiConfigUrl = AppSettings.baseUrl + 'nginx/naxsi/config/';
AppSettings.urlNginxNaxsiConfigsUrl = AppSettings.baseUrl + 'nginx/naxsi/configs/';
AppSettings.urlNginxNaxsiMessageUrl = AppSettings.baseUrl + 'nginx/naxsi/messages/';
AppSettings.urlNginxNaxsiIdsUrl = AppSettings.baseUrl + 'nginx/naxsi/ids/';
//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var basicComponent = (function () {
    function basicComponent() {
    }
    return basicComponent;
}());
basicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basic',
        template: __webpack_require__(398)
    })
], basicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backupViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var backupViewComponent = (function () {
    function backupViewComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.loading = false;
        this.error_message = "";
        this.backups_daily = [];
        this.backups_weekly = [];
        this.backups_monthly = [];
        this.backups_enable = true;
        this.backups_media = [];
        this.mediadirs = [];
        this.model = {
            inputedDir: "",
            backuptime: ""
        };
        this.backuptime_is_dirty = false;
    }
    backupViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.backupMakeUrl = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupMakeUrl;
        self.backupMakeMediaUrl = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupMakeMediaUrl;
        self.backupGetMediaUrl = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupGetMediaUrl;
        self.getBackups();
    };
    backupViewComponent.prototype.getBackups = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.backups_daily = data.backups.daily;
            self.backups_weekly = data.backups.weekly;
            self.backups_monthly = data.backups.monthly;
            self.backups_enable = data.enable;
            self.last_run_backup = data.last_run_backup;
            self.mediadirs = data.media_directories;
            self.result_last_run_backup = data.result;
            self.model.backuptime = data.run_time;
            self.backuptime_loaded = data.run_time;
            self.backups_media = data.backups_media;
            if (!self.model.backuptime) {
                self.model.backuptime = moment().toDate();
                self.backuptime_is_dirty = true;
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.getDateFromTimestap = function (value) {
        return moment(value, 'X').format('YYYY-MM-DD HH:mm');
    };
    backupViewComponent.prototype.backupSwitch = function () {
        var self = this;
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsEnableUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.backups_enable = data.enable;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.addDirectory = function () {
        var self = this;
        self.mediadirs.push({
            path: this.model.inputedDir,
            checked: false
        });
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsPathDirUrl, {
            dirs: self.mediadirs
        })
            .subscribe(function (data) {
            self.loading = false;
            self.model.inputedDir = "";
            self.mediadirs = data.media_directories;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.deletePath = function (index) {
        var self = this;
        self.mediadirs.splice(index, 1);
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsPathDirUrl, {
            dirs: self.mediadirs
        })
            .subscribe(function (data) {
            self.loading = false;
            self.mediadirs = data.media_directories;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.changedTime = function () {
        if (this.backuptime_loaded &&
            moment(this.backuptime_loaded).format('X') == moment(this.model.backuptime).format('X')) {
            this.backuptime_is_dirty = false;
        }
        else {
            this.backuptime_is_dirty = true;
        }
    };
    backupViewComponent.prototype.saveBackTime = function () {
        var self = this;
        self.loading = true;
        self.dataService.postData(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupsSetTimeUrl, {
            time: moment(self.model.backuptime).format('X')
        })
            .subscribe(function (data) {
            self.loading = false;
            self.backuptime_is_dirty = false;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    backupViewComponent.prototype.refresh = function () {
        this.getBackups();
    };
    backupViewComponent.prototype.getFileUrl = function (filename) {
        return __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].backupGetMediaUrl + filename;
    };
    return backupViewComponent;
}());
backupViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'backupView',
        template: __webpack_require__(402)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], backupViewComponent);

var _a, _b;
//# sourceMappingURL=backup-view.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var mainViewComponent = (function () {
    function mainViewComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.loading = false;
        this.error_message = "";
        this.boottime = "";
        this.avarage = {};
    }
    mainViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.getBootTime(function () {
            self.getCurrentUsers(function () {
                self.getAvarageValues();
            });
        });
    };
    mainViewComponent.prototype.getBootTime = function (callback) {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].bootTimeUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.boottime = data.boottime;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    mainViewComponent.prototype.getCurrentUsers = function (callback) {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].usersUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.users = data.users;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    mainViewComponent.prototype.getDateFromTimestap = function (value) {
        return moment(value, 'X').format('YYYY-DD-MM HH:mm');
    };
    mainViewComponent.prototype.getAvarageValues = function () {
        var self = this;
        self.loading = true;
        self.dashboardService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].dashUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.avarage = data;
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    return mainViewComponent;
}());
mainViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mianView',
        template: __webpack_require__(403)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], mainViewComponent);

var _a;
//# sourceMappingURL=main-view.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nginxViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Notification } from '../../models/notification.model';
//import { NotificationService } from '../../services/notification.service';


var nginxViewComponent = (function () {
    function nginxViewComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.currentLogger = {
            name: "",
            slug: ""
        };
        this.loggers = [];
        this.current_log = 'access';
        this.dateRange = [0, 100];
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
        //has_naxsi: boolean = false;
        this.showIPAddr = false;
        this.showRef = false;
        this.showAgents = false;
        //showNaxsiWhitelist: boolean = false;
        //showNaxsiRule: boolean = false;
        //selectedRule;
        this.lineChartReqData = [
            { data: [], label: '' }
        ];
        this.lineChartIpAddrData = [
            { data: [], label: '' }
        ];
        this.lineChartBytesData = [
            { data: [], label: '' }
        ];
        this.lineChartNumberErrorsData = [
            { data: [], label: '' }
        ];
        //public lineChartNumberNaxisErrorsData:Array<any> = [
        //    {data: [], label: ''}
        //];
        this.lineChartLabels = [];
        this.lineChartErrorsLabels = [];
        //public lineChartNaxisErrorsLabels:Array<any> = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
        };
        this.lineChartBytesOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                var k = 1000, dm = 2;
                                var bytes = value;
                                if (value == 0) {
                                    return '0 Bytes';
                                }
                                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
                                var s = "";
                                if (i >= 0) {
                                    s = sizes[i];
                                }
                                var data = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
                                if (data) {
                                    var result = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + s;
                                    return result;
                                }
                            }
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(51,122,183,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartIpAddrColors = [{
                backgroundColor: 'rgba(35,198,177,0.8)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartBytesColors = [{
                backgroundColor: 'rgba(248,172,89,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.listRequestUrls = [];
        this.listHttpReferrer = [];
        this.listErrorPids = [];
        //listNaxisPids = [];
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
    }
    nginxViewComponent.prototype.ngOnInit = function () {
        var self = this;
        this.getLoggers(function () {
            self.currentLogger = self.loggers[0];
            self.onInitTime = true;
            self.loading = true;
            self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].urlNginxAccessUrl + self.currentLogger.slug, {})
                .subscribe(function (data) {
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
                // naxis
                //self.has_naxsi = data.has_naxsi;
                //self.lineChartNumberNaxisErrorsData = data.numbers_naxsi_errors;
                //self.lineChartNaxisErrorsLabels = data.naxsi_errors_dates;
                //self.listNaxisPids = data.list_naxsi_errors;
                self.chart.ngOnChanges({});
                self.dateRangeMin = data.date_range.start_date;
                self.dateRangeMax = data.date_range.end_date;
                self.slider.slider.updateOptions({
                    start: [data.date_range.start, data.date_range.end_date],
                    range: {
                        'min': data.date_range.start,
                        'max': data.date_range.end_date
                    }
                });
                self.dateRange = [data.date_range.start, data.date_range.end_date];
                self.chRef.detectChanges();
                setTimeout(function () {
                    self.onInitTime = false;
                }, 1000);
                //console.log(data)
            });
        });
    };
    nginxViewComponent.prototype.getLoggers = function (callback) {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].urlNginxLoggersUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.loggers = data;
            if (callback) {
                callback();
            }
        });
    };
    nginxViewComponent.prototype.selectLogger = function (item) {
        if (item.slug != this.currentLogger.slug) {
            this.currentLogger = item;
            this.getAccessData();
        }
    };
    nginxViewComponent.prototype.getAccessData = function (_params, callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].urlNginxAccessUrl + self.currentLogger.slug, params)
            .subscribe(function (data) {
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
            // Naxis
            //self.has_naxsi = data.has_naxsi;
            //self.lineChartNumberNaxisErrorsData = data.numbers_naxsi_errors;
            //self.lineChartNaxisErrorsLabels = data.naxsi_errors_dates;
            //self.listNaxisPids = data.list_naxsi_errors;
            self.chart.ngOnChanges({});
            if (callback) {
                callback(data);
            }
            //console.log(data)
        });
    };
    nginxViewComponent.prototype.onChangeAccess = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getAccessData();
    };
    nginxViewComponent.prototype.refreshAccessChart = function () {
        var self = this;
        self.getAccessData({}, function (data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    };
    nginxViewComponent.prototype.makeWhitelistRule = function (rule) {
        var self = this;
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
    };
    return nginxViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], nginxViewComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], nginxViewComponent.prototype, "slider", void 0);
nginxViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nginxView',
        template: __webpack_require__(407)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], nginxViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nginx-view.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perfViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var perfViewComponent = (function () {
    function perfViewComponent() {
    }
    return perfViewComponent;
}());
perfViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'perfView',
        template: __webpack_require__(409)
    })
], perfViewComponent);

//# sourceMappingURL=perf-view.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return processesViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var processesViewComponent = (function () {
    function processesViewComponent(dataService) {
        this.dataService = dataService;
        this.loading = false;
        this.last_processes = [];
    }
    processesViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.getAvarageNumber(function () {
            self.getProcesses();
        });
    };
    processesViewComponent.prototype.getProcesses = function (callback) {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].processesLastUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.last_time = data.time;
            self.last_processes = data.processes;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    processesViewComponent.prototype.getAvarageNumber = function (callback) {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].processesAvarageNumberUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.hours = data.hours;
            self.avarage_number = data.avarage_number;
            if (callback) {
                callback();
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    processesViewComponent.prototype.refresh = function () {
        this.getProcesses();
    };
    return processesViewComponent;
}());
processesViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'processesView',
        template: __webpack_require__(410)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], processesViewComponent);

var _a;
//# sourceMappingURL=processes-view.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlstatViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var urlstatViewComponent = (function () {
    function urlstatViewComponent(dataService, chRef) {
        this.dataService = dataService;
        this.chRef = chRef;
        this.loading = false;
        this.dateRange = [0, 100];
        this.allRequests = [];
        this.debug = true;
        this.formatter = {
            to: function (value) {
                if (value) {
                    return moment(value, 'X').format('YYYY-DD-MM HH:mm');
                }
            },
            from: function (value) {
                if (value) {
                    if (moment(value, 'YYYY-DD-MM HH:mm').isValid()) {
                        var d = moment(value, 'YYYY-DD-MM HH:mm').format('X');
                        return parseFloat(d);
                    }
                    return value;
                }
            }
        };
        this.lineChartData = [
            { data: [], label: '' }, { data: [], label: '' }
        ];
        this.lineChartTimeData = [
            { data: [], label: '' }, { data: [], label: '' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(10,159,177,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(248,172,89,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartTimeColors = [{
                backgroundColor: 'rgba(51,122,183,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }, {
                backgroundColor: 'rgba(138,109,59,0.5)',
                borderColor: 'rgba(225,10,24,0.2)',
                pointBackgroundColor: 'rgba(10,10,24,0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(10,10,24,0.2)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.dateRangeMin = 0;
        this.dateRangeMax = 10;
        this.onInitTime = false;
    }
    urlstatViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].urlStatUrl, {})
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartTimeData = data.values_time;
            self.lineChartLabels = data.dates;
            self.allRequests = data.all_requests;
            self.last_time = data.last_time;
            self.debug = data.debug;
            self.chart.ngOnChanges({});
            self.onInitTime = true;
            self.dateRangeMin = data.date_range.start_date;
            self.dateRangeMax = data.date_range.end_date;
            self.slider.slider.updateOptions({
                start: [data.date_range.start, data.date_range.end_date],
                range: {
                    'min': data.date_range.start,
                    'max': data.date_range.end_date
                }
            });
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
            setTimeout(function () {
                self.onInitTime = false;
            }, 1000);
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    urlstatViewComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    urlstatViewComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    urlstatViewComponent.prototype.onChange = function ($event) {
        this.rangeStartDate = moment(this.dateRange[0], 'X').format('MMM DD HH:mm');
        this.rangeEndDate = moment(this.dateRange[1], 'X').format('MMM-DD HH:mm');
        this.getData();
    };
    urlstatViewComponent.prototype.getData = function (_params, callback) {
        if (this.loading || this.onInitTime) {
            return;
        }
        var self = this;
        var params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        };
        self.loading = true;
        self.dataService.getData(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].urlStatUrl, params)
            .subscribe(function (data) {
            self.loading = false;
            self.lineChartData = data.values;
            self.lineChartTimeData = data.values_time;
            self.lineChartLabels = data.dates;
            self.allRequests = data.all_requests;
            self.last_time = data.last_time;
            self.debug = data.debug || true;
            self.chart.ngOnChanges({});
            if (callback) {
                callback(data);
            }
        }, function (error) {
            self.loading = false;
            self.error_message = error;
        });
    };
    urlstatViewComponent.prototype.getDateFromTimestap = function (value) {
        return moment(value, 'X').format('MMM DD HH:mm');
    };
    urlstatViewComponent.prototype.refresh = function () {
        var self = this;
        self.getData({}, function (data) {
            self.dateRange = [data.date_range.start, data.date_range.end_date];
            self.chRef.detectChanges();
        });
    };
    urlstatViewComponent.prototype.toFixed = function (value) {
        return value.toFixed(4);
    };
    return urlstatViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__libs_ng2_charts_ng2_charts__["a" /* BaseChartDirective */]) === "function" && _a || Object)
], urlstatViewComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_nouislider__["NouisliderComponent"]) === "function" && _b || Object)
], urlstatViewComponent.prototype, "slider", void 0);
urlstatViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'urlstatView',
        template: __webpack_require__(411),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], urlstatViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=urlstat-view.component.js.map

/***/ })

},[458]);
//# sourceMappingURL=main.bundle.js.map