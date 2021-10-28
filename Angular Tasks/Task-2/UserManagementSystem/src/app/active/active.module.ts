import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ActiveUsersComponent } from './active-users/active-users.component';

@NgModule({
  declarations: [ActiveUsersComponent],
  imports: [CommonModule, SharedModule],
  exports: [ActiveUsersComponent],
})
export class ActiveModule {}
