import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${this.URL}`);
  }
}
