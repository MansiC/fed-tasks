import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  users: User[] = [];

  getActiveUSers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.users = this.users.filter((user) => user.isDeleted === false);
  }

  ngOnInit(): void {
    this.getActiveUSers();
  }
}
