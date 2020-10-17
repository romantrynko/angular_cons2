import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { IUser } from './../../interface/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  save(user: IUser): void {
    this.subjectService.setUser(user);
  }

}
