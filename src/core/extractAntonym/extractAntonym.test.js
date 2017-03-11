import extractAntonym from './extractAntonym';
import set from '../../mocks/set';

describe('extractAntonym', () => {
	it('extracts correct antonym for sense with one antonym', () => {
		expect(
			extractAntonym(set.sensesMarkup1[2])
		).toEqual('rise')
	});

	it('extracts correct antonym for sense without antonym', () => {
		expect(
			extractAntonym(set.sensesMarkup1[1])
		).toEqual('')
	});
});
