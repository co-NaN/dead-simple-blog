import {Request, Response} from 'express';
import {BLOG_POSTS} from './db-data';

export function deleteBlogPost(req: Request, res: Response) {
  const id = req.body['id'];

  console.log(`Deleting post with id ${id} from DB...`);

  const indexToRemove = BLOG_POSTS.findIndex(blogPost => blogPost.id === id);

  let removedBlogPost = null;

  if (indexToRemove > -1) {
    removedBlogPost = BLOG_POSTS.splice(indexToRemove, 1);
  }

  res.status(200).json({
    payload: removedBlogPost
  });

}
