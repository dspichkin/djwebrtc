import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ErrorService } from '../../../services/error.service';
//import { AuthenticationService } from '../../../services/authentication.service';
import { ErrorService } from '../../../services/error.service';
import { StatusService } from '../../../services/status.service';
import { WebSocketService } from '../../../services/websocket.service';


@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent implements OnInit {

    errors = [];
    messages = [];

    server_error;

    loading = false;
    user;

    public constructor(
        private router: Router,
        private statusService: StatusService,
        private webSocketService: WebSocketService,
        private errorService: ErrorService,
        //private authenticationService: AuthenticationService
        ) {
        
    }

    ngOnInit() {
        let self = this;

        self.webSocketService.open.subscribe(function() {
            self.server_error = false;
        })


        self.statusService.ready.subscribe((date) => {
            self.user = this.statusService.user;
        });


        for (let i in this.errorService.errors) {
            this.errors.push(this.errorService.errors[i])
        }
        this.errorService.errors_update.subscribe(item => {
            this.errors = [];
            for (let i in this.errorService.errors) {
                if (this.errorService.errors[i].code == 1000) {
                    this.server_error = true;
                    delete this.errorService.errors[i];
                    continue;
                }
                this.errors.push(this.errorService.errors[i])
            }
        })
        this.messages = this.errorService.messages;
        this.errorService.messages_update.subscribe(item => {
            this.messages = this.errorService.messages;
        })
    }

    removeError(index) {
        delete this.errorService.errors[this.errors[index].code];
        this.errors.splice(index, 1)
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

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

}
