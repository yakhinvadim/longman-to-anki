import ankifyWords from './ankifyWords';

describe('ankifyWords', () => {
  it('returns correct anki cards for one word input', () => {
    return ankifyWords('deliberately').then(result => {
      expect(result).toEqual(
        'He deliberately upset her.<br><br>deliberately#done in a way that is intended or planned\nHe shook his head slowly and deliberately.<br><br>deliberately#done or said in a slow careful way\n'
      );
    })
  });

  it('returns correct anki cards for two words input', () => {
    return ankifyWords('deliberately, creepy').then(result => {
      expect(result).toEqual(
        'He deliberately upset her.<br><br>deliberately#done in a way that is intended or planned\nHe shook his head slowly and deliberately.<br><br>deliberately#done or said in a slow careful way\n\nThere’s something creepy about the way he looks at me.<br><br>creepy#making you feel nervous and slightly frightened\nThe whole place feels creepy.<br><br>creepy#making you feel nervous and slightly frightened\n'
      );
    })
  });
});
