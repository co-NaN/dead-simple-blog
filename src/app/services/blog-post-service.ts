import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogPost} from '../model/blog-post';
import {Observable, of} from 'rxjs';

@Injectable()
export class BlogPostService {
  // TODO: replace with backend call
  dummyBlogPosts: BlogPost[];

  constructor(private http: HttpClient) {
    // TODO: replace with backend call
    this.dummyBlogPosts = [];
    this.dummyBlogPosts.unshift(new BlogPost(1, 'Lorem ipsum etc.'));
    this.dummyBlogPosts.unshift(new BlogPost(1, 'Lorem ipsum etc. no. 2'));
    this.dummyBlogPosts.unshift(new BlogPost(1, 'Lorem ipsum etc. no. 3'));
  }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return of(this.dummyBlogPosts);
    // return this.http.get<BlogPost[]>('/api/blog/post/all');
  }

  getBlogPostById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>('/api/blog/post/${id}');
  }

  saveBlogPost(blogPost: BlogPost) {
    this.dummyBlogPosts.unshift(blogPost);
    return of(blogPost);
    // return this.http.post('/api/blog/post', blogPost);
  }
}
