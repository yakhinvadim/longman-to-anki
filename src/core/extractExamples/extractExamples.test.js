import extractExamples from './extractExamples';
import set from '../../mocks/set';
import exampleGroupMarkup from '../../mocks/wordSet-entry1-sense5-exampleGroup'

describe('extractExamples', () => {
	it('extracts correct examples from sense markup', () => {
		expect(
			extractExamples(set.sensesMarkup1[3])
		).toEqual([
			'It is important that parents set an example.',
			'The outcome of the case will set a legal precedent.',
			'His photographs set the standard for landscapes.',
			'Freud’s views on sexuality set the agenda for much of the century.'
		])
	});

	it('extracts correct examples from example group markup', () => {
		expect(
			extractExamples(exampleGroupMarkup)
		).toEqual([
			'Art and literature flourished and this set the pattern for the whole of Europe.',
			'The prime minister’s fierce speech set the tone for the rest of the conference.'
		])
	});
});
