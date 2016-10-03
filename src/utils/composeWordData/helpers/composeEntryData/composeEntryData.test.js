import composeEntryData from './composeEntryData.js';
import set from '../../mocks/set';

describe('composeEntryData', () => {
  it('EntryData contains senses', () => {
    expect(
      composeEntryData(set.entriesMarkup[0]).senses
    ).toBeDefined();
  });
});
