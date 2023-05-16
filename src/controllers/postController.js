import ResultNull from '../err/ResultNull.js';
import { Post, User } from '../models/index.js';

class postController {
  static getAllPost = async (req, res, next) => {
    try {
      const post = await Post
        .find()
        .populate('user');
      if (post !== null) {
        res.status(200).json(post);
      } else {
        res.status(404).send({
          message: 'Não encontramos nenhum post.'
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static getOnePost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      if (post !== null) {
        res.status(200).json(post);
      } else {
        res.status(404).send({
          message: 'Não encontramos nenhum post.'
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static addPost = async (req, res, next) => {
    try {
      const post = new Post(req.body);
      // eslint-disable-next-line no-unused-vars
      const response = await post.save(post.toJSON());
      res.status(201).send('Post adicionado');
    } catch (err) {
      next(err);
    }
  };

  static updatePost = async (req, res, next) => {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-unused-vars
      const post = await Post.findByIdAndUpdate(id, { $set: req.body });
      res.send('Post atualizado com sucesso.');
    } catch (err) {
      next(err);
    }
  };

  static deletePost = async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      // eslint-disable-next-line no-unused-vars
      const post = await Post.findByIdAndDelete(id);
      res.send('Post apagado com sucesso.');
    } catch (err) {
      next(err);
    }
  };

  static getPostPerFilter = async (req, res, next) => {
    try {
      const { title, name } = req.query;
      let search = {};

      if (title) search.title = { $regex: title, $options: 'i' };
      if (name) {
        const user = await User.findOne({ name });
        if (user !== null) {
          search.user = user._id;
        } else {
          search = null;
        }
      }

      if (search !== null) {
        const post = await Post
          .find(search)
          .populate('user');
        if (post !== null) {
          res.status(200).json(post);
        } else {
          next(new ResultNull('Não encontramos nenhum post.'));
        }
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      next(err);
    }
  };
}

export default postController;
