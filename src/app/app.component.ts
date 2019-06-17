import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BlogPostService} from './services/blog-post-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-blog';
  form: FormGroup;

  constructor(private blogPostService: BlogPostService) {}

  saveBlogPost() {
    const blogPost = this.form.value;
    this.blogPostService.saveBlogPost(blogPost)
      .subscribe(
        () => console.log('Blog post with id ${blogPost.id} is saved.')
      );
  }
}
