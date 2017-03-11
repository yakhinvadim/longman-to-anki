import extractSynonym from './extractSynonym';
import markupWithSynonym from '../../mocks/wordSet-entry2-sense10';
import markupWithoutSynonym from '../../mocks/wordSet-entry2-sense9';

describe('extractSynonym', () => {
	it('extracts correct synonym for sense with synonym', () => {
		expect(
			extractSynonym(markupWithSynonym)
		).toEqual('stream')
	});

	it('extracts correct synonym for sense without synonym', () => {
		expect(
			extractSynonym(markupWithoutSynonym)
		).toEqual('')
	});
});
