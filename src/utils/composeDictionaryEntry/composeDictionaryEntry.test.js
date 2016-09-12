import composeDictionaryEntry from './composeDictionaryEntry';
import mocks from './mocks.json';

it('returns correct cards for word "deliberately", having one page on ldoce', () => {
  expect(
    composeDictionaryEntry(mocks.deliberately.markup)
  ).toEqual(mocks.deliberately.result)
});
