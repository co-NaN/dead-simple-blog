import {Request, Response} from 'express';

export function getAllBlogPosts(req: Request, res: Response) {

  console.log('Retrieving all blog posts from DB...');

  res.status(200).json({
    payload: [{0: 'test'}]
  });

}
