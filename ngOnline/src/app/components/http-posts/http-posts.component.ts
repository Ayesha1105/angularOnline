import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-posts',
  templateUrl: './http-posts.component.html',
  styles: [],
})
export class HttpPostsComponent implements OnInit {
  posts;
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {}

  ngOnInit(): void {
    this.http.get(this.url).subscribe((res) => {
      console.log('response :', res.json());
      this.posts = res.json();
    });
  }

  createPost(newTitle: HTMLInputElement) {
    console.clear();
    console.log('newTitle :', newTitle);

    let post = { title: newTitle.value };
    this.http.post(this.url, post).subscribe((res) => {
      console.log('response :', res.json());
      let title = res.json().title;
      let id = res.json().id;
      // this.posts.push({ id, title });
      this.posts.splice(0, 0, { id, title });
    });
  }

  updatePost(post) {
    console.clear();
    console.log('post :', post);

    let obj = {
      id: 1,
      userId: 10,
      title: 'Dummy Data',
      body: 'Some text',
    };
    this.http
      .patch(this.url + '/' + post.id, { title: 'Dummy Data' })
      .subscribe((res) => {
        console.log('response', res.json());

        let index = this.posts.indexOf(post);
        console.log('HttpPostsComponent -> updatePost -> index', index);

        let updatedPost = {
          title: res.json().title,
          // id: res.json().id,
          // userId: res.json().userId,
          // body: res.json().body,
        };
        this.posts.splice(index, 1, updatedPost);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe((res) => {
      let index = this.posts.indexOf(post);

      this.posts.splice(index, 1);
    });
  }
}
