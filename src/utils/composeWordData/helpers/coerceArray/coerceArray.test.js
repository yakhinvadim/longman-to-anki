import coerceArray from './coerceArray.js';

describe('coerceArray', () => {
  it('wraps string', () => {
    expect(
      coerceArray('foo')
    ).toEqual(['foo'])
  });

  it('wraps empty string', () => {
    expect(
      coerceArray('')
    ).toEqual([''])
  });

  it('wraps object', () => {
    expect(
      coerceArray({})
    ).toEqual([{}])
  });

  it('wraps undefined', () => {
    expect(
      coerceArray(undefined)
    ).toEqual([undefined])
  });

  it('wraps null', () => {
    expect(
      coerceArray(null)
    ).toEqual([null])
  });

  it('doesn\'t wrap array', () => {
    expect(
      coerceArray(['foo'])
    ).toEqual(['foo'])
  });
});
