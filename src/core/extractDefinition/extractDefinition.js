import R from 'ramda';
import splitBySelector from '../../utils/splitBySelector/splitBySelector';
import getCheerioText from '../../helpers/getCheerioText';

const extractDefinition = senseMarkup => {
  const definition = R.pipe(
        splitBySelector({ selector: '.DEF', onlyChildren: true }),
        R.map(R.pipe(
            getCheerioText,
            R.trim
        )),
        R.head
    )(senseMarkup);

  return definition;
}

export default extractDefinition;
