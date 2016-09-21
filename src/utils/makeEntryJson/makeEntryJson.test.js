import makeEntryJson from './makeEntryJson.js';

describe('makeEntryJson', () => {
  it('throws if no markup was passed as argument', () => {
    expect(() => {
      makeEntryJson();
    }).toThrow();
  });
});
