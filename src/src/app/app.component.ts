import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StatusService } from './services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(
        private statusService: StatusService,
        private router: Router
        ) {

    }
    public ngOnInit():any {
        let self = this;
        this.statusService.init();

        this.statusService.calling.subscribe((message) => {
            if (self.router.url != '/wait') {
                this.router.navigate(['/wait']);
            }
        });
    }


    ngOnDestroy() {
        this.statusService.calling.unsubscribe();
    }

}
