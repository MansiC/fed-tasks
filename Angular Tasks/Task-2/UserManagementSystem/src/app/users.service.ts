import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  getUser(id: number) {
    return USERS.find((user) => user.id === id.toString());
  }
}
