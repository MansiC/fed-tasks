import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DeletedUsersComponent],
  imports: [CommonModule, SharedModule],
  exports: [DeletedUsersComponent],
})
export class DeletedModule {}
