import ErroBase from './ErroBase.js';

class RequirementIncorrect extends ErroBase {
  constructor (message = 'Os dados fornecidos estão incorretos.') {
    super(message, 400);
  }
}

export default RequirementIncorrect;
