import extractSynonym from './extractSynonym';
import senseWithSynonymMarkup from '../../mocks/wordSet-entry2-sense10';
import senseWithoutSynonymMarkup from '../../mocks/wordSet-entry2-sense9';

describe('extractSynonym', () => {
	it('extracts correct synonym for sense with synonym', () => {
		expect(
			extractSynonym(senseWithSynonymMarkup)
		).toEqual('stream')
	});

	it('extracts correct synonym for sense without synonym', () => {
		expect(
			extractSynonym(senseWithoutSynonymMarkup)
		).toEqual('')
	});
});
