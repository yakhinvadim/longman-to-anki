import R from 'ramda';
import cheerify from '../../helpers/cheerify';

const splitByClass = (className, markup) => {
  const $ = cheerify(markup);

  const output = $(`.${className}`)
    .map((i, el) => $(el).html())
    .get();

  return output;
};

export default R.curry(splitByClass);
