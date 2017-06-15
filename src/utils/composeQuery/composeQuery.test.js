import composeQuery from './composeQuery';

const beforeWord = 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2F';
const afterWord = '%22';
const addFrame = word => `${beforeWord}${word}${afterWord}`

xdescribe('composeQuery', () => {
	it('composes correct query one simple word', () => {
		expect(
			composeQuery('set')
		).toEqual(
			addFrame('set')
		)
	});

	it('composes correct query for word with space', () => {
		expect(
			composeQuery('fire alarm')
		).toEqual(
			addFrame('fire-alarm')
		)
	});
	
	it('composes correct query for word with slash', () => {
		expect(
			composeQuery('put/set pen to paper')
		).toEqual(
			addFrame('put-set-pen-to-paper')
		)
	});

	it('composes correct query for word with apostrophe', () => {
		expect(
			composeQuery('set somebody’s teeth on edge')
		).toEqual(
			addFrame('set-somebody-s-teeth-on-edge')
		)
	});

	it('composes correct query for word with exclamation mark', () => {
		expect(
			composeQuery('that does it!')
		).toEqual(
			addFrame('that-does-it')
		)
	});

	it('composes correct query for word with question mark', () => {
		expect(
			composeQuery('what can I do you for?')
		).toEqual(
			addFrame('what-can-i-do-you-for')
		)
	});

	it('composes correct query for word with parenthesis', () => {
		expect(
			composeQuery('a closed set (of something)')
		).toEqual(
			addFrame('a-closed-set-of-something')
		)
	});

	it('composes correct query for word with uppercase symbols', () => {
		expect(
			composeQuery('catch/get some Z’s')
		).toEqual(
			addFrame('catch-get-some-z-s')
		)
	});

	it('composes correct query for word with dots, double spaces and spaces in the end after removing symbols', () => {
		expect(
			composeQuery('not ... but rather ...')
		).toEqual(
			addFrame('not-but-rather')
		)
	});

	it('composes correct query for word with commas', () => {
		expect(
			composeQuery('I don’t want to sound/be ..., but ...')
		).toEqual(
			addFrame('i-don-t-want-to-sound-be-but')
		)
	});
});
