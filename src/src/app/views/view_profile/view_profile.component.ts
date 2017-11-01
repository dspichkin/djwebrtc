import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FileUploader } from 'ng2-file-upload';

import { WebSocketService } from '../../services/websocket.service';
import { DialogsService } from '../../services/dialogs.service';
import { StatusService } from '../../services/status.service';


import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';

import { AppSettings } from '../../app.settings';

@Component({
  selector: 'modecalling',
  templateUrl: 'view_profile.template.html'
})

export class ProfileViewComponent implements OnInit {
    public user;
    public first_name;
    public first_name_error;
    public selectedLevel;
    public skypeid;
    public avatar;
    public password;
    public password1;
    public change_password: boolean = false;

    public levels = [
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

    public sex_options = [
        {
            id: 1,
            title: "Мужской"
        },{
            id: 2,
            title: "Женский"
        }
    ]
    public year_options = [];
    public selectedSex;
    public selectedBirthYear;

    public loading: boolean = false;
    public uploader:FileUploader;

    constructor(
        private statusService: StatusService,
        private router: Router,
        private notificationService: NotificationService,
        ) {
    }

    ngOnInit() {
        let self = this;
        

        self.statusService.ready.subscribe((date)=> {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
            console.log( self.user)
            self.setVars();
        });
        if (self.statusService.user) {
            self.user = self.statusService.user;

            self.setVars();
        } else {
            self.statusService.getStatus();
        }
        
    }

    ngAfterViewInit() {
        
    }

    setVars() {
        let now = new Date();
        this.year_options = [];
        for (var i = 1950; i < now.getFullYear() - 5; i++) {
            this.year_options.push({
                id: i,
                title: i
            })
        }

        this.first_name = this.user.first_name;
        this.selectedLevel = this.user.level;
        this.skypeid = this.user.skypeid;
        this.selectedSex = this.user.sex;
        this.selectedBirthYear = this.user.birth_year;

        this.uploader = new FileUploader({ 
            url: AppSettings.URL_USER_SETTING + 'avatar/',
            headers: [{
                name: 'X-CSRFToken',
                value: this.getCookie("csrftoken")
            }]
        });
        
        let self = this;

        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            this.statusService.getStatus().subscribe((data) => {
                self.user = data.user;
            })
        };
    }

    private getCookie(name: string): string {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return decodeURIComponent(parts.pop().split(";").shift());
    }

    
    changePassword($event) {
        if (this.password1) {
            this.password1 = "";
        }
    }

    submit() {
        this.first_name_error = "";
        if (this.first_name && this.selectedLevel) {
            if (this.password && (this.password != this.password1)) {
                return;
            }

            let params = {
                first_name: this.first_name,
                selectedLevel: this.selectedLevel,
                password: this.password,
                skypeid: this.skypeid,
                sex: this.selectedSex,
                birth_year: this.selectedBirthYear,
            }
            this.loading = true;
            let self = this;
            this.statusService.saveUser(params).subscribe((data)=>{
                self.loading = false;
                if (data.status) {
                    self.notificationService.add(new Notification('Сообщение', 'alert-success', 'Настройки сохранены'));
                } else {
                    if (data.first_name_error) {
                        self.first_name_error = data.first_name_error;
                    }
                }
            }, function(error) {
                console.log('error', error)
                self.notificationService.add(new Notification('Ошибка', 'alert-danger', error.statusText));
            })
        }
    }
   

    public onFileSelected () {
        this.uploader.uploadAll();
    }
    

    public showChangePassword() {
        this.change_password = !this.change_password;
        if (!this.change_password) {
            this.password = null;
            this.password1 = null;
        }
    }

    
    
    
}
