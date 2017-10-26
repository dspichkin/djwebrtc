import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormControl, FormsModule } from '@angular/forms';

//import {BsDropdownModule} from 'ngx-bootstrap';

import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { BasicLayoutComponent } from "./basicLayout.component";
import { BlankLayoutComponent } from "./blankLayout.component";

import { NavigationComponent} from "../navigation/navigation.component";
import { FooterComponent} from "../footer/footer.component";
import { TopNavbarComponent} from "../topnavbar/topnavbar.component";
import { MessageErrorsComponent } from "../../../components/message_errors/message_errors.component";

@NgModule({
  declarations: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
    MessageErrorsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    JWBootstrapSwitchModule,
  ],
  exports: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
    MessageErrorsComponent,
  ],
})

export class LayoutsModule {}
