import R from 'ramda';
import getCheerioText from '../../helpers/getCheerioText';
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
			getCheerioText,
			cleanse
		))
	)(senseOrExampleGroupMarkup);

	return examples;
}

export default extractExamples;
