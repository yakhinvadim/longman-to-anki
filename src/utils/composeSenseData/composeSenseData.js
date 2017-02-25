import R from 'ramda';
import composeExamplesData from '../composeExamplesData/composeExamplesData.js';
import getDefinition from '../getDefinition/getDefinition.js';
import getSynonym from '../getSynonym/getSynonym.js';
import getSituation from '../getSituation/getSituation.js';

export default function composeSenseData(senseMarkup) {
  return R.zipObj(
    [
      'definition',
      'situation',
      'synonym',
      'examples'
    ],
    [
      getDefinition(senseMarkup),
      getSituation(senseMarkup),
      getSynonym(senseMarkup),
      composeExamplesData(senseMarkup)
    ]
  )
}
