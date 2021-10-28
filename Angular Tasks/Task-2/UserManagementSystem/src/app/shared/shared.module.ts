import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserComponent, UsersListComponent, UserDetailsComponent],
  imports: [CommonModule],
  exports: [UserComponent, UsersListComponent, UserDetailsComponent],
})
export class SharedModule {}
