import R from 'ramda';
import { ankifyWordData } from './ankifyWordData';

const join = R.join('\n');
const fakeAnkifyEntryData = ({ headword, pronunciation }) => entryData =>
  `${entryData} ${headword} ${pronunciation}`;
  
describe('ankifyWordData', () => {
  it('composes correct ankiCards ', () => {
    const wordData = {
      headword: 'headword',
      pronunciation: 'pronunciation',
      entries: ['entry1', 'entry2']
    };

    expect(
      ankifyWordData(fakeAnkifyEntryData, wordData)
    ).toBe(join([
      'entry1 headword pronunciation',
      'entry2 headword pronunciation'
    ]));
  });
});
