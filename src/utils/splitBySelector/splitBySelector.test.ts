import splitBySelector from './splitBySelector'

const markup = `
	<li class="children descendant"><div class="descendant">d1</div></li>
	<li class="children descendant">c2</li>
	<li class="children descendant children_last">c3</li>
`

describe('splitBySelector', () => {
    it('splits correctly if several elements satisfy selector', () => {
        expect(splitBySelector({ selector: '.children' })(markup)).toEqual([
            '<div class="descendant">d1</div>',
            'c2',
            'c3'
        ])
    })

    it('splits correctly if only one element satisfies selector', () => {
        expect(splitBySelector({ selector: '.children_last' })(markup)).toEqual(
            ['c3']
        )
    })

    it('splits correctly if only onlyChildren parameter passed', () => {
        expect(
            splitBySelector({ selector: '.descendant', onlyChildren: true })(
                markup
            )
        ).toEqual(['<div class="descendant">d1</div>', 'c2', 'c3'])
    })
})
