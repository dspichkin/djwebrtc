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

    loading = false;
    mydialogs = [];


    constructor(
        private dialogsService: DialogsService
        ) {
    }

    ngOnInit() {
        this._getMyActiveDialog();
    }

    private _getMyActiveDialog() {
        this.loading = true;
        this.dialogsService.getMyActiveDialogs().subscribe((dialogs) => {
            this.loading = false;
            this.mydialogs = dialogs;
        });

    }

    public changeSelectedDialog(item) {
        this.mydialogs.map(dialog => {
            dialog.select = false;
        });
        item.select = true;
    }

    public selectDialog() {
        const selected_dialog = this.mydialogs.find(d => d.select === true);
        this.selected_dialog.emit(selected_dialog);
    }


    ngOnDestroy() {
    }

    closeChangeDialog() {
        this.close_dialog.emit(false);
    }
}
