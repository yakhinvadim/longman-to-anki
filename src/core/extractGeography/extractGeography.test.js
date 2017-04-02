import extractGeography from './extractGeography';
import senseWithoutGeographyMarkup from '../../mocks/wordSet-entry2-sense9';
import senseWithGeographyMarkup from '../../mocks/wordSet-entry2-sense10';

describe('extractGeography', () => {
	it('extracts correct geography for sense with one geography', () => {
		expect(
			extractGeography(senseWithGeographyMarkup)
		).toEqual('British English')
	});

	it('extracts correct geography for sense without geography', () => {
		expect(
			extractGeography(senseWithoutGeographyMarkup)
		).toEqual('')
	});
});
