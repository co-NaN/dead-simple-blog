import {Request, Response} from 'express';
import {BLOG_POSTS} from './db-data';
import {BlogPostEntity} from './blog-post-entity';

export function saveBlogPost(req: Request, res: Response) {

  console.log('Saving blog post to DB...');

  const content = req.body['content'];

  const blogPostToDB: BlogPostEntity = new BlogPostEntity(generateId(), content);

  BLOG_POSTS.unshift(blogPostToDB);

  res.status(200).json(
    blogPostToDB
  );

}

function generateId() {
  const lastBlogPost: BlogPostEntity = BLOG_POSTS[BLOG_POSTS.length - 1];
  if (lastBlogPost) {
    return lastBlogPost['id'] + 1;
  } else {
    return 1;
  }
}
