import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WebSocketService } from '../../services/websocket.service';
import { DialogsService } from '../../services/dialogs.service';
import { StatusService } from '../../services/status.service';

import { AppSettings } from '../../app.settings';

@Component({
  selector: 'modecalling',
  templateUrl: 'view_profile.template.html'
})

export class ProfileViewComponent implements OnInit {
    private user;
    private first_name;
    private selectedLevel;
    private password;
    private password1;

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

    private loading: boolean = false;

    constructor(
        private statusService: StatusService,
        private router: Router,
        ) {
    }

    ngOnInit() {
        let self = this;
        

        self.statusService.ready.subscribe((date)=> {
            self.user = self.statusService.user;
            if (!self.user) {
                return;
            }
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
        this.first_name = this.user.first_name;
        this.selectedLevel = this.user.level;
    }
    
    changePassword($event) {
        if (this.password1) {
            this.password1 = "";
        }
    }

    submit() {

        if (this.first_name && this.selectedLevel && this.password && this.password1 && 
            this.password == this.password1) {
            let params = {
                first_name: this.first_name,
                selectedLevel: this.selectedLevel,
                password: this.password
            }
            console.log('para', params)
            this.loading = true;
            let self = this;
            this.statusService.saveUser(params).subscribe((data)=>{
                self.loading = false;
            })
        }
    }
   
    

    
    
    
}
