import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod,  } from '@angular/http';
import { MockConnection } from '@angular/http/testing';

import { isAuthenticated } from './mock-backend';

import { User } from '../shared/service/user';

export function usersFakeBackend(connection: MockConnection) {
    // array in local storage for registered users
    const users: Array<User> = JSON.parse(localStorage.getItem('users')) || [];

     // get users
     if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
        // check for fake auth token in header and return users if valid,
        // this security is implemented server side in a real application
        if (isAuthenticated(connection)) {
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));
        } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
        }

        return;
    }

    // get user by id
    if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Get) {
        // check for fake auth token in header and return user if valid,
        // this security is implemented server side in a real application
        if (isAuthenticated(connection)) {
            // find user by id in users array
            const urlParts = connection.request.url.split('/');
            const id = urlParts[urlParts.length - 1];
            const matchedUsers = users.filter(user => user.id === id);
            const user = matchedUsers.length ? matchedUsers[0] : null;

            // respond 200 OK with user
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: user })));
        } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
        }

        return;
    }

    // create user
    if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
        if (isAuthenticated(connection)) {
            // get new user object from post body
            const newUser = JSON.parse(connection.request.getBody());

            // validation
            const duplicateUser = users.filter(user => user.username === newUser.username).length;
            if (duplicateUser) {
                return connection.mockError(new Error('Username "' + newUser.username + '" is already taken'));
            }

            // save new user
            newUser.id = (users.length + 1).toString();
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            // respond 200 OK
            connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
        } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
        }
        return;
    }

    // delete user
    if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Delete) {
        // check for fake auth token in header and return user if valid,
        // this security is implemented server side in a real application
        if (isAuthenticated(connection)) {
            // find user by id in users array
            const urlParts = connection.request.url.split('/');
            const id = urlParts[urlParts.length - 1];
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                if (user.id === id) {
                    // delete user
                    users.splice(i, 1);
                    localStorage.setItem('users', JSON.stringify(users));
                    break;
                }
            }

            // respond 200 OK
            connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
        } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
        }

        return;
    }
}
