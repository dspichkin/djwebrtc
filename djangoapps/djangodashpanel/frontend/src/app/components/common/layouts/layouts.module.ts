import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

import {blankComponent} from "./blank.component";
import {basicComponent} from "./basic.component";
import { NavigationComponent } from "../navigation/navigation.component";

//import {NavigationModule} from "../navigation/navigation.module";
import {TopnavbarModule} from "../topnavbar/topnavbar.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
    declarations: [
        blankComponent,
        basicComponent,
        NavigationComponent,
    ],
    imports     : [BrowserModule, RouterModule, TopnavbarModule, FooterModule],
    exports     : [
        blankComponent,
        basicComponent,
        NavigationComponent
    ]
})

export class LayoutsModule {}
