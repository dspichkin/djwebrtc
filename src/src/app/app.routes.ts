import { Routes } from "@angular/router";

import { DialogsViewComponent } from "./views/dialogsview.component";
import { ActiveDialogsViewComponent } from "./views/activedialogsview.component";
import { DialogViewComponent } from "./views/dialogview.component";

//import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import { BasicLayoutComponent } from "./components/common/layouts/basicLayout.component";
import { ModeWaitPupilViewComponent } from "./views/view_mode_wait_pupil/view_mode_wait_pupil.component";
import { ModeCallingViewComponent } from "./views/view_mode_calling/view_mode_calling.component";
import { MessageViewComponent } from "./views/view_message/view_message.component";
import { ProfileViewComponent } from "./views/view_profile/view_profile.component";
import { MyDialoguesViewComponent } from "./views/mydialogues/mydialogues.component";
import { MyDialogueEditViewComponent } from "./views/mydialogues/mydialogue.edit.component";

import { AuthGuard } from './services/guards.service';

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'dialogues', pathMatch: 'full'},

  // App views
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'dialogues', 
            component: DialogsViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'activedialogues', 
            component: ActiveDialogsViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'dialogue/:dialog_id', 
            component: DialogViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'message', 
            component: MessageViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'profile', 
            component: ProfileViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: 'wait', 
    component: ModeWaitPupilViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'calling/:id', 
    component: ModeCallingViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'mydialogues', 
            component: MyDialoguesViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
        {
            path: 'mydialogues/:dialogue_id', 
            component: MyDialogueEditViewComponent,
            canActivate: [AuthGuard]
        }
    ]
  },
  
 
  // Handle all other routes
  {path: '**',  redirectTo: 'dialogues'}
];
