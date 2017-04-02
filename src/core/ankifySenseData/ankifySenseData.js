import R from 'ramda';

const ankifySenseData = R.curry(({ headword, pronunciation }, senseData) => {
	
	// data

	const { definition, situation, synonym, antonym, examples, exampleGroups, subsenses } = senseData;

	const commonData = {
		definition,
		situation,
		synonym,
		antonym,
		pronunciation
	};


	// ankify... functions

	const ankifyExample = form => example =>
		({ ...commonData, example, form })

	const ankifyExampleGroup = exampleGroup => {
		const { form, examples: exampleGroupExamples } = exampleGroup;
		const cards = exampleGroupExamples.map(ankifyExample(form));
		return cards;
	}


	// different card types

	const cardsFromExamples = R.map(
		ankifyExample(headword)
	)(examples);

	const cardsFromExampleGroups = R.map(
		ankifyExampleGroup
	)(exampleGroups);
	
	const cardsFromSubsenses = R.map(
		ankifySenseData({ headword, pronunciation })
	)(subsenses);

	const cardFromDefinition =
		R.all(R.isEmpty, [examples, exampleGroups, subsenses]) && definition
			? { ...commonData, form: headword }
			: {};


	// all cards

	const cards = R.pipe(
		R.flatten,
		R.reject(R.isEmpty)
	)([
		cardsFromExamples,
		cardsFromExampleGroups,
		cardsFromSubsenses,
		cardFromDefinition
	]);

	return cards;
});

export default ankifySenseData;
