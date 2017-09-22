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


var AppComponent = (function () {
    function AppComponent(statusService) {
        this.statusService = statusService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.statusService.init();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_appviews_module__ = __webpack_require__("../../../../../src/app/views/appviews.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_layouts_module__ = __webpack_require__("../../../../../src/app/components/common/layouts/layouts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__views_appviews_module__["a" /* AppviewsModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* ROUTES */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */],
            AppCSRF,
            __WEBPACK_IMPORTED_MODULE_10__services_status_service__["a" /* StatusService */],
            __WEBPACK_IMPORTED_MODULE_9__services_dialogs_service__["a" /* DialogsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_starterview_component__ = __webpack_require__("../../../../../src/app/views/starterview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_layouts_basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");

//import {LoginComponent} from "./views/login.component";
//import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";

//import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";
//import { AuthGuard } from './services/guards.service';
var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'starterview', pathMatch: 'full' },
    // App views
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__views_starterview_component__["a" /* StarterViewComponent */],
            }
        ]
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
    { path: '**', redirectTo: '/' }
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
    return AppSettings;
}());

AppSettings.base_url = 'https://' + document.location.hostname + ':8000';
AppSettings.URL_STATUS = AppSettings.base_url + "/dialogs/api/status/";
AppSettings.URL_DIALOGS = AppSettings.base_url + "/dialogs/api/dialogs/";
AppSettings.URL_ACTIVEDIALOGS = AppSettings.base_url + "/dialogs/api/activedialogs/";
AppSettings.URL_DIALOG_RUN = AppSettings.base_url + "/dialogs/api/run/";
AppSettings.URL_DIALOG_RUNINTO = AppSettings.base_url + "/dialogs/api/runinto/";
AppSettings.URL_DIALOG_ACTIVESTOP = AppSettings.base_url + "/dialogs/api/stop/";
AppSettings.URL_DIALOG_STOP = AppSettings.base_url + "/dialogs/api/stop/";
AppSettings.URL_WEBSOKET = "wss://" + document.location.hostname + ':8000/peerjs';
AppSettings.URL_WEBSOKET_PEER = document.location.hostname;
AppSettings.CALLING_TIME_INTERVAL = 3000;
AppSettings.MODE_LIST = 'mode_list';
AppSettings.MODE_WAIT_PUPIL = 'mode_wait_pupil';
AppSettings.MODE_CALLING = 'mode_calling';
AppSettings.MODE_DIALOG_MASTER = 'mode_dialog_master';
AppSettings.MODE_DIALOG_PUPIL = 'mode_dialog_pupil';
//# sourceMappingURL=app.settings.js.map

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
        host: {
            '(window:resize)': 'onResize()'
        }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__ = __webpack_require__("../../../../../src/app/components/common/layouts/basicLayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_component__ = __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {BsDropdownModule} from 'ngx-bootstrap';


//import {FooterComponent} from "./../footer/footer.component";

var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            //FooterComponent,
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
        ],
        exports: [
            //FooterComponent,
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
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


//import { ErrorService } from '../../../services/error.service';
//import { AuthenticationService } from '../../../services/authentication.service';

var TopNavbarComponent = (function () {
    function TopNavbarComponent(router, statusService) {
        this.router = router;
        this.statusService = statusService;
        this.errors = [];
        this.messages = [];
        this.loading = false;
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = _this.statusService.user;
        });
    };
    TopNavbarComponent.prototype.removeMessage = function (index) {
        this.messages.splice(index, 1);
    };
    TopNavbarComponent.prototype.logout = function () {
        console.log('logout');
        this.loading = true;
        //this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    return TopNavbarComponent;
}());
TopNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__("../../../../../src/app/components/common/topnavbar/topnavbar.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _b || Object])
], TopNavbarComponent);

var _a, _b;
//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/topnavbar/topnavbar.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default top-nav-collapse\" style=\"border-radius: 0px;\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Ba<span class=\"logo-dec\">ker</span></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"active\"><a href=\"#main-header\">Home</a></li>\n        <li class=\"\"><a href=\"#feature\">About</a></li>\n        <li class=\"\"><a href=\"#service\">Services</a></li>\n        <li class=\"\"><a href=\"#portfolio\">Portfolio</a></li>\n        <li class=\"\"><a href=\"#testimonial\">Testimonial</a></li>\n        <li class=\"\"><a href=\"#blog\">Blog</a></li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user?.fio}} <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"/accounts/logout/?next=/\" target=\"_self\">Выход</a></li>\n              </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/mode_calling/mode_calling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeCallingComponent; });
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


var ModeCallingComponent = (function () {
    function ModeCallingComponent(webSocketService) {
        this.webSocketService = webSocketService;
        this.stopcalling = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.callingfroms = [];
    }
    ModeCallingComponent.prototype.ngOnInit = function () {
        var self = this;
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            //console.log("Calling message", message)
            if (message.command == 'CALLING_MASTER_REJECT') {
                self.stopCallingDialog();
            }
        });
    };
    ModeCallingComponent.prototype.ngAfterViewInit = function () {
    };
    ModeCallingComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeCallingComponent.prototype.ngOnDestroy = function () {
    };
    ModeCallingComponent.prototype.stopCallingDialog = function () {
        this.stopcalling.emit();
    };
    return ModeCallingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModeCallingComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModeCallingComponent.prototype, "callingdialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModeCallingComponent.prototype, "stopcalling", void 0);
ModeCallingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modecalling',
        template: __webpack_require__("../../../../../src/app/components/mode_calling/mode_calling.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebSocketService */]) === "function" && _a || Object])
], ModeCallingComponent);

var _a;
//# sourceMappingURL=mode_calling.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mode_calling/mode_calling.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>Звоним...</h4>\n                \n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p style=\"margin: 0 20px;\">{{callingdialog.dialog.name}}</p>\n            </div>\n            <div class=\"col-md-12\" style=\"text-align: center;\">\n                    <img src=\"/static/assets/images/progress.gif\" style=\"width: 100px;margin: 0 auto;\">\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        {{calling_time}}\n        <button class=\"btn btn-warning\" (click)=\"stopCallingDialog()\">\n            <span>Отмена</span>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mode_dialog_master/mode_dialog_master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeDialogMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
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





var ModeDialogMasterComponent = (function () {
    function ModeDialogMasterComponent(statusService, dialogsService, websocketService) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.websocketService = websocketService;
        this.stopdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userMedia = navigator;
        this.loading = false;
        var self = this;
    }
    ModeDialogMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe(function (data) {
            self.activedialog = data;
            console.log('this.user ', self.activedialog);
            _this._startPeer();
        });
    };
    ModeDialogMasterComponent.prototype.ngAfterViewInit = function () {
    };
    ModeDialogMasterComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeDialogMasterComponent.prototype.ngOnDestroy = function () {
    };
    ModeDialogMasterComponent.prototype._startPeer = function () {
        var self = this;
        self.peer = new Peer({
            socket: self.websocketService.ws,
            //key: self.user.key,
            host: __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].URL_WEBSOKET_PEER,
            //path: '/peerjs',
            //path: '/',
            debug: 3,
            secure: true,
            port: 8000,
            id: self.user.key_id
        });
        self.peer.on('open', function (id) {
            self.peerid = id;
            console.log('Peer: My peer ID is: ' + id);
        });
        self.peer.on('error', function (err) {
            console.log("ERROR:", err.message);
        });
        // Receiving a call
        self.peer.on('call', function (receivecall) {
            console.log('Receiving a call');
            console.log("!!!!!", receivecall);
            self._startLocalVideo(function () {
                receivecall.answer(self.localStream);
                self._prepareCall(receivecall);
            });
            // ответный звонок на вызов
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
        this.userMedia.getUserMedia({
            audio: {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            }, video: true
        }, function (stream) {
            $('#local-video').prop('src', URL.createObjectURL(stream));
            console.log("!!!!!$('#local-video')", $('#local-video'));
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function (error) {
            console.log("ERROR getUserMedia: ", error);
        });
        /*
        // Get audio/video stream
        window.navigator.getUserMedia({
            audio: true,
            video: true
        }, function(stream) {
            $('#local-video').prop('src', URL.createObjectURL(stream));
            console.log("!!!!!$('#local-video')", $('#local-video'))
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function(error) {
            console.log("ERROR getUserMedia: ", error);
        });
        */
    };
    ModeDialogMasterComponent.prototype._prepareCall = function (call) {
        var self = this;
        if (self.answeringCall) {
            self.answeringCall.close();
        }
        self.answeringCall = call;
        call.on('stream', function (stream) {
            console.log('XXX!!! got stream');
            // get call stream from remote host
            $('#remote-video').prop('src', URL.createObjectURL(stream));
            // turn on local video for answer
            //startLocalVideo(function() {
            //    window.peer.call(call.peer, window.localStream);
            //});
        });
        call.on('close', function () {
            console.log("CLOSE");
            if (self.answeringCall) {
                self.answeringCall.close();
            }
            if (self.localStream) {
                self.localStream.getTracks().forEach(function (track) {
                    track.stop();
                });
                self.localStream.src = "";
            }
            if ($('#remote-video')) {
                $('#remote-video').src = "";
            }
        });
    };
    ModeDialogMasterComponent.prototype.stopDialog = function () {
        this.stopdialog.emit(this.activedialogid);
    };
    ModeDialogMasterComponent.prototype.hangPhone = function () {
        if (this.answeringCall) {
            this.answeringCall.close();
        }
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
ModeDialogMasterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modedialogmaster',
        template: __webpack_require__("../../../../../src/app/components/mode_dialog_master/mode_dialog_master.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object])
], ModeDialogMasterComponent);

var _a, _b, _c;
//# sourceMappingURL=mode_dialog_master.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mode_dialog_master/mode_dialog_master.template.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>Диалог мастер</h4>\n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p style=\"margin: 0 20px;\">{{activedialogid}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n\n        <div>\n            \n           \n            <div>\n                <video id=\"remote-video\" autoplay=\"\" style=\"border:2px solid red\"></video>\n            </div>\n            <div>\n                <video id=\"local-video\" muted=\"true\" autoplay=\"\" style=\"border:2px solid green\"></video>\n            </div>\n\n\n        </div>\n        \n        <div style=\"margin-top: 30px\">\n            <button class=\"btn btn-warning\" (click)=\"hangPhone()\"><span>Сбросить трубку</span></button>\n            <button class=\"btn btn-warning\" (click)=\"stopDialog()\"><span>Выход</span></button>\n        </div>\n    </div>\n</div>"

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
    function ModeDialogPupilComponent(statusService, dialogsService, websocketService) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.websocketService = websocketService;
        this.stopdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.userMedia = navigator;
        this.loading = false;
        var self = this;
    }
    ModeDialogPupilComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.user = self.statusService.user;
        self.dialogsService.getActiveDialog(self.activedialogid).subscribe(function (data) {
            self.activedialog = data;
            console.log('this.user ', self.activedialog);
            _this._startPeer();
        });
    };
    ModeDialogPupilComponent.prototype.ngAfterViewInit = function () {
    };
    ModeDialogPupilComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeDialogPupilComponent.prototype.ngOnDestroy = function () {
    };
    ModeDialogPupilComponent.prototype._startPeer = function () {
        var self = this;
        self.peer = new Peer({
            socket: self.websocketService.ws,
            //key: this.user.key,
            host: __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].URL_WEBSOKET_PEER,
            //path: '/peerjs',
            //path: '/',
            debug: 3,
            secure: true,
            port: 8000,
            id: self.user.key_id
        });
        self.peer.on('open', function (id) {
            console.log('Peer: My peer ID is: ' + id);
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
            console.log('Receiving a call');
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
        this.userMedia.getUserMedia({
            audio: {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            }, video: true
        }, function (stream) {
            $('#local-video').prop('src', URL.createObjectURL(stream));
            console.log("!!!!!$('#local-video')", $('#local-video'));
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function (error) {
            console.log("ERROR getUserMedia: ", error);
        });
        /*
        // Get audio/video stream
        this.userMedia.getUserMedia({
            audio: true,
            video: true
        }, function(stream) {
            $('#local-video').prop('src', URL.createObjectURL(stream));
            self.localStream = stream;
            if (callback) {
                callback();
            }
        }, function(error) {
            console.log("ERROR getUserMedia: ", error);
        });
        */
    };
    ModeDialogPupilComponent.prototype._prepareCall = function (call) {
        var self = this;
        if (self.callingCall) {
            self.callingCall.close();
        }
        self.callingCall = call;
        call.on('stream', function (stream) {
            console.log('got stream');
            // get call stream from remote host
            $('#remote-video').prop('src', URL.createObjectURL(stream));
            // turn on local video for answer
            //startLocalVideo(function() {
            //    window.peer.call(call.peer, window.localStream);
            //});
        });
        call.on('close', function () {
            console.log("CLOSE");
            if (self.callingCall) {
                self.callingCall.close();
            }
            if (self.localStream) {
                self.localStream.getTracks().forEach(function (track) {
                    track.stop();
                });
                self.localStream.src = "";
            }
            if ($('#remote-video')) {
                $('#remote-video').src = "";
            }
        });
    };
    ModeDialogPupilComponent.prototype.stopDialog = function () {
        this.stopdialog.emit(this.activedialogid);
    };
    ModeDialogPupilComponent.prototype.hangPhone = function () {
        if (this.callingCall) {
            this.callingCall.close();
        }
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
ModeDialogPupilComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modedialogpupil',
        template: __webpack_require__("../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object])
], ModeDialogPupilComponent);

var _a, _b, _c;
//# sourceMappingURL=mode_dialog_pupil.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.template.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>Диалог ученик</h4>\n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p style=\"margin: 0 20px;\">{{activedialogid}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n\n        <div>\n            \n            <div>\n                <video id=\"remote-video\" autoplay=\"\" style=\"border:2px solid red\"></video>\n            </div>\n            <div>\n                <video id=\"local-video\" muted=\"true\" autoplay=\"\" style=\"border:2px solid green\"></video>\n            </div>\n\n\n        </div>\n        \n        <div style=\"margin-top: 30px\">\n             <button class=\"btn btn-warning\" (click)=\"hangPhone()\"><span>Сбросить трубку</span></button>\n            <button class=\"btn btn-warning\" (click)=\"stopDialog()\"><span>Выход</span></button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mode_wait_pupil/mode_wait_pupil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeWaitPupilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModeWaitPupilComponent = (function () {
    function ModeWaitPupilComponent(webSocketService, dialogsService) {
        this.webSocketService = webSocketService;
        this.dialogsService = dialogsService;
        this.stopwaitingdialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.acceptcall = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.callingfroms = [];
        this.loading = false;
    }
    ModeWaitPupilComponent.prototype.ngOnInit = function () {
        var self = this;
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            //console.log("message", message)
            if (message.command == 'CALLING') {
                if (message.target == 'TAKEPHONE') {
                    self._calling(message.user);
                }
            }
        });
    };
    ModeWaitPupilComponent.prototype.ngAfterViewInit = function () {
    };
    ModeWaitPupilComponent.prototype.ngOnChanges = function (changes) {
    };
    ModeWaitPupilComponent.prototype.ngOnDestroy = function () {
    };
    ModeWaitPupilComponent.prototype.handlerRejectfrom = function (user_key_id) {
        console.log('user_key_id', user_key_id);
        this.webSocketService.sendCommand({
            command: 'CALLING_MASTER_REJECT',
            target: user_key_id,
            source: this.user.key_id
        });
    };
    ModeWaitPupilComponent.prototype.handlerTakeCall = function (user_key_id) {
        this.acceptcall.emit(user_key_id);
    };
    ModeWaitPupilComponent.prototype._calling = function (callfrom) {
        var cl = {};
        for (var i = 0; i < this.callingfroms.length; i++) {
            cl[this.callingfroms[i].key_id] = this.callingfroms[i];
        }
        callfrom.lasttime = new Date();
        cl[callfrom.key_id] = callfrom;
        this.callingfroms = [];
        for (var i in cl) {
            this.callingfroms.push(cl[i]);
        }
    };
    ModeWaitPupilComponent.prototype.stopWaitCallDialog = function () {
        var self = this;
        self.loading = true;
        self.dialogsService.stopDialog().subscribe(function (data) {
            self.loading = false;
            self.stopwaitingdialog.emit(data);
            console.log(data);
        });
    };
    return ModeWaitPupilComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModeWaitPupilComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModeWaitPupilComponent.prototype, "activedialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModeWaitPupilComponent.prototype, "stopwaitingdialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModeWaitPupilComponent.prototype, "acceptcall", void 0);
ModeWaitPupilComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modewaitpupil',
        template: __webpack_require__("../../../../../src/app/components/mode_wait_pupil/mode_wait_pupil.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebSocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object])
], ModeWaitPupilComponent);

var _a, _b;
//# sourceMappingURL=mode_wait_pupil.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mode_wait_pupil/mode_wait_pupil.template.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"panel panel-default\">\n     <div class=\"panel-heading\">\n        <div class=\"container\">\n            <div class=\"col-md-6\">\n                <h4>В ожидание звонка...</h4>\n            </div>\n            <div class=\"col-md-6\" style=\"text-align: right;\">\n                <p style=\"margin: 0 20px;\">{{activedialog.dialog.name}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <p *ngIf=\"callingfroms.length > 0\">Входящие звонки</p>\n        <callingfroms [listin]=\"callingfroms\" (rejectfrom)=\"handlerRejectfrom($event)\" (takecall)=\"handlerTakeCall($event)\"></callingfroms>\n        <div style=\"margin-top: 30px\">\n            <button class=\"btn btn-warning\" (click)=\"stopWaitCallDialog()\"><span>Отмена</span></button>\n        </div>\n    </div>\n</div>"

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
    };
    CallingFromsComponent.prototype.ngOnChanges = function (changes) {
        //console.log('changes', changes)
        this._checkInterval();
    };
    CallingFromsComponent.prototype.ngOnDestroy = function () {
    };
    CallingFromsComponent.prototype.rejectCall = function (item) {
        this.loading = true;
        this.rejectfrom.emit(item.key_id);
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

module.exports = "<div class=\"\" *ngFor=\"let item of listin\">\n    <div style=\"border: 1px solid;padding: 30px;margin:10px;\">\n        <p>Звонок от {{item.fio}}</p>\n        <p>{{item.lasttime}}</p>\n        <button class=\"btn btn-success\" (click)=\"takeCall(item)\" [disabled]=\"loading\"><span>Принять звонок</span></button>\n        <button class=\"btn btn-default\" (click)=\"rejectCall(item)\" [disabled]=\"loading\"><span>Сбросить</span></button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/services/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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




var DialogsService = (function () {
    //updates: Subject<any> = new Subject<any>();
    function DialogsService(_http) {
        this._http = _http;
    }
    DialogsService.prototype.getDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_DIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DialogsService.prototype.getActiveDialog = function (activedialog_id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_ACTIVEDIALOGS + activedialog_id + '/')
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DialogsService.prototype.getActiveDialogs = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_ACTIVEDIALOGS)
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DialogsService.prototype.runDialog = function (dialog_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_DIALOG_RUN + dialog_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DialogsService.prototype.stopDialog = function () {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_DIALOG_STOP, {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DialogsService.prototype.runIntoDialog = function (dialog_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_DIALOG_RUNINTO + dialog_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DialogsService.prototype.stopActiveDialog = function (dialog_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_DIALOG_ACTIVESTOP + dialog_id + "/", {})
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DialogsService.prototype.handleError = function (error) {
        console.error(error);
        //error.json().error || 
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw('Server error');
    };
    return DialogsService;
}());
DialogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DialogsService);

var _a;
//# sourceMappingURL=dialogs.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
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
    function StatusService(_http, webSocketService) {
        this._http = _http;
        this.webSocketService = webSocketService;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mode = 'mode_list';
    }
    StatusService.prototype.init = function () {
        var self = this;
        this.getStatus().subscribe(function (data) {
            console.log('data', data);
            self.user = data.user;
            if (data.status) {
                if (data.activedialog) {
                    self.mode = 'mode_wait_pupil';
                    self.activedialog = data.activedialog;
                }
            }
            self.webSocketService.init(self.user.key_id, function () {
                self.ready.emit(new Date());
                self.runHearbeat();
            });
        });
    };
    StatusService.prototype.getStatus = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].URL_STATUS)
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
            setTimeout(function () {
                self.runHearbeat();
            }, 20000);
        }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__websocket_service__["a" /* WebSocketService */]) === "function" && _b || Object])
], StatusService);

var _a, _b;
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
    initialTimeout: 10,
    maxTimeout: 1000
};
var WebSocketService = (function () {
    function WebSocketService() {
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.message = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WebSocketService.prototype.init = function (user_key, callback) {
        var self = this;
        this.ws = new __WEBPACK_IMPORTED_MODULE_1_angular2_websocket_angular2_websocket__["$WebSocket"](__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].URL_WEBSOKET + '?id=' + user_key, null, webSocketConfig);
        this.ws.onOpen(function (data) {
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
    __metadata("design:paramtypes", [])
], WebSocketService);

//# sourceMappingURL=websocket.service.js.map

/***/ }),

/***/ "../../../../../src/app/views/appviews.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppviewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__starterview_component__ = __webpack_require__("../../../../../src/app/views/starterview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_view_block_calling_callingfroms_component__ = __webpack_require__("../../../../../src/app/components/view_block_calling/callingfroms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_mode_wait_pupil_mode_wait_pupil_component__ = __webpack_require__("../../../../../src/app/components/mode_wait_pupil/mode_wait_pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mode_calling_mode_calling_component__ = __webpack_require__("../../../../../src/app/components/mode_calling/mode_calling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_mode_dialog_master_mode_dialog_master_component__ = __webpack_require__("../../../../../src/app/components/mode_dialog_master/mode_dialog_master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_mode_dialog_pupil_mode_dialog_pupil_component__ = __webpack_require__("../../../../../src/app/components/mode_dialog_pupil/mode_dialog_pupil.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_view_block_calling_callingfroms_component__["a" /* CallingFromsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_mode_wait_pupil_mode_wait_pupil_component__["a" /* ModeWaitPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_mode_calling_mode_calling_component__["a" /* ModeCallingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_mode_dialog_master_mode_dialog_master_component__["a" /* ModeDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_mode_dialog_pupil_mode_dialog_pupil_component__["a" /* ModeDialogPupilComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_view_block_calling_callingfroms_component__["a" /* CallingFromsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_mode_wait_pupil_mode_wait_pupil_component__["a" /* ModeWaitPupilComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_mode_calling_mode_calling_component__["a" /* ModeCallingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_mode_dialog_master_mode_dialog_master_component__["a" /* ModeDialogMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_mode_dialog_pupil_mode_dialog_pupil_component__["a" /* ModeDialogPupilComponent */]
        ],
    })
], AppviewsModule);

//# sourceMappingURL=appviews.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/starterview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
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
var StarterViewComponent = (function () {
    function StarterViewComponent(statusService, dialogsService, webSocketService) {
        this.statusService = statusService;
        this.dialogsService = dialogsService;
        this.webSocketService = webSocketService;
        this.mode = 'mode_list'; // 1 - all dialogs 'wait_pupil' - activedialogs 3 - calling
        this.mode_select_dialog = 1;
        this.activedialog = null;
        this.activedialog_id = null;
        this.loading = false;
        this.reject_call_from = null;
        this._CALLING_TIME_INTERVAL = 3000;
    }
    StarterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.statusService.ready.subscribe(function (date) {
            self.user = _this.statusService.user;
            self.mode = _this.statusService.mode;
            self.activedialog = self.statusService.activedialog;
            if (!_this.activedialog) {
                _this.showActiveDialogs();
            }
        });
        self.webSocketService.message.subscribe(function (data) {
            var message = JSON.parse(data);
            //console.log("1!!!!message", message)
            if (message.command == "UPDATE") {
                if (message.target == "activedialogs") {
                    self._updateActiveDialogs();
                }
            }
            if (message.command == "START_DIALOG_MASTER") {
                self.activedialog_id = message.dialog;
                self.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_DIALOG_MASTER;
            }
            if (message.command == "START_DIALOG_PUPIL") {
                self.activedialog_id = message.dialog;
                self.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_DIALOG_PUPIL;
            }
            if (message.command == "STOP_DIALOG_MASTER") {
                self.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_LIST;
                //ToDo update status
            }
            if (message.command == "STOP_DIALOG_PUPIL") {
                self.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_LIST;
                //ToDo update status
            }
        });
    };
    StarterViewComponent.prototype.ngOnDestroy = function () {
    };
    StarterViewComponent.prototype.showDialogs = function () {
        this.mode_select_dialog = 1;
        this._updateDialogs();
    };
    StarterViewComponent.prototype._updateDialogs = function () {
        var _this = this;
        this.loading = true;
        this.dialogsService.getDialogs().subscribe(function (data) {
            _this.dialogs = data;
            _this.loading = false;
        });
    };
    StarterViewComponent.prototype.showActiveDialogs = function () {
        this.mode_select_dialog = 2;
        this._updateActiveDialogs();
    };
    StarterViewComponent.prototype._updateActiveDialogs = function () {
        var _this = this;
        this.loading = true;
        this.dialogsService.getActiveDialogs().subscribe(function (data) {
            _this.activedialogs = data;
            _this.loading = false;
        });
    };
    StarterViewComponent.prototype.runDialog = function (dialog) {
        var self = this;
        self.loading = true;
        self.dialogsService.runDialog(dialog.id).subscribe(function (data) {
            console.log(data);
            self.loading = false;
            if (data.status) {
                self.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_WAIT_PUPIL;
                self.activedialog = data.activedialog;
            }
        });
    };
    StarterViewComponent.prototype.callDialog = function (dialog) {
        var self = this;
        self.callingdialog = dialog;
        self.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_CALLING;
        self._callingDialog(dialog.id);
    };
    StarterViewComponent.prototype._callingDialog = function (activedialog_id) {
        // console.log("_callingDialog")
        var self = this;
        if (self.mode == __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_CALLING) {
            self.calling_time = new Date();
            self.webSocketService.sendCommand({
                command: 'CALLING',
                target: activedialog_id,
                source: self.user.key_id
            });
            setTimeout(function () {
                self._callingDialog(activedialog_id);
            }, __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].CALLING_TIME_INTERVAL);
        }
    };
    StarterViewComponent.prototype.handlerStopCalling = function ($event) {
        this.callingdialog = null;
        this.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_LIST;
    };
    StarterViewComponent.prototype.handelerStopWaitDialog = function (data) {
        if (data.status) {
            this.mode = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].MODE_LIST;
            this.showDialogs();
        }
    };
    StarterViewComponent.prototype.handlerAcceptCall = function (user_key_id) {
        //this.mode = AppSettings.MODE_DIALOG_M;
        var self = this;
        self.webSocketService.sendCommand({
            command: 'START_DIALOG',
            target: self.activedialog.id,
            master: self.user.key_id,
            pupil: user_key_id
        });
    };
    StarterViewComponent.prototype.handelerStopDialog = function (data) {
        var self = this;
        self.loading = true;
        console.log('data', data);
        self.webSocketService.sendCommand({
            command: 'STOP_ACTIVE_DIALOG',
            target: data,
            user: self.user.key_id
        });
        /*
        self.dialogsService.stopActiveDialog(self.activedialog_id).subscribe((data) => {
            console.log(data)
            self.loading = false;
            self.mode = AppSettings.MODE_LIST;
        });
        */
    };
    return StarterViewComponent;
}());
StarterViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'starter',
        template: __webpack_require__("../../../../../src/app/views/starterview.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialogs_service__["a" /* DialogsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebSocketService */]) === "function" && _c || Object])
], StarterViewComponent);

var _a, _b, _c;
//# sourceMappingURL=starterview.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/starterview.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div *ngIf=\"mode == 'mode_list'\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4>Выберите диалог</h4>\n            </div>\n            <div class=\"panel-body\">\n                <button class=\"btn btn-default\" [ngClass]=\"{'btn-info': mode_select_dialog == 2}\" (click)=\"showActiveDialogs()\"><span>Диалоги в ожидание игроков</span></button>\n                <button class=\"btn btn-default\" [ngClass]=\"{'btn-info': mode_select_dialog == 1}\" (click)=\"showDialogs()\"><span>Все диалоги</span></button>\n            \n                <div *ngIf=\"mode_select_dialog == 1\" class=\"row\" style=\"margin: 20px 0;\"> \n                    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of dialogs\"> \n                        <div class=\"thumbnail\"> \n                            <img alt=\"100%x200\" data-src=\"holder.js/100%x200\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVlOTZiYzA5NjUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWU5NmJjMDk2NSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS40Ij4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+\" data-holder-rendered=\"true\" style=\"height: 100px; width: 100%; display: block;\"> \n                            <div class=\"caption\"> \n                                <h3>{{item.name}}</h3> \n                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> \n                                <p>\n                                    <button class=\"btn btn-primary\" (click)=\"runDialog(item)\">\n                                        Запустить диалог и ждать игрока\n                                    </button> \n                                </p> \n                            </div> \n                        </div> \n                    </div> \n                </div>\n\n\n                <div *ngIf=\"mode_select_dialog == 2\" class=\"row\" style=\"margin: 20px 0;\"> \n                    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of activedialogs\"> \n                        <div class=\"thumbnail\"> \n                            <img alt=\"100%x200\" data-src=\"holder.js/100%x200\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVlOTZiYzA5NjUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWU5NmJjMDk2NSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS40Ij4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+\" data-holder-rendered=\"true\" style=\"height: 100px; width: 100%; display: block;\"> \n                            <div class=\"caption\"> \n                                <h3>{{item.dialog?.name}}</h3> \n                                <p style=\"text-align: right;\">{{item.master?.fio}}</p>\n                                <p style=\"text-align: right;\">запущено: {{item.created_at| date:\"hh:mm dd-MM-yyyy\"}}</p>\n                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> \n                                <p>\n                                    <button class=\"btn btn-primary\" (click)=\"callDialog(item)\">\n                                        Войти\n                                    </button> \n                                </p> \n                            </div> \n                        </div> \n                    </div> \n                </div>\n\n\n            </div>\n        </div>\n\n        <div *ngIf=\"mode == 'mode_wait_pupil'\">\n            <modewaitpupil [user]=\"user\" [activedialog]=\"activedialog\" (stopwaitingdialog)=\"handelerStopWaitDialog($event)\" (acceptcall)=\"handlerAcceptCall($event)\"></modewaitpupil>\n        </div>\n\n\n\n        <div *ngIf=\"mode == 'mode_calling'\">\n            <modecalling [callingdialog]=\"callingdialog\" (stopcalling)=\"handlerStopCalling($event)\"></modecalling>\n        </div>\n\n        \n        <div *ngIf=\"mode == 'mode_dialog_master'\">\n            <modedialogmaster [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogmaster>\n        </div>\n\n        <div *ngIf=\"mode == 'mode_dialog_pupil'\">\n            <modedialogpupil [activedialogid]=\"activedialog_id\" (stopdialog)=\"handelerStopDialog($event)\"></modedialogpupil>\n        </div>\n\n    </div>\n</div>\n\n"

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