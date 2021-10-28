import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UsersService) {}

  @Input() users!: User[];
  @Input() action!: string;

  ngOnInit(): void {
    console.log(this.users);
  }

  changeStateHandler(state: boolean) {
    this.users = this.users.filter((x) => x.isDeleted != state);
  }
}
