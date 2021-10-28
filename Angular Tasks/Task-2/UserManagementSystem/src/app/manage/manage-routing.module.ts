import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';

import { ManageUsersComponent } from './manage-users/manage-users.component';
const routes: Routes = [
  {
    path: '',
    component: ManageUsersComponent,
    children: [{ path: ':id', component: UserDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
