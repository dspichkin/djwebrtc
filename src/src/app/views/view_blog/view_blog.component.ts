import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppSettings } from '../../app.settings';
import { StatusService } from '../../services/status.service';




@Component({
  selector: 'app-blog',
  templateUrl: 'view_blog.template.html'
})

export class BlogViewComponent implements OnInit {
    public user;

    public loading = false;
    public blog;
    public next_blog;
    public prev_blog;

    constructor(
        private http: HttpClient,
        private router: Router,
        private statusService: StatusService,
        private activatedRoute: ActivatedRoute
        ) {
    }

    ngOnInit() {
        this.loading = true;
        this.activatedRoute.params
            .pluck('blog_id')
            .switchMap(blog_id => this.getInitBlog(blog_id))
            .subscribe((response: any) => {
                this.blog = response.blog;
                this.next_blog = response.next_blog;
                this.prev_blog = response.prev_blog;
                this.loading = false;
            }, (error) => {
                this.loading = false;
            });
    }

    getInitBlog(blog_id) {
        return this.http.get(AppSettings.URL_BLOGS + blog_id + '/');
    }

    getBlog(blog_id, $event) {
        $event.preventDefault();
        this.loading = true;
        this.http.get(AppSettings.URL_BLOGS + blog_id + '/')
            .subscribe((response: any) => {
                this.blog = response.blog;
                this.next_blog = response.next_blog;
                this.prev_blog = response.prev_blog;
                this.loading = false;
            }, (error) => {
                this.loading = false;
            });
    }

}
