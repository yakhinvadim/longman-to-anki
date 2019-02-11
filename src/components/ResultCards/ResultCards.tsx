import React, { PureComponent } from 'react'
import WordsListItem from '../WordsListItem/WordsListItem'

import { WordFetchResult } from '../../types.d'

interface Props {
    words: string[]
    wordsFetchResult: {
        [key: string]: WordFetchResult
    }
    onDeleteButtonClick: (word: string) => (e: React.MouseEvent) => void
}

export default class ResultCards extends PureComponent<Props> {
    renderWord = (word: string) => (
        <WordsListItem
            key={word}
            fetchStatusOrCardData={this.props.wordsFetchResult[word]}
            word={word}
            onDeleteButtonClick={this.props.onDeleteButtonClick}
        />
    )

    render() {
        return <>{this.props.words.map(this.renderWord)}</>
    }
}
