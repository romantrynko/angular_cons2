import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { IComment } from './../../modules/comment/interface/comment.interface';
import { IPost } from './../../modules/post/interface/post.interface';
import { IUser } from './../../modules/user/interface/user.interface';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  userData: Partial<IUser>;
  postData: Partial<IPost>;
  commentData: Partial<IComment>;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.userData = this.subjectService.getUser();
    this.postData = this.subjectService.getPost();
    this.commentData = this.subjectService.getComment();
  }

}
