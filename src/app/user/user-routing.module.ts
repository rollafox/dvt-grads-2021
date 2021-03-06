import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { UserListEditorComponent } from './user-list-editor/user-list-editor.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: ':name',
        component: UserDetailComponent,
      },
      {
        path: ':name/edit',
        component: UserEditorComponent,
      },
      {
        path: ':name/edit-reactive',
        component: UserListEditorComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
