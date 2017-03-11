import cheerio from 'cheerio';

const cheerify = markup => {
	return cheerio.load(markup, { decodeEntities: false });
};

export default cheerify;
