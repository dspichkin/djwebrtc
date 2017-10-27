import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'


@Injectable()
export class DataService {

	constructor (private http: Http) {}

	
	

	public getData(url, _params): Observable<any> {
		let data = _params || {};
		data.t = new Date().getTime();

		let params: URLSearchParams = new URLSearchParams();
        for (var key in data) {
          	if (data.hasOwnProperty(key)) {
            	let val = data[key];
             	params.set(key, val);
          	}
        }
        let options = new RequestOptions({
        	search: params
      	});

		return this.http.get(url, options)
			.map(this.extractData)
			.catch(this.handleError);
	}


	public postData(url, _params): Observable<any> {
		let data = _params || {};

		let params: URLSearchParams = new URLSearchParams();
        for (var key in data) {
          	if (data.hasOwnProperty(key)) {
            	let val = data[key];
             	params.set(key, val);
          	}
        }
        let options = new RequestOptions({
        	search: params
      	});

		return this.http.post(url, data)
			.map(this.extractData)
			.catch(this.handleError);
	}

	public putData(url, _params): Observable<any> {
		let data = _params || {};

		let params: URLSearchParams = new URLSearchParams();
        for (var key in data) {
          	if (data.hasOwnProperty(key)) {
            	let val = data[key];
             	params.set(key, val);
          	}
        }
        let options = new RequestOptions({
        	search: params
      	});

		return this.http.put(url, data)
			.map(this.extractData)
			.catch(this.handleError);
	}

	public deleteData(url, _params): Observable<any> {
		let data = _params || {};

		let params: URLSearchParams = new URLSearchParams();
        for (var key in data) {
          	if (data.hasOwnProperty(key)) {
            	let val = data[key];
             	params.set(key, val);
          	}
        }
        let options = new RequestOptions({
        	search: params
      	});
		return this.http.delete(url, options)
			.map(this.extractData)
			.catch(this.handleError);
	}


	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			errMsg  = body.message;
			//const err = body.error || JSON.stringify(body);
			//errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}

		//return errMsg;
		return Observable.throw(errMsg);
	}


	
}