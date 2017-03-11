import extractDefinition from './extractDefinition';
import normalSense from '../../mocks/wordSet-entry1-sense5';
import crossrefSense from '../../mocks/wordSet-entry1-sense12';
import subsensesSense from '../../mocks/wordSet-entry1-sense21';

describe('extractDefinition', () => {
	it('extracts correct definition for a normal sense', () => {
		expect(
			extractDefinition(normalSense)
		).toEqual('to establish a way of doing something that is then copied or regarded as good')
	});

	it('extracts correct definition for a crossref sense', () => {
		expect(
			extractDefinition(crossrefSense)
		).toEqual('')
	});

	it('extracts correct definition for a sense with subsenses', () => {
		expect(
			extractDefinition(subsensesSense)
		).toEqual('')
	});
});
