import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  programaticRoute(name: string): void {
    this.router.navigate(['users', name], {});
  }
}
