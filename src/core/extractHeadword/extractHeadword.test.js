import extractHeadword from './extractHeadword';
import set from '../../mocks/set';

describe('extractHeadword', () => {
	it('extracts correct headword', () => {
		expect(
			extractHeadword(set.pageMarkup)
		).toEqual('set')
	});
});
