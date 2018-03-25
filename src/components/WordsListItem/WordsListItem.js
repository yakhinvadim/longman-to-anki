import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { CircularProgress } from 'material-ui/Progress'
import DeleteIcon from 'material-ui-icons/Delete'
import Clear from 'material-ui-icons/Clear'
import IconButton from 'material-ui/IconButton'
import ExpansionPanel, {
	ExpansionPanelDetails,
	ExpansionPanelSummary
} from 'material-ui/ExpansionPanel'
import Table, {
	TableBody,
	TableHead,
	TableCell,
	TableRow
} from 'material-ui/Table'
import './WordsListItem.css'

const frequencyTooltip = `●●● high frequency words – indicates the top 3000 words
●●○ mid frequency words – indicates the next most important 3000 words 
●○○ lower frequency words – indicates the less frequent yet important 3000 words
○○○ low frequency words – indicates other words`

export default class WordsListItem extends PureComponent {
	static propTypes = {
		word: PropTypes.string.isRequired,
		cards: PropTypes.array,
		onDeleteButtonClick: PropTypes.func.isRequired
	}

	static defaultProps = {
		cards: undefined
	}

	renderRow = card => (
		<TableRow key={card.example + card.definition}>
			<TableCell>{card.form}</TableCell>
			<TableCell>{card.example || '—'}</TableCell>
			<TableCell>{card.definition}</TableCell>
		</TableRow>
	)

	renderTable = arr => (
		<div className="WordsListItem__tableWrapper">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Form</TableCell>
						<TableCell>Example</TableCell>
						<TableCell>Definition</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{arr.map(this.renderRow)}</TableBody>
			</Table>
		</div>
	)

	renderDeleteButton = word => (
		<IconButton
			className="WordsListItem__delete"
			onClick={this.props.onDeleteButtonClick(word)}
		>
			<DeleteIcon />
		</IconButton>
	)

	renderFetchedWord = cards => (
		<ExpansionPanel
			className="WordsListItem__listItem"
			key={`${cards[0].headword} loaded`}
		>
			<ExpansionPanelSummary>
				<div className="WordsListItem__header">
					<div
						className="WordsListItem__icon"
						title={frequencyTooltip}
					>
						{cards[0].frequency}
					</div>
					<div className="WordsListItem__word">
						<span>{cards[0].headword}</span>{' '}
						<span className="WordsListItem__counter">
							({cards.length})
						</span>
					</div>
					<div className="WordsListItem__description">
						{cards[0].definition}
					</div>
					{this.renderDeleteButton(cards[0].headword)}
				</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				{this.renderTable(cards)}
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)

	renderLoadingWord = word => (
		<ExpansionPanel
			className="WordsListItem__listItem"
			key={`${word} load`}
		>
			<ExpansionPanelSummary>
				<div className="WordsListItem__header">
					<div className="WordsListItem__icon">
						<CircularProgress size={24} thickness={2} />
					</div>
					<div className="WordsListItem__word">{word}</div>
					<div className="WordsListItem__description">...</div>
					{this.renderDeleteButton(word)}
				</div>
			</ExpansionPanelSummary>
		</ExpansionPanel>
	)

	renderFailedWord = (word, reason) => (
		<ExpansionPanel
			className="WordsListItem__listItem"
			key={`${word} fail`}
		>
			<ExpansionPanelSummary>
				<div className="WordsListItem__header">
					<div className="WordsListItem__icon">
						<Clear />
					</div>
					<div className="WordsListItem__word">{word}</div>
					<div className="WordsListItem__description">{reason}</div>
					{this.renderDeleteButton(word)}
				</div>
			</ExpansionPanelSummary>
		</ExpansionPanel>
	)

	render() {
		if (this.props.cards === undefined) {
			return this.renderLoadingWord(this.props.word)
		}

		if (this.props.cards === null) {
			return this.renderFailedWord(this.props.word, 'word not found')
		}

		if (this.props.cards.length === 0) {
			return this.renderFailedWord(this.props.word, 'cards not found')
		}

		return this.renderFetchedWord(this.props.cards)
	}
}
