import * as express from 'express';
import {Application} from 'express';
import {getAllBlogPosts} from './get-blog-posts.route';
import {saveBlogPost} from './save-blog-post.route';
import {deleteBlogPost} from './delete-blog-post.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/blog/post/all').get(getAllBlogPosts);
app.route('/api/blog/post').post(saveBlogPost);
app.route('/api/blog/post').delete(deleteBlogPost);

const httpServer = app.listen(9001, () => {
  console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
