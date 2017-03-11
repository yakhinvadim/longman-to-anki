import extractSituation from './extractSituation';
import set from '../../mocks/set';

describe('extractSituation', () => {
	it('extracts correct situation for sense with one situation', () => {
		expect(
			extractSituation(set.sensesMarkup3[0])
		).toEqual('informal')
	});

	it('extracts correct situation for sense without situation', () => {
		expect(
			extractSituation(set.sensesMarkup2[0])
		).toEqual('')
	});
});
