import R from 'ramda';
import cheerify from './cheerify';

const getCheerioText = R.pipe(
    cheerify,
    R.invoker(0, 'text')
);

export default getCheerioText;
