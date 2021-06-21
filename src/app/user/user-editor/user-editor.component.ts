import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  public user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => this.userService.findUser(params?.name))
      )
      .subscribe({
        next: (user) => this.user = user || null
      });
  }

  onSave(form: any): void {
    this.userService.updateUser(form.value)
      .subscribe(res => console.log('onSave -> ', res))
  }
}
