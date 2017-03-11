import composeSenseData from './composeSenseData';
import set from '../../mocks/set';

describe('composeSenseData', () => {
	it('senseData contains definition', () => {
		expect(
			composeSenseData(set.sensesMarkup2[0]).definition
		).toBeDefined();
	});

	it('senseData contains situation', () => {
		expect(
			composeSenseData(set.sensesMarkup2[0]).situation
		).toBeDefined();
	});

	it('senseData contains synonym', () => {
		expect(
			composeSenseData(set.sensesMarkup2[0]).synonym
		).toBeDefined();
	});

	it('senseData contains antonym', () => {
		expect(
			composeSenseData(set.sensesMarkup2[0]).antonym
		).toBeDefined();
	});

	it('senseData contains examples', () => {
		expect(
			composeSenseData(set.sensesMarkup2[0]).examples
		).toBeDefined();
	});
});
