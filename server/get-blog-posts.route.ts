import {Request, Response} from 'express';
import {BLOG_POSTS} from './db-data';

export function getAllBlogPosts(req: Request, res: Response) {

  console.log('Retrieving all blog posts from DB...');

  res.status(200).json({
    payload: BLOG_POSTS
  });

}
