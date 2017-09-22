import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { FormControl, FormsModule } from '@angular/forms';

//import {BsDropdownModule} from 'ngx-bootstrap';

import {BasicLayoutComponent} from "./basicLayout.component";

import {NavigationComponent} from "./../navigation/navigation.component";
//import {FooterComponent} from "./../footer/footer.component";
import {TopNavbarComponent} from "./../topnavbar/topnavbar.component";


@NgModule({
  declarations: [
    //FooterComponent,
    BasicLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
  ],
  exports: [
    //FooterComponent,
    BasicLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
  ],
})

export class LayoutsModule {}
