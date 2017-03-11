import extractSynonym from './extractSynonym';
import set from '../../mocks/set';

describe('extractSynonym', () => {
	it('extracts correct synonym for sense with one synonym', () => {
		expect(
			extractSynonym(set.sensesMarkup2[9])
		).toEqual('stream')
	});

	it('extracts correct synonym for sense without synonym', () => {
		expect(
			extractSynonym(set.sensesMarkup2[8])
		).toEqual('')
	});
});
