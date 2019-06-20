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

  private getAllBlogPosts() {
    this.blogPosts = [];
    this.blogPostService.getAllBlogPosts()
      .subscribe(
        res => this.blogPosts = res['payload'],
        err => console.log('An error occurred during retrieving blog posts: ', err)
      );
  }

  private saveBlogPost() {
    if (this.form.value.blogPostContent) {
      const blogPost = new BlogPost(this.form.value.blogPostContent);
      this.blogPostService.saveBlogPost(blogPost)
        .subscribe(
          () => {
            this.form.reset();
            console.log('New blog post is saved.');
            this.refreshPage();
          },
          err => console.log('An error occurred during saving blog post: ', err)
        );
    }
  }

  private refreshPage() {
    this.getAllBlogPosts();
  }

}
