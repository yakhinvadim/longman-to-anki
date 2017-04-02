import ankifySenseData from './ankifySenseData';

const headword = 'headword';
const pronunciation = 'pronunciation';

const basicSenseData = {
	situation: 'situation',
	definition: 'definition',
	synonym: 'synonym',
	antonym: 'antonym',
	examples: [],
	exampleGroups: [],
	subsenses: []
}

const basicCardData = {
	situation: 'situation',
	pronunciation: 'pronunciation',
	definition: 'definition',
	synonym: 'synonym',
	antonym: 'antonym'
}

describe('ankifySenseData', () => {
	it('composes correct ankiCards from single example', () => {
		const senseData = {
			...basicSenseData,
			examples: ['example']
		};

		expect(
			ankifySenseData({headword, pronunciation}, senseData)
		).toEqual([
			{
				...basicCardData,
				form: 'headword',
				example: 'example'
			}
		]);
	});

	it('composes correct ankiCards from several examples', () => {
		const senseData = {
			...basicSenseData,
			examples: ['example1', 'example2']
		};

		expect(
			ankifySenseData({headword, pronunciation}, senseData)
		).toEqual([
			{
				...basicCardData,
				form: 'headword',
				example: 'example1'
			},
			{
				...basicCardData,
				form: 'headword',
				example: 'example2'
			}
		]);
	});

	it('composes correct ankiCards from single exampleGroup', () => {
		const senseData = {
			...basicSenseData,
			exampleGroups: [
				{
					form: 'form',
					examples: ['example']
				}
			]
		};

		expect(
			ankifySenseData({headword, pronunciation}, senseData)
		).toEqual([
			{
				...basicCardData,
				form: 'form',
				example: 'example'
			}
		]);
	});

	it('composes correct ankiCards from several exampleGroups', () => {
		const senseData = {
			...basicSenseData,
			exampleGroups: [
				{
					form: 'form1',
					examples: ['example11', 'example12']
				},
				{
					form: 'form2',
					examples: ['example2']
				}
			]
		};

		expect(
			ankifySenseData({headword, pronunciation}, senseData)
		).toEqual([
			{
				...basicCardData,
				form: 'form1',
				example: 'example11'
			},
			{
				...basicCardData,
				form: 'form1',
				example: 'example12'
			},
			{
				...basicCardData,
				form: 'form2',
				example: 'example2'
			}
		]);
	});

	it('composes correct ankiCards from subsenses', () => {
		const senseData = {
			...basicSenseData,
			subsenses: [
				{
					...basicSenseData,
					examples: ['example1']
				},
				{
					...basicSenseData,
					examples: ['example2']
				}
			]
		};

		expect(
			ankifySenseData({headword, pronunciation}, senseData)
		).toEqual([
			{
				...basicCardData,
				form: 'headword',
				example: 'example1'
			},
			{
				...basicCardData,
				form: 'headword',
				example: 'example2'
			}
		]);
	});

	it('composes correct ankiCards from examples, exampleGroups and subsenses', () => {
		const senseData = {
			...basicSenseData,
			examples: ['example1', 'example2'],
			exampleGroups: [
				{
					form: 'form3',
					examples: ['example31', 'example32']
				},
				{
					form: 'form4',
					examples: ['example4']
				}
			],
			subsenses: [
				{
					...basicSenseData,
					examples: ['example5']
				},
				{
					...basicSenseData,
					examples: ['example6']
				}
			]
		};

		expect(
			ankifySenseData({headword, pronunciation}, senseData)
		).toEqual([
			{
				...basicCardData,
				form: 'headword',
				example: 'example1'
			},
			{
				...basicCardData,
				form: 'headword',
				example: 'example2'
			},
			{
				...basicCardData,
				form: 'form3',
				example: 'example31'
			},
			{
				...basicCardData,
				form: 'form3',
				example: 'example32'
			},
			{
				...basicCardData,
				form: 'form4',
				example: 'example4'
			},
			{
				...basicCardData,
				form: 'headword',
				example: 'example5'
			},
			{
				...basicCardData,
				form: 'headword',
				example: 'example6'
			}
		]);
	});

	it('composes correct ankiCards if there are no examples, exampleGroups and subsenses', () => {
		const senseData = {
			...basicSenseData,
		};

		expect(
			ankifySenseData({headword, pronunciation}, senseData)
		).toEqual([
			{
				situation: 'situation',
				form: 'headword',
				pronunciation: 'pronunciation',
				definition: 'definition',
				synonym: 'synonym',
				antonym: 'antonym'
			}
		]);
	});
});
