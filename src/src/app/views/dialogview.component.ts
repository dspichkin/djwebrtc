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
    public index_step: number = 0;
    public current_step;
    public words = [];
    public hints = [];

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
                    self.index_step = 0;
                    self.selectedPersonage = self.dialog.scenario.steps[0].start_personage;
                    self.current_step = self._getStep();
                }
            });
    }

    private _getStep() {
        return this.dialog.scenario.steps[this.index_step][this.selectedPersonage];
    }

    private _shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    public getTask() {
        if (this.current_step.task.length < 2) {
            return this.current_step.task[0];
        }
        return this.current_step.task[0];
    }

    public getPhraseForHint() {
        let phrase = "";
        for (let i = 0; i < this.current_step.phrases.length; i++) {
            phrase += this.current_step.phrases[i];
            phrase += ' ';
        }
        return phrase;
    }


    public getWords() {
        console.log('this.current_step[this.selectedPersonage]', this.current_step)
        let phrase = this.getPhraseForHint();
        this.words = phrase.split(' ');
        this._shuffle(this.words);
        this._shuffle(this.words);
    }

    public clearWords() {
        this.words = [];
    }

    public getHints() {
        this.hints = this.current_step.phrases;
    }
    public clearHints() {
        this.hints = [];
    }


}
