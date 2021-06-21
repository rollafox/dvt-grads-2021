import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.nest';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    if (this.users && this.users.length) {
      return of(this.users);
    }
    return this.http.get<User[]>(`${environment.api_url}/users`)
      .pipe(
        map((users: User[]) => { this.users = users; return this.users; })
      );
  }

  findUser(name: string): User | null {
    // return this.users.find(user => user.firstName.indexOf(name) >= 0 || user.surname.indexOf(name) >= 0) || null;

    // Make immutable
    return ({ ...this.users?.find(user => user.firstName.indexOf(name) >= 0 || user.surname.indexOf(name) >= 0) } as User) || null;
  }

  updateUser(user: Partial<User>): Observable<string> {
    console.log('Saving User -> ', user);
    return of(`Saved User -> ${user.firstName || 'Anon'}`);
    // return this.httpRequestToSaveUser(user);
  }
}

