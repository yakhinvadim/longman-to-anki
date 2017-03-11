import extractAntonym from './extractAntonym';
import senseWithAntonymMarkup from '../../mocks/wordSet-entry1-sense11';
import senseWithoutAntonymMarkup from '../../mocks/wordSet-entry2-sense9';

describe('extractAntonym', () => {
	it('extracts correct antonym for sense with one antonym', () => {
		expect(
			extractAntonym(senseWithAntonymMarkup)
		).toEqual('rise')
	});

	it('extracts correct antonym for sense without antonym', () => {
		expect(
			extractAntonym(senseWithoutAntonymMarkup)
		).toEqual('')
	});
});
