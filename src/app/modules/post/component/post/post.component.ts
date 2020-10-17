import { Component, Input, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { IPost } from './../../interface/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  save(post: IPost): void {
    this.subjectService.setPost(post);
  }

}
