import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter, ChangeDetectorRef,
    ViewRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WebSocketService } from '../../services/websocket.service';
import { DialogsService } from '../../services/dialogs.service';
import { StatusService } from '../../services/status.service';


import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';

import { AppSettings } from '../../app.settings';

@Component({
  selector: 'mydialogueedit',
  templateUrl: 'mydialogue.edit.template.html'
})

export class MyDialogueEditViewComponent implements OnInit {

    user;
    private mode:string = 'base'; //base, scenario
    private dialogue: any = {
        name: ""
    };
    private loading: boolean = false;
    private personages;
    private selectedPersonage;
    private levels = [
        {
            id: 10,
            title: "Beginner, Elementary"
        },{
            id: 20,
            title: "Pre-Intermediate"
        },{
            id: 30,
            title: "Intermediate"
        },{
            id: 40,
            title: "Upper-Intermediate"
        },{
            id: 50,
            title: "Advanced"
        },{
            id: 60,
            title: "Proficiency"
        },
    ]
    private selectedDialogLevel;


    constructor(
        private dialogsService: DialogsService,
        private statusService: StatusService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef,
        ) {
    }

    ngOnInit() {
        let self = this;
        

        self.statusService.ready.subscribe((date)=> {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;
        } else {
            self.statusService.getStatus();
        }
        this._getDialog();
    }

    ngAfterViewInit() {
        
    }

    private _getDialog() {
        let self = this;
        this.activatedRoute.params
            .pluck('dialogue_id')
            .switchMap(dialogue_id => this.dialogsService.getDialog(dialogue_id))
            .subscribe((dialogue) => {
                self.dialogue = dialogue;
                self._initVars();
                console.log('self.dialogue ', self.dialogue )
                if (this.dialogue.scenario && this.dialogue.scenario.personages) {
                    self.personages = this.dialogue.scenario.personages;
                    self.selectedPersonage = self.dialogue.scenario.steps[0].start_personage;
                }
            });
    }


    private _initVars() {
        if (this.dialogue) {
            for (let i = 0; i < this.levels.length; i++) {
                if (this.levels[i].id == this.dialogue.level) {
                    this.selectedDialogLevel = this.levels[i].id;
                }
            }
        } else {
            this.selectedDialogLevel = this.levels[0].id;
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
    
    private saveDialog(item) {
        item.is_published = !item.is_published;
        console.log('item', item)
        this.loading = true;
        let params = {
            is_published: item.is_published
        }
        this.dialogsService.saveMyDialogs(item.id, params).subscribe((data) => {
            this.loading = false;
        });
    }
    
    
    
}
