import { Component, Input, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { IComment } from './../../interface/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  save(comment: IComment): void {
    this.subjectService.setComment(comment);
  }

}
