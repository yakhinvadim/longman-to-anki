import R from 'ramda';
import getExamples from './../getExamples/getExamples.js';
import getDefinition from './../getDefinition/getDefinition.js';

export default function composeSenseData(senseMarkup) {
  return R.zipObj(
    ['definition', 'examples'],
    [getDefinition(senseMarkup), getExamples(senseMarkup)]
  )
}
