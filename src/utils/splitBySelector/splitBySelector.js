import R from 'ramda';
import cheerify from '../../helpers/cheerify';

const splitBySelector = ({ selector, onlyChildren = false }, markup) => {
  const $ = cheerify(markup);

  const markups = onlyChildren
    ? $.root()
        .children(selector)
        .map((i, el) => $(el).html())
        .get()
    : $(selector)
        .map((i, el) => $(el).html())
        .get();

  return markups;
};

export default R.curry(splitBySelector);
