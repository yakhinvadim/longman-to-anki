import extractExamples from '../extractExamples/extractExamples'
import extractForm from '../extractForm/extractForm'

const composeExampleGroupData = (exampleGroupMarkup: string) => {
    const form = extractForm(exampleGroupMarkup)
    const examples = extractExamples(exampleGroupMarkup)

    const exampleGroupData = {
        form,
        examples
    }

    return exampleGroupData
}

export default composeExampleGroupData
