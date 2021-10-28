import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.css'],
})
export class DeletedUsersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  users: User[] = [];

  getInactiveUSers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.users = this.users.filter((user) => user.isDeleted === true);
  }

  ngOnInit(): void {
    this.getInactiveUSers();
    console.log(this.users);
  }
}
