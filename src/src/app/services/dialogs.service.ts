import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
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
        private router: Router) {}

    
    getDialog(dialog_id): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_DIALOGS + dialog_id + '/')
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getDialogs(): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_DIALOGS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    getActiveDialog(activedialog_id): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_ACTIVEDIALOGS + activedialog_id + '/')
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

    runDialog(dialog_id):any {
        return this._http.post(AppSettings.URL_DIALOG_RUN + dialog_id + "/", {})
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

    runIntoDialog(dialog_id):any {
        return this._http.post(AppSettings.URL_DIALOG_RUNINTO + dialog_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }

    stopActiveDialog(dialog_id):any {
        return this._http.post(AppSettings.URL_DIALOG_ACTIVESTOP + dialog_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError.bind(this));
    }


    private handleError(error: Response) {
        console.error(error);
        if (error.status == 403) {
            console.log("XXXX")
            this.router.navigate(['/accounts/login/']);
        }
        if (error.status == 404) {
            this.router.navigate(['/dialogs/']);
        }
        //error.json().error || 
        return Observable.throw('Server error');
    }
}

