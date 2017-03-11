import extractSituation from './extractSituation';
import markupWithSituation from '../../mocks/wordSet-entry2-sense9';
import markupWithoutSituation from '../../mocks/wordSet-entry2-sense10';
import markupWithTwoSituations from '../../mocks/wordDitch-entry2-sense3';

describe('extractSituation', () => {
	it('extracts correct situation for sense with one situation', () => {
		expect(
			extractSituation(markupWithSituation)
		).toEqual('technical')
	});

	it('extracts correct situation for sense with two situations', () => {
		expect(
			extractSituation(markupWithTwoSituations)
		).toEqual('spoken informal')
	});

	it('extracts correct situation for sense without situation', () => {
		expect(
			extractSituation(markupWithoutSituation)
		).toEqual('')
	});
});
