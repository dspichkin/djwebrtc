import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

import { AppSettings } from '../app.settings';
import { Dialog } from '../models/dialog';

@Injectable()
export class DialogsService {

    dialogs: Observable<Dialog[]>;

    //updates: Subject<any> = new Subject<any>();

    constructor(private _http: Http) {}

    


    getDialogs(): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_DIALOGS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getActiveDialog(activedialog_id): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_ACTIVEDIALOGS + activedialog_id + '/')
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getActiveDialogs(): Observable<Dialog[]> {
        return this._http.get(AppSettings.URL_ACTIVEDIALOGS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    runDialog(dialog_id):any {
        return this._http.post(AppSettings.URL_DIALOG_RUN + dialog_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    stopDialog():any {
        return this._http.post(AppSettings.URL_DIALOG_STOP, {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    runIntoDialog(dialog_id):any {
        return this._http.post(AppSettings.URL_DIALOG_RUNINTO + dialog_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    stopActiveDialog(dialog_id):any {
        return this._http.post(AppSettings.URL_DIALOG_ACTIVESTOP + dialog_id + "/", {})
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        //error.json().error || 
        return Observable.throw('Server error');
    }
}

