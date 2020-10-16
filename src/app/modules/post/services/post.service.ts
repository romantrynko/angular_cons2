import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './../interface/post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${this.URL}`);
  }
}
