import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';


import { AppSettings } from '../app.settings';
import { Dialog } from '../models/dialog';

@Injectable()
export class DialogsService {

    dialogs: Observable<Dialog[]>;

    //updates: Subject<any> = new Subject<any>();

    constructor(
        private _http: Http,
        private router: Router,
        private httpClient: HttpClient) {}

    
    getDialog(dialogue_id): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_DIALOGS + dialogue_id + '/')
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getDialogs(_params): Observable<any> {
        let url = AppSettings.URL_DIALOGS;
        let data = _params || {};
        let params: HttpParams = new HttpParams();
        for (let key in data) {
            params = params.set(key, data[key]);
        }
        return this.httpClient.get(url, {params})
            .catch(this.handleError.bind(this));
    }

    getActiveDialog(activedialogue_id): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_ACTIVEDIALOGS + activedialogue_id + '/')
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getActiveDialogs(): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_ACTIVEDIALOGS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getMyActiveDialogs(): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_MYACTIVEDIALOGS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    runDialog(dialogue_id):any {
        return this._http.post(AppSettings.URL_DIALOG_RUN + dialogue_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    stopDialog():any {
        return this._http.post(AppSettings.URL_DIALOG_STOP, {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    runIntoDialog(dialogue_id):any {
        return this._http.post(AppSettings.URL_DIALOG_RUNINTO + dialogue_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    stopActiveDialog(dialogue_id):any {
        return this._http.post(AppSettings.URL_DIALOG_ACTIVESTOP + dialogue_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getMyDialogs(): any {
        return this._http.get(AppSettings.URL_MYDIALOGS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getMyDialog(dialogue_id): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_MYDIALOGS + dialogue_id + '/')
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    saveMyDialogs(dialogue_id, params): any {
        return this._http.post(AppSettings.URL_MYDIALOGS + dialogue_id + "/", params)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    createDialog(params):any {
        return this._http.post(AppSettings.URL_MYDIALOGS, params)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    deleteMyDialogs(dialogue_id): any {
        return this._http.delete(AppSettings.URL_MYDIALOGS + dialogue_id + "/")
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getTags(type): any {
        return this._http.get(AppSettings.URL_TAGS + "?tags=" + type)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    deleteTagFromDialogs(dialogue_id, tag_id) {
        return this._http.delete(AppSettings.URL_TAGS + dialogue_id + '/' + tag_id)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    addTagToDialogs(dialogue_id, params) {
        return this._http.post(AppSettings.URL_TAGS + dialogue_id, params)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    private handleError(error: Response) {
        console.error(error);
        if (error.status == 403) {
            this.router.navigate(['/accounts/login/']);
        }
        if (error.status == 404) {
            this.router.navigate(['/dialogues/']);
        }
        //error.json().error || 
        return Observable.throw('Server error');
    }
}

