import {
  User
} from '../models/index.js';

class UserController {
  static getAllUser = async (req, res, next) => {
    try {
      const user = await User.find();
      if (user !== null) {
        res.json(user);
      } else {
        res.status(404).send({
          message: 'Não encontramos o usuário.'
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static getOneUser = async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const user = await User.findById(id);
      if (user !== null) {
        res.json(user);
      } else {
        res.status(404).send({
          message: 'Não encontramos o usuário.'
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static addUser = async (req, res, next) => {
    try {
      const user = new User(req.body);
      // eslint-disable-next-line no-unused-vars
      const response = await user.save(user.toJSON());
      res.status(201).send('Usuário adicionado com sucesso.');
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      // eslint-disable-next-line no-unused-vars
      const user = await User.findByIdAndUpdate(id, {
        $set: req.body
      });
      res.send('Dados do usuário atualizado com sucesso.');
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (req, res, next) => {
    try {
      const {
        id
      } = req.params;

      // eslint-disable-next-line no-unused-vars
      const user = await User.findByIdAndDelete(id);
      res.status(200).send({
        message: 'Usuário apagado com sucesso.'
      });
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
