import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter, ChangeDetectorRef,
    ViewRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject }    from 'rxjs/Subject';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { FileUploader } from 'ng2-file-upload';
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

    public uploader:FileUploader;// = new FileUploader({ url: AppSettings.URL_MYDIALOGS });
    private description_is_changed: boolean = false;
    
    descriptionChanged: Subject<string> = new Subject<string>();
    personageChanged: Subject<string> = new Subject<string>();

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
        this.descriptionChanged
            .debounceTime(2000) // wait 1 sec after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(model => {
                this.saveDescription();
                this.description_is_changed = false;
            });
        this.personageChanged
            .debounceTime(2000) // wait 1 sec after the last event before emitting last event
            .distinctUntilChanged()
            .subscribe(model => {
                this.savePersonages();
                this.description_is_changed = false;
            });

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
        
        this.uploader = new FileUploader({ 
            url: AppSettings.URL_MYDIALOGS + this.dialogue.id + '/bg/',
            headers: [{
                name: 'X-CSRFToken',
                value: this.getCookie("csrftoken")
            }]
        });
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            this.notificationService.add(new Notification('Сообщение', 'alert-success', 'Картинка загружена'));
            this._getDialog();
        };
    }    

    private getCookie(name: string): string {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
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
    /*
    private saveDialog(item) {
        item.is_published = !item.is_published;
        this.loading = true;
        let params = {
            is_published: item.is_published
        }
        this.dialogsService.saveMyDialogs(item.id, params).subscribe((data) => {
            this.loading = false;
            this.notificationService.add(new Notification('Сообщение', 'alert-success', 'Настройки сохранены'));
        });
    }
    */
    private saveDescription() {
        this.loading = true;
        let params = {
            dialog_name: this.dialogue.name,
            description: this.dialogue.description,
            level: this.selectedDialogLevel,
            is_published: this.dialogue.is_published
        }
        this.dialogsService.saveMyDialogs(this.dialogue.id, params).subscribe((data) => {
            this.loading = false;
        });
    }


    private savePersonages() {
        this.loading = true;
        this.dialogue.scenario.personages = [{
            role: "master", 
            name: this.personage_a
        }, {
            role: "pupil",
            name: this.personage_b 
        }];
        let params = {
            personages: this.dialogue.scenario.personages
        }
        this.dialogsService.saveMyDialogs(this.dialogue.id, params).subscribe((data) => {
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

    private onFileSelected () {
        this.uploader.uploadAll();
    }
    
    private publishDialog() {
        this.dialogue.is_published = !this.dialogue.is_published;
        this.saveDescription();
    }

    private changedDescriptionData($event, type_text) {
        if (type_text == 'name' && !$event) {
            return;
        }
        this.description_is_changed = true;
        this.dialogue[type_text] = $event;
        this.descriptionChanged.next($event);
    }

    private changedPersonageData($event, type_text) {
        if (!$event) {
            return;
        }
        this.description_is_changed = true;
        this[type_text] = $event;
        console.log('this[type_text]', this[type_text])
        this.personageChanged.next($event);
    }
    
}
