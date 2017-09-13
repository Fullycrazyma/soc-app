import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';
import { SocioTableComponent } from './socio-table/socio-table.component';
import { SocioTypeComponent } from './socio-type/socio-type.component';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', component: UserListComponent },
            { path: 'soctable', component: SocioTableComponent },
            { path: 'soctable/:type', component: SocioTypeComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }
