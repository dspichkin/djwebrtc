import { Component, OnInit, OnDestroy, Input, Output, 
    OnChanges, ViewChild, ElementRef, EventEmitter } from '@angular/core';
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
    @Output() public stopdialog = new EventEmitter();

    public current_step;
    public current_step_id;
    public current_mode; // 1 - ожидание хода 2 - мой ход
    public selectedPersonage;


    constructor(
        private statusService: StatusService,
        private dialogsService: DialogsService,
        private webSocketService: WebSocketService
        ) {
        var self = this;
    }

    ngOnInit() {
        let self = this;

        self.webSocketService.message.subscribe((data) => {
            let message = JSON.parse(data);
        });
        console.log('currest step', this.current_step)
        console.log('selectedPersonage', this.selectedPersonage)
        console.log("!!!!!this.current_mode0", this.current_mode)
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
    }

    private _setMode() {
        let step = this._getStep(this.current_step_id)
        console.log("!!!!!this.current_mode1", step)
        if (step.start_personage == 'pupil') {
            this.current_mode = 2;
            this.selectedPersonage = 'pupil';
        } else if (step.start_personage == 'master') {
            this.current_mode = 1;
            this.selectedPersonage = 'master';
        }
    }

    ngOnChanges(changes) {
        console.log("!!!!!", changes)
        if (changes.activedialog && !changes.activedialog.previousValue) {
            this.current_step_id = this.activedialog.dialog.scenario.steps[0].id;
            //this.selectedPersonage = this.activedialog.dialog.scenario.steps[0].start_personage;
            this._setMode();
            this.current_step = this.activedialog.dialog.scenario.steps[0][this.selectedPersonage];
            console.log("!!!!!this.selectedPersonage3", this.selectedPersonage)
            console.log("!!!!!this.current_mode1", this.current_mode)
        }
    }
    

    getTask() {
        let tasks = [];
        for (let i = 0; i < this.current_step.variants.length; i++) {
            tasks.push(this.current_step.variants[i])
        }
        return tasks
    }
    private _getNextStep(next_step_id) {
        if (next_step_id) {
            let step  = this._getStep(next_step_id);
            if (step) {
                return step[this.selectedPersonage];
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



}
