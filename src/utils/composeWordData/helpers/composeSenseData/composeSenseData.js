import R from 'ramda';
import composeExamplesData from './../composeExamplesData/composeExamplesData.js';
import getDefinition from './../getDefinition/getDefinition.js';

export default function composeSenseData(senseMarkup) {
  return R.zipObj(
    ['definition', 'examples'],
    [getDefinition(senseMarkup), composeExamplesData(senseMarkup)]
  )
}
