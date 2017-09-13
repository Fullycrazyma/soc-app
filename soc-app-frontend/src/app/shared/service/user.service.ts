import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { User } from './user';

@Injectable()
export class UserService {

    private url = '/users/';

    constructor(private http: HttpClient) { }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(this.getUrl(), JSON.stringify(user));
    }

    getUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.getUrl());
    }

    getUser(id: string): Observable<User> {
        return this.http.get<User>(this.getIdUrl(id));
    }

    updateUsers(users: Array<User>): Observable<Array<User>> {
        return this.http.put<Array<User>>(this.getUrl(), JSON.stringify(users));
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(this.getIdUrl(user.id), JSON.stringify(user));
    }

    deleteUsers(): Observable<void> {
        return this.http.delete<void>(this.getUrl());
    }

    deleteUser(id: string): Observable<void> {
        return this.http.delete<void>(this.getIdUrl(id));
    }

    private getUrl(): string {
        return environment.apiUrl + this.url;
    }

    private getIdUrl(id: string) {
        return this.getUrl() + id;
    }

}
