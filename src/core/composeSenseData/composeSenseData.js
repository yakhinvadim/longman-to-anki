import R from 'ramda';
import composeExamplesData from '../composeExamplesData/composeExamplesData';
import getDefinition from '../getDefinition/getDefinition';
import getSynonym from '../getSynonym/getSynonym';
import getAntonym from '../getAntonym/getAntonym';
import getSituation from '../getSituation/getSituation';

export default function composeSenseData(senseMarkup) {
  return R.zipObj(
    [
      'definition',
      'situation',
      'synonym',
      'antonym',
      'examples'
    ],
    [
      getDefinition(senseMarkup),
      getSituation(senseMarkup),
      getSynonym(senseMarkup),
      getAntonym(senseMarkup),
      composeExamplesData(senseMarkup)
    ]
  )
}
