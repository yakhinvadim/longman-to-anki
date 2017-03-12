import R from 'ramda';
import realMakeCard from '../makeCard/makeCard';

const ankifySenseData = R.curry((makeCard, { headword, pronunciation }, senseData) => {
	const { definition, situation, synonym, antonym, examples, exampleGroups, subsenses } = senseData;

	const commonData = {
		definition,
		situation,
		synonym,
		antonym,
		pronunciation
	};

	
	const ankifyExample = (form = headword) => example =>
		makeCard({ example, form, ...commonData})

	const ankifyExampleGroup = exampleGroup => {
		const { form, examples: exampleGroupExamples } = exampleGroup;
		const cards = exampleGroupExamples.map(ankifyExample(form));
		return cards;
	}

	
	const cardsFromExamples = R.map(
		ankifyExample()
	)(examples);

	const cardsFromExampleGroups = R.map(
		ankifyExampleGroup
	)(exampleGroups);
	
	const cardsFromSubsenses = R.map(
		ankifySenseData(makeCard, { headword, pronunciation })
	)(subsenses);

	const cardFromDefinition =
		R.all(R.isEmpty, [examples, exampleGroups, subsenses]) && definition
			? makeCard({ form: headword, ...commonData })
			: '';

	
	const cards = R.pipe(
		R.flatten,
		R.reject(R.isEmpty),
		R.join('\n')
	)([
		cardsFromExamples,
		cardsFromExampleGroups,
		cardsFromSubsenses,
		cardFromDefinition
	]);

	return cards;
});

export {ankifySenseData};
export default ankifySenseData(realMakeCard);
