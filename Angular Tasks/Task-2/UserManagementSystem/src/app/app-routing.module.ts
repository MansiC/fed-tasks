import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUsersComponent } from './active/active-users/active-users.component';
import { DeletedUsersComponent } from './deleted/deleted-users/deleted-users.component';
import { UserDetailsComponent } from './shared/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () =>
      import('./manage/manage.module').then((m) => m.ManageModule),
  },

  {
    path: 'active',
    component: ActiveUsersComponent,
  },
  {
    path: 'deleted',
    component: DeletedUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
