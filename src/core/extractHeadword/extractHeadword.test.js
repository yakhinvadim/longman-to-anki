import extractHeadword from './extractHeadword';
import wordMarkup from '../../mocks/wordSet';

describe('extractHeadword', () => {
	it('extracts correct headword', () => {
		expect(
			extractHeadword(wordMarkup)
		).toEqual('set')
	});
});
