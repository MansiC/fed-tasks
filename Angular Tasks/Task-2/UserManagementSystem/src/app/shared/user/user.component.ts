import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Input() action!: string;
  @Output() newState: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  changeState(user1: User) {
    if (this.action == 'manage') {
      this.router.navigate([`/manage/${user1.id}`]);
    } else {
      user1.isDeleted = !user1.isDeleted;
      this.newState.emit(user1.isDeleted);
    }
  }
}
