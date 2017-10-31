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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_appviews_module__ = __webpack_require__("../../../../../src/app/views/appviews.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_common_layouts_layouts_module__ = __webpack_require__("../../../../../src/app/components/common/layouts/layouts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_guards_service__ = __webpack_require__("../../../../../src/app/services/guards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_11__views_appviews_module__["a" /* AppviewsModule */],
            __WEBPACK_IMPORTED_MODULE_12__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_6__node_modules_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_websocket_service__["a" /* WebSocketService */],
            AppCSRF,
            __WEBPACK_IMPORTED_MODULE_14__services_status_service__["a" /* StatusService */],
            __WEBPACK_IMPORTED_MODULE_13__services_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_15__services_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_16__services_guards_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_17__services_notification_service__["a" /* NotificationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_mydialogues_mydialogues_component__ = __webpack_require__("../../../../../src/app/views/mydialogues/mydialogues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_mydialogues_mydialogue_edit_component__ = __webpack_require__("../../../../../src/app/views/mydialogues/mydialogue.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_view_help_view_help_component__ = __webpack_require__("../../../../../src/app/views/view_help/view_help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_guards_service__ = __webpack_require__("../../../../../src/app/services/guards.service.ts");












var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dialogues', pathMatch: 'full' },
    // App views
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'dialogues',
                component: __WEBPACK_IMPORTED_MODULE_0__views_dialogsview_component__["a" /* DialogsViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'activedialogues',
                component: __WEBPACK_IMPORTED_MODULE_1__views_activedialogsview_component__["a" /* ActiveDialogsViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'dialogue/:dialog_id',
                component: __WEBPACK_IMPORTED_MODULE_2__views_dialogview_component__["a" /* DialogViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'message',
                component: __WEBPACK_IMPORTED_MODULE_6__views_view_message_view_message_component__["a" /* MessageViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_7__views_view_profile_view_profile_component__["a" /* ProfileViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: 'wait',
        component: __WEBPACK_IMPORTED_MODULE_4__views_view_mode_wait_pupil_view_mode_wait_pupil_component__["a" /* ModeWaitPupilViewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
    },
    {
        path: 'calling/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__views_view_mode_calling_view_mode_calling_component__["a" /* ModeCallingViewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'mydialogues',
                component: __WEBPACK_IMPORTED_MODULE_8__views_mydialogues_mydialogues_component__["a" /* MyDialoguesViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'mydialogues/:dialogue_id',
                component: __WEBPACK_IMPORTED_MODULE_9__views_mydialogues_mydialogue_edit_component__["a" /* MyDialogueEditViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: 'help',
                component: __WEBPACK_IMPORTED_MODULE_10__views_view_help_view_help_component__["a" /* HelpViewComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_guards_service__["a" /* AuthGuard */]]
            }
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'dialogues' }
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
            AppSettings.URL_WEBSOKET_PEER = document.location.hostname + ':8000';
        }
        else {
            AppSettings.base_url = AppSettings.protocol + '//' + AppSettings.host;
            AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + ':8000/peerjs';
            AppSettings.URL_WEBSOKET_PEER = document.location.hostname;
        }
        AppSettings.URL_STATUS = AppSettings.base_url + "/dialogs/api/status/";
        AppSettings.URL_DIALOGS = AppSettings.base_url + "/dialogs/api/dialogues/";
        AppSettings.URL_ACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/activedialogues/";
        AppSettings.URL_MYDIALOGS = AppSettings.base_url + "/dialogs/api/mydialogues/";
        AppSettings.URL_MYACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/myactivedialogues/";
        AppSettings.URL_DIALOG_RUN = AppSettings.base_url + "/dialogs/api/run/";
        AppSettings.URL_DIALOG_RUNINTO = AppSettings.base_url + "/dialogs/api/runinto/";
        AppSettings.URL_DIALOG_ACTIVESTOP = AppSettings.base_url + "/dialogs/api/stop/";
        AppSettings.URL_DIALOG_STOP = AppSettings.base_url + "/dialogs/api/stop/";
        AppSettings.URL_CHANGE_ACCEPT_CALL = AppSettings.base_url + "/accounts/accept_call/";
        AppSettings.URL_MESSAGE = AppSettings.base_url + "/accounts/message/";
        AppSettings.URL_CHECK_USER = AppSettings.base_url + "/accounts/check_user/";
        AppSettings.URL_USER_SETTING = AppSettings.base_url + "/accounts/user/";
        AppSettings.URL_TAGS = AppSettings.base_url + "/dialogs/tags/";
        //AppSettings.URL_WEBSOKET_PEER = document.location.hostname;
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

module.exports = "<div style=\"position: fixed;top:0;left:0;width: 100%; height: 100%;z-index: 100;\">\n    <div style=\"width: 100%;height: 100%;background-color: black;opacity: 0.5;\"></div>\n\n    <div style=\"width: 600px;height: 500px;position: absolute;\n        top: 0;left: 0;right: 0;bottom: 0;margin: 50px auto;z-index: 1000;\">\n\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                Выберите новый диалог\n            </div>\n            <div class=\"panel-body\" style=\"min-height: 200px;max-height: 300px;overflow: auto;\">\n\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let item of mydialogs\" class=\"list-group-item\" style=\"display:flex;cursor: pointer;justify-content: space-between;\" (click)=\"changeSelectedDialog(item)\">\n                        <div style=\"margin-right: 20px;flex:0;\">\n                            <input type=\"radio\" [(ngModel)]=\"item.select\" name=\"dialog\" [value]=\"true\">\n                        </div>\n                        <div style=\"flex: 3;\">\n                            <p>{{item.dialog.name}}</p>\n                            <p style=\"font-size: 9px;\">{{item.dialog.description}}</p>\n                        </div>\n                        <div *ngIf=\"item.dialog.background_image\" style=\"flex:0;width: 50px;height:50px\">\n                            <div *ngIf=\"item.dialog.background_image\" \n                                [ngStyle]=\"{'background-image': 'url(' + item.dialog.background_image + ')'}\"\n                                style=\"\n                                    height: 50px; \n                                    width: 50px; \n                                    background-size: cover;\n                                    display: block;\"></div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"panel-footer\" style=\"\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectDialog()\">Выбрать диалог</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"closeChangeDialog()\">Закрыть</button>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(webSocketService, ref) {
        this.webSocketService = webSocketService;
        this.ref = ref;
        this.messages = [];
        this.message = "";
        this.chat_loading = false;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "CHAT_UPDATE") {
                self.chat_loading = false;
                self.activedialog.chat_messages = message.chat_messages;
                self._detectChanges();
                self.chatContainer.nativeElement.scrollTop = _this.chatContainer.nativeElement.scrollHeight;
            }
        });
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.ref.detach();
    };
    ChatComponent.prototype.send = function () {
        if (!this.message) {
            return;
        }
        var command = {
            command: 'CHAT_SEND_MESSAGE',
            activedialogid: this.activedialog.id,
            message: this.message,
            source: this.user.key_id
        };
        this.chat_loading = true;
        this.webSocketService.sendCommand(command);
        this.message = "";
    };
    ChatComponent.prototype._detectChanges = function () {
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
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "activedialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatContent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatComponent.prototype, "chatContainer", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat',
        template: __webpack_require__("../../../../../src/app/components/chat/chat.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.template.html":
/***/ (function(module, exports) {

module.exports = "\n<div #chatContent style=\"min-height: 300px;height: 300px;width: 100%;margin-top: 20px;overflow-y: scroll;z-index: 1;\n    position: relative;\">\n    <h4 style=\"text-align: center;\">Текстовый чат</h4>\n    <div style=\"height: 100%;width: 100%;\">\n        <div *ngFor=\"let item of activedialog.chat_messages\">\n            <div *ngIf=\"item.source.type == 'master'\" style=\"background-color: bisque;padding: 10px 20px;min-width: 300px;max-width: 300px;padding: 10px 20px;border-radius: 10px;margin: 5px;\">\n                <div style=\"font-size: 10px;\">\n                    <p style=\"margin:0;float: left;margin: 0 10px 0px 0px;\">{{item.source.fio}}</p>\n                    <p style=\"margin:0 10px;\">{{item.date}}</p>\n                </div>\n                <p style=\"margin:0;\">{{item.message}}</p>\n                \n            </div>\n            <div *ngIf=\"item.source.type == 'pupil'\" style=\"width:100%;display: inline-block;\">\n                <div class=\"pull-right\" style=\"background-color: brown;color: white;min-width: 300px;max-width: 300px;padding: 10px 20px;border-radius: 10px;margin: 5px;\">\n                    <div style=\"font-size: 10px;\">\n                        <p style=\"margin:0;float: left;margin: 0 10px 0px 0px;\">{{item.source.fio}}</p>\n                        <p style=\"margin:0 10px;\">{{item.date}}</p>\n                    </div>\n                    <p style=\"margin:0;\">{{item.message}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"input-group\" style=\"position: absolute;bottom: -20px;z-index: 1;\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Ваше сообщение\" style=\"height: 40px;background-color: white;\"\n        (keyup.enter)=\"send()\" [(ngModel)]=\"message\" maxlength=\"100\">\n    <div class=\"input-group-addon\" style=\"padding: 0;\">\n        <button class=\"btn btn-info\" style=\"height: 38px;border-radius: 0;\" (click)=\"send()\" [disabled]=\"!message\">Отправить</button>\n    </div>\n</div>\n\n<div [ngStyle]=\"{'background-image': 'url(' + activedialog.dialog.background_image + ')'}\"\n    style=\"\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        background-size: cover;\n        background-repeat: no-repeat;\n        opacity: 0.2;\n        left: 0;\n        top: 20px;\n        right: 0;\">\n</div>\n"

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
        this.show_error_dialog = false;
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

module.exports = "<div class=\"\" style=\"width:100%;background: rgba(64,75,97, 0.9);display: flex;justify-content: space-between;\">\n    <div style=\"height: 80px;color: white;margin:20px;font-size: 14px;\">\n        <ol>\n            <li>\n                <a [routerLink]=\"['/message']\" style=\"color:white;\">Обратная связь</a>\n            </li>\n            <li>\n                <a style=\"color:white;cursor: pointer;\" (click)=\"show_error_dialog=true\">Сообщить об ошибке</a>\n            </li>\n        </ol>\n    </div>\n\n    <div style=\"height: 80px;color: white;margin:20px;font-size: 14px;\">\n        <ol>\n            <li>\n                <a [routerLink]=\"['/mydialogues']\" style=\"color:white;\">Мои диалоги</a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/dialogues']\" style=\"color:white;\">Все диалоги</a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/activedialogues']\" style=\"color:white;\">Диалоги в ожидание диалоги</a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/profile']\" style=\"color:white;\">Настройки профиля</a>\n            </li>\n        </ol>\n    </div>\n\n\n    <div style=\"height: 80px;color: white;margin:20px 40px;font-size: 14px;\">\n        <ol>\n            <li>\n                <a [routerLink]=\"['/help']\" style=\"color:white;\">Помощь с интерфейсом</a>\n            </li>\n           \n        </ol>\n    </div>\n</div>\n\n\n<messageerrors [(visible)]=\"show_error_dialog\"></messageerrors>"

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

/***/ "../../../../../src/app/components/common/layouts/blankLayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankLayoutComponent = (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngOnInit = function () {
    };
    BlankLayoutComponent.prototype.onResize = function () {
    };
    return BlankLayoutComponent;
}());
BlankLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blank',
        template: __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.template.html"),
        host: {
            '(window:resize)': 'onResize()'
        }
    })
], BlankLayoutComponent);

//# sourceMappingURL=blankLayout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/layouts/blankLayout.template.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div class=\"wrapper\">\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n    \n</div>\n<!-- End wrapper-->\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blankLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/blankLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__ = __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_message_errors_message_errors_component__ = __webpack_require__("../../../../../src/app/components/message_errors/message_errors.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_message_errors_message_errors_component__["a" /* MessageErrorsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_message_errors_message_errors_component__["a" /* MessageErrorsComponent */],
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

/***/ "../../../../../src/app/components/common/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_notification_model__ = __webpack_require__("../../../../../src/app/models/notification.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = (function () {
    function NotificationComponent(_notifications) {
        var _this = this;
        this._notifications = _notifications;
        this.closable = true;
        this.visible = false;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
        this.note = new __WEBPACK_IMPORTED_MODULE_2__models_notification_model__["a" /* Notification */]();
        _notifications.noteAdded.subscribe(function (_note) {
            _this.note = _note;
            _this.visible = true;
        });
    }
    NotificationComponent.prototype.ngOnChanges = function () {
        if (this.visible) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add("modal-open");
        }
        else {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove("modal-open");
        }
    };
    NotificationComponent.prototype.close = function (note) {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return NotificationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "closable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "visible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NotificationComponent.prototype, "visibleChange", void 0);
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notifications',
        template: __webpack_require__("../../../../../src/app/components/common/notification/notifications.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], NotificationComponent);

var _a, _b;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/notification/notifications.template.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"notification\" style=\"\">\n    <div style=\"position: fixed;width: 100%;height: 100%;opacity: 0.5;top:0;left:0;background-color: black;z-index:100;\"></div>\n    <!-- <button (click)=\"close()\" aria-label=\"Close\" class=\"btn btn-primary pull-right\">X</button> -->\n    <p *ngIf=\"loading\">Loading ...</p>\n    <div *ngIf=\"!loading\" style=\"position: absolute;\n    width: 80%;\n    top: 0;\n    left: 0;\n    right: 0;\n    margin: 200px auto;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    box-shadow: 0px 0px 14px 0px;\n    z-index: 1000;\">\n            <div class=\"panel\" style=\"margin: 0;\">\n                <div class=\"panel-heading panel-info\">\n                     <h4>{{note.title}}</h4>\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: auto;max-height: 400px;\">\n                    <div class=\"col-md-12\">\n                        <div class=\"panel\">\n                            <div class=\"panel-body\" style=\"padding: 0;\">\n                                <div class=\"{{ note.classes }}\" style=\"min-height: 50px;text-align: center;display: flex;justify-content: center;align-items: center;\">\n                                    <h4>{{ note.message }}</h4>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- Loading -->\n                        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                            </div>\n                            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                            </div>\n                        </div>\n                        <!-- END Loading -->\n                \n                    </div>\n                </div>\n                <div class=\"panel-footer\" style=\"text-align: center;\">\n                    <button type=\"button\" class=\"btn btn-primary btn-lg\" style=\"width: 100px;\" (click)=\"close()\">OK</button>\n                </div>\n            </div>\n    </div>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\"></div>"

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
            self.initVars();
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
            self.initVars();
            if (!self.user) {
                self.statusService.getStatus();
                self.initVars();
            }
        }
        self.initVars();
    };
    TopNavbarComponent.prototype.initVars = function () {
        if (this.user) {
            this.state_input_call = this.user.is_accept_call;
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
        return this.router.url.startsWith(routename);
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

module.exports = "<nav class=\"navbar navbar-default top-nav-collapse\" style=\"border-radius: 0px;\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\" style=\"margin-left: 0;\">Ди<span class=\"logo-dec\">алоги</span></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [ngClass]=\"{'active': activeRoute('/mydialogues')}\">\n            <a [routerLink]=\"['/mydialogues']\">Мои диалоги</a>\n        </li>\n        <li [ngClass]=\"{'active': activeRoute('/dialogues') ||  activeRoute('/dialogue')}\">\n            <a [routerLink]=\"['/dialogues']\">Все диалоги</a>\n        </li>\n        <li [ngClass]=\"{'active': activeRoute('/activedialogues')}\">\n            <a [routerLink]=\"['/activedialogues']\">Диалоги в ожидание партнера</a>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Настройки<span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a [routerLink]=\"['/profile']\" >Профиль</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"/accounts/logout/?next=/\" target=\"_self\">Выход</a></li>\n              </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"col-md-10\" style=\"margin: 0 0 10px 0;\">\n            <bSwitch [switch-size]=\"'small'\" [switch-animate]=\"true\" [(ngModel)]=\"state_input_call\" (onChangeState)=\"onChangeInputCall()\" [switch-off-text]=\"'Выкл'\"\n              [switch-on-text]=\"'Вкл'\"></bSwitch>\n            <span style=\"color:beige;margin-left: 18px;\">Принимать входящие звонки</span>\n        </div>\n        <div class=\"col-md-2\" style=\"text-align: right;color:white;\">{{user?.fio}}</div>\n    </div>\n  </div>\n</nav>\n\n<div *ngIf=\"server_error\" style=\"position: absolute;top:0;left:0;height: 100%;width: 100%;z-index: 100;\">\n    <div style=\"position: fixed;opacity: 0.7;width:100%;height:200%;background-color: white;\"></div>\n    <div style=\"position: relative;margin: auto;margin-top: 160px;text-align: center;color: darkred;\">\n        <h1>Опс... не могу получить доступ к серверу</h1>\n        <h4>Работа сайта возобновится после восстановления доступа к серверу</h4>\n    </div>\n</div>\n\n<div *ngIf=\"errors.length > 0\" style=\"position:absolute;width:100%;top:0;right:0;z-index:1000;\">\n    <div *ngFor=\"let error of errors;let i=index\" class=\"alert alert-danger\" style=\"margin: 0 0 5px 0;max-height: 300px;overflow-y: auto;\">\n        <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\" (click)=\"removeError(i)\" style=\"margin-top:-10px;margin-right: -10px;\">×</button>\n        <span *ngIf=\"error?.host\" style=\"font-weight: 800;\">Host: {{error?.host}}</span> \n        <span  *ngIf=\"error?.message\"><pre>Описание: {{error?.message}} </pre></span>\n        <span  *ngIf=\"error?.rc\">Код rc: {{error?.rc}}</span>\n    </div>\n</div>\n\n<div *ngIf=\"messages.length > 0\" style=\"position:absolute;width:100%;top:0;right:0;z-index:1000;\">\n    <div *ngFor=\"let message of messages;let i=index\" class=\"alert alert-success\" style=\"margin: 0 0 5px 0;max-height: 300px;overflow-y: auto;\">\n        <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\" (click)=\"removeMessage(i)\" style=\"margin-top:-10px;margin-right: -10px;\">×</button>\n        <span *ngIf=\"message?.host\" style=\"font-weight: 800;\">Host: {{message?.host}}</span> \n        <span  *ngIf=\"message?.message\"><pre>Описание: {{message?.message}} </pre></span>\n        <span  *ngIf=\"message?.rc\">Код rc: {{message?.rc}}</span>\n    </div>\n</div>\n\n"

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
        this.status_activedialog = 'starting'; //starting, run, stop
        this.status_voice_connection = 'starting'; //starting, run, stop, error_connection
        this.userMedia = navigator;
        this.loading = false;
        var self = this;
    }
    ModeDialogMasterComponent.prototype.ngOnInit = function () {
        var self = this;
        self.user = self.statusService.user;
        console.log('getActiveDialog');
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe(function (data) {
            self.activedialog = data;
            self._getPersonageName();
            self._startPeer();
            //console.log('self.activedialog', self.activedialog)
        });
        self.webSocketSubscription = self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "DIALOG_STOP") {
                console.log('get DIALOG_STOP');
                self._closeVoiceConnection();
                self.status_activedialog = 'stop';
            }
            if (message.command == "DIALOG_STOP_VOICE_CONNECTION") {
                self._closeVoiceConnection();
            }
            if (message.command == "HEARBEAT_DIALOG_PUPIL") {
                self.status_activedialog = 'run';
                self.last_hearbeat_from_pupil = new Date();
                var value = Math.round((self.last_hearbeat_from_pupil - self.start_converstion) / 1000);
                if (value) {
                    self.during_conversation = value;
                }
            }
            if (message.command == "DIALOG_STOP_ERROR") {
                self.status_activedialog = 'error_connection';
            }
            if (message.command == "DIALOG_VOICE_CONNECTION_ERROR") {
                self.status_voice_connection = 'error_connection';
                self._closeVoiceConnection();
            }
        });
        self.status_activedialog = 'run';
        self._runHearbeatPupil();
    };
    ModeDialogMasterComponent.prototype.ngAfterViewInit = function () {
    };
    ModeDialogMasterComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeDialogMasterComponent.prototype.ngOnDestroy = function () {
        this.webSocketSubscription.unsubscribe();
    };
    ModeDialogMasterComponent.prototype.callPhone = function () {
        this._startPeer();
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
        self.status_voice_connection = 'starting';
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
            self.status_voice_connection = 'error_connection';
            var command = {
                command: "DIALOG_VOICE_CONNECTION_ERROR",
                target: self.activedialog.id,
            };
            if (err.message) {
                self.connection_error_message = err.message;
                command['message'] = err.message;
            }
            self.webSocketService.sendCommand(command);
        });
        // Receiving a call
        self.peer.on('call', function (receivecall) {
            self._startLocalVideo(function () {
                self.status_voice_connection = 'run';
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
            //console.log("CLOSE");
            self._closeVoiceConnection();
        });
    };
    ModeDialogMasterComponent.prototype._closeVoiceConnection = function () {
        var self = this;
        self.status_voice_connection = 'stop';
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
        this._closeVoiceConnection();
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
        this._closeVoiceConnection();
        self.webSocketService.sendCommand({
            command: "DIALOG_STOP_VOICE_CONNECTION",
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
                if (self.activedialog && self.activedialog.id) {
                    self.webSocketService.sendCommand({
                        command: "HEARBEAT_DIALOG_MASTER",
                        target: self.activedialog.id
                    });
                }
                //if (self.answeringCall && self.answeringCall.open) {
                //}
            }
        }
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function () {
            self._runHearbeatPupil();
        }, 10000);
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

module.exports = " <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>Диалог: \n                    <span *ngIf=\"activedialog\">{{activedialog.dialog?.name}}</span>\n                    <span *ngIf=\"!activedialog\">загружается</span>\n                </h4>\n                <p>Роль: ведущий</p>\n                <p *ngIf=\"status_activedialog=='run'\"  style=\"font-size: 16px;color:green;font-weight: 400;margin:0;\">Диалог запущен</p>\n                <p *ngIf=\"status_activedialog=='starting'\" style=\"font-size: 16px;color:blue;font-weight: 400;margin:0;\">Устанавливаем диалог</p>\n                <p *ngIf=\"status_activedialog=='stop'\"  style=\"font-size: 16px;color:red;font-weight: 400;margin:0;\">Диалог остановлен связи с партнером нет</p>\n                <p *ngIf=\"status_activedialog=='error_connection'\" style=\"font-size: 16px;color:red;font-weight: 400;margin:0;\">Ошибка установки связи</p>\n\n                <p *ngIf=\"status_voice_connection =='run'\"  style=\"font-size: 16px;color:green;font-weight: 400;margin:0;\">Голосовая связь установлена</p>\n                <p *ngIf=\"status_voice_connection=='stop'\" style=\"font-size: 16px;color:red;font-weight: 400;margin:0;\">Голосовая cвязь с партнером остановлена</p>\n                <p *ngIf=\"status_voice_connection=='starting'\" style=\"font-size: 16px;color:blue;font-weight: 400;margin:0;\">Устанавливаем голосовую связь</p>\n                \n                <p *ngIf=\"connection_error_message\" style=\"font-size: 12px;color:red;\">{{connection_error_message}}</p>\n                <p *ngIf=\"status_voice_connection=='error_connection' && activedialog.pupil.skypeid\" style=\"font-size: 14px;color:darkcyan;\">\n                    Попробуйте установить связь через скайп (скайп id собеседника {{activedialog.pupil.skypeid}})\n                </p>\n                <p *ngIf=\"status_voice_connection=='error_connection' && !activedialog.pupil.skypeid\" style=\"font-size: 14px;color:darkcyan;\">\n                    Попробуйте связаться через другие программы например скайп\n                </p>\n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p *ngIf=\"personageName\" style=\"margin: 0 40px;\">Персонаж: {{personageName}}</p>\n                <p *ngIf=\"during_conversation\" style=\"margin: 0 40px;font-size: 8px;\">{{displayTime(during_conversation)}}</p>\n                <button  *ngIf=\"status_voice_connection == 'run'\" class=\"btn btn-warning\" (click)=\"hangPhone()\" style=\"margin-right: 25px;margin-top: 10px;\">\n                    <i class=\"fa fa-microphone-slash\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><span>Сбросить голосовую связь</span>\n                </button>\n                <!--\n                <button  *ngIf=\"status_voice_connection != 'run'\" class=\"btn btn-info\" (click)=\"callPhone()\" style=\"margin-right: 25px;margin-top: 10px;\">\n                    <i class=\"fa fa-microphone\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><span>Попытаться установить голосовую связь</span>\n                </button>\n            -->\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\" style=\"min-height: 500px;\">\n        <div [hidden]=\"status_activedialog != 'run'\" class=\"row\">\n            <div style=\"display: flex;justify-content: flex-start;\">\n                <div style=\"display: flex;opacity: 0;height: 0;\">\n                    <div style=\"margin: 5px;\">\n                        <video #remoteVideo autoplay=\"\" style=\"border:2px solid red;width: 100px;\"></video>\n                        <p style=\"font-size: 8px;margin-top: -5px;\">Remote</p>\n                    </div>\n                    <div style=\"margin: 5px;\">\n                        <video #localVideo muted=\"true\" autoplay=\"\" style=\"border:2px solid green;width: 100px;\"></video>\n                        <p style=\"font-size: 8px;margin-top: -5px;\">Local</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"activedialog\">\n            <playerdialogmaster [user]=\"user\" [activedialog]=\"activedialog\" (changeactivedialog)=\"handlerChangeActiveDialog($event)\"></playerdialogmaster>\n        </div>\n        \n    </div>\n    <div class=\"panel-footer\">\n        <div>\n            <button class=\"btn btn-warning\" (click)=\"exitDialog()\"><span>Выход из режима диалога</span></button>\n        </div>\n    </div>\n</div>"

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
        this.connection_error_message = "";
        this.status_activedialog = 'starting';
        this.status_voice_connection = 'starting'; //starting, run, stop, error_connection
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
        self.webSocketSubscription = self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "DIALOG_STOP") {
                self._closeVoiceConnection();
                self.status_activedialog = 'stop';
            }
            if (message.command == "DIALOG_STOP_VOICE_CONNECTION") {
                self._closeVoiceConnection();
            }
            if (message.command == "HEARBEAT_DIALOG_MASTER") {
                self.status_activedialog = 'run';
                self.last_hearbeat_from_master = new Date();
                var value = Math.round((self.last_hearbeat_from_master - self.start_converstion) / 1000);
                if (value) {
                    self.during_conversation = value;
                }
            }
            if (message.command == "DIALOG_STOP_ERROR") {
                self.status_activedialog = 'error_connection';
            }
            if (message.command == "DIALOG_VOICE_CONNECTION_ERROR") {
                self.status_voice_connection = 'error_connection';
                self._closeVoiceConnection();
            }
        });
        self.status_activedialog = 'run';
        self._runHearbeatPupil();
    };
    ModeDialogPupilComponent.prototype.ngAfterViewInit = function () {
    };
    ModeDialogPupilComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeDialogPupilComponent.prototype.ngOnDestroy = function () {
        this.webSocketSubscription.unsubscribe();
    };
    ModeDialogPupilComponent.prototype.callPhone = function () {
        this._startPeer();
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
            self.status_voice_connection = 'error_connection';
            console.log("ERROR:", err.message);
            var command = {
                command: "DIALOG_VOICE_CONNECTION_ERROR",
                target: self.activedialog.id,
            };
            if (err.message) {
                self.connection_error_message = err.message;
                command['message'] = err.message;
            }
            self.webSocketService.sendCommand(command);
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
            self.status_voice_connection = 'run';
            self.start_converstion = new Date();
        });
        call.on('close', function () {
            //console.log("CLOSE");
            self._closeVoiceConnection();
        });
    };
    ModeDialogPupilComponent.prototype._closeVoiceConnection = function () {
        var self = this;
        self.status_voice_connection = 'stop';
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
        this._closeVoiceConnection();
        this.stopdialog.emit({
            activedialogid: this.activedialogid,
            type: 'pupil'
        });
    };
    ModeDialogPupilComponent.prototype.hangPhone = function () {
        var self = this;
        this._closeVoiceConnection();
        self.webSocketService.sendCommand({
            command: "DIALOG_STOP_VOICE_CONNECTION",
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
                if (self.activedialog && self.activedialog.id) {
                    self.webSocketService.sendCommand({
                        command: "HEARBEAT_DIALOG_PUPIL",
                        target: self.activedialog.id
                    });
                }
                //if (self.callingCall && self.callingCall.open) {
                //}
            }
        }
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function () {
            self._runHearbeatPupil();
        }, 10000);
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
        //console.log('this.activedialog ', this.activedialog )
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

module.exports = " <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>Диалог \n                    <span *ngIf=\"activedialog\">{{activedialog.dialog.name}}</span>\n                    <span *ngIf=\"!activedialog\">загружается</span>\n                </h4>\n                <p>Роль: ученик</p>\n                <p *ngIf=\"status_activedialog=='run'\"  style=\"font-size: 16px;color:green;font-weight: 400;margin:0;\">Диалог запущен</p>\n                <p *ngIf=\"status_activedialog=='starting'\" style=\"font-size: 16px;color:blue;font-weight: 400;margin:0;\">Устанавливаем диалог</p>\n                <p *ngIf=\"status_activedialog=='stop'\"  style=\"font-size: 16px;color:red;font-weight: 400;margin:0;\">Диалог остановлен связи с партнером нет</p>\n\n\n                <p *ngIf=\"status_voice_connection =='run'\"  style=\"font-size: 16px;color:green;font-weight: 400;margin:0;\">Голосовая связь установлена</p>\n                <p *ngIf=\"status_voice_connection=='stop'\" style=\"font-size: 16px;color:red;font-weight: 400;margin:0;\">Голосовая cвязь с партнером остановлена</p>\n                <p *ngIf=\"status_voice_connection=='starting'\" style=\"font-size: 16px;color:blue;font-weight: 400;margin:0;\">Устанавливаем голосовую связь</p>\n\n                <p *ngIf=\"status_activedialog=='error_connection'\" style=\"font-size: 16px;color:red;font-weight: 400;margin:0;\">Ошибка установки связи\n                </p>\n                <p *ngIf=\"connection_error_message\" style=\"font-size: 12px;color:red;\">{{connection_error_message}}</p>\n                <p *ngIf=\"status_voice_connection == 'error_connection' && activedialog.master.skypeid\" style=\"font-size: 14px;color:darkcyan;\">\n                    Попробуйте установить связь через скайп (скайп id собеседника {{activedialog.master.skypeid}})\n                </p>\n                <p *ngIf=\"status_voice_connection == 'error_connection' && !activedialog.master.skypeid\" style=\"font-size: 14px;color:darkcyan;\">\n                    Попробуйте связаться через другие программы например скайп\n                </p>\n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p *ngIf=\"personageName\" style=\"margin: 0 40px;\">Персонаж: {{personageName}}</p>\n                <p *ngIf=\"during_conversation\" style=\"margin: 0 40px;font-size: 8px;\">{{displayTime(during_conversation)}}</p>\n                <button  *ngIf=\"status_voice_connection == 'run'\" class=\"btn btn-warning\" (click)=\"hangPhone()\" style=\"margin-right: 25px;margin-top: 10px;\">\n                    <i class=\"fa fa-microphone-slash\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><span>Сбросить голосовую связь</span>\n                </button>\n                <button  *ngIf=\"status_voice_connection != 'run'\" class=\"btn btn-info\" (click)=\"callPhone()\" style=\"margin-right: 25px;margin-top: 10px;\">\n                    <i class=\"fa fa-microphone\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i><span>Попытаться установить голосовую связь</span>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\" style=\"min-height: 500px;\">\n\n        <!-- Loading -->\n        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n            </div>\n            <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n            </div>\n        </div>\n        <!-- END Loading -->\n\n        <div [hidden]=\"status_activedialog != 'run'\" class=\"row\">\n            <div style=\"display: flex;justify-content: flex-start;opacity: 0;height: 0;\">\n                <div style=\"margin: 5px;\">\n                    <video #remoteVideo autoplay=\"\" style=\"border:2px solid red;width: 100px;\"></video>\n                    <p style=\"font-size: 8px;margin-top: -5px;\">Remote</p>\n                </div>\n                <div style=\"margin: 5px;\">\n                    <video #localVideo muted=\"true\" autoplay=\"\" style=\"border:2px solid green;width: 100px;\"></video>\n                    <p style=\"font-size: 8px;margin-top: -5px;\">Local</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"activedialog\">\n            <playerdialogpupil [activedialog]=\"activedialog\" (changeactivedialog)=\"handlerChangeActiveDialog($event)\" [user]=\"user\"></playerdialogpupil>\n        </div>\n    </div>\n\n    <div class=\"panel-footer\">\n        <button class=\"btn btn-warning\" (click)=\"exitDialog()\"><span>Выход из режима диалога</span></button>\n    </div>\n</div>"

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
        this.message_change_turn_to_master = false;
        this.passed_turns = {
            master: false,
            pupil: false
        };
        this.loading = false;
        var self = this;
    }
    PlayerDialogMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        //console.log('user', self.user)
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "MESSAGE_CHANGE_TURN_TO_MASTER") {
                _this.message_change_turn_to_master = true;
            }
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
        this.message_change_turn_to_master = false;
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

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <button *ngIf=\"activedialog\" type=\"button\" class=\"btn btn-info pull-right\" style=\"margin: 0 20px 20px 20px;\" (click)=\"openChangeDialog()\">Сменить текущий диалог</button>\n        <div style=\"margin: 20px;clear: both\">\n            <div *ngIf=\"activedialog.dialog && activedialog.dialog.scenario\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    Текущий шаг: {{current_step.number}} / {{activedialog.dialog.scenario.steps.length}}\n                </div>\n                <div class=\"col-md-6\">\n                    <div *ngIf=\"current_mode == 2\" class=\"panel-body\" style=\"min-height: 200px;\">\n                        <h3 style=\"text-align: center;\">Ваш ход</h3>\n\n                        <span>Вам нужно сказать:</span> \n                        <div *ngFor=\"let item of current_step.variants\">\n                            <div class=\"well\">\n                                <h4 class=\"text-success\">{{item.task}}</h4>\n                            </div>\n                            <div>\n                                <h4 *ngIf=\"!passed_turns.pupil\" class=\"text-warning\" style=\"text-align: center;\">Партнер еще не делал свой ход</h4>\n                               \n                                <button *ngIf=\"item.prev_step > 0\" class=\"btn btn-info\" type=\"button\" (click)=\"nextStep(item.prev_step)\">Назад</button>\n                                \n                                <button class=\"btn btn-warning\" type=\"button\" (click)=\"pupilTurn()\">Передать ход партнеру</button>\n\n                                <button *ngIf=\"hasNextTurn(item) && passed_turns.pupil\" class=\"btn btn-success pull-right\" type=\"button\" (click)=\"nextStep(item.next_step)\">Следуюйщий шаг</button>\n                            </div>\n\n                            <h2 *ngIf=\"!hasNextTurn(item) && passed_turns.pupil\" class=\"text-warning\" style=\"text-align: center;\">Это последний шаг диалога</h2>\n                            \n\n                            <div style=\"margin-top:40px\">\n                                <button *ngIf=\"!item.words || (item.words && item.words.length == 0)\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"getWords(item)\">Посмотреть слова</button>\n                                 <button *ngIf=\"item.words && item.words.length > 0\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"clearWords(item)\">Скрыть слова</button>\n                                <button *ngIf=\"!item.hints\"  class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"getHints(item)\">Посмотреть подсказку</button>\n                                <button *ngIf=\"item.hints\" class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"clearHints(item)\">Убрать подсказку</button>\n                            </div>\n\n                            <div *ngIf=\"item.words && item.words.length > 0\" \n                                style=\"margin-top:20px;display: flex;justify-content: center;flex-wrap: wrap;\">\n                                <span *ngFor=\"let item of item.words\" class=\"label label-success\" style=\"margin: 10px;padding: 10px;font-size: 16px;\">{{item}}</span>\n                            </div>\n                            <div *ngIf=\"item.hints\" style=\"margin-top:20px;\">\n                                <p class=\"alert alert-success\" style=\"margin: 5px 0;\">\n                                    {{item.hints}}\n                                </p>\n                            </div>\n                        </div> \n                    </div>\n                    <div *ngIf=\"current_mode == 1\" class=\"panel-body\" style=\"min-height: 200px;\">\n                        <h3 style=\"text-align: center;\">Ожидаем ход игрока</h3>\n                        <p *ngIf=\"message_change_turn_to_master\" style=\"text-align: center;color: brown;\">Партнер готов передать ход</p>\n                        <p *ngIf=\"current_step.variants && current_step.variants.length > 0\">Ему нужно сказать:</p> \n                        <div *ngFor=\"let item of current_step.variants\">\n                            <div class=\"well\">\n                                <p class=\"text-success\">{{item.task}}</p>\n                            </div>\n                            <div class=\"well\">\n                                <p class=\"\" style=\"margin: 5px 0;\">{{item.phrase}}</p>\n                            </div>\n\n                             <h4 *ngIf=\"hasNextTurn(item) && !passed_turns.master\" class=\"text-warning\" style=\"text-align: center;\">Ваш ход еще не был сделан</h4>\n\n\n                            <button *ngIf=\"hasMyTurn()\" class=\"btn btn-warning\" type=\"button\" (click)=\"myTurn()\">Теперь мой ход</button>\n                            <button *ngIf=\"hasPlayerTurn(item)\" class=\"btn btn-success pull-right\" type=\"button\" (click)=\"nextStep(item.next_step)\">Следуюйщий шаг</button>\n                            <h2 *ngIf=\"!hasPlayerTurn(item) && passed_turns.master\" class=\"text-warning\" style=\"text-align: center;\">Это последний шаг диалога</h2>\n                            <button *ngIf=\"!hasPlayerTurn(item) && item.prev_step > 0\" class=\"btn btn-info\" type=\"button\" (click)=\"nextStep(item.prev_step)\">Назад</button>\n                            \n                        </div> \n                    </div>\n                </div>\n                <div class=\"col-md-6\" style=\"min-height: 300px;height: 100%;padding: 20px 0;position: relative;\">\n                    <chat [activedialog]=\"activedialog\" [user]=\"user\"></chat>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"open_change_dialog\">\n    <changecurrentdialog (close_dialog)=\"handlerCloseChangeCurrentDialog($event)\" (selected_dialog)=\"handlerSelectDialog($event)\"></changecurrentdialog>\n</div>"

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
        this.message_change_turn_to_master = false;
        var self = this;
    }
    PlayerDialogPupilComponent.prototype.ngOnInit = function () {
        var self = this;
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            if (message.command == "CHANGE_DIALOG") {
                self.loading = true;
                self.dialogsService.getActiveDialog(message.activedialodid).subscribe(function (activedialog) {
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
                    self.message_change_turn_to_master = false;
                    self.current_step_id = message.STEP_ID;
                    self._setStartStepPersonage(self.current_step_id);
                    self.current_step = self._getNextStep(message.STEP_ID);
                }
                self._detectChanges();
            }
            if (message.command == "CHANGE_PERSONAGE") {
                self.message_change_turn_to_master = false;
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
    PlayerDialogPupilComponent.prototype.triggerTurn = function () {
        var command = {
            command: 'MESSAGE_CHANGE_TURN_TO_MASTER',
            activedialogid: this.activedialog.id,
        };
        this.message_change_turn_to_master = true;
        this.webSocketService.sendCommand(command);
    };
    return PlayerDialogPupilComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlayerDialogPupilComponent.prototype, "activedialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlayerDialogPupilComponent.prototype, "user", void 0);
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

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div style=\"margin: 20px;\">\n            <div *ngIf=\"activedialog && activedialog.dialog && activedialog.dialog.scenario\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                    Текущий шаг: {{current_step.number}} / {{activedialog.dialog.scenario.steps.length}}\n                </div>\n                <div class=\"col-md-6\">\n                    <div *ngIf=\"current_mode == 2\" class=\"panel-body\" style=\"min-height: 200px;\">\n                        <h3 *ngIf=\"current_step.variants && current_step.variants.length > 0\" style=\"text-align: center;\">Ваш ход</h3>\n                        \n                        <span>Вам нужно сказать:</span> \n                        <div *ngFor=\"let item of current_step.variants\">\n                            <div class=\"well\">\n                                <h4 class=\"text-success\">{{item.task}}</h4>\n                            </div>\n                            <div style=\"margin-top:20px\">\n                                <button class=\"btn btn-warning\" type=\"button\" (click)=\"triggerTurn()\" [disabled]=\"message_change_turn_to_master\">Ход завершен, готов передать</button>\n                            </div>\n                            <div style=\"margin-top:40px\">\n                                <button *ngIf=\"!item.words || !item.words.length\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"getWords(item)\">Посмотреть слова</button>\n                                <button *ngIf=\"item.words && item.words.length > 0\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"clearWords(item)\">Скрыть слова</button>\n                                <button *ngIf=\"!item.hints\"  class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"getHints(item)\">Посмотреть подсказку</button>\n                                <button *ngIf=\"item.hints\" class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"clearHints(item)\">Убрать подсказку</button>\n\n                            </div>\n\n                            <div *ngIf=\"item.words && item.words.length > 0\" style=\"margin-top:20px;display: flex;justify-content: center;flex-wrap: wrap;\">\n                                <span *ngFor=\"let item of item.words\" class=\"label label-success\" style=\"margin: 10px;padding: 10px;font-size: 16px;\">{{item}}</span>\n                            </div>\n                            <div *ngIf=\"item.hints\" style=\"margin-top:20px;\">\n                                <p class=\"alert alert-success\" style=\"margin: 5px 0;\">\n                                    {{item.hints}}\n                                </p>\n                            </div>\n                        </div> \n                    </div>\n\n                    <!-- ход ведущего -->\n                    <div *ngIf=\"current_mode == 1\" class=\"panel-body\" style=\"min-height: 200px;\">\n                        <h3 style=\"text-align: center;\">Ожидаем ход ведущего</h3>\n                        <button class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"show_master_text=!show_master_text\">Показать слова партнера</button>\n                        <div *ngIf=\"show_master_text\">\n                            <span>Ему нужно сказать:</span> \n                            <div *ngFor=\"let item of current_step.variants\">\n                                <p class=\"text-success\">{{item.task}}</p>\n                                <p class=\"\" style=\"margin: 5px 0;\">{{item.phrase}}</p>\n                            </div> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\" style=\"min-height: 300px;height: 100%;padding: 20px 0;position: relative;\">\n                    <chat [activedialog]=\"activedialog\" [user]=\"user\"></chat>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/scenario/scenario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Observable } from 'rxjs/Observable';


var ScenarioComponent = (function () {
    function ScenarioComponent(dialogsService) {
        var _this = this;
        this.dialogsService = dialogsService;
        this.onCenterChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.onZoomInChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.onZoomOutChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.loading = false;
        this.graphData = {};
        this.tapNodeFn = this.tapNode.bind(this);
        this.tapBgFn = this.tapBg.bind(this);
        this.phraseChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.phrase_is_changed = false;
        this.phraseChanged
            .debounceTime(2000) // wait 1 sec after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (model) {
            _this._save();
            _this.phrase_is_changed = false;
        });
    }
    ScenarioComponent.prototype.ngOnInit = function () {
        this._makeData();
    };
    ScenarioComponent.prototype.ngAfterViewInit = function () {
    };
    ScenarioComponent.prototype._makeData = function () {
        if (!this.dialogue) {
            return;
        }
        var nodes = [];
        var edges = [];
        for (var i = 0; i < this.dialogue.scenario.steps.length; i++) {
            var step = this.dialogue.scenario.steps[i];
            // шаг
            var data = {
                data: {
                    id: step.id,
                    name: 'Шаг ' + step.id + ' ',
                    weight: 165,
                    faveColor: '#6FB1FC',
                    faveShape: 'rectangle'
                }
            };
            if (step.start_personage == 'master') {
                data.data.faveColor = '#6FB1FC';
            }
            else {
                data.data.faveColor = '#F5A45D';
            }
            nodes.push(data);
            // вырианты
            for (var j = 0; j < step.master.variants.length; j++) {
                var variant = step.master.variants[j];
                var data_1 = {
                    data: {
                        id: variant.id,
                        weight: 165,
                        faveColor: '#6FB1FC',
                        faveShape: 'rectangle',
                        strength: 90
                    }
                };
                if (step.master.variants[j].phrase) {
                    data_1["data"]["name"] = 'Ведущий: \n' + step.master.variants[j].phrase;
                }
                else {
                    data_1["data"]["name"] = 'Ведущий';
                }
                nodes.push(data_1);
            }
            for (var j = 0; j < step.pupil.variants.length; j++) {
                var variant = step.pupil.variants[j];
                var data_2 = {
                    data: {
                        id: variant.id,
                        weight: 165,
                        faveColor: '#F5A45D',
                        faveShape: 'rectangle',
                        strength: 90
                    }
                };
                if (step.pupil.variants[j].phrase) {
                    data_2["data"]["name"] = 'Игрок: \n' + step.pupil.variants[j].phrase;
                }
                else {
                    data_2["data"]["name"] = 'Игрок';
                }
                nodes.push(data_2);
            }
        }
        nodes.push({
            data: {
                id: -1,
                name: 'Конец',
                weight: 165,
                faveColor: '#F5A45D',
                faveShape: 'ellipse'
            }
        });
        for (var i = 0; i < this.dialogue.scenario.steps.length; i++) {
            var step = this.dialogue.scenario.steps[i];
            for (var j = 0; j < step.master.variants.length; j++) {
                var sdata = {
                    data: {
                        source: step.id,
                        target: step.master.variants[j].id,
                        faveColor: '#6FB1FC',
                        strength: 90
                    }
                };
                edges.push(sdata);
                var tdata = {
                    data: {
                        source: step.master.variants[j].id,
                        target: step.master.variants[j].next_step,
                        faveColor: '#6FB1FC',
                        strength: 90
                    }
                };
                edges.push(tdata);
            }
            for (var j = 0; j < step.pupil.variants.length; j++) {
                var sdata = {
                    data: {
                        source: step.id,
                        target: step.pupil.variants[j].id,
                        faveColor: '#F5A45D',
                        strength: 90
                    }
                };
                edges.push(sdata);
                var tdata = {
                    data: {
                        source: step.pupil.variants[j].id,
                        target: step.pupil.variants[j].next_step,
                        faveColor: '#F5A45D',
                        strength: 90
                    }
                };
                edges.push(tdata);
            }
        }
        this.graphData = {
            nodes: nodes,
            edges: edges
        };
    };
    ScenarioComponent.prototype.ngOnDestroy = function () {
    };
    ScenarioComponent.prototype.tapNode = function (node) {
        // console.log('tapNode', node.id())
        this.selected_step = null;
        var id = node.id();
        if (id.startsWith('m')) {
            for (var i = 0; i < this.dialogue.scenario.steps.length; i++) {
                for (var j = 0; j < this.dialogue.scenario.steps[i].master.variants.length; j++) {
                    if (this.dialogue.scenario.steps[i].master.variants[j].id == node.id()) {
                        this.selected_step = this.dialogue.scenario.steps[i];
                        this.selected_step_type = 'master';
                        break;
                    }
                }
            }
        }
        else if (id.startsWith('p')) {
            for (var i = 0; i < this.dialogue.scenario.steps.length; i++) {
                for (var j = 0; j < this.dialogue.scenario.steps[i].pupil.variants.length; j++) {
                    if (this.dialogue.scenario.steps[i].pupil.variants[j].id == node.id()) {
                        this.selected_step = this.dialogue.scenario.steps[i];
                        this.selected_step_type = 'pupil';
                        break;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.dialogue.scenario.steps.length; i++) {
                if (this.dialogue.scenario.steps[i].id == node.id()) {
                    this.selected_step = this.dialogue.scenario.steps[i];
                    this.selected_step_type = 'step';
                    break;
                }
            }
        }
    };
    ScenarioComponent.prototype.tapBg = function () {
        this.selected_step = null;
    };
    ScenarioComponent.prototype.changePersonage = function () {
        this._makeData();
    };
    ScenarioComponent.prototype.centerChange = function () {
        this.onCenterChange.next();
    };
    ScenarioComponent.prototype.zoomInChange = function () {
        this.onZoomInChange.next();
    };
    ScenarioComponent.prototype.zoomOutChange = function () {
        this.onZoomOutChange.next();
    };
    ScenarioComponent.prototype._recalculateSteps = function () {
        var steps = this.dialogue.scenario.steps;
        for (var i = 0; i < steps.length; i++) {
            var new_id = i + 1;
            steps[i].id = new_id;
            steps[i].number = new_id;
            steps[i].master.number = new_id;
            steps[i].pupil.number = new_id;
            for (var j = 0; j < steps[i].master.variants.length; j++) {
                steps[i].master.variants[j].id = 'm' + new_id + '.' + (j + 1);
                if (i > 0) {
                    steps[i].master.variants[j].prev_step = steps[i - 1].id;
                }
                else {
                    steps[i].master.variants[j].prev_step = -1;
                }
                if (i < steps.length - 1) {
                    steps[i].master.variants[j].next_step = new_id + 1;
                }
                if (i == steps.length - 1) {
                    steps[i].master.variants[j].next_step = -1;
                }
            }
            for (var j = 0; j < steps[i].pupil.variants.length; j++) {
                steps[i].pupil.variants[j].id = 'p' + new_id + '.' + (j + 1);
                if (i > 0) {
                    steps[i].pupil.variants[j].prev_step = steps[i - 1].id;
                }
                else {
                    steps[i].pupil.variants[j].prev_step = -1;
                }
                if (i < steps.length - 1) {
                    steps[i].pupil.variants[j].next_step = new_id + 1;
                }
                if (i == steps.length - 1) {
                    steps[i].pupil.variants[j].next_step = -1;
                }
            }
        }
    };
    ScenarioComponent.prototype.addStep = function () {
        if (this.selected_step) {
            var steps = this.dialogue.scenario.steps;
            var current_step_id = this.selected_step.id;
            var current_step_index = -1;
            var next_step = void 0;
            var founded = false;
            for (var i = 0; i < steps.length; i++) {
                if (founded) {
                    if (!next_step) {
                        next_step = steps[i];
                    }
                }
                if (steps[i].id == current_step_id) {
                    current_step_index = i;
                    founded = true;
                }
            }
            if (current_step_index > -1) {
                var new_step_id = this.selected_step.id + 1;
                var new_step = {
                    "id": new_step_id,
                    "number": new_step_id,
                    "start_personage": this.selected_step.start_personage,
                    "master": {
                        "number": new_step_id,
                        "variants": [{
                                "id": 'm' + new_step_id + '.' + 1,
                            }]
                    },
                    "pupil": {
                        "number": new_step_id,
                        "variants": [{
                                "id": 'p' + new_step_id + '.' + 1,
                            }]
                    }
                };
                steps.splice(current_step_index + 1, 0, new_step);
                this._recalculateSteps();
                this.selected_step = this.getStepById(new_step_id);
                this.dialogue.scenario.steps = steps;
                this._makeData();
                this._save();
            }
            console.log('steps', steps);
        }
    };
    ScenarioComponent.prototype.getStepById = function (step_id) {
        var steps = this.dialogue.scenario.steps;
        for (var i = 0; i < steps.length; i++) {
            if (steps[i].id == step_id) {
                return steps[i];
            }
        }
    };
    ScenarioComponent.prototype.deleteStep = function () {
        if (this.selected_step.id == 1) {
            return;
        }
        var steps = this.dialogue.scenario.steps;
        var step_index = -1;
        for (var i = 0; i < steps.length; i++) {
            if (steps[i].id == this.selected_step.id) {
                step_index = i;
                break;
            }
        }
        if (step_index > 0) {
            steps.splice(step_index, 1);
            this._recalculateSteps();
            this.selected_step = null;
            this.selected_step_type = null;
            this.dialogue.scenario.steps = steps;
            this._makeData();
            this._save();
        }
    };
    ScenarioComponent.prototype._save = function () {
        var params = {
            steps: this.dialogue.scenario.steps
        };
        //this.loading = true;
        this.dialogsService.saveMyDialogs(this.dialogue.id, params).subscribe(function (data) {
            //this.loading = false;
        });
    };
    ScenarioComponent.prototype.saveSteps = function () {
        this._save();
    };
    ScenarioComponent.prototype.changedData = function ($event, item, type_text) {
        this.phrase_is_changed = true;
        item[type_text] = $event;
        this.phraseChanged.next($event);
    };
    ScenarioComponent.prototype.refreshMap = function () {
        this._makeData();
    };
    return ScenarioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ScenarioComponent.prototype, "dialogue", void 0);
ScenarioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'scenario',
        template: __webpack_require__("../../../../../src/app/components/scenario/scenatio.template.html"),
        styles: ["\n      ng2-cytoscape {\n        width: 100%;\n        height: 500px;\n        border:1px solid #ddd;\n        display: inline-block;\n    }"],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */]) === "function" && _a || Object])
], ScenarioComponent);

var _a;
//# sourceMappingURL=scenario.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/scenario/scenatio.template.html":
/***/ (function(module, exports) {

module.exports = "<h4>Редактор шагов</h4>\n<p>Всего шагов: {{ dialogue.scenario.steps.length }}</p>\n<div class=\"col-md-6\">\n    <div style=\"margin: 20px 0px;\">\n       \n        <button *ngIf=\"selected_step_type == 'step' && selected_step.id > 1\" class=\"btn btn-danger\" type=\"button\" (click)=\"deleteStep()\">Удалить выбранный шаг</button>\n    </div>\n    <div class=\"pull-right\" style=\"margin-bottom: 5px;\">\n         <button class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"refreshMap()\" style=\"\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n        </button>\n        <button class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"centerChange()\" style=\"\">\n            <span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\n        </button>\n        <button class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"zoomInChange()\" style1=\"position:absolute;top:0px;left:30px;z-index:100;\">\n            <span class=\"glyphicon glyphicon-resize-full\" aria-hidden=\"true\"></span>\n        </button>\n        <button class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"zoomOutChange()\" style1=\"position:absolute;top:0px;left:60px;z-index:100;\">\n            <span class=\"glyphicon glyphicon-resize-small\" aria-hidden=\"true\"></span>\n        </button>\n    </div>\n    <ng2-cytoscape [elements]=\"graphData\" [tapNode]=\"tapNodeFn\" [tapBg]=\"tapBgFn\" [clickCenter]=\"onCenterChange\" [clickZoomIn]=\"onZoomInChange\" [clickZoomOut]=\"onZoomOutChange\"></ng2-cytoscape>\n</div>\n<div class=\"col-md-6\">\n    <div *ngIf=\"selected_step_type\">\n        <form #frm=\"ngForm\" (ngSubmit)=\"submit()\" style=\"max-width: 400px;margin: auto;\">\n            <div *ngIf=\"selected_step && selected_step_type == 'step'\" class=\"well\">\n                <div class=\"form-group\">\n                    <label>Первый персонаж в выбранном шаге</label>\n\n                    <select class=\"form-control\" name=\"start_personage\" (change)=\"changePersonage()\" [(ngModel)]=\"selected_step.start_personage\" style=\"background-color: white;\">\n                        <option *ngFor=\"let personage of dialogue.scenario.personages\" [value]=\"personage.role\">{{personage.name}}</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveSteps()\">Сохранить изменить</button>\n                </div>\n            </div>\n            <div *ngIf=\"selected_step && selected_step_type == 'master'\" class=\"well\" style=\"background-color: aliceblue;\">\n                <h3 *ngIf=\"selected_step\" style=\"text-align: center;\">\n                    Выбранный шаг: {{selected_step.id}}\n                    Персонаж A\n                </h3>\n                <div *ngFor=\"let variant of selected_step.master.variants\">\n                    <div class=\"form-group\">\n                        <label>Задание</label>\n                        <textarea class=\"form-control\" name=\"master_task\" [ngModel]=\"variant.task\" style=\"background-color: white;\" (ngModelChange)=\"changedData($event, variant, 'task')\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Правильная фраза</label>\n                        <textarea class=\"form-control\" name=\"master_phrase\" [ngModel]=\"variant.phrase\" style=\"background-color: white;\" (ngModelChange)=\"changedData($event, variant, 'phrase')\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <p *ngIf=\"phrase_is_changed\" style=\"margin: 0;font-size: 10px;\">Изменения пока еще не сохранены</p>\n                        <button class=\"btn btn-info\" type=\"button\" (click)=\"addStep()\">Добавить следующий шаг</button>\n                    </div>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"selected_step && selected_step_type == 'pupil'\" class=\"well\" style=\"background-color: #fcf8e3;\">\n                <h3 *ngIf=\"selected_step\" style=\"text-align: center;\">\n                        Выбранный шаг: {{selected_step.id}}\n                        Персонаж B\n                </h3>\n                <div *ngFor=\"let variant of selected_step.pupil.variants\">\n                    <div class=\"form-group\">\n                        <label>Задание</label>\n                        <textarea class=\"form-control\" name=\"pupil_task\" [ngModel]=\"variant.task\" style=\"background-color: white;\" (ngModelChange)=\"changedData($event, variant, 'task')\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Правильная фраза</label>\n                        <textarea class=\"form-control\" name=\"pupil_phrase\" [ngModel]=\"variant.phrase\" style=\"background-color: white;\" (ngModelChange)=\"changedData($event, variant, 'phrase')\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <p *ngIf=\"phrase_is_changed\" style=\"margin: 0;font-size: 10px;\">Изменения пока еще не сохранены</p>\n                        <button class=\"btn btn-info\" type=\"button\" (click)=\"addStep()\">Добавить следующий шаг</button>\n                    </div>\n                </div>\n            </div>\n\n        </form>\n    </div>\n    <div *ngIf=\"!selected_step_type\">\n        <p style=\"text-align: center;\">Выберите шаг для редактирования</p>\n    </div>\n</div>\n\n<!-- Loading -->\n<div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n    <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n    </div>\n    <div style=\"width: 50px;margin: auto;margin-top: 60px;\">\n        <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n    </div>\n</div>\n<!-- END Loading -->"

/***/ }),

/***/ "../../../../../src/app/components/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* unused harmony export Behavior */
/* unused harmony export GenericBehavior */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var TagsComponent = (function () {
    function TagsComponent(element) {
        this.itemsOpened = false;
        this.inputMode = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.typed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChangeSearchValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.items = [];
        this.active = [];
        this.textbtn = "Добавить";
        this.placeholder = "Введите метку";
        this.clearaftereintput = true;
        this.disabled = false;
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.behavior = new GenericBehavior(this);
    };
    TagsComponent.prototype.deleteTags = function (item) {
        this.delete.next(item);
    };
    TagsComponent.prototype.inputEvent = function (e) {
        console.log(e);
        // esc
        if (e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // up
        if (e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (e.keyCode === 13) {
            if (this.inputedValue) {
                this.selectMatch(this.inputedValue);
            }
            e.preventDefault();
            return;
        }
    };
    TagsComponent.prototype.add = function () {
        this.selectMatch(this.inputedValue);
    };
    TagsComponent.prototype.change = function () {
        var value = this.inputedValue;
        var cleanInputValue = this.removeSpecials(value);
        if (cleanInputValue) {
            this.doEvent('typed', cleanInputValue);
        }
        else {
            this.hideOptions();
        }
        this.onChangeSearchValue.emit(cleanInputValue);
    };
    TagsComponent.prototype.isNumber = function (text) {
        var reg = new RegExp('[0-9]+$');
        if (text) {
            return reg.test(text);
        }
        return false;
    };
    TagsComponent.prototype.removeSpecials = function (str) {
        var lower = str.toLowerCase();
        var upper = str.toUpperCase();
        var res = "";
        for (var i = 0; i < lower.length; ++i) {
            if (this.isNumber(lower[i]) || lower[i] != upper[i] || lower[i].trim() === '') {
                res += str[i];
            }
        }
        return res;
    };
    TagsComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        //if (type === 'selected' || type === 'removed') {
        //    this.onChange(this.active);
        //}
    };
    TagsComponent.prototype.matchClick = function (e) {
        this.inputMode = !this.inputMode;
        if (this.inputMode === true) {
            this.focusToInput();
            this.open();
        }
    };
    TagsComponent.prototype.open = function () {
        if (this.items.length > 0) {
            this.behavior.first();
        }
        this.itemsOpened = true;
    };
    TagsComponent.prototype.clickedOutside = function () {
        this.itemsOpened = false;
    };
    TagsComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    TagsComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    TagsComponent.prototype.isActive = function (value) {
        return this.activeOption === value;
    };
    TagsComponent.prototype.hideOptions = function () {
        this.items = [];
        if (this.clearaftereintput) {
            this.itemsOpened = false;
            this.inputMode = false;
            this.inputedValue = "";
            this.activeOption = "";
        }
    };
    TagsComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true) {
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    TagsComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    TagsComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (!value) {
            return;
        }
        this.inputedValue = value;
        this.onChangeSearchValue.emit(value);
        this.doEvent('selected', value);
        this.hideOptions();
        this.focusToInput('');
    };
    return TagsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TagsComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], TagsComponent.prototype, "typed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], TagsComponent.prototype, "opened", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], TagsComponent.prototype, "delete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagsComponent.prototype, "onChangeSearchValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagsComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagsComponent.prototype, "active", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagsComponent.prototype, "textbtn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagsComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagsComponent.prototype, "clearaftereintput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagsComponent.prototype, "disabled", void 0);
TagsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tags',
        styles: [styles],
        template: __webpack_require__("../../../../../src/app/components/tags/tags.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object])
], TagsComponent);

var Behavior = (function () {
    function Behavior(actor) {
        this.actor = actor;
    }
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.items.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());

var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        return _super.call(this, actor) || this;
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.items[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.items[this.actor.items.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.items.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .items[index - 1 < 0 ? this.actor.items.length - 1 : index - 1];
        this.actor.inputedValue = this.actor.activeOption;
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.items.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .items[index + 1 > this.actor.items.length - 1 ? 0 : index + 1];
        this.actor.inputedValue = this.actor.activeOption;
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var options = this.actor.items;
        if (this.actor.items.length > 0) {
            this.actor.activeOption = this.actor.items[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tags.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tags/tags.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-select-container dropdown open\"\n    (keyup)=\"mainClick($event)\"\n    (focus)=\"focusToInput('')\"\n    [offClick]=\"clickedOutside\">\n\n    <div *ngIf=\"active && active.length > 0\" style=\"margin-bottom: 10px;\">\n        <div *ngFor=\"let item of active\" style=\"display: inline-block;margin: 0 5px;\">\n            <span class=\"badge\">{{ item.name }}</span>\n            <span style=\"font-size: 21px;\n                font-weight: 700;\n                line-height: 1;\n                color: #000;\n                text-shadow: 0 1px 0 #fff;\n                filter: alpha(opacity=20);\n                opacity: .2;\n                cursor: pointer;\" (click)=\"deleteTags(item)\">×</span>\n        </div>\n    </div>\n    <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control ui-select-search\" placeholder=\"{{placeholder}}\" \n            autocomplete=\"false\" tabindex=\"-1\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"\n            [(ngModel)]=\"inputedValue\"\n            (ngModelChange)=\"change()\"\n            (keyup)=\"inputEvent($event)\"\n            (focus)=\"focusToInput('')\"\n            (click)=\"matchClick($event)\"\n            [disabled]=\"disabled\">\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"add()\" [disabled]=\"disabled\">{{textbtn}}</button>\n        </span>\n    </div>\n    <!-- options template -->\n     <ul *ngIf=\"itemsOpened && items && items.length > 0\" class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of items\" role=\"menuitem\">\n            <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n                <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    <div> {{ o }}</div>\n                </a>\n            </div>\n        </li>\n    </ul>\n</div>"

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
        var self = this;
        for (var i = 0; i < self.listin.length; i++) {
            if (new Date(self.listin[i].lasttime).getTime() + __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].CALLING_TIME_INTERVAL < new Date().getTime()) {
                self.listin.splice(i, 1);
            }
        }
        //console.log('self.listin', self.listin)
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

module.exports = "<div class=\"\" *ngFor=\"let item of listin\">\n    <div style=\"border: 1px solid;padding: 30px;margin:10px;\">\n        <div class=\"well\" style=\"padding: 0;\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <div *ngIf=\"item.avatar\" \n                        [ngStyle]=\"{'background-image': 'url(' + item.avatar + ')'}\"\n                        class=\"media-object\" style=\"\n                            height: 50px; \n                            width: 50px; \n                            background-size: contain;\n                            border-radius: 50%;\n                            margin: 10px;\">\n                    </div>\n                    <div *ngIf=\"!item.avatar\" \n                        class=\"media-object\" style=\"\n                            height: 50px; \n                            width: 50px; \n                            margin: 10px;\">\n                            <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\" style=\"font-size: 50px;\"></i>\n                    </div>\n                </div>\n                <div class=\"media-body\">\n                    <div>\n                        <p>Звонок от {{item.fio}}</p>\n                    </div>\n                    <div class=\"badge\" style=\"background-color: indianred;\">\n                        {{item.level_display}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <button class=\"btn btn-success\" (click)=\"takeCall(item)\" [disabled]=\"loading\"><span>Принять звонок</span></button>\n        <button class=\"btn btn-default\" (click)=\"rejectCall(item)\" [disabled]=\"loading\"><span>Сбросить</span></button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/models/notification.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var Notification = (function () {
    function Notification(title, classes, message) {
        if (title === void 0) { title = ''; }
        if (classes === void 0) { classes = ''; }
        if (message === void 0) { message = ''; }
        this.title = title;
        this.classes = classes;
        this.message = message;
    }
    return Notification;
}());

//# sourceMappingURL=notification.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
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
    function DialogsService(_http, router, httpClient) {
        this._http = _http;
        this.router = router;
        this.httpClient = httpClient;
    }
    DialogsService.prototype.getDialog = function (dialogue_id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_DIALOGS + dialogue_id + '/')
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getDialogs = function (_params) {
        var url = __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_DIALOGS;
        var data = _params || {};
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]();
        for (var key in data) {
            params = params.set(key, data[key]);
        }
        return this.httpClient.get(url, { params: params })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getActiveDialog = function (activedialogue_id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_ACTIVEDIALOGS + activedialogue_id + '/')
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getActiveDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_ACTIVEDIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getMyActiveDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_MYACTIVEDIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.runDialog = function (dialogue_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_DIALOG_RUN + dialogue_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.stopDialog = function () {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_DIALOG_STOP, {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.runIntoDialog = function (dialogue_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_DIALOG_RUNINTO + dialogue_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.stopActiveDialog = function (dialogue_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_DIALOG_ACTIVESTOP + dialogue_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getMyDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_MYDIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getMyDialog = function (dialogue_id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_MYDIALOGS + dialogue_id + '/')
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.saveMyDialogs = function (dialogue_id, params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_MYDIALOGS + dialogue_id + "/", params)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.createDialog = function (params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_MYDIALOGS, params)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.deleteMyDialogs = function (dialogue_id) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_MYDIALOGS + dialogue_id + "/")
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.getTags = function (type) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_TAGS + "?tags=" + type)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.deleteTagFromDialogs = function (dialogue_id, tag_id) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_TAGS + dialogue_id + '/' + tag_id)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.addTagToDialogs = function (dialogue_id, params) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_TAGS + dialogue_id, params)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError.bind(this));
    };
    DialogsService.prototype.handleError = function (error) {
        console.error(error);
        if (error.status == 403) {
            this.router.navigate(['/accounts/login/']);
        }
        if (error.status == 404) {
            this.router.navigate(['/dialogues/']);
        }
        //error.json().error || 
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw('Server error');
    };
    return DialogsService;
}());
DialogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
], DialogsService);

var _a, _b, _c;
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

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

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
        if (error.status == 403) {
            console.log("XXXX");
            this.router.navigate(['/accounts/login/']);
        }
        if (error.status == 404) {
            this.router.navigate(['/dialogues']);
        }
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

/***/ "../../../../../src/app/vendors/ng2-cytoscape/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgCytoscapeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_cytoscape__ = __webpack_require__("../../../../../src/app/vendors/ng2-cytoscape/ng2-cytoscape.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgCytoscapeModule = (function () {
    function NgCytoscapeModule() {
    }
    return NgCytoscapeModule;
}());
NgCytoscapeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__ng2_cytoscape__["a" /* NgCytoscapeComponent */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ng2_cytoscape__["a" /* NgCytoscapeComponent */]]
    })
], NgCytoscapeModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/vendors/ng2-cytoscape/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__("../../../../../src/app/vendors/ng2-cytoscape/app.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/vendors/ng2-cytoscape/ng2-cytoscape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgCytoscapeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgCytoscapeComponent = (function () {
    function NgCytoscapeComponent(el) {
        this.el = el;
        this.layout = this.layout || {
            /*
            fit: true,
            avoidOverlap: true,
            padding: 30,
            avoidOverlapPadding: 10,
            nodeDimensionsIncludeLabels: false,
            */
            name: 'dagre',
        };
        this.zoom = this.zoom || {
            min: 0.1,
            max: 1
        };
        this.style = this.style || cytoscape.stylesheet()
            .selector('node')
            .css({
            'content': 'data(name)',
            'shape': 'data(faveShape)',
            'text-valign': 'center',
            'text-outline-width': 4,
            'text-outline-color': 'data(faveColor)',
            'background-color': 'data(faveColor)',
            'width': '150px',
            'height': '100px',
            'color': '#fff',
            'text-wrap': 'wrap',
            'text-max-width': '150px'
        })
            .selector(':selected')
            .css({
            'border-width': 3,
            'border-color': '#333'
        })
            .selector('edge')
            .css({
            'label': 'data(label)',
            'color': 'black',
            'curve-style': 'bezier',
            'opacity': 0.666,
            'width': 'mapData(strength, 70, 100, 2, 6)',
            'target-arrow-shape': 'triangle',
            'source-arrow-shape': 'circle',
            'line-color': 'data(faveColor)',
            'source-arrow-color': 'data(faveColor)',
            'target-arrow-color': 'data(faveColor)'
        })
            .selector('edge.questionable')
            .css({
            'line-style': 'dotted',
            'target-arrow-shape': 'diamond'
        })
            .selector('.faded')
            .css({
            'opacity': 0.25,
            'text-opacity': 0
        });
    }
    NgCytoscapeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clickCenter.subscribe(function () {
            _this.center();
        });
        this.clickZoomIn.subscribe(function () {
            _this.zoomin();
        });
        this.clickZoomOut.subscribe(function () {
            _this.zoomout();
        });
    };
    NgCytoscapeComponent.prototype.ngOnChanges = function () {
        this.render();
    };
    NgCytoscapeComponent.prototype.render = function () {
        this.cy = cytoscape({
            container: jQuery(this.el.nativeElement),
            layout: this.layout,
            minZoom: this.zoom.min,
            maxZoom: this.zoom.max,
            style: this.style,
            elements: this.elements,
            zoomingEnabled: false,
            zoom: 0.4,
            selectionType: 'single',
            userPanningEnabled: true,
            panningEnabled: true,
        });
        var self = this;
        this.cy.on('tap', function (evt) {
            var evtTarget = evt.target;
            if (evtTarget === self.cy) {
                self.tapBg();
            }
            else {
                self.tapNode(evtTarget);
            }
            setTimeout(function () {
                self.cy.resize();
            }, 500);
        });
        this.cy.center();
    };
    NgCytoscapeComponent.prototype.center = function () {
        console.log('CENTER');
        this.cy.center();
        this.cy.resize();
    };
    NgCytoscapeComponent.prototype.zoomin = function () {
        var zoom = this.cy.zoom();
        this.cy.zoomingEnabled(true);
        this.cy.zoom(zoom + 0.2);
        this.cy.zoomingEnabled(false);
        this.cy.resize();
    };
    NgCytoscapeComponent.prototype.zoomout = function () {
        var zoom = this.cy.zoom();
        this.cy.zoomingEnabled(true);
        this.cy.zoom(zoom - 0.2);
        this.cy.zoomingEnabled(false);
        this.cy.resize();
    };
    return NgCytoscapeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgCytoscapeComponent.prototype, "elements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgCytoscapeComponent.prototype, "style", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgCytoscapeComponent.prototype, "layout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgCytoscapeComponent.prototype, "zoom", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgCytoscapeComponent.prototype, "tapNode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgCytoscapeComponent.prototype, "tapBg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]) === "function" && _a || Object)
], NgCytoscapeComponent.prototype, "clickCenter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]) === "function" && _b || Object)
], NgCytoscapeComponent.prototype, "clickZoomIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]) === "function" && _c || Object)
], NgCytoscapeComponent.prototype, "clickZoomOut", void 0);
NgCytoscapeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ng2-cytoscape',
        template: '<div id="cy"></div>',
        styles: ["#cy {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        cursor:pointer;\n    }"]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], NgCytoscapeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ng2-cytoscape.js.map

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
        self.statusSubscription = self.statusService.ready.subscribe(function (date) {
            self.user = _this.statusService.user;
            if (!self.user) {
                return;
            }
        });
        self.webSocketSubscription = self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            //console.log('message', message)
            if (message.command == "UPDATE") {
                if (message.target == "activedialogs") {
                    self._updateActiveDialogs();
                }
            }
        });
        self.webSocketSubscriptionError = self.webSocketService.error.subscribe(function (err) {
            console.log("Error", err);
        });
        if (self.loading) {
            self._updateActiveDialogs();
        }
    };
    ActiveDialogsViewComponent.prototype.ngOnDestroy = function () {
        this.webSocketSubscription.unsubscribe();
        this.statusSubscription.unsubscribe();
        this.webSocketSubscriptionError.unsubscribe();
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

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4>Выберите диалог\n                    <button class=\"btn btn-default pull-right\" style=\"margin-top: -10px;\" (click)=\"showActiveDialogs()\">\n                        <i class=\"fa fa-refresh\" aria-hidden=\"true\" style=\"font-size: 20px;\"></i>\n                    </button>\n                </h4>\n            </div>\n            <div class=\"panel-body\" style=\"position: relative;\">\n                <!-- Loading -->\n                <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                    <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                    </div>\n                    <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                        <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                    </div>\n                </div>\n                <!-- END Loading -->\n\n\n                <div class=\"row\" style=\"margin: 20px 0;display: flex;flex-wrap: wrap;\"> \n                    <div *ngIf=\"activedialogs.length == 0\">\n                        <h4 style=\"text-align: center;\">Пока еще нет ни одного диалога в режиме ожидания ученика</h4>\n                    </div>\n                    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of activedialogs\"> \n                        <div class=\"thumbnail\">\n                            <div class=\"\" style=\"width: 100%;position: relative;\"> \n                                <img *ngIf=\"!item.dialog.background_image\" alt=\"100%x200\" data-src=\"holder.js/100%x200\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVlOTZiYzA5NjUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWU5NmJjMDk2NSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS40Ij4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+\" data-holder-rendered=\"true\" style=\"height: 60px; width: 90px; display: block;float: left;\"> \n                                <div *ngIf=\"item.dialog.background_image\" \n                                    [ngStyle]=\"{'background-image': 'url(' + item.dialog.background_image + ')'}\"\n                                    style=\"\n                                        height: 60px; \n                                        width: 90px; \n                                        background-size: cover;\n                                        display: block;\n                                        float: left;\"></div>\n                                <div style=\"position: absolute; right: 0;top:0;display: flex;align-items: center;\">\n                                    <p class=\"badge\" style=\"margin: 5px;\">{{item.dialog.level_display}}</p>\n                                </div>\n\n                                <div style=\"text-align: right;padding-top: 25px;\">\n                                    <p class=\"badge badge-info\" style=\"margin:5px;background-color: darkcyan;\" *ngFor=\"let item of item.dialog.tags\">{{item.name}}</p>\n                                </div>\n                            </div>\n                            <div class=\"caption\"> \n\n                                <p *ngIf=\"item.dialog\" style=\"font-size: 8px;margin:0;\">Кол-во шагов: {{item.dialog.scenario.steps.length || 0}}</p> \n                                <p *ngIf=\"item.dialog && item.dialog.owner\" style=\"font-size: 8px;margin:0;\">Создано: {{item.dialog.owner?.fio}}</p> \n\n                                <h3>{{item.dialog?.name}}</h3> \n                                <div>\n                                    <p style=\"font-size: 12px;\">{{item.dialog.description}}</p> \n                                </div>\n                                <div class=\"well\" style=\"padding: 0;\">\n                                    <div class=\"media\">\n                                        <div class=\"media-left\">\n                                            <div *ngIf=\"item.master.avatar\" \n                                                [ngStyle]=\"{'background-image': 'url(' + item.master.avatar + ')'}\"\n                                                class=\"media-object\" style=\"\n                                                    height: 50px; \n                                                    width: 50px; \n                                                    background-size: contain;\n                                                    border-radius: 50%;\n                                                    margin: 10px;\">\n                                            </div>\n                                            <div *ngIf=\"!item.master.avatar\" \n                                                class=\"media-object\" style=\"\n                                                    height: 50px; \n                                                    width: 50px; \n                                                    margin: 10px;\">\n                                                    <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\" style=\"font-size: 50px;\"></i>\n                                            </div>\n                                        </div>\n                                        <div class=\"media-body\">\n                                            <div>\n                                                <p style=\"text-align: right;margin: 5px 10px;\">{{item.master?.fio}}</p>\n                                            </div>\n                                            <div class=\"badge\" style=\"background-color: indianred;\">\n                                                {{item.master.level_display}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                               \n                                <p>\n                                    <button class=\"btn btn-primary\" (click)=\"callDialog(item)\">\n                                        Позвонить\n                                    </button> \n                                </p> \n                            </div> \n                        </div> \n                    </div> \n                </div>\n\n\n            </div>\n        </div>\n        \n\n        <!--\n        <div *ngIf=\"mode == 'mode_calling'\">\n            <modecalling [callingdialog]=\"callingdialog\" (stopcalling)=\"handlerStopCalling($event)\"></modecalling>\n        </div>\n\n\n        \n        <div *ngIf=\"mode == 'mode_dialog_master'\">\n            <modedialogmaster [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogmaster>\n        </div>\n            \n\n        <div *ngIf=\"mode == 'mode_dialog_pupil'\">\n            <modedialogpupil [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogpupil>\n        </div>\n    -->\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/appviews.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppviewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendors_ng2_cytoscape__ = __webpack_require__("../../../../../src/app/vendors/ng2-cytoscape/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogsview_component__ = __webpack_require__("../../../../../src/app/views/dialogsview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activedialogsview_component__ = __webpack_require__("../../../../../src/app/views/activedialogsview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_view_block_calling_callingfroms_component__ = __webpack_require__("../../../../../src/app/components/view_block_calling/callingfroms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_mode_dialog_pupil_mode_dialog_pupil_component__ = __webpack_require__("../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_mode_dialog_master_mode_dialog_master_component__ = __webpack_require__("../../../../../src/app/components/mode_dialog_master/mode_dialog_master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialogview_component__ = __webpack_require__("../../../../../src/app/views/dialogview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_player_dialog_master_player_dialog_master_component__ = __webpack_require__("../../../../../src/app/components/player_dialog_master/player_dialog_master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_player_dialog_pupil_player_dialog_pupil_component__ = __webpack_require__("../../../../../src/app/components/player_dialog_pupil/player_dialog_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_mode_wait_pupil_view_mode_wait_pupil_component__ = __webpack_require__("../../../../../src/app/views/view_mode_wait_pupil/view_mode_wait_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_mode_calling_view_mode_calling_component__ = __webpack_require__("../../../../../src/app/views/view_mode_calling/view_mode_calling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_change_current_dialog_change_current_dialog_component__ = __webpack_require__("../../../../../src/app/components/change_current_dialog/change_current_dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__view_message_view_message_component__ = __webpack_require__("../../../../../src/app/views/view_message/view_message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/views/view_profile/view_profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__view_help_view_help_component__ = __webpack_require__("../../../../../src/app/views/view_help/view_help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_common_notification_notification_component__ = __webpack_require__("../../../../../src/app/components/common/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mydialogues_mydialogues_component__ = __webpack_require__("../../../../../src/app/views/mydialogues/mydialogues.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mydialogues_mydialogue_edit_component__ = __webpack_require__("../../../../../src/app/views/mydialogues/mydialogue.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_scenario_scenario_component__ = __webpack_require__("../../../../../src/app/components/scenario/scenario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tags_tags_component__ = __webpack_require__("../../../../../src/app/components/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__view_profile_equal_validator_directive__ = __webpack_require__("../../../../../src/app/views/view_profile/equal_validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { FileSelectDirective } from 'ng2-file-upload';
//import { FileSelectDirective } from '../../../node_modules/ng2-file-upload';























var AppviewsModule = (function () {
    function AppviewsModule() {
    }
    return AppviewsModule;
}());
AppviewsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__dialogsview_component__["a" /* DialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__activedialogsview_component__["a" /* ActiveDialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_view_block_calling_callingfroms_component__["a" /* CallingFromsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_mode_dialog_pupil_mode_dialog_pupil_component__["a" /* ModeDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_mode_dialog_master_mode_dialog_master_component__["a" /* ModeDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dialogview_component__["a" /* DialogViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_player_dialog_master_player_dialog_master_component__["a" /* PlayerDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_player_dialog_pupil_player_dialog_pupil_component__["a" /* PlayerDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_15__view_mode_wait_pupil_view_mode_wait_pupil_component__["a" /* ModeWaitPupilViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__view_mode_calling_view_mode_calling_component__["a" /* ModeCallingViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_change_current_dialog_change_current_dialog_component__["a" /* ChangeCurrentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18__view_message_view_message_component__["a" /* MessageViewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__view_profile_view_profile_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__view_help_view_help_component__["a" /* HelpViewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__view_profile_equal_validator_directive__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_21__components_common_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_23__mydialogues_mydialogues_component__["a" /* MyDialoguesViewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__mydialogues_mydialogue_edit_component__["a" /* MyDialogueEditViewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_scenario_scenario_component__["a" /* ScenarioComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_tags_tags_component__["a" /* TagsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__vendors_ng2_cytoscape__["a" /* NgCytoscapeModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__dialogsview_component__["a" /* DialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__activedialogsview_component__["a" /* ActiveDialogsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_view_block_calling_callingfroms_component__["a" /* CallingFromsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_mode_dialog_pupil_mode_dialog_pupil_component__["a" /* ModeDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_mode_dialog_master_mode_dialog_master_component__["a" /* ModeDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dialogview_component__["a" /* DialogViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_player_dialog_master_player_dialog_master_component__["a" /* PlayerDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_player_dialog_pupil_player_dialog_pupil_component__["a" /* PlayerDialogPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_15__view_mode_wait_pupil_view_mode_wait_pupil_component__["a" /* ModeWaitPupilViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__view_mode_calling_view_mode_calling_component__["a" /* ModeCallingViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_change_current_dialog_change_current_dialog_component__["a" /* ChangeCurrentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18__view_message_view_message_component__["a" /* MessageViewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__view_profile_view_profile_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__view_help_view_help_component__["a" /* HelpViewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__view_profile_equal_validator_directive__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_21__components_common_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_23__mydialogues_mydialogues_component__["a" /* MyDialoguesViewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__mydialogues_mydialogue_edit_component__["a" /* MyDialogueEditViewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_scenario_scenario_component__["a" /* ScenarioComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_tags_tags_component__["a" /* TagsComponent */],
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
        this.dialogs = [];
        this.mode = 'mode_list'; // 1 - all dialogs 'wait_pupil' - activedialogs 3 - calling
        this.activedialog = null;
        this.activedialog_id = null;
        this.loading = true;
        this.reject_call_from = null;
        this.count = 0;
        this.next = false;
        this.previous = false;
        this.next_url = false;
        this.previous_url = false;
        this.levels = [
            {
                id: 0,
                title: "Выберите уровень знания"
            }, {
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
        this.show_inputed_dialogs = false;
        this.tags = [];
        this._CALLING_TIME_INTERVAL = 3000;
        this._searchValue = "";
    }
    DialogsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.selectedDialogLevel = self.levels[0].id;
        self.statusSubscription = self.statusService.ready.subscribe(function (date) {
            self.user = _this.statusService.user;
            //console.log('self.user', self.user)
            if (!self.user) {
                return;
            }
            self.mode = _this.statusService.mode;
            self.activedialog = self.statusService.activedialog;
        });
        self.webSocketSubscription = self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
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
        self._getDialogs();
    };
    DialogsViewComponent.prototype._getDialogs = function (page) {
        var _this = this;
        var params = {};
        if (page) {
            params['page'] = page;
        }
        if (!this.show_inputed_dialogs) {
            if (this.selectedDialogLevel) {
                params['level'] = this.selectedDialogLevel;
            }
            if (this._searchValue) {
                params['search'] = this._searchValue;
            }
        }
        else {
            params['inputed'] = true;
        }
        this.dialogsService.getDialogs(params).subscribe(function (data) {
            _this.next = data.next;
            _this.previous = data.previous;
            _this.count = data.count;
            _this.dialogs = data.dialogs;
            _this.loading = false;
        });
    };
    DialogsViewComponent.prototype.ngOnDestroy = function () {
        this.statusSubscription.unsubscribe();
        this.webSocketSubscription.unsubscribe();
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
            }
        });
    };
    DialogsViewComponent.prototype.handlerStopCalling = function ($event) {
        this.callingdialog = null;
        this.mode = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].MODE_LIST;
        //this._updateActiveDialogs();
    };
    DialogsViewComponent.prototype.handlerAcceptCall = function (user_key_id) {
        var self = this;
        self.webSocketService.sendCommand({
            command: 'START_DIALOG',
            target: self.activedialog.id,
            master: self.user.key_id,
            pupil: user_key_id
        });
    };
    DialogsViewComponent.prototype.nextPage = function () {
        this._getDialogs(this.next);
    };
    DialogsViewComponent.prototype.prevPage = function () {
        this._getDialogs(this.previous);
    };
    DialogsViewComponent.prototype.showInputDialogs = function () {
        this.show_inputed_dialogs = !this.show_inputed_dialogs;
        this._getDialogs();
    };
    DialogsViewComponent.prototype.searchTags = function (value) {
        var _this = this;
        this.dialogsService.getTags(value).subscribe(function (res) {
            _this.tags = res;
        });
    };
    DialogsViewComponent.prototype.selectedTag = function (value) {
        this._getDialogs();
    };
    DialogsViewComponent.prototype.changeLevel = function () {
        this._getDialogs();
    };
    DialogsViewComponent.prototype.onChangeSearchValue = function (data) {
        this._searchValue = data;
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

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4>Выберите диалог</h4>\n                <div style=\"display: inline-block;\">\n                    <div>\n                        <div class=\"col-md-4\">\n                             <tags [items]=\"tags\"\n                                (typed)=\"searchTags($event)\" \n                                (selected)=\"selectedTag($event)\"\n                                [clearaftereintput]=\"false\"\n                                [textbtn]=\"'Искать'\"\n                                [placeholder]=\"''\"\n                                [disabled]=\"show_inputed_dialogs\"\n                                (onChangeSearchValue)=\"onChangeSearchValue($event)\"\n                                ></tags>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <select name=\"frm_level\" id=\"level\" class=\"form-control\" [(ngModel)]=\"selectedDialogLevel\"(change)=\"changeLevel()\" [disabled]=\"show_inputed_dialogs\">\n                                <option *ngFor=\"let level of levels\" [value]=\"level.id\">{{level.title}}</option>\n                            </select>\n                        </div>\n                        <div class=\"col-md-4\" style=\"text-align: right;\">\n                            <p>Всего найдено {{count}} диалогов</p>\n                        </div>\n                    </div>\n\n\n                    <div style=\"clear: both;display: flex;\">\n                        <div style=\"width: 20px;height: 20px;border: 2px solid darkcyan;border-radius: 4px;cursor: pointer;margin: 10px;\" (click)=\"showInputDialogs()\">\n                            <div *ngIf=\"show_inputed_dialogs\" style=\"width: 8px;height: 8px;background-color: darkcyan;border-radius: 4px;margin:4px;\"></div>\n                        </div>\n                        <p style=\"margin: 10px 0 0 0;cursor: pointer;\" (click)=\"showInputDialogs()\">Показать только диалоги по которым я принимаю звонки</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body\" style=\"position: relative;\">\n                <!-- Loading -->\n                <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                    <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                    </div>\n                    <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                        <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                    </div>\n                </div>\n                <!-- END Loading -->\n\n                <div class=\"row\" style=\"margin: 20px 0;display: flex;flex-wrap: wrap;\"> \n                    <h4 *ngIf=\"dialogs.length == 0\" style=\"text-align: center;width: 100%;\">Диалоги не найдены</h4>\n                    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of dialogs\"> \n                        <div class=\"thumbnail\"> \n                            <div class=\"\" style=\"width: 100%;position: relative;\">\n                                <div>\n                                    <div *ngIf=\"!item.background_image\" \n                                        style=\"\n                                            height: 60px; \n                                            width: 90px; \n                                            border: 1px solid #ccc;\n                                            background-color: #ddd;\n                                            \">\n                                    </div>\n                                    <div *ngIf=\"item.background_image\" \n                                        [ngStyle]=\"{'background-image': 'url(' + item.background_image + ')'}\"\n                                        style=\"\n                                            height: 60px; \n                                            width: 90px; \n                                            background-size: cover;\n                                            display: block;\"></div>\n                                    <p style=\"font-size: 8px;margin:0;\">Кол-во шагов: {{item.scenario.steps.length || 0}}</p> \n                                    <p style=\"font-size: 8px;margin:0;\">Создано: {{item.owner.fio}}</p> \n                                </div>\n\n                                <div style=\"position: absolute; right: 0;top:0;display: flex;align-items: center;flex-wrap: wrap;justify-content: flex-end;\">\n                                    \n                                    <p  class=\"badge\" [ngClass]=\"{\n                                        'bg-color-begin': item.level == 10,\n                                        'bg-color-preintermediate': item.level == 20,\n                                        'bg-color-intermediate': item.level == 30\n                                    }\" style=\"margin: 5px;\">{{item.level_display}}</p>\n                                    \n                                    <div style=\"margin-left: 5px;\">\n                                        <p style=\"font-size: 10px;width: 100%;text-align: right;margin: 0;\">Принимать звонки?</p>\n                                        <div style=\"width: 40px;height: 40px;border: 2px solid darkcyan;border-radius: 4px;cursor: pointer;margin: auto;\" (click)=\"turnActiveDialog(item)\">\n                                            <div *ngIf=\"item.checked\" style=\"width: 28px;height: 28px;background-color: darkcyan;border-radius: 4px;margin:4px;\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div style=\"text-align: right;\">\n                                    <p class=\"badge badge-info\" style=\"margin:5px;background-color: darkcyan;\" *ngFor=\"let item of item.tags\">{{item.name}}</p>\n                                </div>\n                            </div>\n                            <div class=\"caption\" style=\"clear:both;\"> \n                                \n                                <h3 style=\"margin:0;\">{{item.name}}</h3> \n                                <p>{{item.description}}</p> \n                                <p><!--\n                                    <button class=\"btn btn-primary\" (click)=\"runDialog(item)\">\n                                        Запустить диалог и ждать собеседника\n                                    </button> \n                                -->\n                                    <button class=\"btn btn-success btn-xs\" [routerLink]=\"['/dialogue', item.id]\">\n                                        Просмотреть\n                                    </button> \n                                </p> \n                            </div> \n                        </div> \n                    </div> \n                    <div style=\"width: 100%; text-align: center;\">\n                        <nav>\n                            \n                            <ul class=\"pager\">\n                                <li *ngIf=\"previous\"><button type=\"button\" class=\"btn btn-default\" (click)=\"prevPage()\">Предыдущие</button></li>\n                                <li *ngIf=\"next\"><button type=\"button\" class=\"btn btn-default\" (click)=\"nextPage()\">Следующие</button></li>\n                            </ul>\n                        </nav>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n"

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
    DialogViewComponent.prototype.changePersonage = function () {
        for (var i = 0; i < this.dialog.scenario.personages.length; i++) {
            if (this.dialog.scenario.personages[i].role != this.selectedPersonage.role) {
                this.selectedPersonage = this.dialog.scenario.personages[i];
                break;
            }
        }
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
                self._selectPersonage(self.dialog.scenario.steps[0].start_personage);
                self.nextStep();
            }
        });
    };
    DialogViewComponent.prototype._selectPersonage = function (personage) {
        for (var i = 0; i < this.dialog.scenario.personages.length; i++) {
            if (this.dialog.scenario.personages[i].role == personage) {
                this.selectedPersonage = this.dialog.scenario.personages[i];
                break;
            }
        }
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
    DialogViewComponent.prototype.nextStep = function (next_step_id, reset_presonage) {
        if (next_step_id) {
            for (var i = 0; i < this.dialog.scenario.steps.length; i++) {
                if (this.dialog.scenario.steps[i].id == next_step_id) {
                    if (reset_presonage) {
                        this._selectPersonage(this.dialog.scenario.steps[i].start_personage);
                    }
                    this.current_step = this.dialog.scenario.steps[i][this.selectedPersonage.role];
                    this.current_step_id = this.dialog.scenario.steps[i].id;
                    return;
                }
            }
        }
        this.current_step = this.dialog.scenario.steps[0][this.selectedPersonage.role];
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

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n             <div class=\"panel-heading\">\n                <div class=\"container\">\n                    <div class=\"col-md-6\" style=\"display: flex;\">\n                        <div style=\"line-height: 2;\">Выбор персонажа</div>\n                        <select class=\"form-control\" [(ngModel)]=\"selectedPersonage\" style=\"margin-left: 20px;width: 150px;\" (ngModelChange)=\"onChangePersonage()\">\n                            <option *ngFor=\"let pesonage of personages\" [ngValue]=\"pesonage\">{{pesonage.name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-6\" style=\"text-align: right;\">\n                        <p style=\"margin: 0 40px;\">{{dialog?.name}}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-body\">\n                <div *ngIf=\"dialog && dialog.scenario\" class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        Текущий шаг: {{current_step.number}} / {{dialog.scenario.steps.length}}\n                    </div>\n                    <div class=\"panel-body\" style=\"min-height: 200px;\">\n                        <div class=\"col-md-8\">\n                            <span *ngIf=\"getTask().length > 0\">Вам нужно сказать:</span> \n                            <div *ngFor=\"let item of getTask()\">\n                                <h4 class=\"text-success\">{{item.task}}</h4>\n\n                                <button *ngIf=\"item.prev_step > 0\" class=\"btn btn-info\" type=\"button\" (click)=\"nextStep(item.prev_step, true)\">Назад</button>\n                                <button class=\"btn btn-warning\" type=\"button\" (click)=\"changePersonage()\">Переключить собеседника</button>\n                                <button *ngIf=\"item.next_step > 0\" class=\"btn btn-success\" type=\"button\" (click)=\"nextStep(item.next_step, true)\">Следуюйщий шаг</button>\n                            \n                                <div style=\"margin-top:40px\">\n                                    <button *ngIf=\"!item.words || (item.words && item.words.length == 0)\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"getWords(item)\">Посмотреть слова</button>\n                                     <button *ngIf=\"item.words && item.words.length > 0\" class=\"btn btn-info btn-xs\" type=\"button\" (click)=\"clearWords(item)\">Скрыть слова</button>\n                                    <button *ngIf=\"!item.hints\"  class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"getHints(item)\">Посмотреть подсказку</button>\n                                    <button *ngIf=\"item.hints\" class=\"btn btn-default btn-xs\" type=\"button\" (click)=\"clearHints(item)\">Убрать подсказку</button>\n                                </div>\n\n                                <div *ngIf=\"item.words && item.words.length > 0\" style=\"margin-top:20px;display: flex;justify-content: center;flex-wrap: wrap;\">\n                                    <span *ngFor=\"let item of item.words\" class=\"label label-success\" style=\"margin: 10px;padding: 10px;font-size: 16px;\">{{item}}</span>\n                                </div>\n                                <div *ngIf=\"item.hints\" style=\"margin-top:20px;\">\n                                    <p class=\"alert alert-success\" style=\"margin: 5px 0;\">\n                                        {{item.hints}}\n                                    </p>\n                                    \n                                </div>\n                            </div> \n                            <p *ngIf=\"getTask().length == 0\">Последний шаг диалога</p>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div *ngIf=\"dialog.background_image\" \n                                    [ngStyle]=\"{'background-image': 'url(' + dialog.background_image + ')'}\"\n                                    style=\"width: 100%;height: 200px;background-size: cover;\" class=\"img-thumbnail\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/dialogues']\">Перейти ко всем диалогам</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/mydialogues/mydialogue.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDialogueEditViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyDialogueEditViewComponent = (function () {
    function MyDialogueEditViewComponent(dialogsService, statusService, router, activatedRoute, notificationService, ref, modalService) {
        this.dialogsService = dialogsService;
        this.statusService = statusService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.notificationService = notificationService;
        this.ref = ref;
        this.modalService = modalService;
        this.mode = 'base'; //base, scenario
        this.dialogue = {
            name: ""
        };
        this.loading = false;
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
        this.description_is_changed = false;
        this.descriptionChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.personageChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.tags = [];
        //private activetags = [];
        this.value = [];
    }
    MyDialogueEditViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;
        }
        else {
            self.statusService.getStatus();
        }
        this.descriptionChanged
            .debounceTime(2000) // wait 1 sec after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(function (model) {
            _this.saveDescription();
            _this.description_is_changed = false;
        });
        this.personageChanged
            .debounceTime(2000) // wait 1 sec after the last event before emitting last event
            .distinctUntilChanged()
            .subscribe(function (model) {
            _this.savePersonages();
            _this.description_is_changed = false;
        });
        this._getDialog();
    };
    MyDialogueEditViewComponent.prototype.ngAfterViewInit = function () {
    };
    MyDialogueEditViewComponent.prototype.initPersonages = function () {
        for (var i = 0; i < this.dialogue.scenario.personages.length; i++) {
            if (this.dialogue.scenario.personages[i].role == "master") {
                this.personage_a = this.dialogue.scenario.personages[i].name;
            }
            if (this.dialogue.scenario.personages[i].role == "pupil") {
                this.personage_b = this.dialogue.scenario.personages[i].name;
            }
        }
    };
    MyDialogueEditViewComponent.prototype.updatePersonages = function () {
        for (var i = 0; i < this.dialogue.scenario.personages.length; i++) {
            if (this.dialogue.scenario.personages[i].role == "master") {
                this.dialogue.scenario.personages[i].name = this.personage_a;
            }
            if (this.dialogue.scenario.personages[i].role == "pupil") {
                this.dialogue.scenario.personages[i].name = this.personage_b;
            }
        }
    };
    MyDialogueEditViewComponent.prototype._getDialog = function () {
        var _this = this;
        var self = this;
        this.activatedRoute.params
            .pluck('dialogue_id')
            .switchMap(function (dialogue_id) { return _this.dialogsService.getMyDialog(dialogue_id); })
            .subscribe(function (dialogue) {
            self.dialogue = dialogue;
            self._initVars();
            if (_this.dialogue.scenario && _this.dialogue.scenario.personages) {
                self.personages = _this.dialogue.scenario.personages;
                self.selectedPersonage = self.dialogue.scenario.steps[0].start_personage;
            }
        });
    };
    MyDialogueEditViewComponent.prototype._initVars = function () {
        var _this = this;
        if (this.dialogue) {
            for (var i = 0; i < this.levels.length; i++) {
                if (this.levels[i].id == this.dialogue.level) {
                    this.selectedDialogLevel = this.levels[i].id;
                }
            }
            this.initPersonages();
        }
        else {
            this.selectedDialogLevel = this.levels[0].id;
        }
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_8__app_settings__["a" /* AppSettings */].URL_MYDIALOGS + this.dialogue.id + '/bg/',
            headers: [{
                    name: 'X-CSRFToken',
                    value: this.getCookie("csrftoken")
                }]
        });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this._getDialog();
        };
        //this.activetags = [];
        //if (this.dialogue.tags && this.dialogue.tags.length > 0) {
        //    for (let i = 0; i < this.dialogue.tags.length; i++) {
        //        this.activetags.push(this.dialogue.tags[i].name);
        //    }
        //}
    };
    MyDialogueEditViewComponent.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return decodeURIComponent(parts.pop().split(";").shift());
    };
    MyDialogueEditViewComponent.prototype._detectChanges = function () {
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
    MyDialogueEditViewComponent.prototype.saveDescription = function () {
        var _this = this;
        this.loading = true;
        var params = {
            dialog_name: this.dialogue.name,
            description: this.dialogue.description,
            level: this.selectedDialogLevel,
            is_published: this.dialogue.is_published
        };
        this.dialogsService.saveMyDialogs(this.dialogue.id, params).subscribe(function (data) {
            _this.loading = false;
        });
    };
    MyDialogueEditViewComponent.prototype.savePersonages = function () {
        var _this = this;
        this.loading = true;
        this.dialogue.scenario.personages = [{
                role: "master",
                name: this.personage_a
            }, {
                role: "pupil",
                name: this.personage_b
            }];
        var params = {
            personages: this.dialogue.scenario.personages
        };
        this.dialogsService.saveMyDialogs(this.dialogue.id, params).subscribe(function (data) {
            _this.loading = false;
        });
    };
    MyDialogueEditViewComponent.prototype.showConfirmDeleteDialog = function () {
        this.modalRef = this.modalService.show(this.template, {
            class: 'modal-sm',
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: true
        });
    };
    MyDialogueEditViewComponent.prototype.closeDeleteDialog = function () {
        this.modalRef.hide();
        this.modalRef = null;
    };
    MyDialogueEditViewComponent.prototype.deleteDialog = function () {
        var _this = this;
        this.modalRef.hide();
        this.modalRef = null;
        this.loading = true;
        this.dialogsService.deleteMyDialogs(this.dialogue.id).subscribe(function (data) {
            _this.loading = false;
            _this.router.navigate(['/mydialogues']);
        });
    };
    MyDialogueEditViewComponent.prototype.onFileSelected = function () {
        this.uploader.uploadAll();
    };
    MyDialogueEditViewComponent.prototype.publishDialog = function () {
        this.dialogue.is_published = !this.dialogue.is_published;
        this.saveDescription();
    };
    MyDialogueEditViewComponent.prototype.changedDescriptionData = function ($event, type_text) {
        if (type_text == 'name' && !$event) {
            return;
        }
        this.description_is_changed = true;
        this.dialogue[type_text] = $event;
        this.descriptionChanged.next($event);
    };
    MyDialogueEditViewComponent.prototype.changedPersonageData = function ($event, type_text) {
        if (!$event) {
            return;
        }
        this.description_is_changed = true;
        this[type_text] = $event;
        this.personageChanged.next($event);
    };
    MyDialogueEditViewComponent.prototype.selectedTag = function (value) {
        var _this = this;
        var params = {
            tag_name: value
        };
        this.dialogsService.addTagToDialogs(this.dialogue.id, params).subscribe(function (data) {
            _this.loading = false;
            _this._getDialog();
        });
    };
    MyDialogueEditViewComponent.prototype.deleteTag = function (value) {
        var _this = this;
        this.dialogsService.deleteTagFromDialogs(this.dialogue.id, value.id).subscribe(function (data) {
            _this.loading = false;
            _this._getDialog();
        });
    };
    MyDialogueEditViewComponent.prototype.searchTags = function (value) {
        var _this = this;
        //console.log('value',value)
        this.dialogsService.getTags(value).subscribe(function (res) {
            _this.tags = res;
        });
    };
    MyDialogueEditViewComponent.prototype.refreshValue = function (value) {
        var _this = this;
        this.value = value;
        var tags = [];
        for (var i = 0; i < this.value.length; i++) {
            tags.push(this.value[i].text);
        }
        if (tags.length > 0) {
            var params = {
                tags: tags
            };
            this.dialogsService.saveMyDialogs(this.dialogue.id, params).subscribe(function (data) {
                _this.loading = false;
            });
        }
    };
    return MyDialogueEditViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('template'),
    __metadata("design:type", Object)
], MyDialogueEditViewComponent.prototype, "template", void 0);
MyDialogueEditViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mydialogueedit',
        template: __webpack_require__("../../../../../src/app/views/mydialogues/mydialogue.edit.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_dialogs_service__["a" /* DialogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_status_service__["a" /* StatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _g || Object])
], MyDialogueEditViewComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=mydialogue.edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/mydialogues/mydialogue.edit.template.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 20px\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            Редактируем диалог <strong>{{dialogue?.name}}</strong>\n        </div>\n        <div class=\"panel-body\" style=\"padding: 20px;\">\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li (click)=\"mode='base'\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Описание диалога</a></li>\n                <li (click)=\"mode='personages'\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Имена персонажей</a></li>\n                <li (click)=\"mode='scenario'\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Сценарий диалога</a></li>\n                <li (click)=\"mode='publish'\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Сделать доступным для всех</a></li>\n            </ul>\n\n             <!-- Tab panes -->\n            <div *ngIf=\"mode=='base'\" class=\"tab-content\" style=\"padding: 20px; max-width: 600px;\">\n                <form #frm=\"ngForm\" (ngSubmit)=\"submit()\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': !dialogue.name}\">\n                        <label for=\"name\">Название диалога</label>\n                        <input name=\"frm_name\" type=\"email\" class=\"form-control \" id=\"name\" [(ngModel)]=\"dialogue.name\" required=\"required\" (ngModelChange)=\"changedDescriptionData($event, 'name')\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"description\">Описание диалога</label>\n                        <textarea name=\"frm_descriptioon\" class=\"form-control\" id=\"description\"  [(ngModel)]=\"dialogue.description\" (ngModelChange)=\"changedDescriptionData($event, 'description')\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"level\">Требуемый уровень английского</label>\n                        <select name=\"frm_level\" id=\"level\" class=\"form-control\" [(ngModel)]=\"selectedDialogLevel\" required=\"required\" (change)=\"saveDescription()\">\n                             <option *ngFor=\"let level of levels\" [value]=\"level.id\">{{level.title}}</option>\n                         </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"background_image\">Картинка диалога</label>\n                        <div>\n                            <div class=\"col-md-6\" style=\"padding: 0\">\n                                <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/png, image/jpg, image/jpeg\" style=\"display:none;\" (change)=\"onFileSelected()\"/>\n                                <button type=\"button\" class=\"btn btn-default\" (click)=\"fileInput.click()\" [disabled]=\"loading\">Загрузить картинку диалога</button>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <section id=\"uploadQueue\" *ngIf=\"uploader?.queue?.length > 0\">\n                                    <div ngFor=\"let item of uploader.queue\">\n                                        {{ item?.file?.name }}\n                                        <div *ngIf=\"uploader.isHTML5\" class=\"progress\" style=\"margin-bottom: 0;\">\n                                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                         </div>\n                                    </div>\n                                </section>\n\n                                <img *ngIf=\"!dialogue.background_image\" alt=\"100%x200\" data-src=\"holder.js/100%x200\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVlOTZiYzA5NjUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWU5NmJjMDk2NSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS40Ij4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+\" data-holder-rendered=\"true\" style=\"height: 200px; width: 200px; display: block;margin: 0 10px;\"> \n                                    <div *ngIf=\"dialogue && dialogue.background_image\" \n                                        [ngStyle]=\"{'background-image': 'url(' + dialogue.background_image + ')'}\"\n                                        style=\"\n                                            height: 160px; \n                                            width: 190px; \n                                            background-size: cover;\n                                            display: block;\n                                            margin: 0 10px;\">\n                                    </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group\" [ngClass]=\"{'has-error': !dialogue.name}\">\n                        <label for=\"name\">Метка для быстрого поиска диалога</label>\n                        <!--\n                        <ng-select #tagsInput [multiple]=\"true\"\n                            [active]=\"activetags\"\n                            [items]=\"tags\"\n                            (data)=\"refreshValue($event)\"\n                          (selected)=\"selectedTag($event)\"\n                          (removed)=\"removedTag($event)\"\n                          (typed)=\"searchTags($event)\"\n                          placeholder=\"Поиск среди существующих меток\"></ng-select>\n                        -->\n\n                        <tags [active]=\"dialogue.tags\" [items]=\"tags\" \n                            (typed)=\"searchTags($event)\" \n                            (selected)=\"selectedTag($event)\"\n                            (delete)=\"deleteTag($event)\"\n                            ></tags>\n\n\n                    </div>\n\n                    <div class=\"form-group\" style=\"margin-top: 80px;\">\n                        <p *ngIf=\"description_is_changed\" style=\"margin: 0;font-size: 10px;\">Изменения пока еще не сохранены</p>\n                        <!--\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!frm.valid || loading\" (click)=\"saveDescription()\">Сохранить</button>-->\n\n                        <button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"showConfirmDeleteDialog()\">Удалить диалог</button>\n                    </div>\n                </form>\n            </div>\n\n            <div *ngIf=\"mode=='personages'\" class=\"tab-content\" style=\"padding: 20px;\">\n                <form #frm2=\"ngForm\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': !personage_a}\">\n                        <label for=\"personage_a\">Персонаж 1</label>\n                        <input name=\"frm_name_a\" type=\"text\" class=\"form-control\" id=\"personage_a\" (ngModelChange)=\"updatePersonages($event)\" [(ngModel)]=\"personage_a\" required=\"required\" (ngModelChange)=\"changedPersonageData($event, 'personage_a')\">\n                    </div>\n                    \n                    <div class=\"form-group\" [ngClass]=\"{'has-error': !personage_b}\">\n                        <label for=\"personage_b\">Персонаж 2</label>\n                        <input name=\"frm_name_b\" type=\"text\" class=\"form-control\" id=\"personage_b\" (ngModelChange)=\"updatePersonages($event)\"  [(ngModel)]=\"personage_b\" required=\"required\" (ngModelChange)=\"changedPersonageData($event, 'personage_b')\">\n                    </div>\n                    <p *ngIf=\"description_is_changed\" style=\"margin: 0;font-size: 10px;\">Изменения пока еще не сохранены</p>\n                    <!-- <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!frm2.valid\">Сохранить изменения</button> -->\n                </form>\n            </div>\n\n            <div *ngIf=\"mode=='scenario'\" class=\"tab-content\" style=\"padding: 20px;\">\n                <scenario [dialogue]=\"dialogue\"></scenario>\n            </div>\n\n            <div *ngIf=\"mode=='publish'\" class=\"tab-content\" style=\"padding: 20px; max-width: 600px;\">\n                <form #frm=\"ngForm\" (ngSubmit)=\"submit()\">\n                    <div class=\"form-group\">\n                        <label>Доступно для всех?</label>\n                        <div style=\"width: 40px;height: 40px;border: 2px solid darkslateblue;border-radius: 4px;cursor: pointer;\" (click)=\"publishDialog(item)\">\n                            <div *ngIf=\"dialogue.is_published\" style=\"width: 28px;height: 28px;background-color: darkslateblue;border-radius: 4px;margin:4px;\"></div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <p *ngIf=\"description_is_changed\" style=\"margin: 0;font-size: 10px;\">Изменения пока еще не сохранены</p>\n                    </div>\n\n                </form>\n            </div>\n        </div>\n        <div class=\"panel-footer\">\n            <div class=\"form-group\">\n                <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/mydialogues']\">Перейти к моим диалогам</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Подтверждение</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeCreateDialog()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\" style=\"text-align: center;\">\n        <h4>Вы уверено хотите удлать выбранный диалог?</h4>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteDialog()\" [disabled]=\"loading\">Да, хочу</button>\n        <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"closeDeleteDialog()\">Отмена</button>\n    </div>\n</ng-template>\n\n\n<notifications></notifications>"

/***/ }),

/***/ "../../../../../src/app/views/mydialogues/mydialogues.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDialoguesViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyDialoguesViewComponent = (function () {
    function MyDialoguesViewComponent(dialogsService, statusService, router, notificationService, ref, modalService) {
        this.dialogsService = dialogsService;
        this.statusService = statusService;
        this.router = router;
        this.notificationService = notificationService;
        this.ref = ref;
        this.modalService = modalService;
        this.dialogs = [];
        this.loading = false;
        this.new_dialog_name = "";
        this.show_create_dialog = false;
    }
    MyDialoguesViewComponent.prototype.ngOnInit = function () {
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;
        }
        else {
            self.statusService.getStatus();
        }
        this._updateActiveDialogs();
    };
    MyDialoguesViewComponent.prototype.ngAfterViewInit = function () {
    };
    MyDialoguesViewComponent.prototype._updateActiveDialogs = function () {
        var _this = this;
        this.loading = true;
        this.dialogsService.getMyDialogs().subscribe(function (data) {
            _this.dialogs = data;
            _this.loading = false;
        });
    };
    MyDialoguesViewComponent.prototype.turnActiveDialog = function (dialog) {
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
                self._detectChanges();
            }
        });
    };
    MyDialoguesViewComponent.prototype._detectChanges = function () {
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
    MyDialoguesViewComponent.prototype.publishDialog = function (item) {
        var _this = this;
        item.is_published = !item.is_published;
        console.log('item', item);
        this.loading = true;
        var params = {
            is_published: item.is_published
        };
        this.dialogsService.saveMyDialogs(item.id, params).subscribe(function (data) {
            _this.loading = false;
        });
    };
    MyDialoguesViewComponent.prototype.showCreateDialog = function () {
        if (!this.show_create_dialog) {
            this.show_create_dialog = true;
            this.new_dialog_name = "";
            this.modalRef = this.modalService.show(this.template, {
                class: 'modal-sm',
                animated: true,
                keyboard: true,
                backdrop: true,
                ignoreBackdropClick: true
            });
        }
        else {
            this.closeCreateDialog();
        }
    };
    MyDialoguesViewComponent.prototype.closeCreateDialog = function () {
        this.show_create_dialog = false;
        this.modalRef.hide();
        this.modalRef = null;
    };
    MyDialoguesViewComponent.prototype.createDialog = function () {
        var _this = this;
        var params = {
            dialog_name: this.new_dialog_name
        };
        if (this.new_dialog_name) {
            this.loading = true;
            this.dialogsService.createDialog(params).subscribe(function (data) {
                _this.loading = false;
                _this.closeCreateDialog();
                _this.router.navigate(['/mydialogues', data.id]);
            });
        }
    };
    return MyDialoguesViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('template'),
    __metadata("design:type", Object)
], MyDialoguesViewComponent.prototype, "template", void 0);
MyDialoguesViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mydialogues',
        template: __webpack_require__("../../../../../src/app/views/mydialogues/mydialogues.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_status_service__["a" /* StatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _f || Object])
], MyDialoguesViewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=mydialogues.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/mydialogues/mydialogues.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"container\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4 style=\"display: inline-block;\">Выберите диалог для редактирования</h4>\n                <button type=\"button\" class=\"btn btn-info pull-right\" (click)=\"showCreateDialog()\">Создать диалог</button>\n            </div>\n            <div class=\"panel-body\" style=\"position: relative;\">\n                <!-- Loading -->\n                <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n                    <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n                    </div>\n                    <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                        <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n                    </div>\n                </div>\n                <!-- END Loading -->\n\n                <div class=\"row\" style=\"margin: 20px 0;display: flex;flex-wrap: wrap;\"> \n                    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of dialogs\"> \n                        <div class=\"thumbnail\"> \n                            <div class=\"\" style=\"width: 100%;position: relative;\">\n                                <div>\n                                    <div *ngIf=\"!item.background_image\" \n                                        style=\"\n                                            height: 60px; \n                                            width: 90px; \n                                            border: 1px solid #ccc;\n                                            background-color: #ddd;\n                                            margin: 0 10px;\">\n                                    </div>\n                                    <div *ngIf=\"item.background_image\" \n                                        [ngStyle]=\"{'background-image': 'url(' + item.background_image + ')'}\"\n                                        style=\"\n                                            height: 60px; \n                                            width: 90px; \n                                            background-size: cover;\n                                            display: block;\n                                            margin: 0 10px;\">\n                                    </div>\n                                    <p  class=\"badge\" [ngClass]=\"{\n                                            'bg-color-begin': item.level == 10,\n                                            'bg-color-preintermediate': item.level == 20,\n                                            'bg-color-intermediate': item.level == 30\n                                        }\" style=\"margin: 5px;\">{{item.level_display}}</p>\n\n                                    <div style=\"text-align: left;\">\n                                    <p class=\"badge badge-info\" style=\"margin:5px;background-color: darkcyan;\" *ngFor=\"let item of item.tags\">{{item.name}}</p>\n                                </div>\n                                </div>\n\n                                <div style=\"position: absolute; right: 0;top:0;display: flex;align-items: center;    flex-wrap: wrap;justify-content: flex-end;\">\n                                    <div>\n                                        <p style=\"font-size: 10px;width: 100%;text-align: right;margin: 0;\">Доступно для всех?</p>\n                                        <div style=\"width: 40px;height: 40px;border: 2px solid darkslateblue;border-radius: 4px;cursor: pointer;margin: auto;\" (click)=\"publishDialog(item)\">\n                                            <div *ngIf=\"item.is_published\" style=\"width: 28px;height: 28px;background-color: darkslateblue;border-radius: 4px;margin:4px;\"></div>\n                                        </div>\n                                    </div>\n                                    <div style=\"margin-left: 5px;\">\n                                        <p style=\"font-size: 10px;width: 100%;text-align: right;margin: 0;\">Принимать звонки?</p>\n                                        <div style=\"width: 40px;height: 40px;border: 2px solid darkcyan;border-radius: 4px;cursor: pointer;margin: auto;\" (click)=\"turnActiveDialog(item)\">\n                                            <div *ngIf=\"item.checked\" style=\"width: 28px;height: 28px;background-color: darkcyan;border-radius: 4px;margin:4px;\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                            <div class=\"caption\" style=\"clear:both;\"> \n                                <p style=\"font-size: 8px;margin:0;\">Кол-во шагов: {{item.scenario.steps.length || 0}}</p> \n                                <h4>{{item.name}}</h4> \n                                <p style=\"font-size: 12px;\">{{item.description}}</p> \n                                <div style=\"display: flex;justify-content: space-between;align-items: baseline;\">\n                                    <button class=\"btn btn-info btn-xs\" [routerLink]=\"['/dialogue', item.id]\">\n                                        Просмотреть\n                                    </button> \n                                    <button class=\"btn btn-success\" [routerLink]=\"['/mydialogues', item.id]\">\n                                        Редактировать\n                                    </button> \n                                </div> \n                            </div> \n                        </div> \n                    </div> \n                </div>\n\n            </div>\n        </div>\n        \n    </div>\n</div>\n\n\n<ng-template #template>\n    <form #frm=\"ngForm\" (ngSubmit)=\"createDialog()\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title pull-left\">Создание нового диалога</h4>\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeCreateDialog()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\" style=\"text-align: center;\">\n            <div class=\"form-group\">\n                <label for=\"name\">Введите название диалога</label>\n                <input name=\"frm_name\" type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"new_dialog_name\" required=\"required\" maxlength=\"100\" [autofocus]=\"true\">\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!frm.valid || loading\">Создать</button>\n            <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"closeCreateDialog()\">Отмена</button>\n        </div>\n    </form>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/view_help/view_help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpViewComponent; });
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


var HelpViewComponent = (function () {
    function HelpViewComponent(statusService) {
        this.statusService = statusService;
        this.loading = false;
    }
    HelpViewComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    return HelpViewComponent;
}());
HelpViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'help',
        template: __webpack_require__("../../../../../src/app/views/view_help/view_help.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object])
], HelpViewComponent);

var _a;
//# sourceMappingURL=view_help.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/view_help/view_help.template.html":
/***/ (function(module, exports) {

module.exports = "    \n<div style=\"max-width: 800px;\n    margin: 0 auto;\n    color: white;\n    text-indent: 30px;\n    padding: 30px;\">\n        <p class=\"text_p\">Итак, вы хотите улучшить ваши разговорные навыки. Далее  мы попытались описать последовательность действий для использования  диалогового тренажера.</p>\n\n        <h4 style=\"text-align: center;margin-top: 40px;\">Поиск партнеров и установка контакта.</h4>\n\n        <p class=\"text_p\">Первым делом вам нужно перейти в раздел \"ВСЕ ДИАЛОГИ\" и выбрать интересные вам диалоги.</p>\n        <img src=\"/static/img/interface/1.png\" alt=\"\" class=\"img-thumbnail\" style=\"margin: 20px 0; \">\n        <p class=\"text_p\">Далее, вам нужно выучить их за двух персонажей. После этого вам нужно отметить их как доступные для принятия звонка, поставив главную галочку \"принимать входящие звонки\".</p>\n        <img src=\"/static/img/interface/2.png\" alt=\"\" class=\"img-thumbnail\" style=\"margin: 20px 0;\">\n        <p class=\"text_p\">Теперь вам нужно дождаться, когда  вам позвонит через сайт собеседник. Если вы не хотите ждать, вы можете сразу перейти в раздел \"ДИАЛОГИ В ОЖИДАНИЕ ПАРТНЕРА\", выбрать интересный вам  диалог и нажать кнопку \"Позвонить\".</p>\n        <p class=\"text_p\">Система соединит двух участников диалога.Если будет невозможно установить голосовую связь, появится сообщение об этом.В этом случае у вас будет возможность текстового чата для установки контакта с партнера.Попыйтесь установить голосовую связь через другие программы, например, скайп.</p>\n\n        <h4 style=\"text-align: center;margin-top: 40px;\">Ваши действия после установления контакта.</h4>\n\n        <p class=\"text_p\">После установки связи, два партнера делятся по ролям на ведущего (учитель) и ведомого (ученика): всегда - тот,кто звонит играет роль  ведомого (ученика), а тот, кому звонят- ведущего(учителя). Диалоги состоят из шагов. На каждом шаге нужно произнести вслух свою фразу. На первом шаге сначала говорит ведущий.Потом ведущий переключается на партнера, и затем ведомый должен произнести свою фразу. После этого ведущий должен переключиться на следующий шаг диалога.</p>\n\n        <h4 style=\"text-align: center;margin-top: 40px;\">Возможные действия ведущего.</h4>\n\n        <p class=\"text_p\">Как было сказано - от него зависит весь процесс прохождения диалога. Он руководит диалогом,переключаясь на партнера и переходит на следующие шаги диалога. Ведомый должен в свою очередь только произнести свою фразу.</p>\n        <p class=\"text_p\">Когда будет достигнут последний шаг диалога, ведущий может выбрать любой другой диалог (из тех что он заранее выбрал для принятия входящих звонков). Если он это сделает, оба партнера переключатся на другой диалог.</p>\n\n        <h4 style=\"text-align: center;margin-top: 40px;\">В случае если вы хотите выучить определенный диалог, а его нет в системе, вы можете его создать самостоятельно.</h4>\n\n        <p class=\"text_p\">Перейдите на страницу \"МОИ ДИАЛОГИ\". Нажмите кнопку \"Создать диалог\". Появится окно с возможностью ввода наименования диалога. После ввода имени,нажмите кнопку \"Создать\". Далее будет создан диалог, и вы попадете в режим редактирования диалога, где нужно будет заполнить необходимые поля. Нужно заполнить описание диалога, выбрать требуемый уровень знания английского, желательно подобрать картинку диалога.</p>\n        <img src=\"/static/img/interface/5.png\" alt=\"\" class=\"img-thumbnail\" style=\"margin: 20px 0;\">\n\n        <p class=\"text_p\">Далее самое главное, нужно написать сценарий диалога. Для это необходимо перейти на закладку \"Сценарий диалога\". Здесь редактор шагов. На каждом шаге можно выбрать первого персонажа, который будет начинать диалог. Далее выбрать персонаж и заполнить требуемые поля: задания для шага и правильную фразу (которую нужно будет выучить). Потом нажать \"Добавить следующий шаг\" для создания нового шага диалога. И таким образом создать все требуемые шаги.</p>\n        <img src=\"/static/img/interface/6.png\" alt=\"\" class=\"img-thumbnail\" style=\"margin: 20px 0;\">\n        В любой момент вы можете удалить ненужный шаг.  \n        <img src=\"/static/img/interface/7.png\" alt=\"\" class=\"img-thumbnail\" style=\"margin: 20px 0;\">\n\n\n        <p class=\"text_p\">После того как все будет создано, можно сделать диалог доступным для всех. Для этого на закладке \"Сделать доступным для всех\" есть переключатель \"Доступно для всех\".Когда вы его выберите, диалог станет доступным для всех.</p>\n        <p class=\"text_p\">Вы так же можете удалить в любой момент созданный вами диалог, нажав на кнопку \"Удалить диалог\".</p>\n\n\n    </div>\n \n"

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
            _this.router.navigate(['activedialogues']);
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
                    _this.router.navigate(['/activedialogues']);
                }
                if (message.reason == "NOT FOUND") {
                    _this.router.navigate(['/activedialogsue']);
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
        this.router.navigate(['/activedialogues']);
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
        //console.log('_callingDialog')
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
        self._playCallingAudo();
        self.webSocketSubscription = self.webSocketService.message.subscribe(function (data) {
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
                self.router.navigate(['/activedialogues/']);
            }
            if (message.command == "EXIT_FROM_ACTIVE_DIALOG_BY_MASTER") {
                self.router.navigate(['/activedialogues/']);
            }
        });
        self.statusSubscription = self.statusService.ready.subscribe(function (date) {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
        });
        if (!self.user) {
            self.user = self.statusService.user;
        }
        setTimeout(function () {
            if (!this.activedialog) {
                this.router.navigate(['/dialogues/']);
            }
        }.bind(this), 10000);
    };
    ModeWaitPupilViewComponent.prototype._getActiveDialog = function (activedialogid, callback) {
        console.log('wait pupil _getActiveDialog');
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
        this.webSocketSubscription.unsubscribe();
        this.statusSubscription.unsubscribe();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_notification_model__ = __webpack_require__("../../../../../src/app/models/notification.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
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
    function ProfileViewComponent(statusService, router, notificationService) {
        this.statusService = statusService;
        this.router = router;
        this.notificationService = notificationService;
        this.change_password = false;
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
            console.log(self.user);
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
        var _this = this;
        this.first_name = this.user.first_name;
        this.selectedLevel = this.user.level;
        this.skypeid = this.user.skypeid;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].URL_USER_SETTING + 'avatar/',
            headers: [{
                    name: 'X-CSRFToken',
                    value: this.getCookie("csrftoken")
                }]
        });
        var self = this;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.statusService.getStatus().subscribe(function (data) {
                self.user = data.user;
            });
        };
    };
    ProfileViewComponent.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return decodeURIComponent(parts.pop().split(";").shift());
    };
    ProfileViewComponent.prototype.changePassword = function ($event) {
        if (this.password1) {
            this.password1 = "";
        }
    };
    ProfileViewComponent.prototype.submit = function () {
        this.first_name_error = "";
        if (this.first_name && this.selectedLevel) {
            if (this.password && (this.password != this.password1)) {
                return;
            }
            var params = {
                first_name: this.first_name,
                selectedLevel: this.selectedLevel,
                password: this.password,
                skypeid: this.skypeid
            };
            this.loading = true;
            var self_1 = this;
            this.statusService.saveUser(params).subscribe(function (data) {
                self_1.loading = false;
                if (data.status) {
                    self_1.notificationService.add(new __WEBPACK_IMPORTED_MODULE_4__models_notification_model__["a" /* Notification */]('Сообщение', 'alert-success', 'Настройки сохранены'));
                }
                else {
                    if (data.first_name_error) {
                        self_1.first_name_error = data.first_name_error;
                    }
                }
            }, function (error) {
                console.log('error', error);
                self_1.notificationService.add(new __WEBPACK_IMPORTED_MODULE_4__models_notification_model__["a" /* Notification */]('Ошибка', 'alert-danger', error.statusText));
            });
        }
    };
    ProfileViewComponent.prototype.onFileSelected = function () {
        this.uploader.uploadAll();
    };
    ProfileViewComponent.prototype.showChangePassword = function () {
        this.change_password = !this.change_password;
        if (!this.change_password) {
            this.password = null;
            this.password1 = null;
        }
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modecalling',
        template: __webpack_require__("../../../../../src/app/views/view_profile/view_profile.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], ProfileViewComponent);

var _a, _b, _c;
//# sourceMappingURL=view_profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/view_profile/view_profile.template.html":
/***/ (function(module, exports) {

module.exports = "<notifications></notifications>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\" style=\"margin:40px;\">\n            <div class=\"panel-heading\">\n                <h3>Профиль пользователя <span class=\"pull-right\">{{user?.email}}</span></h3>\n            </div>\n            <div class=\"panel-body\">\n                <form #frm=\"ngForm\" (ngSubmit)=\"submit()\" style=\"max-width: 400px;margin: auto;\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputName\">Ваше имя * <span style=\"font-size: 10px;font-weight: 200;\">(будет отображаться другим пользователям)</span>\n                        </label>\n\n                        <input #frm_first_name=\"ngModel\" type=\"text\" name=\"frm_first_name\" class=\"form-control\" id=\"exampleInputName\" [(ngModel)]=\"first_name\" required=\"required\" maxlength=\"25\">\n                        <small *ngIf=\"!frm_first_name.valid && !frm_first_name.pristine\" class=\"text-danger pull-right\" style=\"margin:0\">Имя обязательное для ввода</small>\n                        <small *ngIf=\"first_name_error\" class=\"text-danger pull-right\" style=\"margin:0\">{{first_name_error}}</small>\n                        \n                        \n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputLevel\">Ваш уровень английского *</label>\n                        <select name=\"frm_level\" class=\"form-control\" [(ngModel)]=\"selectedLevel\" style=\"\" required=\"required\">\n                             <option *ngFor=\"let pesonage of levels\" [value]=\"pesonage.id\">{{pesonage.title}}</option>\n                         </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"skypeid\">Skype Id <span style=\"font-size: 10px;font-weight: 200;\">(будет отображаться при ошибки голосового соединения с партнером по диалогу)</span></label>\n                       <input #frm_skypeid=\"ngModel\" type=\"text\" name=\"frm_skypeid\" class=\"form-control\" id=\"skypeid\" [(ngModel)]=\"skypeid\" maxlength=\"30\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"skypeid\">Аватарка</label>\n                        <div>\n                            <div class=\"col-md-6\" style=\"padding: 0\">\n                                <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/png, image/jpg, image/jpeg\" style=\"display:none;\" (change)=\"onFileSelected()\"/>\n                                <button type=\"button\" class=\"btn btn-default\" (click)=\"fileInput.click()\" [disabled]=\"loading\">Загрузить аватарку</button>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <section id=\"uploadQueue\" *ngIf=\"uploader?.queue?.length > 0\">\n                                    <div ngFor=\"let item of uploader.queue\">\n                                        {{ item?.file?.name }}\n                                        <div *ngIf=\"uploader.isHTML5\" class=\"progress\" style=\"margin-bottom: 0;\">\n                                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                         </div>\n                                    </div>\n                                </section>\n\n                                <div *ngIf=\"!user || !user.avatar\" \n                                    style=\"\n                                        height: 160px; \n                                        width: 160px; \n                                        border: 1px solid #ccc;\n                                        border-radius: 50%;\n                                        background-color: #ddd;\n                                        \">\n                                </div>\n                                <div *ngIf=\"user && user.avatar\" \n                                    [ngStyle]=\"{'background-image': 'url(' + user.avatar + ')'}\"\n                                    style=\"\n                                        height: 160px; \n                                        width: 160px; \n                                        background-size: cover;\n                                        background-repeat: no-repeat;\n                                        border-radius: 50%;\n                                        display: block;\n                                        margin: 0 10px;\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <label (click)=\"showChangePassword()\" style=\"text-decoration: underline;cursor: pointer;\">Сменить пароль</label>\n                    </div>\n\n                    <div *ngIf=\"change_password\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Новый пароль</label>\n                            <input type=\"password\" name=\"frm_password\" class=\"form-control\" id=\"exampleInputPassword1\" [(ngModel)]=\"password\" #frm_password=\"ngModel\" reverse=\"false\" (ngModelChange)=\"changePassword($event)\" maxlength=\"25\">\n                            <small *ngIf=\"frm_password.errors && frm_password.errors.required && !frm_password.pristine\" class=\"text-danger pull-right\">\n                                Требуется ввести пароль\n                            </small>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword2\">Подтверждение пароля</label>\n                            <input type=\"password\" name=\"frm_password1\" class=\"form-control\" id=\"exampleInputPassword2\" [(ngModel)]=\"password1\" validateEqual=\"frm_password\" #frm_password1=\"ngModel\" reverse=\"false\" maxlength=\"25\">\n                                <small *ngIf=\"frm_password1.errors && frm_password1.errors.validateEqual==false && !frm_password1.pristine\" class=\"text-danger pull-right\">\n                                    Пароли не совпадают\n                                </small>\n                        </div>\n                    </div>\n\n\n                    \n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Сохранить\" [disabled]=\"!frm.valid\"/>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n        <!-- Loading -->\n        <div *ngIf=\"loading\" style=\"position: absolute;top:0;left:0;width:100%;height:100%;z-index: 100;\">\n            <div style=\"position: absolute;opacity: 0.5;width:100%;height:100%;background-color: white;\">\n            </div>\n            <div style=\"width: 50px;margin: auto;margin-top: 160px;\">\n                <i class=\"fa fa-spin fa-gear\" style=\"font-size: 50px;\"></i>\n            </div>\n        </div>\n        <!-- END Loading -->\n\n\n    </div>\n</div>\n"

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