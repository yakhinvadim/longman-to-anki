import cheerio from 'cheerio';

const cheerify = markup =>
	cheerio.load(markup, { decodeEntities: false });

export default cheerify;
