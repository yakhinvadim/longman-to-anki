import R from 'ramda';
import ankifyWordData from '../ankifyWordData/ankifyWordData';
import composeWordData from '../composeWordData/composeWordData';
import wordsToQueries from '../wordsToQueries/wordsToQueries';

export default function ankifyWords(words) {
  const queries = wordsToQueries(words);

  const queryToMarkup = R.pipeP(
    fetch,
    resp => resp.text()
  );

  const markupToAnkiCard = R.pipe(
    composeWordData,
    ankifyWordData
  );

  const ankiCards =
    Promise.all( R.map(queryToMarkup)(queries) )
      .then(R.pipe(
        R.map(markupToAnkiCard),
        R.join('\n')
      ))
      .catch(console.log);

  return ankiCards;
}
