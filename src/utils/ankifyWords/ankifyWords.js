import R from 'ramda';
import ankifyWordData from '../ankifyWordData/ankifyWordData';
import composeWordData from '../composeWordData/composeWordData';
import wordsToQueries from '../wordsToQueries/wordsToQueries';

const fetchText = R.pipeP(fetch, R.invoker(0, 'text'));
const markupToAnkiCard = R.pipe(composeWordData, ankifyWordData);

export default function ankifyWords(words) {
  const queries = wordsToQueries(words);

  const ankiCards =
    Promise.all(
      R.map(fetchText)(queries)
    )
      .then(R.pipe(
        R.map(markupToAnkiCard),
        R.join('\n')
      ))
      .catch(console.log);

  return ankiCards;
}
