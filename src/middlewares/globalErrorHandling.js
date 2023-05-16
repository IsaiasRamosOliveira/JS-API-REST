import mongoose from 'mongoose';
import Errobase from '../err/ErroBase.js';
import RequirementIncorrect from '../err/RequirementIncorrect.js';
import ValidationError from '../err/ValidationError.js';
import ResultNull from '../err/ResultNull.js';

function globalErrorHandling (err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new RequirementIncorrect().sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else if (err instanceof ResultNull) {
    err.sendResponse(res);
  } else {
    new Errobase().sendResponse(res);
  }
}

export default globalErrorHandling;
