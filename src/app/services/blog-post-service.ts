import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogPost} from '../model/blog-post';
import {Observable, of} from 'rxjs';

@Injectable()
export class BlogPostService {
  // TODO: replace with backend call
  dummyBlogPosts: BlogPost[];

  constructor(private http: HttpClient) {
    // // TODO: replace with backend call
    this.dummyBlogPosts = [];
  }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return of(this.dummyBlogPosts);
    // return this.http.get<BlogPost[]>('/api/blog/post/all');
  }

  saveBlogPost(blogPost: BlogPost) {
    this.dummyBlogPosts.unshift(blogPost);
    return of(blogPost);
    // return this.http.post('/api/blog/post', blogPost);
  }
}
