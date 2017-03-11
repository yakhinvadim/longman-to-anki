import composeQuery from './composeQuery';

describe('composeQuery', () => {
	it('composes correct query one simple word', () => {
		expect(
			composeQuery('set' )
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fset%22'
		)
	});

	it('composes correct query for word with space', () => {
		expect(
			composeQuery('fire alarm')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Ffire-alarm%22'
		)
	});
	
	it('composes correct query for word with slash', () => {
		expect(
			composeQuery('put/set pen to paper')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fput-set-pen-to-paper%22'
		)
	});

	it('composes correct query for word with apostrophe', () => {
		expect(
			composeQuery('set somebody’s teeth on edge')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fset-somebody-s-teeth-on-edge%22'
		)
	});

	it('composes correct query for word with exclamation mark', () => {
		expect(
			composeQuery('that does it!')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fthat-does-it%22'
		)
	});

	it('composes correct query for word with question mark', () => {
		expect(
			composeQuery('what can I do you for?')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fwhat-can-i-do-you-for%22'
		)
	});

	it('composes correct query for word with parenthesis', () => {
		expect(
			composeQuery('a closed set (of something)')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fa-closed-set-of-something%22'
		)
	});

	it('composes correct query for word with uppercase symbols', () => {
		expect(
			composeQuery('catch/get some Z’s')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fcatch-get-some-z-s%22'
		)
	});

	it('composes correct query for word with dots, double spaces and spaces in the end after removing symbols', () => {
		expect(
			composeQuery('not ... but rather ...')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fnot-but-rather%22'
		)
	});

	it('composes correct query for word with commas', () => {
		expect(
			composeQuery('I don’t want to sound/be ..., but ...')
		).toEqual(
			'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fi-don-t-want-to-sound-be-but%22'
		)
	});
});
