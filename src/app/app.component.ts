import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogPostService} from './services/blog-post-service';
import {BlogPost} from './model/blog-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-blog';
  form: FormGroup;
  blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) {
    this.form = new FormGroup(
      {blogPostContent: new FormControl()}
    );
  }

  ngOnInit(): void {
    this.getAllBlogPosts();
  }

  getAllBlogPosts() {
    this.blogPosts = [];
    this.blogPostService.getAllBlogPosts()
      .subscribe(
        (blogPosts) => {
          this.blogPosts = blogPosts as BlogPost[];
        }
      );
  }

  saveBlogPost() {
    if (this.form.value.blogPostContent) {
      const blogPost = new BlogPost(this.form.value.blogPostContent);
      this.blogPostService.saveBlogPost(blogPost)
        .subscribe(
          () => {
            this.form.reset();
            console.log('New blog post is saved.');
          }
        );
    }
  }

}
