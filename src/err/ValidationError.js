import RequirementIncorrect from './RequirementIncorrect.js';

class ValidationError extends RequirementIncorrect {
  constructor (err) {
    const messageErr = Object.values(err.errors)
      .map(err => err.message);
    super(`Erro na validação de dados.Erros: ${messageErr}`);
  }
}

export default ValidationError;
