import composeDictionaryEntry from './composeDictionaryEntry';
import mocks from './mocks.json';

it('returns correct cards for word "deliberately"', () => {
  expect(
    composeDictionaryEntry(mocks.deliberately.markup)
  ).toEqual(mocks.deliberately.dictionaryEntry)
});

it('returns correct cards for word "bear"', () => {
  expect(
    composeDictionaryEntry(mocks.bear.markup)
  ).toEqual(mocks.bear.dictionaryEntry)
});

it('returns correct cards for word "react"', () => {
  expect(
    composeDictionaryEntry(mocks.react.markup)
  ).toEqual(mocks.react.dictionaryEntry)
});

it('returns correct cards for word "break"', () => {
  expect(
    composeDictionaryEntry(mocks.break.markup)
  ).toEqual(mocks.break.dictionaryEntry)
});
