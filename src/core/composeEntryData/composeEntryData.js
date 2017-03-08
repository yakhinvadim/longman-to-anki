import R from 'ramda';
import composeSenseData from '../composeSenseData/composeSenseData';
import splitByClass from '../../utils/splitByClass/splitByClass';

const composeEntryData = entryMarkup => {
  const senses = R.pipe(
      splitByClass('Sense'),
      R.map(composeSenseData)
    )(entryMarkup);

  const entryData = {
    senses
  };

  return entryData;
}

export default composeEntryData;
