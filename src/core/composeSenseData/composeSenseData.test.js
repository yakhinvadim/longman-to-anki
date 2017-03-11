import composeSenseData from './composeSenseData';
import senseMarkup from '../../mocks/wordSet-entry1-sense5';

describe('composeSenseData', () => {
	it('senseData contains definition', () => {
		expect(
			composeSenseData(senseMarkup).definition
		).toBeDefined();
	});

	it('senseData contains situation', () => {
		expect(
			composeSenseData(senseMarkup).situation
		).toBeDefined();
	});

	it('senseData contains synonym', () => {
		expect(
			composeSenseData(senseMarkup).synonym
		).toBeDefined();
	});

	it('senseData contains antonym', () => {
		expect(
			composeSenseData(senseMarkup).antonym
		).toBeDefined();
	});

	it('senseData contains examples', () => {
		expect(
			composeSenseData(senseMarkup).examples
		).toBeDefined();
	});
});
