import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppSettings } from '../../app.settings';
import { StatusService } from '../../services/status.service';




@Component({
  selector: 'app-blogs',
  templateUrl: 'view_blogs.template.html'
})

export class BlogsViewComponent implements OnInit {
    public user;

    public loading = false;
    public blogs = [];
    public previouspage;
    public nextpage;
    public count_page;


    constructor(
        private http: HttpClient,
        private router: Router,
        private statusService: StatusService,
        private activatedRoute: ActivatedRoute
        ) {
    }

    ngOnInit() {
        this.getBlogs();
    }

    getBlogs(_params?) {
        const data = _params || {};
        let params: HttpParams = new HttpParams();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                params = params.set(key, data[key]);
            }
        }
        this.loading = true;
        this.http.get(AppSettings.URL_BLOGS, {params})
            .subscribe((response: any) => {
                this.blogs = response.blogs;
                this.previouspage = response.previouspage;
                this.nextpage = response.nextpage;
                this.count_page = response.count_page;
                this.loading = false;
            }, (error) => {
                this.loading = false;
                console.error(error);
                if (error.status === 403) {
                    this.router.navigate(['/accounts/login/']);
                }
                if (error.status === 404) {
                    this.router.navigate(['/dialogues/']);
                }
                return Observable.throw('Server error');
            });
    }

    getOld($event) {
        $event.preventDefault();
        this.getBlogs({
            page: this.nextpage
        });
    }
    getNew($event) {
        $event.preventDefault();
        this.getBlogs({
            page: this.previouspage
        });
    }

}
