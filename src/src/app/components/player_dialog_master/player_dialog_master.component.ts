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
  selector: 'playerdialogmaster',
  templateUrl: 'player_dialog_master.template.html'
})

export class PlayerDialogMasterComponent implements OnInit, OnDestroy {
    @Input() public activedialog;
    @Output() public stopdialog = new EventEmitter();

    public current_step;
    public current_step_id;
    public current_mode = 1; // 1 - ожидание хода 2 - мой ход
    private currentPersonage;


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
        this.current_step_id = this.activedialog.dialog.scenario.steps[0].id;
        this._setMode();
        this.current_step = this.activedialog.dialog.scenario.steps[0][this.currentPersonage];

        console.log('currest step', this.current_step)
        console.log('selectedPersonage', this.currentPersonage)
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
    }

    private _setMode() {
        let step = this._getStep(this.current_step_id)
        if (step.start_personage == 'pupil') {
            this.current_mode = 1;  // Ожидаем ход игрока
            this.currentPersonage = 'pupil';
        } else if (step.start_personage == 'master') {
            this.currentPersonage = 2;
            this.currentPersonage = 'master';
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


}
