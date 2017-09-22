import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'jquery-slimscroll';
import { FormsModule } from '@angular/forms';

// import { AuthenticationService } from '../../../services/authentication.service';

//declare var jQuery:any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        ) {
        var self = this;

        this.router.events.subscribe(
            (url:any) => {
        }); 
        
    }

    ngOnInit() {
        var self = this;

    }

    ngAfterViewInit() {
        
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

    


    ngOnDestroy() {
        //this.menuService.update.unsubscribe();
    }

    logout() {
        console.log('logout')
        this.router.navigate(['/login']);
    }
    
}
