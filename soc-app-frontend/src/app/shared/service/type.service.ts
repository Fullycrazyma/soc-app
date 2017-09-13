import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class TypeService {

    private url = '/types/';

    constructor(private http: HttpClient) { }

    getTypes(): Observable<Array<string>> {
        return this.http.get<Array<string>>(environment.apiUrl + this.url);
    }

    getTypeDescription(type: string): Observable<string> {
        return this.http.get<string>(environment.apiUrl + this.url + type);
    }
}
