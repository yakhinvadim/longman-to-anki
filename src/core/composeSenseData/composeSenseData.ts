import * as R from 'ramda'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'
import composeExampleGroupData from '../composeExampleGroupData/composeExampleGroupData'
import extractDefinition from '../extractDefinition/extractDefinition'
import {
    extractSynonym,
    extractAntonym
} from '../extractSynonymOrAntonym/extractSynonymOrAntonym'
import extractSituation from '../extractSituation/extractSituation'
import extractGeography from '../extractGeography/extractGeography'
import extractExamples from '../extractExamples/extractExamples'

const composeSenseData = (senseMarkup: string): object => {
    const definition = extractDefinition(senseMarkup)
    const situation = extractSituation(senseMarkup)
    const geography = extractGeography(senseMarkup)
    const synonym = extractSynonym(senseMarkup)
    const antonym = extractAntonym(senseMarkup)
    const examples = extractExamples(senseMarkup)
    const exampleGroups = R.pipe(
        splitBySelector({
            selector: '.ColloExa, .GramExa',
            onlyChildren: true
        }),
        R.map(composeExampleGroupData)
    )(senseMarkup)
    const subsenses = R.pipe(
        splitBySelector({ selector: '.Subsense' }),
        R.map(composeSenseData)
    )(senseMarkup)

    const senseData = {
        definition,
        situation,
        geography,
        synonym,
        antonym,
        examples,
        exampleGroups,
        subsenses
    }

    return senseData
}

export default composeSenseData
