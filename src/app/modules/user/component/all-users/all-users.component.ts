import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
import { IUser } from './../../interface/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users$: Observable<IUser[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  }

}
