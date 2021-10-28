import { Component, OnInit } from '@angular/core';
// import { userInfo } from 'os';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  users: User[] = [];
  getUserInfo!: User;
  getActiveUSers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  ngOnInit(): void {
    this.getActiveUSers();
  }
}
