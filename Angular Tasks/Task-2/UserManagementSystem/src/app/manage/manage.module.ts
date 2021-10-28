import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRoutingModule } from './manage-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ManageUsersComponent],
  imports: [CommonModule, SharedModule, ManageRoutingModule],
})
export class ManageModule {}
