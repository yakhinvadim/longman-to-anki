import R from 'ramda';
import cheerify from '../../helpers/cheerify';

const splitBySelector = (selector, markup) => {
  const $ = cheerify(markup);

  const output = $(selector)
    .map((i, el) => $(el).html())
    .get();

  return output;
};

export default R.curry(splitBySelector);
