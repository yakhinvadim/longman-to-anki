import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import WordsListItem from '../WordsListItem/WordsListItem'

export default class ResultCards extends PureComponent {
	static propTypes = {
		words: PropTypes.array.isRequired,
		wordsCards: PropTypes.object.isRequired,
		onDeleteButtonClick: PropTypes.func.isRequired
	}

	renderWord = word => (
		<WordsListItem
			key={word}
			cards={this.props.wordsCards[word]}
			word={word}
			onDeleteButtonClick={this.props.onDeleteButtonClick}
		/>
	)

	render() {
		return <div>{this.props.words.map(this.renderWord)}</div>
	}
}
