import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './component/comment/comment.component';
import { AllCommentsComponent } from './component/all-comments/all-comments.component';
import { CommentService } from './services';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [CommentComponent, AllCommentsComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    ShareModule
  ],
  providers: [CommentService]
})
export class CommentModule { }
