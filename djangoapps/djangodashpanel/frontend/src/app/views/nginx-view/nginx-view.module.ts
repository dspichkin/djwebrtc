import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { FormsModule } from '@angular/forms';

import { nginxViewComponent } from "./nginx-view.component";
import { IpComponent } from "./ip/ip.component";
import { RefComponent } from "./ref/ref.component";
import { AgentComponent } from "./agent/agent.component";
//import { NotificationComponent } from "../../components/common/notification/notification.component";


import { ChartsModule } from '../../libs/ng2-charts/ng2-charts';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    declarations: [
        nginxViewComponent,
        //NotificationComponent,
        IpComponent,
        RefComponent,
        AgentComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ChartsModule,
        NouisliderModule
    ],
})

export class NginxViewModule {}