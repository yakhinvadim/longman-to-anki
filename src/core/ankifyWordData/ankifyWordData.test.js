import R from 'ramda';
import { ankifyWordData } from './ankifyWordData';

const fakeAnkifyEntryData = ({ headword, pronunciation }) => entryData =>
	`${entryData} ${headword} ${pronunciation}`;

describe('ankifyWordData', () => {
	it('composes correct ankiCards ', () => {
		const wordData = {
			headword: 'headword',
			pronunciation: 'pronunciation',
			entries: ['entry1', 'entry2']
		};

		expect(
			ankifyWordData(fakeAnkifyEntryData, wordData)
		).toBe(
			R.join('\n')([
				'entry1 headword pronunciation',
				'entry2 headword pronunciation'
			])
		);
	});
});
