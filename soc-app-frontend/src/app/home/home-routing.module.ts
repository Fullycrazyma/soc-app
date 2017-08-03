import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';

export const HOME_ROUTES: Routes = [
 	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserListComponent }
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
