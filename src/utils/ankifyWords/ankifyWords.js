import R from 'ramda';
import ankifyWordData from '../ankifyWordData/ankifyWordData';
import composeWordData from '../composeWordData/composeWordData';
import composeQuery from '../composeQuery/composeQuery';

export default function ankifyWords(words) {
  const wordsArr = words.split(',').map(item => item.trim());
  const urls = wordsArr.map(composeQuery);

  const ankiCards = Promise.all(
    urls.map(
      url => fetch(url).then(res => res.text())
    )
  )
    .then(R.pipe(
      R.map(
        R.pipe(
          composeWordData,
          ankifyWordData
        )
      ),
      R.join('\n')
    ))
    .catch(err => console.log(err));

  return ankiCards;
}
