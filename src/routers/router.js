import express from 'express';
import postController from '../controllers/postController.js';

const route = express.Router();

route.get('/', (req, res) => {
  res.send('<h1>Main page</h1>');
});

route
  .get('/posts', postController.getAllPost)
  .get('/posts/:id', postController.getOnePost)
  .post('/posts', postController.addPost)
  .put('/posts/:id', postController.updatePost)
  .delete('/posts/:id', postController.deletePost);

export default route;
