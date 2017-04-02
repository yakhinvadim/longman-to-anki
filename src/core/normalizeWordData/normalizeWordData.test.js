import { normalizeWordData } from './normalizeWordData';

const fakeNormalizeEntryData = ({ headword, pronunciation }) => entryData =>
	`${entryData} ${headword} ${pronunciation}`;

describe('normalizeWordData', () => {
	it('correctly normalizes wordData', () => {
		const wordData = {
			headword: 'headword',
			pronunciation: 'pronunciation',
			entries: ['entry1', 'entry2']
		};

		expect(
			normalizeWordData(fakeNormalizeEntryData, wordData)
		).toEqual([
			'entry1 headword pronunciation',
			'entry2 headword pronunciation'
		]);
	});
});
