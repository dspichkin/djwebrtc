import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ErrorService } from '../../../services/error.service';
//import { AuthenticationService } from '../../../services/authentication.service';
import { ErrorService } from '../../../services/error.service';
import { StatusService } from '../../../services/status.service';
import { WebSocketService } from '../../../services/websocket.service';


@Component({
  selector: 'footer',
  templateUrl: 'footer.template.html'
})
export class FooterComponent implements OnInit {


    public constructor(
        ) {
        
    }

    ngOnInit() {
        let self = this;

       
    }


}
