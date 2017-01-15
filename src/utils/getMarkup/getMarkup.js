import R from 'ramda';

const getMarkup = query => R.pipeP(
  fetch,
  R.invoker(0, 'text')
)(query);

export default getMarkup;
