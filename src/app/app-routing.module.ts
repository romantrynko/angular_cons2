import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './modules/user/component/all-users/all-users.component';

const routes: Routes = [
  {path: 'user', component: AllUsersComponent},
  {path: 'post', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)},
  {path: 'comment', loadChildren: () => import('./modules/comment/comment.module').then(value => value.CommentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







