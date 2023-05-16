import ErroBase from './ErroBase.js';

class ResultNull extends ErroBase {
  constructor (message = 'Página não encontrada.') {
    super(message, 404);
  }
}

export default ResultNull;
