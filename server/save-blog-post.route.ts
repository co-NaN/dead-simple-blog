import {Request, Response} from 'express';

export function saveBlogPost(req: Request, res: Response) {

  console.log('Saving blog post...');

  res.status(200).json(
    {payload: 'test save success'}
  );

}
