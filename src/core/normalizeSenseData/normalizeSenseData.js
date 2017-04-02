import R from 'ramda';

const normalizeSenseData = R.curry(({ headword, pronunciation }, senseData) => {
	
	// data

	const { definition, situation, synonym, antonym, examples, exampleGroups, subsenses } = senseData;

	const commonData = {
		definition,
		situation,
		synonym,
		antonym,
		pronunciation
	};


	// normalize... functions

	const normalizeExample = form => example =>
		({ ...commonData, example, form })

	const normalizeExampleGroup = exampleGroup => {
		const { form, examples: exampleGroupExamples } = exampleGroup;
		const cards = exampleGroupExamples.map(normalizeExample(form));
		return cards;
	}


	// different card types

	const cardsFromExamples = R.map(
		normalizeExample(headword)
	)(examples);

	const cardsFromExampleGroups = R.map(
		normalizeExampleGroup
	)(exampleGroups);
	
	const cardsFromSubsenses = R.map(
		normalizeSenseData({ headword, pronunciation })
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

export default normalizeSenseData;
