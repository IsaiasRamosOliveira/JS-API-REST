import User from '../models/User.js';

class UserController {
  static getAllUser = async (req, res) => {
    const user = await User.find();
    res.json(user);
  };

  static getOneUser = async (req, res) => {
    try {
      const {
        id
      } = req.params;
      const user = await User.findById(id);
      res.json(user);
    } catch (err) {
      res.send('Não encontramos o User.');
    }
  };

  static addUser = (req, res) => {
    const user = new User(req.body);
    user.save(user.toJSON());
    res.status(201).send('User adicionado');
  };

  static updateUser = async (req, res) => {
    try {
      const {
        id
      } = req.params;
      // eslint-disable-next-line no-unused-vars
      const user = await User.findByIdAndUpdate(id, {
        $set: req.body
      });
      res.send('User atualizado com sucesso.');
    } catch (err) {
      res.send('Erro ao atualizar');
    }
  };

  static deleteUser = async (req, res) => {
    try {
      const {
        id
      } = req.params;

      // eslint-disable-next-line no-unused-vars
      const user = await User.findByIdAndDelete(id);
      res.send('User apagado com sucesso.');
    } catch (err) {
      res.send('Erro ao apagar');
    }
  };
}

export default UserController;
