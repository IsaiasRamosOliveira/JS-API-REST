import Post from '../models/Post.js';

class postController {
  static getAllPost = async (req, res) => {
    const post = await Post.find();
    res.json(post);
  };

  static getOnePost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      res.json(post);
    } catch (err) {
      res.send('Não encontramos o post.');
    }
  };

  static addPost = (req, res) => {
    const post = new Post(req.body);
    post.save(post.toJSON());
    res.status(201).send('Post adicionado');
  };

  static updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      // eslint-disable-next-line no-unused-vars
      const post = await Post.findByIdAndUpdate(id, { $set: req.body });
      res.send('Post atualizado com sucesso.');
    } catch (err) {
      res.send('Erro ao atualizar');
    }
  };

  static deletePost = async (req, res) => {
    try {
      const {
        id
      } = req.params;

      // eslint-disable-next-line no-unused-vars
      const post = await Post.findByIdAndDelete(id);
      res.send('Post apagado com sucesso.');
    } catch (err) {
      res.send('Erro ao apagar');
    }
  };
}

export default postController;
