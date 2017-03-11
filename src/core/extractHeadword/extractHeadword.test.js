import extractHeadword from './extractHeadword';
import setMarkup from '../../mocks/wordSet';

describe('extractHeadword', () => {
	it('extracts correct headword', () => {
		expect(
			extractHeadword(setMarkup)
		).toEqual('set')
	});
});
