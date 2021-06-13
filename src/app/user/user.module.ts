import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { UserEditorComponent } from './user-editor/user-editor.component';


@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserEditorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
