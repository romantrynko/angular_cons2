import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AllPostsComponent } from './component/all-posts/all-posts.component';
import { PostComponent } from './component/post/post.component';
import { PostService } from './services';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    ShareModule
  ],
  exports: [AllPostsComponent],
  providers: [PostService]
})
export class PostModule { }
