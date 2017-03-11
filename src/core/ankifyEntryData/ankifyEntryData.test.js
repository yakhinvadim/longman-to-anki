import R from 'ramda';
import { ankifyEntryData } from './ankifyEntryData';

const fakeAnkifySenseData = ({ headword, pronunciation }) => senseData =>
	`${senseData} ${headword} ${pronunciation}`;

const headword = 'headword';
const pronunciation = 'pronunciation';

describe('ankifyEntryData', () => {
	it('composes correct ankiCards ', () => {
		const entryData = {
			senses: ['sense1', 'sense2']
		};

		expect(
			ankifyEntryData(fakeAnkifySenseData, {headword, pronunciation}, entryData)
		).toBe(
			R.join('\n')([
				'sense1 headword pronunciation',
				'sense2 headword pronunciation'
			])
		);
	});
});
