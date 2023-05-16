import express from 'express';
import postController from '../controllers/postController.js';
import userController from '../controllers/userController.js';

const route = express.Router();

route.get('/', (req, res) => {
  res.send('<h1>Main page</h1>');
});

route
  .get('/posts', postController.getAllPost)
  .get('/posts/search', postController.getPostPerFilter)
  .get('/posts/:id', postController.getOnePost)
  .post('/posts', postController.addPost)
  .put('/posts/:id', postController.updatePost)
  .delete('/posts/:id', postController.deletePost)

  .get('/users', userController.getAllUser)
  .get('/users/:id', userController.getOneUser)
  .post('/users', userController.addUser)
  .put('/users/:id', userController.updateUser)
  .delete('/users/:id', userController.deleteUser);

export default route;
