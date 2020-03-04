import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { User } from '../../models/user';

@Injectable()
export class UserService {

  private _users: User[] = [
    { id: 1, name: 'John Doe', dob: new Date(1992, 12, 1), email: 'John.Doe@domail.com' },
    { id: 2, name: 'Jane Doe', dob: new Date(1993, 11, 2), email: 'Jane.Doe@domail.com' },
    { id: 3, name: 'Jacob Doe', dob: new Date(1994, 10, 3), email: 'Jacob.Doe@domail.com' },
    { id: 4, name: 'Josh Doe', dob: new Date(1995, 9, 4), email: 'Josh.Doe@domail.com' }
  ];
  public usersChanged: Subject<User[]> = new Subject<User[]>();

  constructor() { }

  public addUser(user: User) {
    this._users.push(user);
    this.usersChanged.next(this._users.slice());
  }

  public getUsers() {
    return this._users.slice();
  }

}
