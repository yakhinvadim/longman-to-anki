import R from 'ramda';
import ankifyWordData from '../ankifyWordData/ankifyWordData';
import composeWordData from '../composeWordData/composeWordData';
import composeQuery from '../composeQuery/composeQuery';

export default function ankifyWords(words) {
  const urls = R.pipe(
    R.split(','),
    R.map(R.pipe(
      R.trim,
      composeQuery
    ))
  )(words);

  const urlsToMarkup = R.map(R.pipeP(
    fetch,
    resp => resp.text()
  ));

  const markupToAnkiCards = R.pipe(
    R.map(R.pipe(
      composeWordData,
      ankifyWordData
    )),
    R.join('\n')
  );

  const ankiCards = 
    Promise.all( urlsToMarkup(urls) )
      .then(markupToAnkiCards)
      .catch(console.log);

  return ankiCards;
}
