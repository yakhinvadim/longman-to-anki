import * as R from 'ramda'
import makeCard from './makeCard'

const example = 'example'
const situation = 'situation'
const geography = 'geography'
const form = 'form'
const pronunciation = 'pronunciation'
const definition = 'definition'
const synonym = 'synonym'
const antonym = 'antonym'

const join = R.join('')

describe('makeCard', () => {
    it('make correct card if example passed (minimum card parts)', () => {
        expect(makeCard({ example, definition, form })).toBe(
            join([
                `<span class="lta-example">example</span>`,
                `<br><br>`,
                `<span class="lta-form">form</span>`,
                `#`,
                `<span class="lta-definition">definition</span>`
            ])
        )
    })

    it('make correct card if example is passed (maximum card parts)', () => {
        expect(
            makeCard({
                example,
                situation,
                geography,
                form,
                pronunciation,
                definition,
                synonym,
                antonym
            })
        ).toBe(
            join([
                `<span class="lta-example">example</span>`,
                `<br><span class="lta-situation">(situation)</span>`,
                `<br><span class="lta-geography">(geography)</span>`,
                `<br><br>`,
                `<span class="lta-form">form</span>`,
                `<br><span class="lta-pronunciation">[pronunciation]</span>`,
                `#`,
                `<span class="lta-definition">definition</span>`,
                `<br><span class="lta-synonym">(synonym: synonym)</span>`,
                `<br><span class="lta-antonym">(antonym: antonym)</span>`
            ])
        )
    })

    it('make correct card if no example passed (minimum card parts)', () => {
        expect(makeCard({ definition, form })).toBe(
            join([
                `<span class="lta-definition">definition</span>`,
                `#`,
                `<span class="lta-form">form</span>`
            ])
        )
    })

    it('make correct card if no example passed (maximum card parts)', () => {
        expect(
            makeCard({
                situation,
                form,
                geography,
                pronunciation,
                definition,
                synonym,
                antonym
            })
        ).toBe(
            join([
                `<span class="lta-definition">definition</span>`,
                `<br><span class="lta-synonym">(synonym: synonym)</span>`,
                `<br><span class="lta-antonym">(antonym: antonym)</span>`,
                `<br><span class="lta-situation">(situation)</span>`,
                `<br><span class="lta-geography">(geography)</span>`,
                `#`,
                `<span class="lta-form">form</span>`,
                `<br><span class="lta-pronunciation">[pronunciation]</span>`
            ])
        )
    })
})
