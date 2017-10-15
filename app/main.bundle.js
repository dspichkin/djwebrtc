webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
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
    function AppComponent(statusService, router) {
        this.statusService = statusService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].initialized();
        this.statusService.init();
        this.statusService.calling.subscribe(function (message) {
            if (self.router.url != '/wait') {
                _this.router.navigate(['/wait']);
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.statusService.calling.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CookieXSRFStrategyFactory */
/* unused harmony export AppCSRF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_appviews_module__ = __webpack_require__("../../../../../src/app/views/appviews.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_layouts_layouts_module__ = __webpack_require__("../../../../../src/app/components/common/layouts/layouts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_guards_service__ = __webpack_require__("../../../../../src/app/services/guards.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function CookieXSRFStrategyFactory() {
    return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* CookieXSRFStrategy */]('csrftoken', 'X-CSRFToken');
}
var AppCSRF = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* XSRFStrategy */],
    useFactory: CookieXSRFStrategyFactory,
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__views_appviews_module__["a" /* AppviewsModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_5__node_modules_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_websocket_service__["a" /* WebSocketService */],
            AppCSRF,
            __WEBPACK_IMPORTED_MODULE_12__services_status_service__["a" /* StatusService */],
            __WEBPACK_IMPORTED_MODULE_11__services_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_13__services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_14__services_guards_service__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_dialogsview_component__ = __webpack_require__("../../../../../src/app/views/dialogsview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_activedialogsview_component__ = __webpack_require__("../../../../../src/app/views/activedialogsview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_dialogview_component__ = __webpack_require__("../../../../../src/app/views/dialogview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_view_mode_wait_pupil_view_mode_wait_pupil_component__ = __webpack_require__("../../../../../src/app/views/view_mode_wait_pupil/view_mode_wait_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_view_mode_calling_view_mode_calling_component__ = __webpack_require__("../../../../../src/app/views/view_mode_calling/view_mode_calling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_view_message_view_message_component__ = __webpack_require__("../../../../../src/app/views/view_message/view_message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/views/view_profile/view_profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_guards_service__ = __webpack_require__("../../../../../src/app/services/guards.service.ts");



//import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";






var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dialogs', pathMatch: 'full' },
    // App views
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'dialogs',
                component: __WEBPACK_IMPORTED_MODULE_0__views_dialogsview_component__["a" /* DialogsViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'activedialogs',
                component: __WEBPACK_IMPORTED_MODULE_1__views_activedialogsview_component__["a" /* ActiveDialogsViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'dialog/:dialog_id',
                component: __WEBPACK_IMPORTED_MODULE_2__views_dialogview_component__["a" /* DialogViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'message',
                component: __WEBPACK_IMPORTED_MODULE_6__views_view_message_view_message_component__["a" /* MessageViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_7__views_view_profile_view_profile_component__["a" /* ProfileViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: 'wait',
        component: __WEBPACK_IMPORTED_MODULE_4__views_view_mode_wait_pupil_view_mode_wait_pupil_component__["a" /* ModeWaitPupilViewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_service__["a" /* AuthGuard */]]
    },
    {
        path: 'calling/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__views_view_mode_calling_view_mode_calling_component__["a" /* ModeCallingViewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_service__["a" /* AuthGuard */]]
    },
    /*
    {
      path: '', component: BasicLayoutComponent,
      children: [
          {
              path: 'mon',
              component: MonitoringComponent,
              //canActivate: [AuthGuard]
          }
      ]
    },
    */
    // Handle all other routes
    { path: '**', redirectTo: 'dialogs' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.initialized = function () {
        if (AppSettings.host.indexOf('localhost') > -1 || AppSettings.host.indexOf('127.0.0.1') > -1) {
            AppSettings.base_url = AppSettings.protocol + '//' + AppSettings.host + ':8000';
            AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + ':8000/peerjs';
        }
        else {
            AppSettings.base_url = AppSettings.protocol + '//' + AppSettings.host;
            AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + ':443/peerjs';
        }
        AppSettings.URL_STATUS = AppSettings.base_url + "/dialogs/api/status/";
        AppSettings.URL_DIALOGS = AppSettings.base_url + "/dialogs/api/dialogs/";
        AppSettings.URL_ACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/activedialogs/";
        AppSettings.URL_MYACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/myactivedialogs/";
        AppSettings.URL_DIALOG_RUN = AppSettings.base_url + "/dialogs/api/run/";
        AppSettings.URL_DIALOG_RUNINTO = AppSettings.base_url + "/dialogs/api/runinto/";
        AppSettings.URL_DIALOG_ACTIVESTOP = AppSettings.base_url + "/dialogs/api/stop/";
        AppSettings.URL_DIALOG_STOP = AppSettings.base_url + "/dialogs/api/stop/";
        AppSettings.URL_CHANGE_ACCEPT_CALL = AppSettings.base_url + "/accounts/accept_call/";
        AppSettings.URL_MESSAGE = AppSettings.base_url + "/accounts/message/";
        AppSettings.URL_CHECK_USER = AppSettings.base_url + "/accounts/check_user/";
        AppSettings.URL_USER_SETTING = AppSettings.base_url + "/accounts/user/";
        AppSettings.URL_WEBSOKET_PEER = document.location.hostname;
    };
    return AppSettings;
}());

AppSettings.host = document.location.hostname;
AppSettings.protocol = document.location.protocol;
AppSettings.CALLING_TIME_INTERVAL = 5000;
AppSettings.HEARTBEAT_DIALOG_TIMEOUT = 10000;
AppSettings.MODE_LIST = 'mode_list';
AppSettings.MODE_WAIT_PUPIL = 'mode_wait_pupil';
AppSettings.MODE_CALLING = 'mode_calling';
AppSettings.MODE_DIALOG_MASTER = 'mode_dialog_master';
AppSettings.MODE_DIALOG_PUPIL = 'mode_dialog_pupil';
//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ "../../../../../src/app/components/change_current_dialog/change_current_dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeCurrentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangeCurrentDialogComponent = (function () {
    function ChangeCurrentDialogComponent(dialogsService) {
        this.dialogsService = dialogsService;
        this.close_dialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected_dialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
        this.mydialogs = [];
    }
    ChangeCurrentDialogComponent.prototype.ngOnInit = function () {
        this._getMyActiveDialog();
    };
    ChangeCurrentDialogComponent.prototype.ngAfterViewInit = function () {
    };
    ChangeCurrentDialogComponent.prototype.ngOnChanges = function (changes) {
    };
    ChangeCurrentDialogComponent.prototype._getMyActiveDialog = function () {
        var self = this;
        self.loading = true;
        self.dialogsService.getMyActiveDialogs().subscribe(function (dialogs) {
            self.loading = false;
            self.mydialogs = dialogs;
        });
    };
    ChangeCurrentDialogComponent.prototype.changeSelectedDialog = function (item) {
        for (var i = 0; i < this.mydialogs.length; i++) {
            this.mydialogs[i].select = false;
        }
        item.select = true;
    };
    ChangeCurrentDialogComponent.prototype.selectDialog = function () {
        var selected_dialog;
        for (var i = 0; i < this.mydialogs.length; i++) {
            if (this.mydialogs[i].select == true) {
                selected_dialog = this.mydialogs[i];
                break;
            }
            ;
        }
        this.selected_dialog.emit(selected_dialog);
    };
    ChangeCurrentDialogComponent.prototype.ngOnDestroy = function () {
    };
    ChangeCurrentDialogComponent.prototype.closeChangeDialog = function () {
        this.close_dialog.emit(false);
    };
    return ChangeCurrentDialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChangeCurrentDialogComponent.prototype, "close_dialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChangeCurrentDialogComponent.prototype, "selected_dialog", void 0);
ChangeCurrentDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'changecurrentdialog',
        template: __webpack_require__("../../../../../src/app/components/change_current_dialog/change_current_dialog.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__["a" /* DialogsService */]) === "function" && _a || Object])
], ChangeCurrentDialogComponent);

var _a;
//# sourceMappingURL=change_current_dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/change_current_dialog/change_current_dialog.template.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: fixed;top:0;left:0;width: 100%; height: 100%\">\n    <div style=\"width: 100%;height: 100%;background-color: black;opacity: 0.5;\"></div>\n\n    <div style=\"width: 600px;height: 500px;position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 50px auto;\">\n\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                Выберите новый диалог\n            </div>\n            <div class=\"panel-body\" style=\"min-height: 200px;max-height: 300px;overflow: auto;\">\n\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let item of mydialogs\" class=\"list-group-item\" style=\"display:flex;cursor: pointer;justify-content: space-between;\" (click)=\"changeSelectedDialog(item)\">\n                        <div style=\"margin-right: 20px;flex:0;\">\n                            <input type=\"radio\" [(ngModel)]=\"item.select\" name=\"dialog\" [value]=\"true\">\n                        </div>\n                        <div style=\"flex: 3;\">\n                            <p>{{item.dialog.name}}</p>\n                            <p style=\"font-size: 9px;\">{{item.dialog.description}}</p>\n                        </div>\n                        <div *ngIf=\"item.dialog.background_image\" style=\"flex:0;width: 50px;height:50px\">\n                            <div *ngIf=\"item.dialog.background_image\" \n                                [ngStyle]=\"{'background-image': 'url(' + item.dialog.background_image + ')'}\"\n                                style=\"\n                                    height: 50px; \n                                    width: 50px; \n                                    background-size: cover;\n                                    display: block;\"></div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"panel-footer\" style=\"\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectDialog()\">Выбрать диалог</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"closeChangeDialog()\">Закрыть</button>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/components/common/footer/footer.template.html")
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/footer/footer.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background: rgba(64,75,97, 0.9);\">\n    <div style=\"height: 80px;color: white;margin-top:20px;font-size: 14px;\">\n        <ol>\n            <li>\n                <a [routerLink]=\"['/message']\" style=\"color:white;\">Обратная связь</a>\n            </li>\n            <li>\n                <a style=\"color:white;cursor: pointer;\" (click)=\"show_error_dialog=true\">Сообщить об ошибке</a>\n            </li>\n        </ol>\n    </div>\n</div>\n\n\n<messageerrors [(visible)]=\"show_error_dialog\"></messageerrors>"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/basicLayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicLayoutComponent = (function () {
    function BasicLayoutComponent() {
    }
    BasicLayoutComponent.prototype.ngOnInit = function () {
    };
    BasicLayoutComponent.prototype.onResize = function () {
    };
    return BasicLayoutComponent;
}());
BasicLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basic',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.template.html"),
    })
], BasicLayoutComponent);

//# sourceMappingURL=basicLayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/basicLayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div class=\"wrapper\">\n\n    <!-- Top navigation -->\n    <topnavbar></topnavbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/layouts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__topnavbar_topnavbar_component__ = __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_message_errors_message_errors_component__ = __webpack_require__("../../../../../src/app/components/message_errors/message_errors.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {BsDropdownModule} from 'ngx-bootstrap';






var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_message_errors_message_errors_component__["a" /* MessageErrorsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_message_errors_message_errors_component__["a" /* MessageErrorsComponent */],
        ],
    })
], LayoutsModule);

//# sourceMappingURL=layouts.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthenticationService } from '../../../services/authentication.service';
//declare var jQuery:any;
var NavigationComponent = (function () {
    function NavigationComponent(router, route) {
        this.router = router;
        this.route = route;
        var self = this;
        this.router.events.subscribe(function (url) {
        });
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        //this.menuService.update.unsubscribe();
    };
    NavigationComponent.prototype.logout = function () {
        console.log('logout');
        this.router.navigate(['/login']);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/components/common/navigation/navigation.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/navigation/navigation.template.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ErrorService } from '../../../services/error.service';
//import { AuthenticationService } from '../../../services/authentication.service';



var TopNavbarComponent = (function () {
    function TopNavbarComponent(router, statusService, webSocketService, errorService) {
        this.router = router;
        this.statusService = statusService;
        this.webSocketService = webSocketService;
        this.errorService = errorService;
        this.errors = [];
        this.messages = [];
        this.loading = false;
        this.state_input_call = false;
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.webSocketService.open.subscribe(function () {
            self.server_error = false;
        });
        self.statusService.ready.subscribe(function (date) {
            self.user = _this.statusService.user;
            self.state_input_call = self.user.is_accept_call;
        });
        for (var i in this.errorService.errors) {
            this.errors.push(this.errorService.errors[i]);
        }
        this.errorService.errors_update.subscribe(function (item) {
            _this.errors = [];
            for (var i in _this.errorService.errors) {
                if (_this.errorService.errors[i].code == 1000) {
                    _this.server_error = true;
                    delete _this.errorService.errors[i];
                    continue;
                }
                _this.errors.push(_this.errorService.errors[i]);
            }
        });
        this.messages = this.errorService.messages;
        this.errorService.messages_update.subscribe(function (item) {
            _this.messages = _this.errorService.messages;
        });
        if (!self.user) {
            self.user = self.statusService.user;
            if (!self.user) {
                self.statusService.getStatus();
            }
        }
    };
    TopNavbarComponent.prototype.removeError = function (index) {
        delete this.errorService.errors[this.errors[index].code];
        this.errors.splice(index, 1);
    };
    TopNavbarComponent.prototype.removeMessage = function (index) {
        this.messages.splice(index, 1);
    };
    TopNavbarComponent.prototype.logout = function () {
        console.log('logout');
        this.loading = true;
        this.router.navigate(['/login']);
    };
    TopNavbarComponent.prototype.activeRoute = function (routename) {
        return this.router.url == routename;
    };
    TopNavbarComponent.prototype.onChangeInputCall = function () {
        this.statusService.changeAcceptCall(!this.state_input_call).subscribe(function (data) {
        });
    };
    return TopNavbarComponent;
}());
TopNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_status_service__["a" /* StatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_error_service__["a" /* ErrorService */]) === "function" && _d || Object])
], TopNavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavbar.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default top-nav-collapse\" style=\"border-radius: 0px;\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\" style=\"margin-left: 0;\">Ди<span class=\"logo-dec\">алоги</span></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [ngClass]=\"{'active': activeRoute('/dialogs')}\">\n            <a [routerLink]=\"['/dialogs']\">Все диалоги</a>\n        </li>\n        <li [ngClass]=\"{'active': activeRoute('/activedialogs')}\">\n            <a [routerLink]=\"['/activedialogs']\">Диалоги в ожидание ученика</a>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Настройки<span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a [routerLink]=\"['/profile']\" >Профиль</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"/accounts/logout/?next=/\" target=\"_self\">Выход</a></li>\n              </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"col-md-10\" style=\"margin: 0 0 10px 0;\">\n            <bSwitch [switch-size]=\"'small'\" [switch-animate]=\"true\" [(ngModel)]=\"state_input_call\" (onChangeState)=\"onChangeInputCall($event)\" [switch-off-text]=\"'Выкл'\"\n              [switch-on-text]=\"'Вкл'\"></bSwitch>\n            <span style=\"color:beige;margin-left: 18px;\">Принимать входящие звонки</span>\n        </div>\n        <div class=\"col-md-2\" style=\"text-align: right;color:white;\">{{user?.fio}}</div>\n    </div>\n  </div>\n</nav>\n\n<div *ngIf=\"server_error\" style=\"position: absolute;top:0;left:0;height: 100%;width: 100%;z-index: 100;\">\n    <div style=\"position: fixed;opacity: 0.7;width:100%;height:200%;background-color: white;\"></div>\n    <div style=\"position: relative;margin: auto;margin-top: 160px;text-align: center;color: darkred;\">\n        <h1>Опс... не могу получить доступ к серверу</h1>\n        <h4>Работа сайта возобновится после восстановления доступа к серверу</h4>\n    </div>\n</div>\n\n<div *ngIf=\"errors.length > 0\" style=\"position:absolute;width:100%;top:0;right:0;z-index:1000;\">\n    <div *ngFor=\"let error of errors;let i=index\" class=\"alert alert-danger\" style=\"margin: 0 0 5px 0;max-height: 300px;overflow-y: auto;\">\n        <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\" (click)=\"removeError(i)\" style=\"margin-top:-10px;margin-right: -10px;\">×</button>\n        <span *ngIf=\"error?.host\" style=\"font-weight: 800;\">Host: {{error?.host}}</span> \n        <span  *ngIf=\"error?.message\"><pre>Описание: {{error?.message}} </pre></span>\n        <span  *ngIf=\"error?.rc\">Код rc: {{error?.rc}}</span>\n    </div>\n</div>\n\n<div *ngIf=\"messages.length > 0\" style=\"position:absolute;width:100%;top:0;right:0;z-index:1000;\">\n    <div *ngFor=\"let message of messages;let i=index\" class=\"alert alert-success\" style=\"margin: 0 0 5px 0;max-height: 300px;overflow-y: auto;\">\n        <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\" (click)=\"removeMessage(i)\" style=\"margin-top:-10px;margin-right: -10px;\">×</button>\n        <span *ngIf=\"message?.host\" style=\"font-weight: 800;\">Host: {{message?.host}}</span> \n        <span  *ngIf=\"message?.message\"><pre>Описание: {{message?.message}} </pre></span>\n        <span  *ngIf=\"message?.rc\">Код rc: {{message?.rc}}</span>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/message_errors/message_errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageErrorsComponent = (function () {
    function MessageErrorsComponent(statusService) {
        this.statusService = statusService;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
        this.message = "";
    }
    MessageErrorsComponent.prototype.ngOnInit = function () {
    };
    MessageErrorsComponent.prototype.ngAfterViewInit = function () {
        this.loading = false;
    };
    MessageErrorsComponent.prototype.ngOnChanges = function (changes) {
    };
    MessageErrorsComponent.prototype.ngOnDestroy = function () {
    };
    MessageErrorsComponent.prototype.send = function () {
        var _this = this;
        this.loading = true;
        this.statusService.sendMessage({
            message: this.message
        }).subscribe(function (data) {
            _this.loading = false;
            _this.visible = false;
            _this.visibleChange.emit(_this.visible);
        });
    };
    MessageErrorsComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return MessageErrorsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MessageErrorsComponent.prototype, "visible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MessageErrorsComponent.prototype, "visibleChange", void 0);
MessageErrorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'messageerrors',
        template: __webpack_require__("../../../../../src/app/components/message_errors/message_errors.template.html"),
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('dialog', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100)
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _b || Object])
], MessageErrorsComponent);

var _a, _b;
//# sourceMappingURL=message_errors.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/message_errors/message_errors.template.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialogerrors\" style=\"position: fixed;top:0;left:0;width: 100%; height: 100%\">\n    <div style=\"width: 100%;height: 100%;background-color: black;opacity: 0.5;\"></div>\n\n    <div style=\"width: 600px;height: 500px;position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 50px auto;\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Сообщить об ошибке</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <textarea class=\"form-control\" [ngModel]=\"message\" style=\"min-height: 200px;\"></textarea>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"send()\" [disabled]=\"loading\">Отправить</button>\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\" [disabled]=\"loading\">Закрыть</button>\n                </div>\n            </div>\n        </div>\n\n        <!-- Loading -->\n        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n            <div style=\"position: absolute;opacity: 0;width:100%;height:100%;background-color: white;\">\n            </div>\n            <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n            </div>\n        </div>\n        <!-- END Loading -->\n\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mode_dialog_master/mode_dialog_master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeDialogMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModeDialogMasterComponent = (function () {
    function ModeDialogMasterComponent(statusService, dialogsService, webSocketService, router) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.router = router;
        this.stopdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userMedia = navigator;
        this.loading = false;
        this.status_activedialog = 'starting'; //starting, run, stop
        var self = this;
    }
    ModeDialogMasterComponent.prototype.ngOnInit = function () {
        var self = this;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe(function (data) {
            self.activedialog = data;
            self._getPersonageName();
            self._startPeer();
            //console.log('self.activedialog', self.activedialog)
        });
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "DIALOG_STOP") {
                self._closeDialog();
                self.status_activedialog = 'stop';
            }
            if (message.command == "HEARBEAT_DIALOG_PUPIL") {
                self.last_hearbeat_from_pupil = new Date();
                var value = Math.round((self.last_hearbeat_from_pupil - self.start_converstion) / 1000);
                if (value) {
                    self.during_conversation = value;
                }
            }
        });
        self._runHearbeatPupil();
    };
    ModeDialogMasterComponent.prototype.ngAfterViewInit = function () {
    };
    ModeDialogMasterComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeDialogMasterComponent.prototype.ngOnDestroy = function () {
    };
    ModeDialogMasterComponent.prototype._getPersonageName = function () {
        for (var i = 0; i < this.activedialog.dialog.scenario.personages.length; i++) {
            if (this.activedialog.dialog.scenario.personages[i].role == 'master') {
                this.personageName = this.activedialog.dialog.scenario.personages[i].name;
            }
        }
    };
    ModeDialogMasterComponent.prototype._startPeer = function () {
        var self = this;
        self.peer = new Peer({
            socket: self.webSocketService,
            host: __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].URL_WEBSOKET_PEER,
            debug: 0,
            secure: true,
            port: 8000,
            id: self.user.key_id
        });
        self.peer.on('open', function (id) {
            self.peerid = id;
        });
        self.peer.on('error', function (err) {
            console.log("ERROR:", err.message);
        });
        // Receiving a call
        self.peer.on('call', function (receivecall) {
            self._startLocalVideo(function () {
                self.status_activedialog = 'run';
                self.start_converstion = new Date();
                receivecall.answer(self.localStream);
                self._prepareCall(receivecall);
            });
        });
    };
    ModeDialogMasterComponent.prototype._startLocalVideo = function (callback) {
        var self = this;
        if (!navigator.getUserMedia)
            this.userMedia.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!navigator.cancelAnimationFrame)
            this.userMedia.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
        if (!navigator.requestAnimationFrame)
            this.userMedia.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;
        /*
        {
                     "mandatory": {
                         "googEchoCancellation": "false",
                         "googAutoGainControl": "false",
                         "googNoiseSuppression": "false",
                         "googHighpassFilter": "false"
                     },
                     "optional": []
                 }
        */
        this.userMedia.getUserMedia({
            audio: true,
            video: false
        }, function (stream) {
            self.localVideo.nativeElement.src = URL.createObjectURL(stream);
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function (error) {
            console.log("ERROR getUserMedia: ", error);
        });
    };
    ModeDialogMasterComponent.prototype._prepareCall = function (call) {
        var self = this;
        if (self.answeringCall) {
            self.answeringCall.close();
        }
        self.answeringCall = call;
        call.on('stream', function (stream) {
            // get call stream from remote host
            self.remoteVideo.nativeElement.src = URL.createObjectURL(stream);
        });
        call.on('close', function () {
            console.log("CLOSE");
            self._closeDialog();
        });
    };
    ModeDialogMasterComponent.prototype._closeDialog = function () {
        var self = this;
        self.status_activedialog = 'stop';
        if (self.answeringCall) {
            self.answeringCall.close();
        }
        if (self.localStream) {
            self.localStream.getTracks().forEach(function (track) {
                track.stop();
            });
            self.localStream.src = "";
        }
        if (self.remoteVideo.nativeElement.src) {
            self.remoteVideo.nativeElement.src = "";
        }
    };
    ModeDialogMasterComponent.prototype.exitDialog = function () {
        this._closeDialog();
        this.stopdialog.emit({
            activedialogid: this.activedialogid,
            type: 'master'
        });
        var self = this;
        setTimeout(function () {
            if (self.router.url == '/wait') {
                self.router.navigate(['/dialogs']);
            }
        }, 2000);
    };
    ModeDialogMasterComponent.prototype.hangPhone = function () {
        var self = this;
        this._closeDialog();
        self.webSocketService.sendCommand({
            command: "DIALOG_STOP",
            target: self.activedialog.id,
        });
    };
    ModeDialogMasterComponent.prototype.displayTime = function (_seconds) {
        var hours = Math.floor(_seconds / 3600);
        var minutes = Math.floor((_seconds - (hours * 3600)) / 60);
        var seconds = _seconds - (hours * 3600) - (minutes * 60);
        var time = "";
        if (hours != 0) {
            time = hours + ":";
        }
        if (minutes != 0 || time !== "") {
            var sminutes = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
            time += sminutes + ":";
        }
        if (time === "") {
            time = seconds + "сек";
        }
        else {
            time += (seconds < 10) ? "0" + seconds : String(seconds);
        }
        return time;
    };
    ModeDialogMasterComponent.prototype._runHearbeatPupil = function () {
        var self = this;
        if (self._checkLastMessageFromPupil) {
            if (self.webSocketService.ws.socket.readyState == 1) {
                if (self.answeringCall && self.answeringCall.open) {
                    self.webSocketService.sendCommand({
                        command: "HEARBEAT_DIALOG_MASTER",
                        target: self.activedialog.id
                    });
                }
            }
        }
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function () {
            self._runHearbeatPupil();
        }, 4000);
    };
    ModeDialogMasterComponent.prototype._checkLastMessageFromPupil = function () {
        var self = this;
        if (new Date(self.last_hearbeat_from_pupil).getTime() +
            __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].HEARTBEAT_DIALOG_TIMEOUT < new Date().getTime()) {
            self.webSocketService.sendCommand({
                command: "DIALOG_STOP",
                target: self.activedialog.id,
            });
            return false;
        }
        return true;
    };
    ModeDialogMasterComponent.prototype.handlerChangeActiveDialog = function (activedialog) {
        this.activedialog = activedialog;
        this.activedialogid = activedialog.id;
    };
    return ModeDialogMasterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModeDialogMasterComponent.prototype, "activedialogid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModeDialogMasterComponent.prototype, "stopdialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('remoteVideo'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ModeDialogMasterComponent.prototype, "remoteVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('localVideo'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ModeDialogMasterComponent.prototype, "localVideo", void 0);
ModeDialogMasterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modedialogmaster',
        template: __webpack_require__("../../../../../src/app/components/mode_dialog_master/mode_dialog_master.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_status_service__["a" /* StatusService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dialogs_service__["a" /* DialogsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_websocket_service__["a" /* WebSocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ModeDialogMasterComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=mode_dialog_master.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mode_dialog_master/mode_dialog_master.template.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>Диалог: \n                    <span *ngIf=\"activedialog\">{{activedialog.dialog?.name}}</span>\n                    <span *ngIf=\"!activedialog\">загружается</span>\n                </h4>\n                <p>Роль: ведущий</p>\n                <p *ngIf=\"status_activedialog=='run'\"  style=\"font-size: 12px;color:green;\">Диалог запущен</p>\n                <p *ngIf=\"status_activedialog=='stop'\" style=\"font-size: 12px;color:red;\">Диалог остановлен</p>\n                <p *ngIf=\"status_activedialog=='starting'\" style=\"font-size: 12px;color:blue;\">Диалог запускается</p>\n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p *ngIf=\"personageName\" style=\"margin: 0 40px;\">Персонаж: {{personageName}}</p>\n                <p *ngIf=\"during_conversation\" style=\"margin: 0 40px;font-size: 8px;\">{{displayTime(during_conversation)}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n\n        <div [hidden]=\"status_activedialog != 'run'\" class=\"row\">\n            <div class=\"pull-right\" style=\"display1: flex;justify-content: flex-end;\">\n                \n\n                <div class=\"pull-right1\" style=\"display: flex;opacity: 0;height: 0;\">\n                    <div style=\"margin: 5px;\">\n                        <video #remoteVideo autoplay=\"\" style=\"border:2px solid red;width: 100px;\"></video>\n                        <p style=\"font-size: 8px;margin-top: -5px;\">Remote</p>\n                    </div>\n                    <div style=\"margin: 5px;\">\n                        <video #localVideo muted=\"true\" autoplay=\"\" style=\"border:2px solid green;width: 100px;\"></video>\n                        <p style=\"font-size: 8px;margin-top: -5px;\">Local</p>\n                    </div>\n                </div>\n\n                <button  *ngIf=\"status_activedialog=='run'\" class=\"btn btn-warning\" (click)=\"hangPhone()\">\n                    <i class=\"fa fa-microphone-slash\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><span>Остановить диалог</span>\n                </button>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"activedialog\">\n            <playerdialogmaster [user]=\"user\" [activedialog]=\"activedialog\" (changeactivedialog)=\"handlerChangeActiveDialog($event)\"></playerdialogmaster>\n        </div>\n        \n        <div style=\"margin-top: 30px\">\n            \n            <button class=\"btn btn-warning\" (click)=\"exitDialog()\"><span>Выход из режима диалога</span></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeDialogPupilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModeDialogPupilComponent = (function () {
    function ModeDialogPupilComponent(statusService, dialogsService, webSocketService) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.stopdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userMedia = navigator;
        this.loading = false;
        this.status_activedialog = 'starting';
        var self = this;
    }
    ModeDialogPupilComponent.prototype.ngOnInit = function () {
        var self = this;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe(function (data) {
            self.activedialog = data;
            self._getPersonageName();
            self._startPeer();
        });
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "DIALOG_STOP") {
                self._closeDialog();
                self.status_activedialog = 'stop';
            }
            if (message.command == "HEARBEAT_DIALOG_MASTER") {
                self.last_hearbeat_from_master = new Date();
                var value = Math.round((self.last_hearbeat_from_master - self.start_converstion) / 1000);
                if (value) {
                    self.during_conversation = value;
                }
            }
        });
        self._runHearbeatPupil();
    };
    ModeDialogPupilComponent.prototype.ngAfterViewInit = function () {
    };
    ModeDialogPupilComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeDialogPupilComponent.prototype.ngOnDestroy = function () {
    };
    ModeDialogPupilComponent.prototype._getPersonageName = function () {
        for (var i = 0; i < this.activedialog.dialog.scenario.personages.length; i++) {
            if (this.activedialog.dialog.scenario.personages[i].role == 'pupil') {
                this.personageName = this.activedialog.dialog.scenario.personages[i].name;
            }
        }
    };
    ModeDialogPupilComponent.prototype._startPeer = function () {
        var self = this;
        self.peer = new Peer({
            socket: self.webSocketService,
            host: __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].URL_WEBSOKET_PEER,
            debug: 0,
            secure: true,
            port: 8000,
            id: self.user.key_id
        });
        self.peer.on('open', function (id) {
            //console.log('Peer: My peer ID is: ' + id);
            self.peerid = id;
            self._startLocalVideo(function () {
                var call = self.peer.call(self.activedialog.master.key_id, self.localStream);
                self._prepareCall(call);
            });
        });
        self.peer.on('error', function (err) {
            console.log("ERROR:", err.message);
        });
        // Receiving a call
        self.peer.on('call', function (call) {
            //console.log('Receiving a call')
            // ответный звонок на вызов
        });
    };
    ModeDialogPupilComponent.prototype._startLocalVideo = function (callback) {
        var self = this;
        if (!navigator.getUserMedia)
            this.userMedia.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!navigator.cancelAnimationFrame)
            this.userMedia.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
        if (!navigator.requestAnimationFrame)
            this.userMedia.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;
        /*
        {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                }
        */
        this.userMedia.getUserMedia({
            audio: true,
            video: false
        }, function (stream) {
            self.localVideo.nativeElement.src = URL.createObjectURL(stream);
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function (error) {
            console.log("ERROR getUserMedia: ", error);
        });
    };
    ModeDialogPupilComponent.prototype._prepareCall = function (call) {
        var self = this;
        if (self.callingCall) {
            self.callingCall.close();
        }
        self.callingCall = call;
        call.on('stream', function (stream) {
            //console.log('got stream')
            // get call stream from remote host
            self.remoteVideo.nativeElement.src = URL.createObjectURL(stream);
            self.status_activedialog = 'run';
            self.start_converstion = new Date();
        });
        call.on('close', function () {
            console.log("CLOSE");
            self._closeDialog();
        });
    };
    ModeDialogPupilComponent.prototype._closeDialog = function () {
        var self = this;
        self.status_activedialog = 'stop';
        if (self.callingCall) {
            self.callingCall.close();
        }
        if (self.localStream) {
            self.localStream.getTracks().forEach(function (track) {
                track.stop();
            });
            self.localStream.src = "";
        }
        if (self.remoteVideo.nativeElement.src) {
            self.remoteVideo.nativeElement.src = "";
        }
    };
    ModeDialogPupilComponent.prototype.exitDialog = function () {
        this._closeDialog();
        this.stopdialog.emit({
            activedialogid: this.activedialogid,
            type: 'pupil'
        });
    };
    ModeDialogPupilComponent.prototype.hangPhone = function () {
        var self = this;
        this._closeDialog();
        self.webSocketService.sendCommand({
            command: "DIALOG_STOP",
            target: self.activedialog.id,
        });
    };
    ModeDialogPupilComponent.prototype.displayTime = function (_seconds) {
        var hours = Math.floor(_seconds / 3600);
        var minutes = Math.floor((_seconds - (hours * 3600)) / 60);
        var seconds = _seconds - (hours * 3600) - (minutes * 60);
        var time = "";
        if (hours != 0) {
            time = hours + ":";
        }
        if (minutes != 0 || time !== "") {
            var sminutes = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
            time += sminutes + ":";
        }
        if (time === "") {
            time = seconds + "сек";
        }
        else {
            time += (seconds < 10) ? "0" + seconds : String(seconds);
        }
        return time;
    };
    ModeDialogPupilComponent.prototype._runHearbeatPupil = function () {
        var self = this;
        if (self._checkLastMessageFromPupil) {
            if (self.webSocketService.ws.socket.readyState == 1) {
                if (self.callingCall && self.callingCall.open) {
                    self.webSocketService.sendCommand({
                        command: "HEARBEAT_DIALOG_PUPIL",
                        target: self.activedialog.id
                    });
                }
            }
        }
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function () {
            self._runHearbeatPupil();
        }, 4000);
    };
    ModeDialogPupilComponent.prototype._checkLastMessageFromPupil = function () {
        var self = this;
        if (new Date(self.last_hearbeat_from_master).getTime() +
            __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].HEARTBEAT_DIALOG_TIMEOUT < new Date().getTime()) {
            self.webSocketService.sendCommand({
                command: "DIALOG_STOP",
                target: self.activedialog.id,
            });
            return false;
        }
        return true;
    };
    ModeDialogPupilComponent.prototype.handlerChangeActiveDialog = function (activedialog) {
        this.activedialog = activedialog;
        this.activedialogid = activedialog.id;
        console.log('this.activedialog ', this.activedialog);
    };
    return ModeDialogPupilComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModeDialogPupilComponent.prototype, "activedialogid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModeDialogPupilComponent.prototype, "stopdialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('remoteVideo'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ModeDialogPupilComponent.prototype, "remoteVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('localVideo'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ModeDialogPupilComponent.prototype, "localVideo", void 0);
ModeDialogPupilComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modedialogpupil',
        template: __webpack_require__("../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */]) === "function" && _e || Object])
], ModeDialogPupilComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=mode_dialog_pupil.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.template.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>Диалог \n                    <span *ngIf=\"activedialog\">{{activedialog.dialog.name}}</span>\n                    <span *ngIf=\"!activedialog\">загружается</span>\n                </h4>\n                <p>Роль: ученик</p>\n                <p *ngIf=\"status_activedialog=='run'\"  style=\"font-size: 12px;color:green;\">Диалог запущен</p>\n                <p *ngIf=\"status_activedialog=='stop'\" style=\"font-size: 12px;color:red;\">Диалог остановлен</p>\n                <p *ngIf=\"status_activedialog=='starting'\" style=\"font-size: 12px;color:blue;\">Диалог запускается</p>\n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p *ngIf=\"personageName\" style=\"margin: 0 40px;\">Персонаж: {{personageName}}</p>\n                <p *ngIf=\"during_conversation\" style=\"margin: 0 40px;font-size: 8px;\">{{displayTime(during_conversation)}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n\n        <!-- Loading -->\n        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n            </div>\n            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n            </div>\n        </div>\n        <!-- END Loading -->\n\n        <div [hidden]=\"status_activedialog != 'run'\" class=\"row\">\n            <div class=\"pull-right\" style=\"display: flex;justify-content: flex-end;opacity: 0;height: 0;\">\n                <div style=\"margin: 5px;\">\n                    <video #remoteVideo autoplay=\"\" style=\"border:2px solid red;width: 100px;\"></video>\n                    <p style=\"font-size: 8px;margin-top: -5px;\">Remote</p>\n                </div>\n                <div style=\"margin: 5px;\">\n                    <video #localVideo muted=\"true\" autoplay=\"\" style=\"border:2px solid green;width: 100px;\"></video>\n                    <p style=\"font-size: 8px;margin-top: -5px;\">Local</p>\n                </div>\n            </div>\n            <button  *ngIf=\"status_activedialog=='run'\" class=\"btn btn-warning\" (click)=\"hangPhone()\">\n                <i class=\"fa fa-microphone-slash\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><span>Остановить диалог</span>\n            </button>\n        </div>\n\n        <div class=\"row\" *ngIf=\"activedialog\">\n            <playerdialogpupil [activedialog]=\"activedialog\" (changeactivedialog)=\"handlerChangeActiveDialog($event)\"></playerdialogpupil>\n        </div>\n        \n        <div style=\"margin-top: 30px\">\n            <!--\n             <button *ngIf=\"status_activedialog=='run'\" class=\"btn btn-warning\" (click)=\"hangPhone()\"><span>Остановить диалог</span></button>\n         -->\n            <button class=\"btn btn-warning\" (click)=\"exitDialog()\"><span>Выход из режима диалога</span></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/player_dialog_master/player_dialog_master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDialogMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerDialogMasterComponent = (function () {
    function PlayerDialogMasterComponent(statusService, dialogsService, webSocketService, ref) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.ref = ref;
        this.stopdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeactivedialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.current_mode = 1; // 1 - ожидание хода 2 - мой ход
        this.open_change_dialog = false;
        this.passed_turns = {
            master: false,
            pupil: false
        };
        this.loading = false;
        var self = this;
    }
    PlayerDialogMasterComponent.prototype.ngOnInit = function () {
        var self = this;
        //console.log('user', self.user)
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "CHANGE_DIALOG") {
                self.loading = true;
                self.dialogsService.getActiveDialog(message.activedialodid).subscribe(function (activedialog) {
                    self.loading = false;
                    self.changeactivedialog.emit(activedialog);
                    self.passed_turns.master = false;
                    self.passed_turns.pupil = false;
                    self.activedialog = activedialog;
                    self.current_step_id = self.activedialog.dialog.scenario.steps[0].id;
                    self._setStartStepPersonage(self.current_step_id);
                    self.current_step = self.activedialog.dialog.scenario.steps[0][self.currentPersonage];
                    self._detectChanges();
                });
                self._detectChanges();
            }
            //console.log('message', message)
            if (message.command == "SET_STEP") {
                self.passed_turns.master = false;
                self.passed_turns.pupil = false;
                if (message.STEP_ID > 0) {
                    self.current_step_id = message.STEP_ID;
                    self._setStartStepPersonage(self.current_step_id);
                    self.current_step = self._getNextStep(message.STEP_ID);
                }
                self._detectChanges();
            }
            if (message.command == "CHANGE_PERSONAGE") {
                if (self.currentPersonage == 'pupil') {
                    self.currentPersonage = 'master';
                    self.passed_turns.master = true;
                }
                else {
                    self.currentPersonage = 'pupil';
                    self.passed_turns.pupil = true;
                }
                if (self.current_mode == 1) {
                    self.current_mode = 2;
                }
                else {
                    self.current_mode = 1;
                }
                self.current_step = self._getNextStep(self.current_step_id);
                self._detectChanges();
            }
        });
        self.current_step_id = this.activedialog.dialog.scenario.steps[0].id;
        self._setStartStepPersonage(self.current_step_id);
        self.current_step = this.activedialog.dialog.scenario.steps[0][this.currentPersonage];
        self._detectChanges();
    };
    PlayerDialogMasterComponent.prototype.ngAfterViewInit = function () {
    };
    PlayerDialogMasterComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        //this.webSocketService.message.unsubscribe();
    };
    PlayerDialogMasterComponent.prototype._detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this.ref !== null &&
                _this.ref !== undefined &&
                !_this.ref.destroyed) {
                _this.ref.detectChanges();
            }
        }, 250);
    };
    PlayerDialogMasterComponent.prototype._setStartStepPersonage = function (next_step_id) {
        var step = this._getStep(next_step_id);
        if (step.start_personage == 'pupil') {
            this.current_mode = 1; // Ожидаем ход игрока
            this.currentPersonage = 'pupil';
            this.passed_turns.pupil = true;
        }
        else if (step.start_personage == 'master') {
            this.current_mode = 2;
            this.currentPersonage = 'master';
            this.passed_turns.master = true;
        }
    };
    PlayerDialogMasterComponent.prototype._getNextStep = function (next_step_id) {
        if (next_step_id) {
            var step = this._getStep(next_step_id);
            if (step) {
                return step[this.currentPersonage];
            }
        }
    };
    PlayerDialogMasterComponent.prototype._getStep = function (step_id) {
        for (var i = 0; i < this.activedialog.dialog.scenario.steps.length; i++) {
            if (this.activedialog.dialog.scenario.steps[i].id == step_id) {
                return this.activedialog.dialog.scenario.steps[i];
            }
        }
    };
    PlayerDialogMasterComponent.prototype._shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    PlayerDialogMasterComponent.prototype.getWords = function (item) {
        item.words = item.phrase.split(' ');
        this._shuffle(item.words);
        this._shuffle(item.words);
    };
    PlayerDialogMasterComponent.prototype.clearWords = function (item) {
        item.words = [];
    };
    PlayerDialogMasterComponent.prototype.getHints = function (item) {
        item.hints = item.phrase;
    };
    PlayerDialogMasterComponent.prototype.clearHints = function (item) {
        item.hints = null;
    };
    PlayerDialogMasterComponent.prototype.nextStep = function (next_id) {
        var command = {
            command: 'NEXTSTEP',
            nextstep: next_id,
            activedialogid: this.activedialog.id,
            source: this.user.key_id
        };
        this.webSocketService.sendCommand(command);
    };
    PlayerDialogMasterComponent.prototype.myTurn = function () {
        var command = {
            command: 'CHANGE_PERSONAGE',
            activedialogid: this.activedialog.id,
            source: this.user.key_id
        };
        this.webSocketService.sendCommand(command);
    };
    PlayerDialogMasterComponent.prototype.pupilTurn = function () {
        var command = {
            command: 'CHANGE_PERSONAGE',
            activedialogid: this.activedialog.id,
            source: this.user.key_id
        };
        this.webSocketService.sendCommand(command);
    };
    PlayerDialogMasterComponent.prototype.hasNextTurn = function (item) {
        if (item.next_step > 0) {
            var next_step = this._getStep(item.next_step);
            if (next_step.pupil && next_step.pupil.variants && next_step.pupil.variants.length > 0) {
                return true;
            }
        }
        return false;
    };
    PlayerDialogMasterComponent.prototype.hasMyTurn = function () {
        var current_step = this._getStep(this.current_step_id);
        if (current_step.master && current_step.master.variants && current_step.master.variants.length > 0) {
            return true;
        }
        return false;
    };
    PlayerDialogMasterComponent.prototype.hasPlayerTurn = function () {
        var current_step = this._getStep(this.current_step_id);
        if (current_step.pupil && current_step.pupil.variants && current_step.pupil.variants.length > 0) {
            var has_next = false;
            for (var i = 0; i < current_step.pupil.variants.length; i++) {
                if (current_step.pupil.variants[i].next_step && current_step.pupil.variants[i].next_step > -1) {
                    has_next = true;
                    break;
                }
            }
            if (has_next) {
                return true;
            }
        }
        return false;
    };
    PlayerDialogMasterComponent.prototype.openChangeDialog = function () {
        this.open_change_dialog = !this.open_change_dialog;
    };
    PlayerDialogMasterComponent.prototype.handlerCloseChangeCurrentDialog = function (result) {
        if (!result) {
            this.open_change_dialog = false;
        }
    };
    PlayerDialogMasterComponent.prototype.handlerSelectDialog = function (activedialog) {
        this.open_change_dialog = false;
        var command = {
            command: 'CHANGE_DIALOG',
            current_activedialogid: this.activedialog.id,
            next_activedialogid: activedialog.id,
        };
        this.webSocketService.sendCommand(command);
    };
    return PlayerDialogMasterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlayerDialogMasterComponent.prototype, "activedialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlayerDialogMasterComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PlayerDialogMasterComponent.prototype, "stopdialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PlayerDialogMasterComponent.prototype, "changeactivedialog", void 0);
PlayerDialogMasterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'playerdialogmaster',
        template: __webpack_require__("../../../../../src/app/components/player_dialog_master/player_dialog_master.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], PlayerDialogMasterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=player_dialog_master.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player_dialog_master/player_dialog_master.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <button *ngIf=\"activedialog\" type=\"button\" class=\"btn btn-info pull-right\" style=\"margin: 0 20px 20px 20px;\" (click)=\"openChangeDialog()\">Сменить текущий диалог</button>\n        <div style=\"margin: 20px;clear: both\">\n            <div *ngIf=\"activedialog.dialog && activedialog.dialog.scenario\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    Текущий шаг: {{current_step.number}} / {{activedialog.dialog.scenario.steps.length}}\n                </div>\n                <div *ngIf=\"current_mode == 2\" class=\"panel-body\" style=\"min-height: 200px;\">\n                    <h3 style=\"text-align: center;\">Ваш ход</h3>\n\n                    <span>Вам нужно сказать:</span> \n                    <div *ngFor=\"let item of current_step.variants\">\n                        <div class=\"well\">\n                            <h4 class=\"text-success\">{{item.task}}</h4>\n                        </div>\n                        <div>\n                            <h4 *ngIf=\"!passed_turns.pupil\" class=\"text-warning\" style=\"text-align: center;\">Ход игрока еще не был сделан</h4>\n                           \n                            <button *ngIf=\"item.prev_step > 0\" class=\"btn btn-info\" type=\"button\" (click)=\"nextStep(item.prev_step)\">Назад</button>\n                            \n                            <button class=\"btn btn-warning\" type=\"button\" (click)=\"pupilTurn()\">Ход игрока</button>\n\n                            <button *ngIf=\"hasNextTurn(item)\" class=\"btn btn-success pull-right\" type=\"button\" (click)=\"nextStep(item.next_step)\">Следуюйщий шаг</button>\n                        </div>\n\n                        <h2 *ngIf=\"!hasNextTurn(item)\" class=\"text-warning\" style=\"text-align: center;\">Это последний шаг диалога</h2>\n                        \n\n                        <div style=\"margin-top:40px\">\n                            <button *ngIf=\"!item.words || (item.words && item.words.length == 0)\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"getWords(item)\">Посмотреть слова</button>\n                             <button *ngIf=\"item.words && item.words.length > 0\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"clearWords(item)\">Скрыть слова</button>\n                            <button *ngIf=\"!item.hints\"  class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"getHints(item)\">Посмотреть подсказку</button>\n                            <button *ngIf=\"item.hints\" class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"clearHints(item)\">Убрать подсказку</button>\n                        </div>\n\n                        <div *ngIf=\"item.words && item.words.length > 0\" \n                            style=\"margin-top:20px;display: flex;justify-content: center;flex-wrap: wrap;\">\n                            <span *ngFor=\"let item of item.words\" class=\"label label-success\" style=\"margin: 10px;padding: 10px;font-size: 16px;\">{{item}}</span>\n                        </div>\n                        <div *ngIf=\"item.hints\" style=\"margin-top:20px;\">\n                            <p class=\"alert alert-success\" style=\"margin: 5px 0;\">\n                                {{item.hints}}\n                            </p>\n                        </div>\n                    </div> \n                </div>\n                <div *ngIf=\"current_mode == 1\" class=\"panel-body\" style=\"min-height: 200px;\">\n                    <h3 style=\"text-align: center;\">Ожидаем ход игрока</h3>\n                    <span>Ему нужно сказать:</span> \n                    <div *ngFor=\"let item of current_step.variants\">\n                        <div class=\"well\">\n                            <p class=\"text-success\">{{item.task}}</p>\n                        </div>\n                        <div class=\"well\">\n                            <p class=\"\" style=\"margin: 5px 0;\">{{item.phrase}}</p>\n                        </div>\n\n                         <h4 *ngIf=\"hasNextTurn(item) && !passed_turns.master\" class=\"text-warning\" style=\"text-align: center;\">Ваш ход еще не был сделан</h4>\n\n\n                        <button *ngIf=\"hasMyTurn()\" class=\"btn btn-warning\" type=\"button\" (click)=\"myTurn()\">Теперь мой ход</button>\n                        <button *ngIf=\"hasNextTurn(item)\" class=\"btn btn-success pull-right\" type=\"button\" (click)=\"nextStep(item.next_step)\">Следуюйщий шаг</button>\n\n                        <h2 *ngIf=\"!hasPlayerTurn(item)\" class=\"text-warning\" style=\"text-align: center;\">Это последний шаг диалога</h2>\n                        <button *ngIf=\"!hasPlayerTurn(item) && item.prev_step > 0\" class=\"btn btn-info\" type=\"button\" (click)=\"nextStep(item.prev_step)\">Назад</button>\n                        \n                    </div> \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"open_change_dialog\">\n    <changecurrentdialog (close_dialog)=\"handlerCloseChangeCurrentDialog($event)\" (selected_dialog)=\"handlerSelectDialog($event)\"></changecurrentdialog>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/player_dialog_pupil/player_dialog_pupil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDialogPupilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerDialogPupilComponent = (function () {
    function PlayerDialogPupilComponent(statusService, dialogsService, webSocketService, ref) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.ref = ref;
        this.stopdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeactivedialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.show_master_text = false;
        this.loading = false;
        var self = this;
    }
    PlayerDialogPupilComponent.prototype.ngOnInit = function () {
        var self = this;
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "CHANGE_DIALOG") {
                self.loading = true;
                console.log("!!!!!!");
                self.dialogsService.getActiveDialog(message.activedialodid).subscribe(function (activedialog) {
                    console.log('pupil activedialog', activedialog);
                    self.loading = false;
                    self.changeactivedialog.emit(activedialog);
                    self.activedialog = activedialog;
                    self.current_step_id = self.activedialog.dialog.scenario.steps[0].id;
                    self._setStartStepPersonage(self.current_step_id);
                    self.current_step = self.activedialog.dialog.scenario.steps[0][self.currentPersonage];
                    self._detectChanges();
                });
                self._detectChanges();
            }
            if (message.command == "SET_STEP") {
                if (message.STEP_ID > 0) {
                    self.current_step_id = message.STEP_ID;
                    self._setStartStepPersonage(self.current_step_id);
                    self.current_step = self._getNextStep(message.STEP_ID);
                }
                self._detectChanges();
            }
            if (message.command == "CHANGE_PERSONAGE") {
                if (self.currentPersonage == 'pupil') {
                    self.currentPersonage = 'master';
                }
                else {
                    self.currentPersonage = 'pupil';
                }
                if (self.current_mode == 1) {
                    self.current_mode = 2;
                }
                else {
                    self.current_mode = 1;
                }
                self.current_step = self._getNextStep(self.current_step_id);
                self._detectChanges();
            }
        });
    };
    PlayerDialogPupilComponent.prototype.ngAfterViewInit = function () {
    };
    PlayerDialogPupilComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        //this.webSocketService.message.unsubscribe();
    };
    PlayerDialogPupilComponent.prototype._setStartStepPersonage = function (next_step_id) {
        var step = this._getStep(next_step_id);
        if (step.start_personage == 'pupil') {
            this.current_mode = 2;
            this.currentPersonage = 'pupil';
        }
        else if (step.start_personage == 'master') {
            this.current_mode = 1;
            this.currentPersonage = 'master';
        }
    };
    PlayerDialogPupilComponent.prototype.ngOnChanges = function (changes) {
        if (changes.activedialog && !changes.activedialog.previousValue) {
            this.current_step_id = this.activedialog.dialog.scenario.steps[0].id;
            this._setStartStepPersonage(this.current_step_id);
            this.current_step = this.activedialog.dialog.scenario.steps[0][this.currentPersonage];
            this._detectChanges();
        }
    };
    PlayerDialogPupilComponent.prototype._detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this.ref !== null &&
                _this.ref !== undefined &&
                !_this.ref.destroyed) {
                _this.ref.detectChanges();
            }
        }, 250);
    };
    PlayerDialogPupilComponent.prototype._getNextStep = function (next_step_id) {
        if (next_step_id) {
            var step = this._getStep(next_step_id);
            if (step) {
                return step[this.currentPersonage];
            }
        }
    };
    PlayerDialogPupilComponent.prototype._getStep = function (step_id) {
        for (var i = 0; i < this.activedialog.dialog.scenario.steps.length; i++) {
            if (this.activedialog.dialog.scenario.steps[i].id == step_id) {
                return this.activedialog.dialog.scenario.steps[i];
            }
        }
    };
    PlayerDialogPupilComponent.prototype._shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    PlayerDialogPupilComponent.prototype.getWords = function (item) {
        item.words = item.phrase.split(' ');
        this._shuffle(item.words);
        this._shuffle(item.words);
    };
    PlayerDialogPupilComponent.prototype.clearWords = function (item) {
        item.words = [];
    };
    PlayerDialogPupilComponent.prototype.getHints = function (item) {
        item.hints = item.phrase;
    };
    PlayerDialogPupilComponent.prototype.clearHints = function (item) {
        item.hints = null;
    };
    return PlayerDialogPupilComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlayerDialogPupilComponent.prototype, "activedialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PlayerDialogPupilComponent.prototype, "stopdialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PlayerDialogPupilComponent.prototype, "changeactivedialog", void 0);
PlayerDialogPupilComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'playerdialogpupil',
        template: __webpack_require__("../../../../../src/app/components/player_dialog_pupil/player_dialog_pupil.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], PlayerDialogPupilComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=player_dialog_pupil.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/player_dialog_pupil/player_dialog_pupil.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div style=\"margin: 20px;\">\n            <div *ngIf=\"activedialog && activedialog.dialog && activedialog.dialog.scenario\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    Текущий шаг: {{current_step.number}} / {{activedialog.dialog.scenario.steps.length}}\n                </div>\n                <div *ngIf=\"current_mode == 2\" class=\"panel-body\" style=\"min-height: 200px;\">\n                    <h3 style=\"text-align: center;\">Ваш ход</h3>\n                    \n                    <span>Вам нужно сказать:</span> \n                    <div *ngFor=\"let item of current_step.variants\">\n                        <h4 class=\"text-success\">{{item.task}}</h4>\n\n                    \n                        <div style=\"margin-top:40px\">\n                            <button *ngIf=\"!item.words || (item.words && item.words.length == 0)\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"getWords(item)\">Посмотреть слова</button>\n                             <button *ngIf=\"item.words && item.words.length > 0\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"clearWords(item)\">Скрыть слова</button>\n                            <button *ngIf=\"!item.hints\"  class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"getHints(item)\">Посмотреть подсказку</button>\n                            <button *ngIf=\"item.hints\" class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"clearHints(item)\">Убрать подсказку</button>\n                        </div>\n\n                        <div *ngIf=\"item.words && item.words.length > 0\" style=\"margin-top:20px;display: flex;justify-content: center;flex-wrap: wrap;\">\n                            <span *ngFor=\"let item of item.words\" class=\"label label-success\" style=\"margin: 10px;padding: 10px;font-size: 16px;\">{{item}}</span>\n                        </div>\n                        <div *ngIf=\"item.hints\" style=\"margin-top:20px;\">\n                            <p class=\"alert alert-success\" style=\"margin: 5px 0;\">\n                                {{item.hints}}\n                            </p>\n                        </div>\n                    </div> \n                </div>\n                \n                <!-- ход ведущего -->\n                <div *ngIf=\"current_mode == 1\" class=\"panel-body\" style=\"min-height: 200px;\">\n                    <h3 style=\"text-align: center;\">Ожидаем ход ведущего</h3>\n                    <button class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"show_master_text=!show_master_text\">Посмотреть слова</button>\n                    <div *ngIf=\"show_master_text\">\n                        <span>Ему нужно сказать:</span> \n                        <div *ngFor=\"let item of current_step.variants\">\n                            <p class=\"text-success\">{{item.task}}</p>\n                            <p class=\"\" style=\"margin: 5px 0;\">{{item.phrase}}</p>\n                        </div> \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/view_block_calling/callingfroms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallingFromsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthenticationService } from '../../../services/authentication.service';
//declare var jQuery:any;

var CallingFromsComponent = (function () {
    function CallingFromsComponent() {
        this.listin = [];
        this.listout = [];
        this.rejectfrom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.takecall = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
        var self = this;
    }
    CallingFromsComponent.prototype.ngOnInit = function () {
        this._checkInterval();
    };
    CallingFromsComponent.prototype.ngAfterViewInit = function () {
        this.loading = false;
    };
    CallingFromsComponent.prototype.ngOnChanges = function (changes) {
        //console.log('changes', changes)
        if (this.loading) {
            this.loading = false;
        }
        this._checkInterval();
    };
    CallingFromsComponent.prototype.ngOnDestroy = function () {
    };
    CallingFromsComponent.prototype.rejectCall = function (item) {
        this.loading = true;
        this.rejectfrom.emit(item);
    };
    CallingFromsComponent.prototype.takeCall = function (item) {
        this.loading = true;
        this.takecall.emit(item.key_id);
    };
    CallingFromsComponent.prototype._checkInterval = function () {
        //console.log('_checkInterval')
        var self = this;
        for (var i = 0; i < self.listin.length; i++) {
            if (new Date(self.listin[i].lasttime).getTime() + __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].CALLING_TIME_INTERVAL < new Date().getTime()) {
                self.listin.splice(i, 1);
            }
        }
        if (this.listin.length > 0) {
            setTimeout(function () {
                self._checkInterval();
            }, 1000);
        }
    };
    return CallingFromsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CallingFromsComponent.prototype, "listin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CallingFromsComponent.prototype, "listout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CallingFromsComponent.prototype, "rejectfrom", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CallingFromsComponent.prototype, "takecall", void 0);
CallingFromsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'callingfroms',
        template: __webpack_require__("../../../../../src/app/components/view_block_calling/callingfroms.template.html")
    }),
    __metadata("design:paramtypes", [])
], CallingFromsComponent);

//# sourceMappingURL=callingfroms.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view_block_calling/callingfroms.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\" *ngFor=\"let item of listin\">\n    <div style=\"border: 1px solid;padding: 30px;margin:10px;\">\n        <p>Звонок от {{item.fio}}</p>\n        <p>{{item.lasttime | date:\"hh:mm dd-mm-yyyy\"}}</p>\n        <button class=\"btn btn-success\" (click)=\"takeCall(item)\" [disabled]=\"loading\"><span>Принять звонок</span></button>\n        <button class=\"btn btn-default\" (click)=\"rejectCall(item)\" [disabled]=\"loading\"><span>Сбросить</span></button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/services/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogsService = (function () {
    //updates: Subject<any> = new Subject<any>();
    function DialogsService(_http, router) {
        this._http = _http;
        this.router = router;
    }
    DialogsService.prototype.getDialog = function (dialog_id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_DIALOGS + dialog_id + '/')
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_DIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getActiveDialog = function (activedialog_id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_ACTIVEDIALOGS + activedialog_id + '/')
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getActiveDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_ACTIVEDIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getMyActiveDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_MYACTIVEDIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.runDialog = function (dialog_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_DIALOG_RUN + dialog_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.stopDialog = function () {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_DIALOG_STOP, {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.runIntoDialog = function (dialog_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_DIALOG_RUNINTO + dialog_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.stopActiveDialog = function (dialog_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].URL_DIALOG_ACTIVESTOP + dialog_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.handleError = function (error) {
        console.error(error);
        if (error.status == 403) {
            console.log("XXXX");
            this.router.navigate(['/accounts/login/']);
        }
        if (error.status == 404) {
            this.router.navigate(['/dialogs/']);
        }
        //error.json().error || 
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw('Server error');
    };
    return DialogsService;
}());
DialogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DialogsService);

var _a, _b;
//# sourceMappingURL=dialogs.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorService = (function () {
    function ErrorService() {
        this.errors = {};
        this.errors_update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.messages = [];
        this.messages_update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return ErrorService;
}());
ErrorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ErrorService);

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/guards.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, statusService) {
        this.router = router;
        this.statusService = statusService;
    }
    AuthGuard.prototype.canActivate = function () {
        return true;
        /*
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
        */
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__status_service__["a" /* StatusService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=guards.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatusService = (function () {
    function StatusService(_http, webSocketService, router) {
        this._http = _http;
        this.webSocketService = webSocketService;
        this.router = router;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calling = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mode = 'mode_list';
    }
    StatusService.prototype.init = function () {
        var self = this;
        this.getStatus().subscribe(function (data) {
            self.user = data.user;
            if (data.status) {
                if (data.activedialog) {
                    self.activedialog = data.activedialog;
                }
            }
            self.webSocketService.init(self.user.key_id, function () {
                self.ready.emit(new Date());
                self.runHearbeat();
                self.runCheckLogin();
            });
        });
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == 'CALLING') {
                if (message.target == 'TAKEPHONE') {
                    self.calling.emit(message);
                }
            }
        });
    };
    StatusService.prototype.getStatus = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].URL_STATUS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    StatusService.prototype.runHearbeat = function () {
        var self = this;
        if (this.webSocketService.ws.socket.readyState == 1) {
            self.webSocketService.sendCommand({
                type: "HEARBEAT",
            });
            if (self.runhearbeatid) {
                clearTimeout(self.runhearbeatid);
            }
            self.runhearbeatid = setTimeout(function () {
                self.runHearbeat();
            }, 20000);
        }
    };
    StatusService.prototype.runCheckLogin = function () {
        var self = this;
        this._http.get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].URL_CHECK_USER)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError)
            .subscribe(function (result) {
            console.log("runCheckLogin", result);
            if (self.runcheckloginid) {
                clearTimeout(self.runcheckloginid);
            }
            self.runcheckloginid = setTimeout(function () {
                self.runCheckLogin();
            }, 1200000);
        });
    };
    StatusService.prototype.changeAcceptCall = function (status) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].URL_CHANGE_ACCEPT_CALL, { accept_call: status })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    StatusService.prototype.sendMessage = function (data) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].URL_MESSAGE, data)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    StatusService.prototype.saveUser = function (params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].URL_USER_SETTING, params)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    StatusService.prototype.handleError = function (error) {
        console.error(error);
        //error.json().error || 
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw('Server error');
    };
    return StatusService;
}());
StatusService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__websocket_service__["a" /* WebSocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], StatusService);

var _a, _b, _c;
//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket__ = __webpack_require__("../../../../angular2-websocket/angular2-websocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var webSocketConfig = {
    reconnectIfNotNormalClose: true,
    initialTimeout: 5000,
    maxTimeout: 10000
};
var WebSocketService = (function () {
    function WebSocketService(errorService) {
        this.errorService = errorService;
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.message = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WebSocketService.prototype.init = function (user_key, callback) {
        var self = this;
        this.ws = new __WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket__["$WebSocket"](__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].URL_WEBSOKET + '?id=' + user_key, null, webSocketConfig);
        this.ws.onOpen(function (data) {
            self.open.emit(new Date());
            if (callback) {
                callback();
            }
        });
        this.ws.onMessage(function (msg) {
            //console.log("onMessage", msg)
            if (msg.type == 'message') {
                self.message.emit(msg.data);
            }
        });
        this.ws.onError(function (msg) {
            self.errorService.errors;
            var error = {
                code: 1000,
                message: 'Ошибка доступа к серверу',
            };
            self.errorService.errors[error.code] = error;
            self.errorService.errors_update.emit(new Date());
        });
    };
    WebSocketService.prototype.sendCommand = function (command) {
        this.ws.send(command).subscribe(function (msg) {
            //console.log("msg", msg);
        }, function (error) {
            //console.log("error", error);
        }, function () {
            //console.log("complete");
        });
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorService */]) === "function" && _a || Object])
], WebSocketService);

var _a;
//# sourceMappingURL=websocket.service.js.map

/***/ }),

/***/ "../../../../../src/app/views/activedialogsview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveDialogsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//declare var moment:any;
//declare var $:any;
var ActiveDialogsViewComponent = (function () {
    function ActiveDialogsViewComponent(statusService, dialogsService, webSocketService, router) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.router = router;
        this.activedialogs = [];
        this.activedialog = null;
        this.activedialog_id = null;
        this.loading = true;
        this.reject_call_from = null;
        this._CALLING_TIME_INTERVAL = 3000;
    }
    ActiveDialogsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = _this.statusService.user;
            //console.log('self.user', self.user)
            if (!self.user) {
                return;
            }
        });
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            //console.log('message', message)
            if (message.command == "UPDATE") {
                if (message.target == "activedialogs") {
                    self._updateActiveDialogs();
                }
            }
        });
        self.webSocketService.error.subscribe(function (err) {
            console.log("Error", err);
        });
        if (self.loading) {
            self._updateActiveDialogs();
        }
    };
    ActiveDialogsViewComponent.prototype.ngOnDestroy = function () {
    };
    ActiveDialogsViewComponent.prototype.showActiveDialogs = function () {
        this._updateActiveDialogs();
    };
    ActiveDialogsViewComponent.prototype._updateActiveDialogs = function () {
        var _this = this;
        this.loading = true;
        this.dialogsService.getActiveDialogs().subscribe(function (data) {
            _this.activedialogs = data;
            _this.loading = false;
        });
    };
    ActiveDialogsViewComponent.prototype.callDialog = function (activedialog) {
        this.router.navigate(['/calling/' + activedialog.id]);
    };
    return ActiveDialogsViewComponent;
}());
ActiveDialogsViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'activedialogsview',
        template: __webpack_require__("../../../../../src/app/views/activedialogsview.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ActiveDialogsViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=activedialogsview.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/activedialogsview.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4>Выберите диалог\n                    <button class=\"btn btn-default pull-right\" style=\"margin-top: -10px;\" (click)=\"showActiveDialogs()\">\n                        <i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size: 20px;\"></i>\n                    </button>\n                </h4>\n            </div>\n            <div class=\"panel-body\" style=\"position: relative;\">\n                <!-- Loading -->\n                <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                    <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                    </div>\n                    <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                        <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                    </div>\n                </div>\n                <!-- END Loading -->\n\n\n                <div class=\"row\" style=\"margin: 20px 0;\"> \n                    <div *ngIf=\"activedialogs.length == 0\">\n                        <h4 style=\"text-align: center;\">Пока еще нет ни одного диалога в режиме ожидания ученика</h4>\n                    </div>\n                    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of activedialogs\"> \n                        <div class=\"thumbnail\">\n                            <div class=\"\" style=\"width: 100%;position: relative;\"> \n                                <img *ngIf=\"!item.dialog.background_image\" alt=\"100%x200\" data-src=\"holder.js/100%x200\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVlOTZiYzA5NjUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWU5NmJjMDk2NSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS40Ij4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+\" data-holder-rendered=\"true\" style=\"height: 60px; width: 90px; display: block;float: left;\"> \n                                <div *ngIf=\"item.dialog.background_image\" \n                                    [ngStyle]=\"{'background-image': 'url(' + item.dialog.background_image + ')'}\"\n                                    style=\"\n                                        height: 60px; \n                                        width: 90px; \n                                        background-size: cover;\n                                        display: block;\n                                        float: left;\"></div>\n                                <div style=\"position: absolute; right: 0;top:0;display: flex;align-items: center;\">\n                                    <p class=\"badge\" style=\"margin: 5px;\">{{item.dialog.level_display}}</p>\n                                </div>\n\n                                <div style=\"text-align: right;padding-top: 25px;\">\n                                    <p class=\"badge badge-info\" style=\"margin:5px;background-color: darkcyan;\" *ngFor=\"let item of item.dialog.tags\">{{item.name}}</p>\n                                </div>\n                            </div>\n                            <div class=\"caption\"> \n                                <h3>{{item.dialog?.name}}</h3> \n                                <div>\n                                    <p style=\"font-size: 9px;margin:0;\">кол-во шагов: {{item.dialog.scenario.steps.length || 0}}</p>\n                                    <p style=\"font-size: 12px;\">{{item.dialog.description}}</p> \n                                </div>\n                                <div class=\"well\" style=\"padding:10px 0;\">\n                                    <div style=\"display: flex;flex-wrap: wrap;justify-content: flex-end;\">\n                                        <div>\n                                            <p style=\"text-align: right;\">{{item.master?.fio}}</p>\n                                            <p style=\"text-align: right;font-size: 12px;\">запущено: {{item.created_at| date:\"hh:mm dd-MM-yyyy\"}}</p>\n                                        </div>\n                                        <div style=\"padding:0 10px;\">\n                                            <div *ngIf=\"item.master.avatar\" \n                                                [ngStyle]=\"{'background-image': 'url(' + item.master.avatar + ')'}\"\n                                                style=\"\n                                                    height: 60px; \n                                                    width: 90px; \n                                                    background-size: cover;\n                                                    display: block;\n                                                    float: left;\">\n                                            </div>\n                                            <div *ngIf=\"!item.master.avatar\" \n                                                style=\"\n                                                    height: 50px; \n                                                    width: 50px; \n                                                    background-size: cover;\n                                                    display: block;\n                                                    float: left;\">\n                                                    <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\" style=\"font-size: 50px;\"></i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div style=\"text-align: right;\">\n                                        <div class=\"badge\" style=\"background-color: indianred;\">{{item.master.level_display}}</div>\n                                    </div>\n                                </div>\n                               \n                                <p>\n                                    <button class=\"btn btn-primary\" (click)=\"callDialog(item)\">\n                                        Позвонить\n                                    </button> \n                                </p> \n                            </div> \n                        </div> \n                    </div> \n                </div>\n\n\n            </div>\n        </div>\n        \n\n        <!--\n        <div *ngIf=\"mode == 'mode_calling'\">\n            <modecalling [callingdialog]=\"callingdialog\" (stopcalling)=\"handlerStopCalling($event)\"></modecalling>\n        </div>\n\n\n        \n        <div *ngIf=\"mode == 'mode_dialog_master'\">\n            <modedialogmaster [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogmaster>\n        </div>\n            \n\n        <div *ngIf=\"mode == 'mode_dialog_pupil'\">\n            <modedialogpupil [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogpupil>\n        </div>\n    -->\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppviewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogsview_component__ = __webpack_require__("../../../../../src/app/views/dialogsview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activedialogsview_component__ = __webpack_require__("../../../../../src/app/views/activedialogsview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_view_block_calling_callingfroms_component__ = __webpack_require__("../../../../../src/app/components/view_block_calling/callingfroms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mode_dialog_pupil_mode_dialog_pupil_component__ = __webpack_require__("../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_mode_dialog_master_mode_dialog_master_component__ = __webpack_require__("../../../../../src/app/components/mode_dialog_master/mode_dialog_master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogview_component__ = __webpack_require__("../../../../../src/app/views/dialogview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_player_dialog_master_player_dialog_master_component__ = __webpack_require__("../../../../../src/app/components/player_dialog_master/player_dialog_master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_player_dialog_pupil_player_dialog_pupil_component__ = __webpack_require__("../../../../../src/app/components/player_dialog_pupil/player_dialog_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_mode_wait_pupil_view_mode_wait_pupil_component__ = __webpack_require__("../../../../../src/app/views/view_mode_wait_pupil/view_mode_wait_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_mode_calling_view_mode_calling_component__ = __webpack_require__("../../../../../src/app/views/view_mode_calling/view_mode_calling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_change_current_dialog_change_current_dialog_component__ = __webpack_require__("../../../../../src/app/components/change_current_dialog/change_current_dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_message_view_message_component__ = __webpack_require__("../../../../../src/app/views/view_message/view_message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/views/view_profile/view_profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__view_profile_equal_validator_directive__ = __webpack_require__("../../../../../src/app/views/view_profile/equal_validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppviewsModule = (function () {
    function AppviewsModule() {
    }
    return AppviewsModule;
}());
AppviewsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dialogsview_component__["a" /* DialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__activedialogsview_component__["a" /* ActiveDialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_view_block_calling_callingfroms_component__["a" /* CallingFromsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_mode_dialog_pupil_mode_dialog_pupil_component__["a" /* ModeDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_mode_dialog_master_mode_dialog_master_component__["a" /* ModeDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dialogview_component__["a" /* DialogViewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_player_dialog_master_player_dialog_master_component__["a" /* PlayerDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_player_dialog_pupil_player_dialog_pupil_component__["a" /* PlayerDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_12__view_mode_wait_pupil_view_mode_wait_pupil_component__["a" /* ModeWaitPupilViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__view_mode_calling_view_mode_calling_component__["a" /* ModeCallingViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_change_current_dialog_change_current_dialog_component__["a" /* ChangeCurrentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__view_message_view_message_component__["a" /* MessageViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__view_profile_view_profile_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__view_profile_equal_validator_directive__["a" /* EqualValidator */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__dialogsview_component__["a" /* DialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__activedialogsview_component__["a" /* ActiveDialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_view_block_calling_callingfroms_component__["a" /* CallingFromsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_mode_dialog_pupil_mode_dialog_pupil_component__["a" /* ModeDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_mode_dialog_master_mode_dialog_master_component__["a" /* ModeDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dialogview_component__["a" /* DialogViewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_player_dialog_master_player_dialog_master_component__["a" /* PlayerDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_player_dialog_pupil_player_dialog_pupil_component__["a" /* PlayerDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_12__view_mode_wait_pupil_view_mode_wait_pupil_component__["a" /* ModeWaitPupilViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__view_mode_calling_view_mode_calling_component__["a" /* ModeCallingViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_change_current_dialog_change_current_dialog_component__["a" /* ChangeCurrentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__view_message_view_message_component__["a" /* MessageViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__view_profile_view_profile_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__view_profile_equal_validator_directive__["a" /* EqualValidator */],
        ],
    })
], AppviewsModule);

//# sourceMappingURL=appviews.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/dialogsview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//declare var moment:any;
//declare var $:any;
var DialogsViewComponent = (function () {
    function DialogsViewComponent(statusService, dialogsService, webSocketService, router, ref) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.router = router;
        this.ref = ref;
        this.mode = 'mode_list'; // 1 - all dialogs 'wait_pupil' - activedialogs 3 - calling
        this.activedialog = null;
        this.activedialog_id = null;
        this.loading = true;
        this.reject_call_from = null;
        this._CALLING_TIME_INTERVAL = 3000;
    }
    DialogsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = _this.statusService.user;
            //console.log('self.user', self.user)
            if (!self.user) {
                return;
            }
            self.mode = _this.statusService.mode;
            self.activedialog = self.statusService.activedialog;
            if (!_this.activedialog) {
                _this._updateDialogs();
            }
        });
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            //console.log("1!!!!message", message)
            //if (message.command == "UPDATE") {
            //    if (message.target == "activedialogs") {
            //        self._updateActiveDialogs();
            //    }
            //}
            //if (message.command == "START_DIALOG_MASTER") {
            //    self.activedialog_id = message.dialog;
            //    self.mode = AppSettings.MODE_DIALOG_MASTER
            //}
            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL") {
                console.log("EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL");
                self.mode = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].MODE_LIST;
                self.statusService.init();
            }
            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_MASTER") {
                console.log("EXIT_FROM_ACTIVE_DIALOG_BY_MASTER");
                self.mode = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].MODE_LIST;
                self.statusService.init();
            }
        });
        self.webSocketService.error.subscribe(function (err) {
            console.log("Error", err);
        });
        this.dialogsService.getDialogs().subscribe(function (data) {
            _this.dialogs = data;
            _this.loading = false;
        });
        //if (self.loading) {
        //    self._updateDialogs();
        //}
    };
    DialogsViewComponent.prototype.ngOnDestroy = function () {
    };
    DialogsViewComponent.prototype._updateDialogs = function () {
        //this.loading = true;
    };
    DialogsViewComponent.prototype.turnActiveDialog = function (dialog) {
        var self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe(function (data) {
            self.loading = false;
            if (data.status) {
                for (var i = 0; i < self.dialogs.length; i++) {
                    if (self.dialogs[i].id == dialog.id) {
                        self.dialogs[i] = data.dialog;
                    }
                }
                self.ref.detectChanges();
                //    self.router.navigate(['/wait']);
                //    self.mode = AppSettings.MODE_WAIT_PUPIL;
                //    self.activedialog = data.activedialog;
            }
        });
    };
    /*

    public runDialog(dialog) {
        let self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe((data) => {
            //console.log(data)
            self.loading = false;
            if (data.status) {
                self.router.navigate(['/wait']);
            //    self.mode = AppSettings.MODE_WAIT_PUPIL;
            //    self.activedialog = data.activedialog;
            }
        });
    }

    
    
    public callDialog(dialog) {
        let self = this;
        self.callingdialog = dialog;
        self.mode = AppSettings.MODE_CALLING;
        self._callingDialog(dialog.id);
    }

    

    private _callingDialog(activedialog_id) {
        let self = this;
        if (self.mode == AppSettings.MODE_CALLING) {
            self.calling_time = new Date();

            self.webSocketService.sendCommand({
                command: 'CALLING',
                target: activedialog_id,
                source: self.user.key_id
            })

            setTimeout(function() {
                self._callingDialog(activedialog_id);
            }, AppSettings.CALLING_TIME_INTERVAL);
        }
        
    }
    */
    DialogsViewComponent.prototype.handlerStopCalling = function ($event) {
        this.callingdialog = null;
        this.mode = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].MODE_LIST;
        //this._updateActiveDialogs();
    };
    //public handelerStopWaitDialog(data) {
    //    if (data.status) {
    //        this.mode = AppSettings.MODE_LIST;
    //this.showDialogs();
    //    }
    //}
    DialogsViewComponent.prototype.handlerAcceptCall = function (user_key_id) {
        var self = this;
        self.webSocketService.sendCommand({
            command: 'START_DIALOG',
            target: self.activedialog.id,
            master: self.user.key_id,
            pupil: user_key_id
        });
    };
    return DialogsViewComponent;
}());
DialogsViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialogsview',
        template: __webpack_require__("../../../../../src/app/views/dialogsview.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object])
], DialogsViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dialogsview.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dialogsview.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4>Выберите диалог</h4>\n            </div>\n            <div class=\"panel-body\" style=\"position: relative;\">\n                <!-- Loading -->\n                <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                    <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                    </div>\n                    <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                        <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                    </div>\n                </div>\n                <!-- END Loading -->\n\n                <div class=\"row\" style=\"margin: 20px 0;\"> \n                    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of dialogs\"> \n                        <div class=\"thumbnail\"> \n                            <div class=\"\" style=\"width: 100%;position: relative;\">\n                                <img *ngIf=\"!item.background_image\" alt=\"100%x200\" data-src=\"holder.js/100%x200\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVlOTZiYzA5NjUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWU5NmJjMDk2NSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS40Ij4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+\" data-holder-rendered=\"true\" style=\"height: 50px; width: 50px; display: block;float: left;\"> \n                                <div *ngIf=\"item.background_image\" \n                                    [ngStyle]=\"{'background-image': 'url(' + item.background_image + ')'}\"\n                                    style=\"\n                                        height: 60px; \n                                        width: 90px; \n                                        background-size: cover;\n                                        display: block;\n                                        float: left;\"></div>\n\n                                <div style=\"position: absolute; right: 0;top:0;display: flex;align-items: center;\">\n                                    \n                                    <p  class=\"badge\" [ngClass]=\"{\n                                        'bg-color-begin': item.level == 10,\n                                        'bg-color-preintermediate': item.level == 20,\n                                        'bg-color-intermediate': item.level == 30\n                                    }\" style=\"margin: 5px;\">{{item.level_display}}</p>\n\n\n                                    <div style=\"width: 40px;height: 40px;border: 2px solid darkcyan;border-radius: 4px;cursor: pointer;\" (click)=\"turnActiveDialog(item)\">\n                                        <div *ngIf=\"item.checked\" style=\"width: 28px;height: 28px;background-color: darkcyan;border-radius: 4px;margin:4px;\"></div>\n                                    </div>\n                                </div>\n                                <div style=\"text-align: right;padding-top: 40px;\">\n                                    <p class=\"badge badge-info\" style=\"margin:5px;background-color: darkcyan;\" *ngFor=\"let item of item.tags\">{{item.name}}</p>\n                                </div>\n                            </div>\n                            <div class=\"caption\" style=\"clear:both;\"> \n                                <h3>{{item.name}}</h3> \n                                <p>{{item.description}}</p> \n                                <p><!--\n                                    <button class=\"btn btn-primary\" (click)=\"runDialog(item)\">\n                                        Запустить диалог и ждать собеседника\n                                    </button> \n                                -->\n                                    <button class=\"btn btn-success btn-xs\" [routerLink]=\"['/dialog', item.id]\">\n                                        Просмотреть\n                                    </button> \n                                </p> \n                            </div> \n                        </div> \n                    </div> \n                </div>\n\n            </div>\n        </div>\n        <!--\n        <div *ngIf=\"mode == 'mode_wait_pupil'\">\n            <modewaitpupil [user]=\"user\" [activedialog]=\"activedialog\" (stopwaitingdialog)=\"handelerStopWaitDialog($event)\" (acceptcall)=\"handlerAcceptCall($event)\"></modewaitpupil>\n        </div>\n        \n\n\n        <div *ngIf=\"mode == 'mode_calling'\">\n            <modecalling [callingdialog]=\"callingdialog\" (stopcalling)=\"handlerStopCalling($event)\"></modecalling>\n        </div>\n        \n        \n        <div *ngIf=\"mode == 'mode_dialog_master'\">\n            <modedialogmaster [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogmaster>\n        </div>\n\n        <div *ngIf=\"mode == 'mode_dialog_pupil'\">\n            <modedialogpupil [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogpupil>\n        </div>\n        -->\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/dialogview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//declare var moment:any;
//declare var $:any;
var DialogViewComponent = (function () {
    function DialogViewComponent(statusService, dialogsService, webSocketService, router, activatedRoute) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.personages = [];
    }
    DialogViewComponent.prototype.ngOnInit = function () {
        this._getDialog();
    };
    DialogViewComponent.prototype.ngOnDestroy = function () {
    };
    DialogViewComponent.prototype.onChangePersonage = function () {
        this.nextStep(this.current_step_id);
    };
    DialogViewComponent.prototype._getDialog = function () {
        var _this = this;
        var self = this;
        this.activatedRoute.params
            .pluck('dialog_id')
            .switchMap(function (dialog_id) { return _this.dialogsService.getDialog(dialog_id); })
            .subscribe(function (dialog) {
            self.dialog = dialog;
            if (_this.dialog.scenario && _this.dialog.scenario.personages) {
                self.personages = _this.dialog.scenario.personages;
                self.selectedPersonage = self.dialog.scenario.steps[0].start_personage;
                self.nextStep();
            }
        });
    };
    DialogViewComponent.prototype._shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    DialogViewComponent.prototype.getTask = function () {
        var tasks = [];
        if (this.current_step.variants) {
            for (var i = 0; i < this.current_step.variants.length; i++) {
                tasks.push(this.current_step.variants[i]);
            }
        }
        return tasks;
    };
    DialogViewComponent.prototype.getWords = function (item) {
        item.words = item.phrase.split(' ');
        this._shuffle(item.words);
        this._shuffle(item.words);
    };
    DialogViewComponent.prototype.clearWords = function (item) {
        item.words = [];
    };
    DialogViewComponent.prototype.getHints = function (item) {
        item.hints = item.phrase;
    };
    DialogViewComponent.prototype.clearHints = function (item) {
        item.hints = null;
    };
    DialogViewComponent.prototype.nextStep = function (next_step_id) {
        if (next_step_id) {
            for (var i = 0; i < this.dialog.scenario.steps.length; i++) {
                if (this.dialog.scenario.steps[i].id == next_step_id) {
                    this.current_step = this.dialog.scenario.steps[i][this.selectedPersonage];
                    this.current_step_id = this.dialog.scenario.steps[i].id;
                    return;
                }
            }
        }
        this.current_step = this.dialog.scenario.steps[0][this.selectedPersonage];
        this.current_step_id = this.dialog.scenario.steps[0].id;
    };
    return DialogViewComponent;
}());
DialogViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialogview',
        template: __webpack_require__("../../../../../src/app/views/dialogview.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], DialogViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dialogview.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dialogview.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n             <div class=\"panel-heading\">\n                <div class=\"container\">\n                    <div class=\"col-md-6\" style=\"display: flex;\">\n                        <div style=\"line-height: 2;\">Выбор персонажа</div>\n                        <select class=\"form-control\" [(ngModel)]=\"selectedPersonage\" style=\"margin-left: 20px;width: 150px;\" (ngModelChange)=\"onChangePersonage()\">\n                            <option *ngFor=\"let pesonage of personages\" [value]=\"pesonage.role\">{{pesonage.name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-6\" style=\"text-align: right;\">\n                        <p style=\"margin: 0 40px;\">{{dialog?.name}}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body\">\n                <div *ngIf=\"dialog && dialog.scenario\" class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        Текущий шаг: {{current_step.number}} / {{dialog.scenario.steps.length}}\n                    </div>\n                    <div class=\"panel-body\" style=\"min-height: 200px;\">\n                        <div class=\"col-md-8\">\n                            <span *ngIf=\"getTask().length > 0\">Вам нужно сказать:</span> \n                            <div *ngFor=\"let item of getTask()\">\n                                <h4 class=\"text-success\">{{item.task}}</h4>\n\n                                <button *ngIf=\"item.prev_step > 0\" class=\"btn btn-info\" type=\"button\" (click)=\"nextStep(item.prev_step)\">Назад</button>\n                                <button *ngIf=\"item.next_step > 0\" class=\"btn btn-success\" type=\"button\" (click)=\"nextStep(item.next_step)\">Следуюйщий шаг</button>\n                            \n                                <div style=\"margin-top:40px\">\n                                    <button *ngIf=\"!item.words || (item.words && item.words.length == 0)\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"getWords(item)\">Посмотреть слова</button>\n                                     <button *ngIf=\"item.words && item.words.length > 0\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"clearWords(item)\">Скрыть слова</button>\n                                    <button *ngIf=\"!item.hints\"  class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"getHints(item)\">Посмотреть подсказку</button>\n                                    <button *ngIf=\"item.hints\" class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"clearHints(item)\">Убрать подсказку</button>\n                                </div>\n\n                                <div *ngIf=\"item.words && item.words.length > 0\" style=\"margin-top:20px;display: flex;justify-content: center;flex-wrap: wrap;\">\n                                    <span *ngFor=\"let item of item.words\" class=\"label label-success\" style=\"margin: 10px;padding: 10px;font-size: 16px;\">{{item}}</span>\n                                </div>\n                                <div *ngIf=\"item.hints\" style=\"margin-top:20px;\">\n                                    <p class=\"alert alert-success\" style=\"margin: 5px 0;\">\n                                        {{item.hints}}\n                                    </p>\n                                    \n                                </div>\n                            </div> \n                            <p *ngIf=\"getTask().length == 0\">Последний шаг диалога</p>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div *ngIf=\"dialog.background_image\" \n                                    [ngStyle]=\"{'background-image': 'url(' + dialog.background_image + ')'}\"\n                                    style=\"width: 100%;height: 200px;background-size: cover;\" class=\"img-thumbnail\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/view_message/view_message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageViewComponent = (function () {
    function MessageViewComponent(statusService, router) {
        this.statusService = statusService;
        this.router = router;
        this.name = "";
        this.email = "";
        this.message = "";
        this.loading = false;
    }
    MessageViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = self.statusService.user;
        });
        if (!self.user) {
            self.user = self.statusService.user;
            if (!self.user) {
                self.statusService.getStatus();
            }
        }
    };
    MessageViewComponent.prototype.ngAfterViewInit = function () {
    };
    MessageViewComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes', changes);
    };
    MessageViewComponent.prototype.ngOnDestroy = function () {
    };
    MessageViewComponent.prototype.send = function () {
        var _this = this;
        this.loading = true;
        var data = {
            message: this.message
        };
        if (this.name) {
            data['name'] = this.name;
        }
        if (this.email) {
            data['email'] = this.email;
        }
        this.statusService.sendMessage(data).subscribe(function (data) {
            _this.loading = false;
            _this.router.navigate(['activedialogs']);
        });
    };
    return MessageViewComponent;
}());
MessageViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'viewmessage',
        template: __webpack_require__("../../../../../src/app/views/view_message/view_message.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MessageViewComponent);

var _a, _b;
//# sourceMappingURL=view_message.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/view_message/view_message.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #loginForm=\"ngForm\" style=\"margin:40px;\">\n      <div *ngIf=\"!user\" class=\"form-group\">\n        <label for=\"exampleInputName\">Ваше имя</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputName\" name=\"name\" placeholder=\"\" [ngModel]=\"name\">\n      </div>\n       <div *ngIf=\"!user\" class=\"form-group\">\n        <label for=\"exampleInputEmail\">Ваше email</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"\" name=\"email\" [ngModel]=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputMessage\">Ваше сообщение *</label>\n        <textarea class=\"form-control\" id=\"exampleInputMessage\" name=\"message\" style=\"min-height: 200px;\" [ngModel]=\"message\" required=\"required\"></textarea>\n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid || loading\" (click)=\"send()\">Отправить сообщение</button>\n    </form>\n</div>\n\n<!-- Loading -->\n<div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n    <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n    </div>\n    <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n        <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n    </div>\n</div>\n<!-- END Loading -->"

/***/ }),

/***/ "../../../../../src/app/views/view_mode_calling/view_mode_calling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeCallingViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModeCallingViewComponent = (function () {
    function ModeCallingViewComponent(webSocketService, activatedRoute, dialogsService, statusService, router) {
        this.webSocketService = webSocketService;
        this.activatedRoute = activatedRoute;
        this.dialogsService = dialogsService;
        this.statusService = statusService;
        this.router = router;
        this.callingfroms = [];
        this.mode = 'calling'; //calling  mode_dialog_pupil
        this.audio_enable = true;
        this.loading = false;
        this.running_call = true;
    }
    ModeCallingViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.start_calling_time = new Date();
        self._createCallingAudio();
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            //console.log("Calling message", message)
            if (message.command == 'CALLING_MASTER_REJECT') {
                self.stopCallingDialog();
            }
            if (message.command == "START_DIALOG_PUPIL") {
                self.activedialogid = message.dialog;
                self.running_call = false;
                self.mode = 'mode_dialog_pupil';
            }
            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL") {
                self.stopCallingDialog();
            }
            if (message.command == "STOP_CALLING") {
                _this.running_call = false;
                if (message.reason == "DIALOG_STOP") {
                    _this.router.navigate(['/activedialogs']);
                }
                if (message.reason == "NOT FOUND") {
                    _this.router.navigate(['/activedialogs']);
                }
            }
        });
        self.statusService.ready.subscribe(function (date) {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
            if (!self.callingdialog) {
                self._getActiveDialog();
            }
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;
        }
        else {
            self.statusService.getStatus();
        }
        if (self.user) {
            //self._getActiveDialog();
            self._getActiveDialog();
        }
    };
    ModeCallingViewComponent.prototype.ngAfterViewInit = function () {
    };
    ModeCallingViewComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes', changes);
    };
    ModeCallingViewComponent.prototype.ngOnDestroy = function () {
        this.running_call = false;
        if (this.timeout_id) {
            clearTimeout(this.timeout_id);
        }
    };
    ModeCallingViewComponent.prototype._createCallingAudio = function () {
        this.audio = new Audio();
        this.audio.src = "/static/assets/music/calling.mp3";
        this.audio.load();
    };
    ModeCallingViewComponent.prototype._playCallingAudo = function () {
        if (this.audio_enable && this.running_call) {
            this.audio.play();
        }
    };
    ModeCallingViewComponent.prototype.stopCallingDialog = function () {
        this.running_call = false;
        this.router.navigate(['/activedialogs']);
    };
    /*
   private _startCalling() {
       let self = this;
       this.activatedRoute.params
               .pluck('id')
               .subscribe((id) => {
                   self._callingDialog(id)
               })
   }
   */
    ModeCallingViewComponent.prototype._getActiveDialog = function () {
        var _this = this;
        var self = this;
        this.activatedRoute.params
            .pluck('id')
            .switchMap(function (id) { return _this.dialogsService.getActiveDialog(id); })
            .subscribe(function (dialog) {
            self.callingdialog = dialog;
            self._callingDialog(self.callingdialog.id);
        });
    };
    ModeCallingViewComponent.prototype._callingDialog = function (activedialog_id) {
        console.log('_callingDialog');
        var self = this;
        if (self.running_call) {
            self.calling_time = new Date();
            self.webSocketService.sendCommand({
                command: 'CALLING',
                target: activedialog_id,
                source: self.user.key_id
            });
            if (self.timeout_id) {
                clearTimeout(self.timeout_id);
            }
            self._playCallingAudo();
            self.timeout_id = setTimeout(function () {
                self._callingDialog(activedialog_id);
            }, __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].CALLING_TIME_INTERVAL);
        }
    };
    ModeCallingViewComponent.prototype.handelerStopDialog = function (data) {
        var self = this;
        self.loading = true;
        var command = {
            command: 'EXIT_FROM_ACTIVE_DIALOG_BY_PUPIL',
            target: data.activedialogid,
        };
        self.webSocketService.sendCommand(command);
        // this._updateActiveDialogs();
    };
    return ModeCallingViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModeCallingViewComponent.prototype, "user", void 0);
ModeCallingViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modecalling',
        template: __webpack_require__("../../../../../src/app/views/view_mode_calling/view_mode_calling.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_status_service__["a" /* StatusService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ModeCallingViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view_mode_calling.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/view_mode_calling/view_mode_calling.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"mode == 'calling'\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\" style=\"margin:40px;\">\n            <div class=\"panel-heading\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4>Звоним...</h4>\n                    </div>\n                    <div class=\"col-md-6\" style=\"text-align: right;\">\n                        <p *ngIf=\"callingdialog\" style=\"margin: 0 20px;\">{{callingdialog.dialog.name}}\n                            <i *ngIf=\"audio_enable\" class=\"fa fa-volume-up\" aria-hidden=\"true\" style=\"font-size: 30px;margin-left:20px;cursor:pointer;\" (click)=\"audio_enable=!audio_enable\"></i>\n                            <i *ngIf=\"!audio_enable\" class=\"fa fa-volume-off\" aria-hidden=\"true\" style=\"font-size: 30px;margin-left:20px;cursor:pointer;\"  (click)=\"audio_enable=!audio_enable\"></i>\n                        </p>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body\">\n                Звонок запущен: {{start_calling_time | date:\"hh:mm dd-mm-yyyy\"}}\n                \n                <div class=\"row\" style=\"text-align: center;\">\n                    <img src=\"/static/assets/images/progress.gif\" style=\"width: 100px;margin: 0 auto;\">\n                </div>\n                <div class=\"row\" style=\"text-align: center;margin-top: 40px;\">\n                    <button class=\"btn btn-warning\" (click)=\"stopCallingDialog()\">\n                        <span>Отмена</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container\" *ngIf=\"mode == 'mode_dialog_pupil'\">\n    <div class=\"row\">\n        <div *ngIf=\"mode == 'mode_dialog_pupil'\">\n            <modedialogpupil [activedialogid]=\"activedialogid\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogpupil>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/view_mode_wait_pupil/view_mode_wait_pupil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeWaitPupilViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModeWaitPupilViewComponent = (function () {
    function ModeWaitPupilViewComponent(webSocketService, dialogsService, statusService, ref, router) {
        this.webSocketService = webSocketService;
        this.dialogsService = dialogsService;
        this.statusService = statusService;
        this.ref = ref;
        this.router = router;
        //@Input() public  user;
        //@Input() public activedialog;
        this.stopwaitingdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.acceptcall = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.callingfroms = [];
        this.mode = 'wait';
        this.audio_enable = true;
        this.loading = false;
    }
    ModeWaitPupilViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.createAudioIncoming();
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == 'CALLING') {
                if (message.target == 'TAKEPHONE') {
                    if (!self.activedialog) {
                        self._getActiveDialog(message.activedialogid, function () {
                            self._calling(message);
                        });
                    }
                    else {
                        self._calling(message);
                    }
                }
            }
            if (message.command == 'CALLING_MASTER_REJECT') {
                var index = -1;
                for (var i = 0; i < self.callingfroms.length; i++) {
                    if (self.callingfroms[i].key_id == message.pupil) {
                        index = i;
                        break;
                    }
                }
                if (index != -1) {
                    self.callingfroms.splice(index, 1);
                    _this._detectChanges();
                }
            }
            if (message.command == "START_DIALOG_MASTER") {
                self.mode = 'mode_dialog_master';
            }
            if (message.command == "CALLING_REJECT") {
                self.router.navigate(['/activedialogs/']);
            }
            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_MASTER") {
                self.router.navigate(['/activedialogs/']);
            }
        });
        self.statusService.ready.subscribe(function (date) {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
            //if (self.statusService.activedialog) {
            //    self.activedialog = self.statusService.activedialog;
            //}
        });
        if (!self.user) {
            self.user = self.statusService.user;
        }
        setTimeout(function () {
            if (!this.activedialog) {
                this.router.navigate(['/dialogs/']);
            }
        }.bind(this), 10000);
    };
    ModeWaitPupilViewComponent.prototype._getActiveDialog = function (activedialogid, callback) {
        var self = this;
        this.dialogsService.getActiveDialog(activedialogid)
            .subscribe(function (activedialog) {
            self.activedialog = activedialog;
            if (callback) {
                callback();
            }
        });
    };
    ModeWaitPupilViewComponent.prototype.ngAfterViewInit = function () {
    };
    ModeWaitPupilViewComponent.prototype.ngOnChanges = function (changes) {
        //console.log('changes', changes)
    };
    ModeWaitPupilViewComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
        //this.statusService.ready.unsubscribe();
    };
    ModeWaitPupilViewComponent.prototype._detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this.ref !== null &&
                _this.ref !== undefined &&
                !_this.ref.destroyed) {
                _this.ref.detectChanges();
            }
        }, 250);
    };
    ModeWaitPupilViewComponent.prototype.createAudioIncoming = function () {
        this.audio = new Audio();
        this.audio.src = "/static/assets/music/incoming-phone-call.mp3";
        this.audio.load();
    };
    ModeWaitPupilViewComponent.prototype._playCallingAudo = function () {
        if (this.audio_enable) {
            this.audio.play();
        }
    };
    ModeWaitPupilViewComponent.prototype.handlerRejectfrom = function (item) {
        var user_key_id = item.key_id;
        var command = {
            command: 'CALLING_MASTER_REJECT',
            target: user_key_id,
            source: this.user.key_id,
            activedialigid: this.activedialog.id
        };
        this.webSocketService.sendCommand(command);
    };
    ModeWaitPupilViewComponent.prototype.handlerTakeCall = function (user_key_id) {
        var self = this;
        var command = {
            command: 'START_DIALOG',
            target: self.activedialog.id,
            master: self.user.key_id,
            pupil: user_key_id
        };
        self.webSocketService.sendCommand(command);
    };
    ModeWaitPupilViewComponent.prototype._calling = function (message) {
        //console.log('_calling')
        var exists = false;
        for (var i = 0; i < this.callingfroms.length; i++) {
            if (this.callingfroms[i].key_id == message.user.key_id) {
                exists = true;
                this.callingfroms[i].lasttime = new Date();
            }
        }
        if (!exists) {
            message.user.lasttime = new Date();
            this.callingfroms.push(message.user);
        }
        if (this.callingfroms.length > 0) {
            this._playCallingAudo();
        }
        this._detectChanges();
    };
    ModeWaitPupilViewComponent.prototype.stopWaitCallDialog = function () {
        var self = this;
        self.loading = true;
        var command = {
            command: 'CALLING_REJECT',
            target: self.activedialog.id
        };
        self.webSocketService.sendCommand(command);
    };
    ModeWaitPupilViewComponent.prototype.handelerStopDialog = function (data) {
        var self = this;
        self.loading = true;
        var command = {
            command: 'EXIT_FROM_ACTIVE_DIALOG_BY_MASTER',
            target: data.activedialogid
        };
        self.webSocketService.sendCommand(command);
    };
    return ModeWaitPupilViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModeWaitPupilViewComponent.prototype, "stopwaitingdialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModeWaitPupilViewComponent.prototype, "acceptcall", void 0);
ModeWaitPupilViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'viewmodewaitpupil',
        template: __webpack_require__("../../../../../src/app/views/view_mode_wait_pupil/view_mode_wait_pupil.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_status_service__["a" /* StatusService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ModeWaitPupilViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view_mode_wait_pupil.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/view_mode_wait_pupil/view_mode_wait_pupil.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"mode == 'wait'\">\n    <div class=\"row\">\n        <div *ngIf=\"activedialog\" class=\"panel panel-default\" style=\"margin:40px;\">\n             <div class=\"panel-heading\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4>Входящий звонок от ученика...</h4>\n                    </div>\n                    <div class=\"col-md-6\" style=\"text-align: right;\">\n                        <p style=\"margin: 0 20px;\">Имя диалога: {{activedialog.dialog.name}}\n                            <i *ngIf=\"audio_enable\" class=\"fa fa-volume-up\" aria-hidden=\"true\" style=\"font-size: 30px;margin-left:20px;cursor:pointer;\" (click)=\"audio_enable=!audio_enable\"></i>\n                            <i *ngIf=\"!audio_enable\" class=\"fa fa-volume-off\" aria-hidden=\"true\" style=\"font-size: 30px;margin-left:20px;cursor:pointer;\"  (click)=\"audio_enable=!audio_enable\"></i>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body\">\n                <!-- <p>Запущен {{activedialog.created_at | date:\"hh:mm dd-mm-yyyy\"}}</p> -->\n                <p *ngIf=\"callingfroms.length > 0\">Входящие звонки</p>\n                <callingfroms [listin]=\"callingfroms\" (rejectfrom)=\"handlerRejectfrom($event)\" (takecall)=\"handlerTakeCall($event)\"></callingfroms>\n                <div style=\"margin-top: 30px\">\n                    <button class=\"btn btn-warning\" (click)=\"stopWaitCallDialog()\"><span>Отмена</span></button>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!activedialog\" style=\"width: 100%;height: 100%;\">\n            <h4 style=\"text-align: center;margin-top: 30px;\">Подготовка к получения входящего звонока от ученика...</h4>\n            <img src=\"/static/assets/images/progress.gif\" style=\"display: block;width: 100px;margin: 40px auto;\">\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf=\"mode == 'mode_dialog_master'\">\n    <div class=\"row\">\n        <modedialogmaster [activedialogid]=\"activedialog.id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogmaster>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/view_profile/equal_validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal_validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/views/view_profile/view_profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileViewComponent = (function () {
    function ProfileViewComponent(statusService, router) {
        this.statusService = statusService;
        this.router = router;
        this.levels = [
            {
                id: 10,
                title: "Beginner, Elementary"
            }, {
                id: 20,
                title: "Pre-Intermediate"
            }, {
                id: 30,
                title: "Intermediate"
            }, {
                id: 40,
                title: "Upper-Intermediate"
            }, {
                id: 50,
                title: "Advanced"
            }, {
                id: 60,
                title: "Proficiency"
            },
        ];
        this.loading = false;
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
            self.setVars();
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;
            self.setVars();
        }
        else {
            self.statusService.getStatus();
        }
    };
    ProfileViewComponent.prototype.ngAfterViewInit = function () {
    };
    ProfileViewComponent.prototype.setVars = function () {
        this.first_name = this.user.first_name;
        this.selectedLevel = this.user.level;
    };
    ProfileViewComponent.prototype.changePassword = function ($event) {
        if (this.password1) {
            this.password1 = "";
        }
    };
    ProfileViewComponent.prototype.submit = function () {
        if (this.first_name && this.selectedLevel && this.password && this.password1 &&
            this.password == this.password1) {
            var params = {
                first_name: this.first_name,
                selectedLevel: this.selectedLevel,
                password: this.password
            };
            console.log('para', params);
            this.loading = true;
            var self_1 = this;
            this.statusService.saveUser(params).subscribe(function (data) {
                self_1.loading = false;
            });
        }
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modecalling',
        template: __webpack_require__("../../../../../src/app/views/view_profile/view_profile.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileViewComponent);

var _a, _b;
//# sourceMappingURL=view_profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/view_profile/view_profile.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\" style=\"margin:40px;\">\n            <div class=\"panel-heading\">\n                <h3>Профиль пользователя <span class=\"pull-right\">{{user?.email}}</span></h3>\n            </div>\n            <div class=\"panel-body\">\n                <form #frm=\"ngForm\" (ngSubmit)=\"submit()\" style=\"max-width: 400px;margin: auto;\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputName\">Ваше имя * <span style=\"font-size: 10px;font-weight: 200;\">(будет отображаться другим пользователям)</span>\n                        </label>\n\n                        <input #frm_first_name=\"ngModel\" type=\"text\" name=\"frm_first_name\" class=\"form-control\" id=\"exampleInputName\" [(ngModel)]=\"first_name\" required=\"required\">\n                        <small *ngIf=\"!frm_first_name.valid && !frm_first_name.pristine\" class=\"text-danger pull-right\" style=\"margin:0\">Имя обязательное для ввода</small>\n                        \n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputLevel\">Ваш уровень английского *</label>\n                        <select name=\"frm_level\" class=\"form-control\" [(ngModel)]=\"selectedLevel\" style=\"\" (ngModelChange)=\"onChangePersonage()\" required=\"required\">\n                             <option *ngFor=\"let pesonage of levels\" [value]=\"pesonage.id\">{{pesonage.title}}</option>\n                         </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputPassword1\">Новый пароль</label>\n                        <input type=\"password\" name=\"frm_password\" class=\"form-control\" id=\"exampleInputPassword1\" [(ngModel)]=\"password\" required=\"required\" #frm_password=\"ngModel\" reverse=\"false\" (ngModelChange)=\"changePassword($event)\">\n                        <small *ngIf=\"frm_password.errors && frm_password.errors.required && !frm_password.pristine\" class=\"text-danger pull-right\">\n                            Требуется ввести пароль\n                        </small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputPassword2\">Подтверждение пароля</label>\n                        <input type=\"password\" name=\"frm_password1\" class=\"form-control\" id=\"exampleInputPassword2\" [(ngModel)]=\"password1\" validateEqual=\"frm_password\" #frm_password1=\"ngModel\" reverse=\"false\" required=\"required\">\n                            <small *ngIf=\"frm_password1.errors && frm_password1.errors.validateEqual==false && !frm_password1.pristine\" class=\"text-danger pull-right\">\n                                Пароли не совпадают\n                            </small>\n                    </div>\n\n\n                    \n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Сохранить\" [disabled]=\"!frm.valid\"/>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <!-- Loading -->\n        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n            </div>\n            <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n            </div>\n        </div>\n        <!-- END Loading -->\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map