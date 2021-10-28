import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-details',
  host: {
    class: 'col-sm-6',
  },
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {}

  user?: User;
  id!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.id = routeParams.id;
      this.user = this.userService.getUser(this.id);
    });
  }
}
