import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ErrorService } from '../../../services/error.service';
//import { AuthenticationService } from '../../../services/authentication.service';

import { StatusService } from '../../../services/status.service';


@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent implements OnInit {

    errors = [];
    messages = [];

    loading = false;
    user;

    public constructor(
        private router: Router,
        private statusService: StatusService,
        //private authenticationService: AuthenticationService
        ) {
        
    }

    ngOnInit() {
        let self = this;
        self.statusService.ready.subscribe((date)=> {
            self.user = this.statusService.user;
        });
    }

    removeMessage(index) {
        this.messages.splice(index, 1)
    }

    logout() {
        console.log('logout')
        this.loading = true;
        //this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
