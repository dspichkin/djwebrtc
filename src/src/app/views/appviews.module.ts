import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';


import { StarterViewComponent} from './starterview.component';
import { CallingFromsComponent } from '../components/view_block_calling/callingfroms.component';
import { ModeWaitPupilComponent } from '../components/mode_wait_pupil/mode_wait_pupil.component';
import { ModeCallingComponent } from '../components/mode_calling/mode_calling.component';
import { ModeDialogMasterComponent } from '../components/mode_dialog_master/mode_dialog_master.component';
import { ModeDialogPupilComponent } from '../components/mode_dialog_pupil/mode_dialog_pupil.component';



@NgModule({
  declarations: [
    StarterViewComponent,
    CallingFromsComponent,
    ModeWaitPupilComponent,
    ModeCallingComponent,
    ModeDialogMasterComponent,
    ModeDialogPupilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    StarterViewComponent,
    CallingFromsComponent,
    ModeWaitPupilComponent,
    ModeCallingComponent,
    ModeDialogMasterComponent,
    ModeDialogPupilComponent
  ],
})

export class AppviewsModule {
}
