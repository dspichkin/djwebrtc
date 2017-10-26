import { Component, OnInit, OnDestroy, Input, Output, 
    OnChanges, ViewChild, ElementRef, EventEmitter, ChangeDetectorRef,
    ViewRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppSettings } from '../../app.settings';
import { StatusService } from '../../services/status.service';
import { DialogsService } from '../../services/dialogs.service';
import { WebSocketService } from '../../services/websocket.service';

declare var Peer:any;
declare var $:any;
declare const navigator;

@Component({
  selector: 'playerdialogpupil',
  templateUrl: 'player_dialog_pupil.template.html'
})

export class PlayerDialogPupilComponent implements OnInit, OnDestroy {
    @Input() public activedialog;
    @Input() public user;
    @Output() public stopdialog = new EventEmitter();
    @Output() public changeactivedialog = new EventEmitter();

    public current_step;
    public current_step_id;
    public current_mode; // 1 - ожидание хода 2 - мой ход
    public currentPersonage;
    public show_master_text = false;

    private loading = false;
    
    private message_change_turn_to_master = false;

    constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService,
        private ref: ChangeDetectorRef
        ) {
        var self = this;
    }

    ngOnInit() {
        let self = this;

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);

            if (message.command == "CHANGE_DIALOG") {
                self.loading = true;
                self.dialogsService.getActiveDialog(message.activedialodid).subscribe((activedialog)=> {
                    self.loading = false;
                    self.changeactivedialog.emit(activedialog);
                    self.activedialog = activedialog;

                    self.current_step_id = self.activedialog.dialog.scenario.steps[0].id;
                    self._setStartStepPersonage(self.current_step_id);
                    self.current_step = self.activedialog.dialog.scenario.steps[0][self.currentPersonage];
                    self._detectChanges();
                })
                self._detectChanges();
            }

            if (message.command == "SET_STEP") {
                if (message.STEP_ID > 0) {
                    self.current_step_id = message.STEP_ID;
                    self._setStartStepPersonage(self.current_step_id)
                    self.current_step = self._getNextStep(message.STEP_ID);
                }
                self._detectChanges();
            }

            if (message.command == "CHANGE_PERSONAGE") {
                if (self.currentPersonage == 'pupil') {
                    self.currentPersonage = 'master';
                } else {
                    self.currentPersonage = 'pupil';
                }
                if (self.current_mode == 1) {
                    self.current_mode = 2;
                } else {
                    self.current_mode = 1;
                }
                self.current_step = self._getNextStep(self.current_step_id);
                self._detectChanges();
            }

        });
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        this.ref.detach();
        //this.webSocketService.message.unsubscribe();
    }

    
    private _setStartStepPersonage(next_step_id) {
        let step = this._getStep(next_step_id)
        if (step.start_personage == 'pupil') {
            this.current_mode = 2;
            this.currentPersonage = 'pupil';
        } else if (step.start_personage == 'master') {
            this.current_mode = 1;
            this.currentPersonage = 'master';
        }
    }

    ngOnChanges(changes) {
        if (changes.activedialog && !changes.activedialog.previousValue) {
            this.current_step_id = this.activedialog.dialog.scenario.steps[0].id;
            this._setStartStepPersonage(this.current_step_id);
            this.current_step = this.activedialog.dialog.scenario.steps[0][this.currentPersonage];
            this._detectChanges();
        }
    }

    private _detectChanges() {
        // Programmatically run change detection to fix issue in Safari
        setTimeout(() => {
            if ( this.ref !== null &&
                this.ref !== undefined &&
                ! (this.ref as ViewRef).destroyed ) {
                    this.ref.detectChanges();
            }

        }, 250);
    }
    

    private _getNextStep(next_step_id) {
        if (next_step_id) {
            let step  = this._getStep(next_step_id);
            if (step) {
                return step[this.currentPersonage];
            }
        }
    }

    private _getStep(step_id) {
        for (var i = 0; i < this.activedialog.dialog.scenario.steps.length; i++) {
            if (this.activedialog.dialog.scenario.steps[i].id == step_id) {
                return this.activedialog.dialog.scenario.steps[i];
            } 
        }
    }

    private _shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    private getWords(item) {
        item.words = item.phrase.split(' ');
        this._shuffle(item.words);
        this._shuffle(item.words);
    }

    private clearWords(item) {
        item.words = [];
    }

    private getHints(item) {
        item.hints = item.phrase;
    }
    private clearHints(item) {
        item.hints = null;
    }

    
    private triggerTurn() {
        let command = {
            command: 'MESSAGE_CHANGE_TURN_TO_MASTER',
            activedialogid: this.activedialog.id,
        }
        this.message_change_turn_to_master = true;
        this.webSocketService.sendCommand(command)
    }

}
