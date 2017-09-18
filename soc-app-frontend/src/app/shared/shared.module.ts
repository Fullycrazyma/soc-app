import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpHeaders,
    HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';

import { UserService } from './service/user.service';
import { TypeService } from './service/type.service';

export class AddHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next.handle(req.clone({ headers: req.headers.set('Content-Type', 'application/json') })).do(
            event => {
                console.log(event);
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${req.method} ${req.urlWithParams} took ${elapsed} ms.`);
                }
            }
        );
    }
}

const MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
];

const PIPES = [];

const COMPONENTS = [];

const PROVIDERS = [
    UserService,
    TypeService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AddHeaderInterceptor,
        multi: true,
    }
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...PIPES,
        ...COMPONENTS
    ],
    exports: [
        ...MODULES,
        ...PIPES,
        ...COMPONENTS
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ...PROVIDERS
            ]
        };
    }
}
