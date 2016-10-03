import composeEntryData from './composeEntryData.js';
import set from '../../mocks/set';

describe('composeEntryData', () => {
  it('EntryData contain senses', () => {
    expect(
      composeEntryData(set.entriesMarkup[0]).senses
    ).toBeDefined();
  });
});
