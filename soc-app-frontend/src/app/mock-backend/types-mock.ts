import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, } from '@angular/http';
import { MockConnection } from '@angular/http/testing';

import { isAuthenticated } from './mock-backend';

export function typesFakeBackend(connection: MockConnection) {

    // get users
    if (connection.request.url.endsWith('/api/types') && connection.request.method === RequestMethod.Get) {
        // check for fake auth token in header and return users if valid,
        // this security is implemented server side in a real application
        if (isAuthenticated(connection)) {
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: types })));
        } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
        }

        return;
    }

    // get user by id
    if (connection.request.url.match(/\/api\/types\/\w+$/) && connection.request.method === RequestMethod.Get) {
        // check for fake auth token in header and return user if valid,
        // this security is implemented server side in a real application
        if (isAuthenticated(connection)) {
            // find user by id in users array
            console.log(typeDescriptionMap);
            const urlParts = connection.request.url.split('/');
            const type = urlParts[urlParts.length - 1];
            console.log(type);
            const typeDescription = typeDescriptionMap.get(type);

            // respond 200 OK with user
            connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: typeDescription })));
        } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
        }

        return;
    }
}

export const types = [
    'ENTP',
    'ISFP',
    'ESFJ',
    'INTJ',
    'ISTJ',
    'ENFJ',
    'ESTP',
    'INFP',
    'ESFP',
    'INTP',
    'ISFJ',
    'ENTJ',
    'INFJ',
    'ESTJ',
    'ENFP',
    'ISTP'
];

export const typeDescriptionMap: Map<string, string> = new Map([
    [ 'ENTP', 'don' ],
    [ 'ISFP', 'dum' ],
    [ 'ESFJ', 'gug' ],
    [ 'INTJ', 'rob' ],
    [ 'ISTJ', 'max' ],
    [ 'ENFJ', 'gam' ],
    [ 'ESTP', 'juk' ],
    [ 'INFP', 'es' ],
    [ 'ESFP', 'nap' ],
    [ 'INTP', 'bal' ],
    [ 'ISFJ', 'drai' ],
    [ 'ENTJ', 'djek' ],
    [ 'INFJ', 'dost' ],
    [ 'ESTJ', 'shtir' ],
    [ 'ENFP', 'gek' ],
    [ 'ISTP', 'gab' ]
]);

/*
don
dum
gug
rob
max
gam
juk
es
nap
bal
drai
djek
dost
shtir
gek
gab

------

Ext - Intr
(S)ensing - i(N)tuition
Feel - Think
Judj - Pers

*/

