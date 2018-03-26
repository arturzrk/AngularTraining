import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

const url = 'http://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        this.posts.splice(0, 0, post);
      });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
