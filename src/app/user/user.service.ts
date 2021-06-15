import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      firstName: 'John',
      surname: 'Doe',
      emailAddress: 'john@dvt.com',
    },
    {
      firstName: 'Tom',
      surname: 'Doe',
      emailAddress: 'tom@dvt.com',
    }
  ];

  constructor() { }

  getUsers(): User[] {
    if (this.users && this.users.length) {
      return this.users;
    }
    return this.users; // this.httpRequestToGetUsers();
  }

  findUser(name: string): User | null {
    return this.users.find(user => user.firstName.indexOf(name) >= 0 || user.surname.indexOf(name) >= 0) || null;

    // Make immutable
    // return ({...this.users.find(user => user.firstName.indexOf(name) >= 0 || user.surname.indexOf(name) >= 0)} as User) || null;
  }

  updateUser(user: Partial<User>): Observable<string> {
    console.log('Saving User -> ', user);
    return of(`Saved User -> ${user.firstName || 'Anon'}`);
    // return this.httpRequestToSaveUser(user);
  }
}
