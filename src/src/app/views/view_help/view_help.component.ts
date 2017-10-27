import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StatusService } from '../../services/status.service';




@Component({
  selector: 'help',
  templateUrl: 'view_help.template.html'
})

export class HelpViewComponent implements OnInit {
    public user;
    
    public loading: boolean = false;

    constructor(
        private statusService: StatusService,
        ) {
    }

    ngOnInit() {
        let self = this;
        


    }

   
    
    
}
