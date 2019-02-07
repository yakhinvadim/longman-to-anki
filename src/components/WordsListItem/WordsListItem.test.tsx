import React from 'react'
import WordsListItem from './WordsListItem'
import Enzyme from 'enzyme'
import { WordIsLoading } from '../../types.d'

it('renders without crashing', () => {
    Enzyme.shallow(
        <WordsListItem
            word="word"
            onDeleteButtonClick={() => () => {}}
            fetchStatusOrCardData={WordIsLoading}
        />
    )
})
