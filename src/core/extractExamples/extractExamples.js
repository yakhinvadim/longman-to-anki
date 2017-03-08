import R from 'ramda';
import cheerify from '../../helpers/cheerify';

const removeGlossary = R.replace(/\(=.*\)/g, '');
const fixNbsp = R.replace(/&nbsp;/g, ' ');
const fixDoubleSpace = R.replace(/ {2}/g, ' ');
const fixSeparatedPeriod = R.replace(/ \./g, '.');

const cleanse = R.pipe(
    removeGlossary,
    fixNbsp,  
    fixDoubleSpace,
    fixSeparatedPeriod,
    R.trim
);

const extractExamples = senseOrExampleGroupMarkup => {
    const $ = cheerify(senseOrExampleGroupMarkup);

    const rawExamplesText = 
        $.root()
            // We intentionally take only first level examples here.
            // Examples, located deeper in DOM tree, will be extracted during another function call
            .children('.EXAMPLE') 
            .map((i, el) => $(el).text())
            .get();
    
    const examples = R.map(cleanse)(rawExamplesText);
    
    return examples;
}

export default extractExamples;
