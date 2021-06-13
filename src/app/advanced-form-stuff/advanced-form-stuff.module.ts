import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedFormStuffRoutingModule } from './advanced-form-stuff-routing.module';
import { UserListEditorComponent } from './user-list-editor/user-list-editor.component';


@NgModule({
  declarations: [
    UserListEditorComponent
  ],
  imports: [
    CommonModule,
    AdvancedFormStuffRoutingModule
  ]
})
export class AdvancedFormStuffModule { }
