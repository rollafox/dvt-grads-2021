import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { CoreModule } from '../core/core.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserListEditorComponent } from './user-list-editor/user-list-editor.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserEditorComponent,
    UserListEditorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    CoreModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
