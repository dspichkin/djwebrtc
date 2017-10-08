import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { DialogsService } from '../../services/dialogs.service';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'changecurrentdialog',
  templateUrl: 'change_current_dialog.template.html'
})

export class ChangeCurrentDialogComponent implements OnInit, OnDestroy {
    @Output() public close_dialog  = new EventEmitter();
    @Output() public selected_dialog  = new EventEmitter();

    loading: boolean = false;
    mydialogs = [];


    constructor(
        private dialogsService: DialogsService
        ) {
    }

    ngOnInit() {
        this._getMyActiveDialog();
    }

    ngAfterViewInit() {
    }

    ngOnChanges(changes) {
    }
    
    private _getMyActiveDialog() {
        let self = this;
        self.loading = true;
        self.dialogsService.getMyActiveDialogs().subscribe((dialogs) => {
            self.loading = false;
            self.mydialogs = dialogs;
        });

    }

    private changeSelectedDialog(item) {
        for (let i = 0; i < this.mydialogs.length; i++) {
            this.mydialogs[i].select = false;
        }
        item.select = true;
    }

    private selectDialog() {
        let selected_dialog;
        for (let i = 0; i < this.mydialogs.length; i++) {
            if (this.mydialogs[i].select == true) {
                selected_dialog = this.mydialogs[i];
                break;
            };
        }
        this.selected_dialog.emit(selected_dialog);
    }


    ngOnDestroy() {
    }

    closeChangeDialog() {
        this.close_dialog.emit(false);
    }
    
}
