import extractAntonym from './extractAntonym';
import senseWithAntonym from '../../mocks/wordSet-entry1-sense11';
import senseWithoutAntonym from '../../mocks/wordSet-entry2-sense9';

describe('extractAntonym', () => {
	it('extracts correct antonym for sense with one antonym', () => {
		expect(
			extractAntonym(senseWithAntonym)
		).toEqual('rise')
	});

	it('extracts correct antonym for sense without antonym', () => {
		expect(
			extractAntonym(senseWithoutAntonym)
		).toEqual('')
	});
});
