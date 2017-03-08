import cheerify from '../../helpers/cheerify';
import R from 'ramda';

const removeSpeakerIcon = R.replace(/🔊/g, '');
const removeGlossary = R.replace(/\(=.*\)/g, '');
const fixDoubleSpace = R.replace(/ {2}/g, ' ');
const fixSeparatedPeriod = R.replace(/ \./g, '.');
const cleanse = R.pipe(
  removeSpeakerIcon,
  removeGlossary,
  fixDoubleSpace,
  fixSeparatedPeriod,
  R.trim
);

const getText = R.invoker(0, 'text');
const getForm = R.invoker(1, 'siblings')('.PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD');

export default function getExamples(senseMarkup) {
  const $ = cheerify(senseMarkup);

  let cheerioExamples = [];
  $('.EXAMPLE').each(
    (i, el) => cheerioExamples[i] = $(el)
  );

  const examplesText = R.map(
    R.pipe(
      getText,
      cleanse,
      R.objOf('text')
    )
  )(cheerioExamples);

  const examplesForms = R.map(
    R.pipe(
      getForm,
      getText,
      R.objOf('form')
    )
  )(cheerioExamples);

  const examplesData = R.zipWith(
    R.pipe(
      R.merge,
      R.filter(R.complement(R.isEmpty))
    ), examplesForms, examplesText
  );

  return examplesData;
}
