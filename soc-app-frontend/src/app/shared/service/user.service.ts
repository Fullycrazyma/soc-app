import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import { User } from './user';

@Injectable()
export class UserService {

    private url = '/users';

    constructor(private http: Http) { }

    getUsers(): Observable<Array<User>> {
        return this.http.get(environment.apiUrl + this.url)
            .map(res => res.json());
    }

    getUser(id: string): Observable<User> {
        return this.http.get(this.getUserUrl(id))
            .map(res => res.json());
    }

    addUser(user: User) {
        return this.http.post(environment.apiUrl + this.url, JSON.stringify(user))
            .map(res => res.json());
    }

    updateUser(user: User) {
        return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(id: string) {
        return this.http.delete(this.getUserUrl(id))
            .map(res => res.json());
    }

    private getUserUrl(id: string) {
        return environment.apiUrl + this.url + '/' + id;
    }

}
