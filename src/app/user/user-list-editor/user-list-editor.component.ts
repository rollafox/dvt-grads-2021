import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (params) => {
        this.user = this.userService.findUser(params?.name) || null;

        this.userForm = new FormGroup({
          firstName: new FormControl(this.user?.firstName || '', []),
          surname: new FormControl(this.user?.surname || '', []),
          emailAddress: new FormControl(this.user?.emailAddress || '', []),
        });

        // With Form Builder
        // this.userForm = this.formBuilder.group({
        //   firstName: [''],
        //   surname: [''],
        //   emailAddress: [''],
        // });


        // Make Users Array Mutable
        // this.userForm.valueChanges.subscribe(changeValue => {
        //   console.log('Changed Value: ', changeValue);
        //   const currentUser = this.userService.findUser(`${this.user?.firstName}`);
        //   this.userService.users = this.userService.users.map(user => {
        //     if (user.firstName === currentUser?.firstName) {

        //       return changeValue;
        //     }
        //     return user;
        //   });
        //   console.log('Changed Value: ', this.userService.users);
        // });
      }
    });
  }

  onSave(): void {
    console.log('Form to save -> ', this.userForm)
  }
}
