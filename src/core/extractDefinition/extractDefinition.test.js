import extractDefinition from './extractDefinition';
import normalSenseMarkup from '../../mocks/wordSet-entry1-sense5';
import crossrefSenseMarkup from '../../mocks/wordSet-entry1-sense12';
import subsensesSenseMarkup from '../../mocks/wordSet-entry1-sense21';

describe('extractDefinition', () => {
	it('extracts correct definition for a normal sense', () => {
		expect(
			extractDefinition(normalSenseMarkup)
		).toEqual('to establish a way of doing something that is then copied or regarded as good')
	});

	it('extracts correct definition for a crossref sense', () => {
		expect(
			extractDefinition(crossrefSenseMarkup)
		).toEqual('')
	});

	it('extracts correct definition for a sense with subsenses', () => {
		expect(
			extractDefinition(subsensesSenseMarkup)
		).toEqual('')
	});
});
