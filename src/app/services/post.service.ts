import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
