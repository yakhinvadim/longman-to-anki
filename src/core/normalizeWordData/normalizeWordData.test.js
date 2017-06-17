import normalizeWordData from './normalizeWordData';
jest.mock('../normalizeEntryData/normalizeEntryData', () => (
	({ headword, pronunciation }) => entryData => `${entryData} ${headword} ${pronunciation}`
))

describe('normalizeWordData', () => {
	it('correctly normalizes wordData', () => {
		const wordData = {
			headword: 'headword',
			pronunciation: 'pronunciation',
			entries: ['entry1', 'entry2']
		};

		expect(
			normalizeWordData(wordData)
		).toEqual([
			'entry1 headword pronunciation',
			'entry2 headword pronunciation'
		]);
	});
});
