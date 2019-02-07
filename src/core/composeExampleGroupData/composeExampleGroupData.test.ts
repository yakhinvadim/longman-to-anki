import composeExampleGroupData from './composeExampleGroupData'
import exampleGroupMarkup from '../../mocks/wordSet-entry1-sense5-exampleGroup'

describe('composeExampleGroupData', () => {
    it('exampleGroupData contains form', () => {
        expect(composeExampleGroupData(exampleGroupMarkup).form).toBeDefined()
    })

    it('exampleGroupData contains examples', () => {
        expect(
            composeExampleGroupData(exampleGroupMarkup).examples
        ).toBeDefined()
    })
})
