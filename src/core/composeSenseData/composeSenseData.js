import R from 'ramda';
import composeExamplesData from '../composeExamplesData/composeExamplesData';
import extractDefinition from '../extractDefinition/extractDefinition';
import extractSynonym from '../extractSynonym/extractSynonym';
import extractAntonym from '../extractAntonym/extractAntonym';
import extractSituation from '../extractSituation/extractSituation';

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
      extractDefinition(senseMarkup),
      extractSituation(senseMarkup),
      extractSynonym(senseMarkup),
      extractAntonym(senseMarkup),
      composeExamplesData(senseMarkup)
    ]
  )
}
