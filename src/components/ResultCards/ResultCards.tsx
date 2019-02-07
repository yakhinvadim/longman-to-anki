import React, { PureComponent } from 'react'
import WordsListItem from '../WordsListItem/WordsListItem'

import { WordFetchStatusOrCardsData } from '../../types.d'

interface Props {
    words: string[]
    wordsFetchStatusOrCardsData: {
        [key: string]: WordFetchStatusOrCardsData
    }
    onDeleteButtonClick: (word: string) => (e: React.MouseEvent) => void
}

export default class ResultCards extends PureComponent<Props> {
    renderWord = (word: string) => (
        <WordsListItem
            key={word}
            fetchStatusOrCardData={this.props.wordsFetchStatusOrCardsData[word]}
            word={word}
            onDeleteButtonClick={this.props.onDeleteButtonClick}
        />
    )

    render() {
        return <>{this.props.words.map(this.renderWord)}</>
    }
}
