import R from 'ramda';
import ankifyEntryData from './helpers/ankifyEntryData/ankifyEntryData.js';

export default function ankifyWordData(wordData) {
  const cards = R.pipe(
    R.prop('entries'),
    R.map(ankifyEntryData(wordData.headword)),
    R.join('\n')
  )(wordData);

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
