import extractPronunciation from './extractPronunciation';
import setMarkup from '../../mocks/wordSet';
import goMarkup from '../../mocks/wordGo';
import mouseMarkup from '../../mocks/wordMouse';

describe('extractPronunciation', () => {
	it('extracts correct pronunciation for ordinary word', () => {
		expect(
			extractPronunciation(setMarkup)
		).toEqual('set')
	});

	it('extracts correct pronunciation for irregular verb and american pronounciation', () => {
		expect(
			extractPronunciation(goMarkup)
		).toEqual('ɡəʊ $ ɡoʊ')
	});

	it('extracts correct pronunciation for irregular plural noun', () => {
		expect(
			extractPronunciation(mouseMarkup)
		).toEqual('maʊs')
	});
});
