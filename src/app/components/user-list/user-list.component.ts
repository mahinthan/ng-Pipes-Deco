import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/subscription'

import { AutoUnsubscribe } from '../../decorators/auto-unsubscribe.decorator';
import { Override } from '../../decorators/override.decorator';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  public users: User[];
  public userName: string;
  private subscription: Subscription;

  private propertyToOverride: string = 'This is not overrided yet!';

  constructor(private userService: UserService) { }

  private randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
  }

  public ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.subscription = this.userService.usersChanged.subscribe((users: User[]) => {
      this.users = users;
    });
    console.log('The result of the override decorator: ', this.propertyToOverride);
  }

  public addUser(): void {
    this.userService.addUser({
      id: Math.floor(Math.random() * 1000 + 1),
      name: this.userName || 'Test',
      email: (this.userName || 'Test') + '@domain.com',
      dob: this.randomDate(new Date(1901, 1, 1, 0, 1, 1, 1), new Date(1998, 12, 31, 23, 59, 59, 999), 0, 23)
    });
    this.userName = '';
  }

  public ngOnDestroy() {
    console.log('The original implementation of the ngOnDestroy worked!');
  }

}
