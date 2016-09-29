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

export default function getExamples(senseMarkup) {
  const $ = cheerify(senseMarkup);

  let cheerioExamples = [];
  $('.EXAMPLE').each(
    (i, el) => cheerioExamples[i] = $(el)
  );

  const getText = R.invoker(0, 'text');
  const getForm = R.invoker(1, 'prevAll')('.PROPFORM, .PROPFORMPREP, .COLLO');

  const forms = R.map(
    R.pipe(
      getForm,
      getText
    )
  )(cheerioExamples);

  const examples = R.map(
    R.pipe(
      getText,
      cleanse
    )
  )(cheerioExamples);

  const formsObj = R.map(
    R.objOf('form')
  )(forms);

  const examplesObj = R.map(
    R.objOf('text')
  )(examples);

  const result = R.zipWith(
    R.pipe(
      R.merge,
      R.filter(R.complement(R.isEmpty))
    ), formsObj, examplesObj
  );

  return result;
}
