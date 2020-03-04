import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServersComponent } from './../components/servers/servers.component';
import { UserListComponent } from './../components/user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'servers', component: ServersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }