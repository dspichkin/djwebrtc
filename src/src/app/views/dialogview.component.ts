import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { StatusService } from '../services/status.service';
import { DialogsService } from '../services/dialogs.service';
import { WebSocketService } from '../services/websocket.service';
import { AppSettings } from '../app.settings';

//declare var moment:any;
//declare var $:any;

@Component({
  selector: 'dialogview',
  templateUrl: 'dialogview.template.html'
})
export class DialogViewComponent implements OnInit  {

    public user;
    public dialog;
    public personages = [];
    public selectedPersonage;
    public current_step;

    public constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        
    }

    public ngOnInit():any {
        this._getDialog()
    }

    

    public ngOnDestroy():any {
    }
    

    
    public onChangePersonage() {
        console.log('self.selectedPersonage', this.selectedPersonage)
        this.nextStep(this.current_step.id);
    }
    
    
    private _getDialog() {
        let self = this;
        this.activatedRoute.params
            .pluck('dialog_id')
            .switchMap(dialog_id => this.dialogsService.getDialog(dialog_id))
            .subscribe((dialog) => {
                self.dialog = dialog
                
                if (this.dialog.scenario && this.dialog.scenario.personages) {
                    self.personages = this.dialog.scenario.personages;
                    self.selectedPersonage = self.dialog.scenario.steps[0].start_personage;
                    self.nextStep();
                }
            });
    }

    private _shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    public getTask() {
        let tasks = [];
        for (let i = 0; i < this.current_step.variants.length; i++) {
            tasks.push(this.current_step.variants[i])
        }
        return tasks
    }


    public getWords(item) {
        item.words = item.phrase.split(' ');
        this._shuffle(item.words);
        this._shuffle(item.words);
    }

    public clearWords(item) {
        item.words = [];
    }

    public getHints(item) {
        item.hints = item.phrase;
    }
    public clearHints(item) {
        item.hints = null;
    }

    public nextStep(next_step_id?) {
        if (next_step_id) {
            for (var i = 0; i < this.dialog.scenario.steps.length; i++) {
                if (this.dialog.scenario.steps[i].id == next_step_id) {
                    this.current_step = this.dialog.scenario.steps[i][this.selectedPersonage];
                    return;
                } 
            }
        }
        this.current_step = this.dialog.scenario.steps[0][this.selectedPersonage];
    }


}
