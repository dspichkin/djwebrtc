import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter, ChangeDetectorRef,
    ViewRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


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
    private personage_a;
    private personage_b;

    public modalRef: BsModalRef;
    @ViewChild('template') template;


    constructor(
        private dialogsService: DialogsService,
        private statusService: StatusService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private notificationService: NotificationService,
        private ref: ChangeDetectorRef,
        private modalService: BsModalService,
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

    private initPersonages() {
        for (let i = 0; i < this.dialogue.scenario.personages.length; i++) {
            if (this.dialogue.scenario.personages[i].role == "master") {
                this.personage_a = this.dialogue.scenario.personages[i].name;
            }
            if (this.dialogue.scenario.personages[i].role == "pupil") {
                this.personage_b = this.dialogue.scenario.personages[i].name;
            }
        }
    }

    private updatePersonages() {
        for (let i = 0; i < this.dialogue.scenario.personages.length; i++) {
            if (this.dialogue.scenario.personages[i].role == "master") {
                this.dialogue.scenario.personages[i].name = this.personage_a;
            }
            if (this.dialogue.scenario.personages[i].role == "pupil") {
                 this.dialogue.scenario.personages[i].name = this.personage_b;
            }
        }
    }

    private _getDialog() {
        let self = this;
        this.activatedRoute.params
            .pluck('dialogue_id')
            .switchMap(dialogue_id => this.dialogsService.getMyDialog(dialogue_id))
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
            this.initPersonages();
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
        this.loading = true;
        let params = {
            is_published: item.is_published
        }
        this.dialogsService.saveMyDialogs(item.id, params).subscribe((data) => {
            this.loading = false;
        });
    }

    private savePersonages(item) {
        this.loading = true;
        let params = {
            personages: this.dialogue.scenario.personages
        }
        this.dialogsService.saveMyDialogs(item.id, params).subscribe((data) => {
            this.loading = false;
        });
    }
    
    private showConfirmDeleteDialog() {
        this.modalRef = this.modalService.show(this.template, {
            class: 'modal-sm',
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: true
        });
    }


    private closeDeleteDialog() {
        this.modalRef.hide();
        this.modalRef = null;
    }

    private deleteDialog() {
        this.modalRef.hide();
        this.modalRef = null;
        this.loading = true;
        this.dialogsService.deleteMyDialogs(this.dialogue.id).subscribe((data) => {
            this.loading = false;
            this.router.navigate(['/mydialogues']);
        });
    }
    
    
}
