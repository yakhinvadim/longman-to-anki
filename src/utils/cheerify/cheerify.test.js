import cheerify from './cheerify';
import cheerio from 'cheerio';

const markup = '<div>text</div>';

describe('cheerify', () => {
	it('creates correct cheerio function', () => {
		expect(
			cheerify(markup).toString()
		).toEqual(
			cheerio.load(markup, { decodeEntities: false }).toString()
		)
	});
});
