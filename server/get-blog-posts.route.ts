import {Request, Response} from 'express';

export function getAllBlogPosts(req: Request, res: Response) {

  console.log('Retrieving blog posts ...');

  res.status(200).json({
    payload: [{0: 'test'}]
  });

}
