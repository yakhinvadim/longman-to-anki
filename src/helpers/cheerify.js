import cheerio from 'cheerio';

export default function cheerify(markup) {
	return cheerio.load(markup, { decodeEntities: false });
};
