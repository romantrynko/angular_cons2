import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AllPostsComponent } from './component/all-posts/all-posts.component';
import { PostComponent } from './component/post/post.component';

@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ]
})
export class PostModule { }
