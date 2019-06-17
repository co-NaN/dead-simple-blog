import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogPost} from '../model/blog-post';

@Injectable()
export class BlogPostService {
  constructor(private http: HttpClient) {}

  saveBlogPost(blogPost: BlogPost) {
    return this.http.post('/api/blog/post', blogPost);
  }
}
