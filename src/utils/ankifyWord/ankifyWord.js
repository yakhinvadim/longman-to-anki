import R from 'ramda';
import ankifyEntry from './helpers/ankifyEntry/ankifyEntry.js';

export default function ankifyWord(word) {
  const cards = R.pipe(
    R.prop('entries'),
    R.map(ankifyEntry(word.headword)),
    R.join('\n')
  )(word);

  return cards;

  /*
    a typical card looks like this:


    FRONT SIDE

    She seemed rather struck on Vincent                    <-- example

    be struck on somebody/something                        <-- form


    BACK SIDE

    to think that someone or something is very good        <-- definition

  */
}
