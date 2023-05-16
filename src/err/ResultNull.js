import Errobase from './ErroBase.js';

class ResultNull extends Errobase {
  constructor (message = 'Página não encontrada.') {
    super(message, 404);
  }
}

export default ResultNull;
