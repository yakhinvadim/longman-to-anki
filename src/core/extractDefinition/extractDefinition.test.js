import extractDefinition from './extractDefinition';
import set from '../../mocks/set';

describe('extractDefinition', () => {
	it('extracts correct definition for a normal sense', () => {
		expect(
			extractDefinition(set.sensesMarkup2[0])
		).toEqual('a group of similar things that belong together or are related in some way')
	});

	it('extracts correct definition for a crossref sense', () => {
		expect(
			extractDefinition(set.sensesMarkup2[6])
		).toEqual('')
	});

	it('extracts correct definition for a sense with subsenses', () => {
		expect(
			extractDefinition(set.sensesMarkup1[1])
		).toEqual('')
	});
});
