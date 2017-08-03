import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(): Observable<Array<User>> {
		return this.http.get(environment.apiUrl + '/users')
			.map(data => data.json());
	}

}
