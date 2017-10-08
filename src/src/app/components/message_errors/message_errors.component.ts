import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter,
trigger, state, style, animate, transition } from '@angular/core';

import { StatusService } from '../../services/status.service';
import { AppSettings } from '../../app.settings';

@Component({
    selector: 'messageerrors',
    templateUrl: 'message_errors.template.html',
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({ transform: 'scale3d(.3, .3, .3)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
            ])
        ])
    ]
})

export class MessageErrorsComponent implements OnInit, OnDestroy {
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


    loading: boolean = false;
    message: string = "";


    constructor(
        private statusService: StatusService
        ) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.loading = false;
    }

    ngOnChanges(changes) {
    }
    
   


    ngOnDestroy() {
    }

    send() {
        this.loading = true;
        this.statusService.sendMessage({
            message: this.message
        }).subscribe((data) => {
            this.loading = false;
            this.visible = false;
            this.visibleChange.emit(this.visible);
        })
        
    }


    
    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

}
