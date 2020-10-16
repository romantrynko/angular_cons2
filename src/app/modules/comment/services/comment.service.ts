import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from './../interface/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
URL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) { }

  getAllComments(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(`${this.URL}`);
  }
}
