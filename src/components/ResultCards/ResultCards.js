import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { List } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import WordsListItem from '../WordsListItem/WordsListItem'

export default class ResultCards extends PureComponent {
    static propTypes = {
        words: PropTypes.array.isRequired,
        wordsCards: PropTypes.object.isRequired,
        onDeleteButtonClick: PropTypes.func.isRequired
    }

    renderWord = (word, i, words) =>
        <React.Fragment key={i}>
            <WordsListItem
                cards={this.props.wordsCards[word]}
                word={word}
                onDeleteButtonClick={this.props.onDeleteButtonClick}
            />
            {i < words.length - 1 && <Divider />}
        </React.Fragment>

    render() {
        return (
            <Paper>
                <List style={{ padding: 0 }}>
                    {this.props.words.map(this.renderWord)}
                </List>
            </Paper>
        )
    }
}
