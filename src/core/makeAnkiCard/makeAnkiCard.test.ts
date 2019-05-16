import * as R from 'ramda'
import makeAnkiCard from './makeAnkiCard'

const example = 'example'
const situation = 'situation'
const geography = 'geography'
const form = 'form'
const pronunciation = 'pronunciation'
const partOfSpeech = 'part of speech'
const definition = 'definition'
const synonym = 'synonym'
const antonym = 'antonym'
const headword = "doesn't matter"
const frequency = "doesn't matter"

const join = R.join('')

describe('makeCard', () => {
    it('make correct card if example passed (minimum card parts)', () => {
        expect(
            makeAnkiCard({
                example,
                definition,
                form,
                situation: '',
                geography: '',
                synonym: '',
                antonym: '',
                pronunciation: '',
                partOfSpeech: '',
                headword,
                frequency
            })
        ).toEqual({
            front: join([
                `<span class="lta-example">example</span>`,
                `<br><br>`,
                `<span class="lta-form">form</span>`
            ]),
            back: '<span class="lta-definition">definition</span>'
        })
    })

    it('make correct card if example is passed (maximum card parts)', () => {
        expect(
            makeAnkiCard({
                example,
                situation,
                geography,
                form,
                pronunciation,
                partOfSpeech,
                definition,
                synonym,
                antonym,
                headword,
                frequency
            })
        ).toEqual({
            front: join([
                `<span class="lta-example">example</span>`,
                `<br><span class="lta-situation">(situation)</span>`,
                `<br><span class="lta-geography">(geography)</span>`,
                `<br><br>`,
                `<span class="lta-form">form</span>`,
                `<br><span class="lta-pronunciation">[pronunciation]</span>`
            ]),
            back: join([
                `<span class="lta-definition">definition</span>`,
                `<br><span class="lta-synonym">(synonym: synonym)</span>`,
                `<br><span class="lta-antonym">(antonym: antonym)</span>`
            ])
        })
    })

    it('make correct card if no example passed (minimum card parts)', () => {
        expect(
            makeAnkiCard({
                definition,
                form,
                example: '',
                situation: '',
                geography: '',
                synonym: '',
                antonym: '',
                pronunciation: '',
                partOfSpeech: '',
                headword,
                frequency
            })
        ).toEqual({
            front: '<span class="lta-definition">definition</span>',
            back: '<span class="lta-form">form</span>'
        })
    })

    it('make correct card if no example passed (maximum card parts)', () => {
        expect(
            makeAnkiCard({
                situation,
                form,
                geography,
                pronunciation,
                partOfSpeech,
                definition,
                synonym,
                antonym,
                example: '',
                headword,
                frequency
            })
        ).toEqual({
            front: join([
                `<span class="lta-definition">definition</span>`,
                `<br><span class="lta-synonym">(synonym: synonym)</span>`,
                `<br><span class="lta-antonym">(antonym: antonym)</span>`,
                `<br><span class="lta-situation">(situation)</span>`,
                `<br><span class="lta-geography">(geography)</span>`
            ]),
            back: join([
                `<span class="lta-form">form</span>`,
                `<br><span class="lta-pronunciation">[pronunciation]</span>`
            ])
        })
    })
})
