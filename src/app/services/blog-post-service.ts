import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BlogPost} from '../model/blog-post';
import {Observable} from 'rxjs';

@Injectable()
export class BlogPostService {
  constructor(private http: HttpClient) {}

  getBlogPostById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>('/api/blog/post/${id}');
  }

  saveBlogPost(blogPost: BlogPost) {
    return this.http.post('/api/blog/post', blogPost);
  }
}
