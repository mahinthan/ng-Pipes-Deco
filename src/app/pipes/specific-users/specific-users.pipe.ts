import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../models/user';

@Pipe({
  name: 'specificUsers'
})
export class SpecificUsersPipe implements PipeTransform {

  transform(users: User[], userIdTypes?: string): User[] {
    if(!userIdTypes) return users;

    let usersToSend = (userIdTypes === 'even') ? users.filter((user) => { return user.id % 2 === 0; })
                                               : users.filter((user) => { return user.id % 2 !== 0; });
    
    return usersToSend;
  }

}
