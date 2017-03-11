import R from 'ramda';
import composeSenseData from '../composeSenseData/composeSenseData';
import splitBySelector from '../../utils/splitBySelector/splitBySelector';

const composeEntryData = entryMarkup => {
  const senses = R.pipe(
      splitBySelector({ selector: '.Sense' }),
      R.map(composeSenseData)
    )(entryMarkup);

  const entryData = {
    senses
  };

  return entryData;
}

export default composeEntryData;
