import { Component, OnInit, ViewChild, ViewContainerRef, EventEmitter, Input, Output } from '@angular/core';

import { AppSettings } from '../../../app.settings';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'agent-dialog',
  templateUrl: './agent.template.html',
  
})
export class AgentComponent  {
    @Input() public closable = true;
    @Input() public visible: boolean = false;
    @Input() public currentLogger;
    @Input() public dateRange = [];

    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    loading: boolean = false;
    
    listAgents = [];

    constructor (private dataService: DataService) {
    }

    ngOnInit() { 
    }

    ngOnChanges() {
        if (this.visible) {
            let body = document.getElementsByTagName('body')[0];
            body.classList.add("modal-open");
            this.getAgents();
        } else {
            let body = document.getElementsByTagName('body')[0];
            body.classList.remove("modal-open");
        }
    }
    
    getAgents(_params?) {
        let self = this;
        let params = _params || {
            date_start: this.dateRange[0],
            date_end: this.dateRange[1]
        }
        self.loading = true;
        self.dataService.getData(AppSettings.urlNginxAccessAgentUrl + self.currentLogger.slug, params)
        .subscribe(
            function(data) {
                self.loading = false;
                self.listAgents = data.http_user_agents;
            })
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    
    

    
    
}