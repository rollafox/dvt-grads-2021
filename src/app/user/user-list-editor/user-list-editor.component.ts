import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-editor',
  templateUrl: './user-list-editor.component.html',
  styleUrls: ['./user-list-editor.component.scss']
})
export class UserListEditorComponent implements OnInit {
  userForm: FormGroup | null = null;
  user: User | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (params) => {
        this.userService.findUser(params?.name).subscribe(user => {
          this.user = user || null;
  
          this.userForm = new FormGroup({
            firstName: new FormControl(this.user?.firstName || '', [Validators.required]),
            surname: new FormControl(this.user?.surname || '', [Validators.required]),
            emailAddress: new FormControl(this.user?.emailAddress || '', [Validators.required, Validators.email]),
          });
  
          // With Form Builder
          // this.userForm = this.fb.group({
          //    firstName: ['', [Validators.required]],
          //    surname: ['', [Validators.required]],
          //    emailAddress: ['', [Validators.required, Validators.email]],
          // });
  
  
          // Make Users Array Mutable
          this.userForm.valueChanges.subscribe(changeValue => {
            console.log('Changed Value: ', changeValue);
            this.userService.users = this.userService.users.map(user => {
              if (user.firstName === this.user?.firstName) {
  
                return changeValue;
              }
              return user;
            });
            console.log('User List: ', this.userService.users);
          });

        })
      }
    });
  }

  onSave(): void {
    console.log('Form to save -> ', this.userForm)
  }
}
