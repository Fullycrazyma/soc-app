import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';
import { SocioTableComponent } from './socio-table/socio-table.component';
import { SocioTypeComponent } from './socio-type/socio-type.component';

@NgModule({
    imports: [
        SharedModule.forRoot(),
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        UserListComponent,
        SocioTableComponent,
        SocioTypeComponent
    ]
})
export class HomeModule { }
