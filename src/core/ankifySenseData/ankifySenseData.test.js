import R from 'ramda';
import { ankifySenseData } from './ankifySenseData';

const join = R.join('\n');
const fakeMakeCard = ({ example = '', situation = '', form = '', pronunciation = '', definition = '', synonym = '', antonym = '' }) =>
	`${example} ${situation} ${form} ${pronunciation} ${definition} ${synonym} ${antonym}`;

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

describe('ankifySenseData', () => {
	it('composes correct ankiCards from single example', () => {
		const senseData = {
			...basicSenseData,
			examples: ['example']
		};

		expect(
			ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
		).toEqual(
			'example situation headword pronunciation definition synonym antonym'
		);
	});

	it('composes correct ankiCards from several examples', () => {
		const senseData = {
			...basicSenseData,
			examples: ['example1', 'example2']
		};

		expect(
			ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
		).toEqual(
			join([
				'example1 situation headword pronunciation definition synonym antonym',
				'example2 situation headword pronunciation definition synonym antonym'
			]
		));
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
			ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
		).toEqual(
			'example situation form pronunciation definition synonym antonym'
		);
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
			ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
		).toEqual(
			join([
				'example11 situation form1 pronunciation definition synonym antonym',
				'example12 situation form1 pronunciation definition synonym antonym',
				'example2 situation form2 pronunciation definition synonym antonym'
			])
		);
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
			ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
		).toEqual(
			join([
				'example1 situation headword pronunciation definition synonym antonym',
				'example2 situation headword pronunciation definition synonym antonym'
			])
		);
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
			ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
		).toEqual(
			join([
				'example1 situation headword pronunciation definition synonym antonym',
				'example2 situation headword pronunciation definition synonym antonym',
				'example31 situation form3 pronunciation definition synonym antonym',
				'example32 situation form3 pronunciation definition synonym antonym',
				'example4 situation form4 pronunciation definition synonym antonym',
				'example5 situation headword pronunciation definition synonym antonym',
				'example6 situation headword pronunciation definition synonym antonym'
			])
		);
	});

	it('composes correct ankiCards if there are no examples, exampleGroups and subsenses', () => {
		const senseData = {
			...basicSenseData,
		};

		expect(
			ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
		).toEqual(
			' situation headword pronunciation definition synonym antonym'
		);
	});
});
