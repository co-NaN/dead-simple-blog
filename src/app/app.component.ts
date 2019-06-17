import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogPostService} from './services/blog-post-service';
import {BlogPost} from './model/blog-post';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-blog';
  form: FormGroup;
  blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService,
              private formBuilder: FormBuilder) {
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

  // TODO: refactor
  saveBlogPost(@Optional() @Inject(MAT_DIALOG_DATA) blogPost: BlogPost) {
    this.form = this.formBuilder.group(
      {
        postContent: [blogPost.content, Validators.required]
      }
    );
    const stuff = this.form.value;
    this.blogPostService.saveBlogPost(stuff)
      .subscribe(
        () => console.log('Blog post with id ${blogPost.id} is saved.')
      );
  }

}
