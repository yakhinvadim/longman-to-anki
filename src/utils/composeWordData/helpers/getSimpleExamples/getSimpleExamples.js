import cheerify from './../cheerify/cheerify.js';
import R from 'ramda';

const removeSpeakerIcon = R.replace(/🔊/g, '');
const removeGlossary = R.replace(/\(=.*\)/g, '');
const fixDoubleSpace = R.replace(/ {2}/g, ' ');
const cleanse = R.pipe(
    removeSpeakerIcon,
    removeGlossary,
    fixDoubleSpace,
    R.trim
  );

export default function getDefinition(senseMarkup) {
  const $ = cheerify(senseMarkup);

  const dirtyExamples = $.root()
    .children('.EXAMPLE')
    .map((i, el) => $(el).text())
    .get()

  return R.map(cleanse)(dirtyExamples);
}
