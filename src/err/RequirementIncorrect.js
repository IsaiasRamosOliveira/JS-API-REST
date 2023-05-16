import Errobase from './ErroBase.js';

class RequirementIncorrect extends Errobase {
  constructor (message = 'Os dados fornecidos estão incorretos.') {
    super(message, 400);
  }
}

export default RequirementIncorrect;
