import extractForm from './extractForm'
import exampleGroupMarkup from '../../mocks/wordSet-entry1-sense5-exampleGroup'
import exampleGroupMarkupWithLinkword from '../../mocks/wordSet-entry1-sense6-exampleGroup2'

// TODO add tests for all classes

describe('extractForm', () => {
    it('extracts correct form', () => {
        expect(extractForm(exampleGroupMarkup)).toEqual(
            'set the pattern/tone/trend etc (for something)'
        )
    })

    it('extracts correct form if there is linkword', () => {
        expect(extractForm(exampleGroupMarkupWithLinkword)).toEqual(
            'set something on fire/alight/ablaze (also set fire to something)'
        )
    })
})
