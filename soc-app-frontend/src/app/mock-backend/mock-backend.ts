import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { usersFakeBackend } from './user-mock';

export function isAuthenticated(connection: MockConnection): boolean {
    return true;
    // return connection && connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token';
}

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        console.log('Fake backend call ', RequestMethod[connection.request.method], connection.request.url);

        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // // authenticate
            // if (connection.request.url.endsWith('/authenticate') && connection.request.method === RequestMethod.Post) {
            //     // get parameters from post request
            //     const params = JSON.parse(connection.request.getBody());

            //     // find if any user matches login credentials
            //     const filteredUsers = users.filter(user => {
            //         return user.username === params.username && user.password === params.password;
            //     });

            //     if (filteredUsers.length) {
            //         // if login details are valid return 200 OK with user details and fake jwt token
            //         const user = filteredUsers[0];
            //         connection.mockRespond(new Response(new ResponseOptions({
            //             status: 200,
            //             body: {
            //                 id: user.id,
            //                 username: user.username,
            //                 firstName: user.firstName,
            //                 lastName: user.lastName,
            //                 token: 'fake-jwt-token'
            //             }
            //         })));
            //     } else {
            //         // else return 400 bad request
            //         connection.mockError(new Error('Username or password is incorrect'));
            //     }

            //     return;
            // }

            const path = new URL(connection.request.url).pathname;

            if (path.startsWith('/api/users')) {
                return usersFakeBackend(connection);
            }

            // pass through any requests not handled above
            const realHttp = new Http(realBackend, options);
            const requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });

        }, 100);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
