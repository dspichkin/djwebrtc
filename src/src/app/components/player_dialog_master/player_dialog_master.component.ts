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
  selector: 'playerdialogmaster',
  templateUrl: 'player_dialog_master.template.html'
})

export class PlayerDialogMasterComponent implements OnInit, OnDestroy {
    @Input() public activedialog;
    @Input() public user;
    @Output() public stopdialog = new EventEmitter();
    @Output() public changeactivedialog = new EventEmitter();

    private current_step;
    private current_step_id;
    private current_mode = 1; // 1 - ожидание хода 2 - мой ход
    private currentPersonage;
    private open_change_dialog:boolean = false;
    private message_change_turn_to_master = false;

    private passed_turns = {
        master: false,
        pupil: false
    }

    private loading: boolean = false;

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

        //console.log('user', self.user)

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
            if (message.command == "MESSAGE_CHANGE_TURN_TO_MASTER") {
                this.message_change_turn_to_master = true;
            }


            if (message.command == "CHANGE_DIALOG") {
                self.loading = true;
                self.dialogsService.getActiveDialog(message.activedialodid).subscribe((activedialog)=> {
                    self.loading = false;
                    self.changeactivedialog.emit(activedialog);
                    self.passed_turns.master = false;
                    self.passed_turns.pupil = false;
                    self.activedialog = activedialog;
                    self.current_step_id = self.activedialog.dialog.scenario.steps[0].id;
                    self._setStartStepPersonage(self.current_step_id);
                    self.current_step = self.activedialog.dialog.scenario.steps[0][self.currentPersonage];
                    self._detectChanges();

                })
                self._detectChanges();
            }

            //console.log('message', message)
            if (message.command == "SET_STEP") {
                self.passed_turns.master = false;
                self.passed_turns.pupil = false;

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
                    self.passed_turns.master = true;
                } else {
                    self.currentPersonage = 'pupil';
                     self.passed_turns.pupil = true;
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
        self.current_step_id = this.activedialog.dialog.scenario.steps[0].id;
        self._setStartStepPersonage(self.current_step_id);
        self.current_step = this.activedialog.dialog.scenario.steps[0][this.currentPersonage];
        self._detectChanges();

    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        this.ref.detach();
        //this.webSocketService.message.unsubscribe();
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


    private _setStartStepPersonage(next_step_id) {
        let step = this._getStep(next_step_id)
        if (step.start_personage == 'pupil') {
            this.current_mode = 1;  // Ожидаем ход игрока
            this.currentPersonage = 'pupil';
            this.passed_turns.pupil = true;
        } else if (step.start_personage == 'master') {
            this.current_mode = 2;
            this.currentPersonage = 'master';
            this.passed_turns.master = true;
        }
    }
    
    private _getNextStep(next_step_id) {
        this.message_change_turn_to_master = false;
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

    private nextStep(next_id) {

        let command = {
            command: 'NEXTSTEP',
            nextstep: next_id,
            activedialogid: this.activedialog.id,
            source: this.user.key_id
        }
        this.webSocketService.sendCommand(command)
    }

    private myTurn() {
        let command = {
            command: 'CHANGE_PERSONAGE',
            activedialogid: this.activedialog.id,
            source: this.user.key_id
        }
        this.webSocketService.sendCommand(command)
    }

    private pupilTurn() {
        let command = {
            command: 'CHANGE_PERSONAGE',
            activedialogid: this.activedialog.id,
            source: this.user.key_id
        }
        this.webSocketService.sendCommand(command)
    }

    private hasNextTurn(item) {
        if (item.next_step > 0) {
            let next_step = this._getStep(item.next_step);
            if (next_step.pupil && next_step.pupil.variants && next_step.pupil.variants.length > 0) {
                return true;
            }
        }
        return  false;
    }

    private hasMyTurn() {
        let current_step = this._getStep(this.current_step_id);
        if (current_step.master && current_step.master.variants && current_step.master.variants.length > 0) {
            return true;
        }
        return false;
    }

    private hasPlayerTurn() {
        let current_step = this._getStep(this.current_step_id);
        if (current_step.pupil && current_step.pupil.variants && current_step.pupil.variants.length > 0) {
            let has_next = false
            for (let i = 0; i < current_step.pupil.variants.length; i++)  {
                if (current_step.pupil.variants[i].next_step && current_step.pupil.variants[i].next_step > -1) {
                    has_next = true;
                    break;
                }
            }
            if (has_next) {
                return true;
            }
        }
        
        return false;
    }

    private openChangeDialog() {
        this.open_change_dialog = !this.open_change_dialog;
    }




    private handlerCloseChangeCurrentDialog(result) {
        if (!result) {
            this.open_change_dialog = false;
        }
    }

    private handlerSelectDialog(activedialog) {
        this.open_change_dialog = false;
        let command = {
            command: 'CHANGE_DIALOG',
            current_activedialogid: this.activedialog.id,
            next_activedialogid: activedialog.id,
        }
        this.webSocketService.sendCommand(command)
    } 
}
