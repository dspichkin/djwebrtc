import {Routes} from "@angular/router";

import {StarterViewComponent} from "./views/starterview.component";
import {DialogViewComponent} from "./views/dialogview.component";
//import {LoginComponent} from "./views/login.component";

//import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
//import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";
import { AuthGuard } from './services/guards.service';

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'dialogs', pathMatch: 'full'},

  // App views
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'dialogs', 
            component: StarterViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'dialog/:dialog_id', 
            component: DialogViewComponent,
            canActivate: [AuthGuard]
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
  {path: '**',  redirectTo: 'dialogs'}
];
