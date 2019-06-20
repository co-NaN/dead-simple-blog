import {Request, Response} from 'express';
import {BLOG_POSTS} from './db-data';
import {BlogPostEntity} from './blog-post-entity';

export function saveBlogPost(req: Request, res: Response) {

  console.log('Saving blog post to DB...');

  const id = req.params['id'];
  const content = req.params['content'];

  const blogPostToDB: BlogPostEntity = new BlogPostEntity(id, content);

  BLOG_POSTS.unshift(blogPostToDB);

  res.status(200).json(
    blogPostToDB
  );

}
