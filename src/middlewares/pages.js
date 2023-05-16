import RequirementIncorrect from '../err/RequirementIncorrect.js';

async function pages (req, res, next) {
  try {
    let {
      limit = 5, page = 1, ordination = '_id:-1'
    } = req.query;

    let [camp, order] = ordination.split(':');

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);
    const result = req.result;
    if (limit > 0 && page > 0) {
      const response = await result
        .find()
        .sort({
          [camp]: order
        })
        .skip((page - 1) * limit)
        .limit(limit);
      if (response !== null) {
        res.status(200).json(response);
      } else {
        res.status(404).send({
          message: 'Não encontramos nenhum post.'
        });
      }
    } else {
      next(new RequirementIncorrect());
    }
  } catch (err) {
    next(err);
  }
}

export default pages;
