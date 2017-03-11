import R from 'ramda';
import cheerify from '../../utils/cheerify/cheerify'
import splitBySelector from '../../utils/splitBySelector/splitBySelector';

const removeGlossary = R.replace(/\(=.*\)/g, '');
const fixNbsp = R.replace(/&nbsp;/g, ' ');
const fixDoubleSpace = R.replace(/ {2}/g, ' ');
const fixSeparatedPeriod = R.replace(/ \./g, '.');

const cleanse = R.pipe(
	removeGlossary,
	fixNbsp,
	fixDoubleSpace,
	fixSeparatedPeriod,
	R.trim
);

const extractExamples = senseOrExampleGroupMarkup => {
	const examples = R.pipe(
		splitBySelector({ selector: '.EXAMPLE', onlyChildren: true }),
		R.map(R.pipe(
			cheerify,
			R.invoker(0, 'text'),
			cleanse
		))
	)(senseOrExampleGroupMarkup);

	return examples;
}

export default extractExamples;
