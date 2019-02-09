import React from 'react'
import ResultCards from './ResultCards'
import Enzyme from 'enzyme'

it('renders without crashing', () => {
    Enzyme.shallow(
        <ResultCards
            words={[]}
            wordsFetchResult={{}}
            onDeleteButtonClick={() => () => {}}
        />
    )
})
