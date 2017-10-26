import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgCytoscapeModule } from "../vendors/ng2-cytoscape";
//import { FileSelectDirective } from 'ng2-file-upload';
//import { FileSelectDirective } from '../../../node_modules/ng2-file-upload';
import { FileUploadModule } from "ng2-file-upload";

import { SelectModule } from 'ng2-select';

import { DialogsViewComponent} from './dialogsview.component';
import { ActiveDialogsViewComponent} from './activedialogsview.component';
import { CallingFromsComponent } from '../components/view_block_calling/callingfroms.component';
import { ModeDialogPupilComponent } from '../components/mode_dialog_pupil/mode_dialog_pupil.component';
import { ModeDialogMasterComponent } from "../components/mode_dialog_master/mode_dialog_master.component";
import { DialogViewComponent } from './dialogview.component';
import { PlayerDialogMasterComponent } from '../components/player_dialog_master/player_dialog_master.component';
import { PlayerDialogPupilComponent } from '../components/player_dialog_pupil/player_dialog_pupil.component';
import { ModeWaitPupilViewComponent } from "./view_mode_wait_pupil/view_mode_wait_pupil.component";
import { ModeCallingViewComponent } from "./view_mode_calling/view_mode_calling.component";
import { ChangeCurrentDialogComponent } from "../components/change_current_dialog/change_current_dialog.component";
import { MessageViewComponent } from "./view_message/view_message.component";
import { ProfileViewComponent } from "./view_profile/view_profile.component";
import { NotificationComponent } from "../components/common/notification/notification.component";
import { ChatComponent } from "../components/chat/chat.component";
import { MyDialoguesViewComponent } from "./mydialogues/mydialogues.component";
import { MyDialogueEditViewComponent } from "./mydialogues/mydialogue.edit.component";
import { ScenarioComponent } from '../components/scenario/scenario.component';

import { EqualValidator } from './view_profile/equal_validator.directive';

@NgModule({
  declarations: [
    DialogsViewComponent,
    ActiveDialogsViewComponent,
    CallingFromsComponent,
    ModeDialogPupilComponent,
    ModeDialogMasterComponent,
    DialogViewComponent,
    PlayerDialogMasterComponent,
    PlayerDialogPupilComponent,
    ModeWaitPupilViewComponent,
    ModeCallingViewComponent,
    ChangeCurrentDialogComponent,
    MessageViewComponent,
    ProfileViewComponent,
    EqualValidator,
    NotificationComponent,
    ChatComponent,
    MyDialoguesViewComponent,
    MyDialogueEditViewComponent,
    ScenarioComponent,
    //FileSelectDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    NgCytoscapeModule,
    SelectModule,
    FileUploadModule
  ],
  exports: [
    DialogsViewComponent,
    ActiveDialogsViewComponent,
    CallingFromsComponent,
    ModeDialogPupilComponent,
    ModeDialogMasterComponent,
    DialogViewComponent,
    PlayerDialogMasterComponent,
    PlayerDialogPupilComponent,
    ModeWaitPupilViewComponent,
    ModeCallingViewComponent,
    ChangeCurrentDialogComponent,
    MessageViewComponent,
    ProfileViewComponent,
    EqualValidator,
    NotificationComponent,
    ChatComponent,
    MyDialoguesViewComponent,
    MyDialogueEditViewComponent,
    ScenarioComponent,
    //FileSelectDirective,
  ],
})

export class AppviewsModule {
}
