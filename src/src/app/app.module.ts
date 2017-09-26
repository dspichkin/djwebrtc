import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { RouterModule } from "@angular/router";

import { WebSocketService } from "./services/websocket.service";

import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';
import { AppviewsModule } from "./views/appviews.module";
import { LayoutsModule } from "./components/common/layouts/layouts.module";

import { DialogsService } from './services/dialogs.service';
import { StatusService } from './services/status.service';
import { ErrorService } from './services/error.service';
import { AuthGuard } from './services/guards.service';




export function CookieXSRFStrategyFactory() {
    return  new CookieXSRFStrategy('csrftoken', 'X-CSRFToken');
}

export const AppCSRF = {
  provide: XSRFStrategy,
  useFactory: CookieXSRFStrategyFactory,
};


@NgModule({
    declarations: [
        AppComponent,
        ],
    imports: [
        BrowserModule,
        AppviewsModule,
        LayoutsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
    ],
    providers: [
        WebSocketService,
        AppCSRF,
        StatusService,
        DialogsService,
        ErrorService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
