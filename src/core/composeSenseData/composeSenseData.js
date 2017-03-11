import R from 'ramda';
import splitBySelector from '../../utils/splitBySelector/splitBySelector';
import composeExampleGroupData from '../composeExampleGroupData/composeExampleGroupData'
import extractDefinition from '../extractDefinition/extractDefinition';
import extractSynonym from '../extractSynonym/extractSynonym';
import extractAntonym from '../extractAntonym/extractAntonym';
import extractSituation from '../extractSituation/extractSituation';
import extractExamples from '../extractExamples/extractExamples';

const composeSenseData = senseMarkup => {
	const definition = extractDefinition(senseMarkup);
	const situation = extractSituation(senseMarkup);
	const synonym = extractSynonym(senseMarkup);
	const antonym = extractAntonym(senseMarkup);
	const examples = extractExamples(senseMarkup);
	const exampleGroups = R.pipe(
			splitBySelector({ selector: '.ColloExa, .GramExa', onlyChildren: true }),
			R.map(composeExampleGroupData)
		)(senseMarkup);
	const subsenses = R.pipe(
			splitBySelector({ selector: '.Subsense' }),
			R.map(composeSenseData)
		)(senseMarkup);

	const senseData = {
		definition,
		situation,
		synonym,
		antonym,
		examples,
		exampleGroups,
		subsenses
	};

	return senseData;
}

export default composeSenseData;
