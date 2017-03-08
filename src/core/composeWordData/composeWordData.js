import splitByClass from '../../helpers/splitByClass/splitByClass';
import composeEntryData from '../composeEntryData/composeEntryData';
import getHeadword from '../getHeadword/getHeadword';
import getPronunciation from '../getPronunciation/getPronunciation';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
  const wordData = R.zipObj(
    [
      'headword',
      'pronunciation',
      'entries'
    ],
    [
      getHeadword(pageMarkup),
      getPronunciation(pageMarkup),
      R.pipe(
        splitByClass('.ldoceEntry'),
        R.map(composeEntryData)
      )(pageMarkup)
    ]
  );

  return wordData;
}
