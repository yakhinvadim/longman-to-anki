import R from 'ramda';
import splitBySelector from '../../utils/splitBySelector/splitBySelector';
import cheerify from '../../utils/cheerify/cheerify';

const getDefinition =
	R.pipe(
		R.map(R.pipe(
			cheerify,
			R.invoker(0, 'text'),
			R.trim
		)),
		R.head
	);

const extractDefinition = senseMarkup => {
	const definition = R.pipe(
		splitBySelector({ selector: '.DEF', onlyChildren: true }),
		R.ifElse(R.isEmpty, R.always(''), getDefinition)
	)(senseMarkup);

	return definition;
}

export default extractDefinition;
