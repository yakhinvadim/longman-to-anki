import extractForm from './extractForm';
import exampleGroupMarkup from '../../mocks/wordSet-entry1-sense5-exampleGroup';

describe('extractForm', () => {
  it('extracts correct form', () => {
    expect(
      extractForm(exampleGroupMarkup)
    ).toEqual('set the pattern/tone/trend etc (for something)')
  });
});
