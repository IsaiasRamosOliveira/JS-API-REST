import mongoose from 'mongoose';
import ErroBase from '../err/ErroBase.js';
import RequirementIncorrect from '../err/RequirementIncorrect.js';
import ValidationError from '../err/ValidationError.js';

function globalErrorHandling (err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new RequirementIncorrect().sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else if (err instanceof ErroBase) {
    err.sendResponse(res);
  } else {
    new ErroBase().sendResponse(res);
  }
}

export default globalErrorHandling;
