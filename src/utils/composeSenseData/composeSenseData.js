import R from 'ramda';
import composeExamplesData from '../composeExamplesData/composeExamplesData.js';
import getDefinition from '../getDefinition/getDefinition.js';
import getSituation from '../getSituation/getSituation.js';

export default function composeSenseData(senseMarkup) {
  return R.zipObj(
    [
      'definition',
      'situation',
      'examples'
    ],
    [
      getDefinition(senseMarkup),
      getSituation(senseMarkup),
      composeExamplesData(senseMarkup)
    ]
  )
}
