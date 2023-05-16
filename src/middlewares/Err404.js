import ResultNull from '../err/ResultNull.js';

function Err404 (req, res, next) {
  const err404 = new ResultNull();
  next(err404);
}

export default Err404;
