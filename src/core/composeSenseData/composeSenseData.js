import composeExamplesData from '../composeExamplesData/composeExamplesData';
import extractDefinition from '../extractDefinition/extractDefinition';
import extractSynonym from '../extractSynonym/extractSynonym';
import extractAntonym from '../extractAntonym/extractAntonym';
import extractSituation from '../extractSituation/extractSituation';

export default function composeSenseData(senseMarkup) {
  const definition = extractDefinition(senseMarkup);
  const situation = extractSituation(senseMarkup);
  const synonym = extractSynonym(senseMarkup);
  const antonym = extractAntonym(senseMarkup);
  const examples = composeExamplesData(senseMarkup);

  const senseData = {
    definition,
    situation,
    synonym,
    antonym,
    examples
  };

  return senseData;
}
