import extractPronunciation from './extractPronunciation';
import simpleWordMarkup from '../../mocks/wordSet';
import irregularVerbMarkup from '../../mocks/wordGo';
import irregularNounMarkup from '../../mocks/wordMouse';

describe('extractPronunciation', () => {
	it('extracts correct pronunciation for ordinary word', () => {
		expect(
			extractPronunciation(simpleWordMarkup)
		).toEqual('set')
	});

	it('extracts correct pronunciation for irregular verb and american pronounciation', () => {
		expect(
			extractPronunciation(irregularVerbMarkup)
		).toEqual('ɡəʊ $ ɡoʊ')
	});

	it('extracts correct pronunciation for irregular plural noun', () => {
		expect(
			extractPronunciation(irregularNounMarkup)
		).toEqual('maʊs')
	});
});
