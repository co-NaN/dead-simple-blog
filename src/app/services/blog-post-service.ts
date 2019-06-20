import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogPost} from '../model/blog-post';
import {Observable} from 'rxjs';

@Injectable()
export class BlogPostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>('/api/blog/post/all');
  }

  saveBlogPost(blogPost: BlogPost) {
    return this.httpClient.post('/api/blog/post', blogPost);
  }
}
