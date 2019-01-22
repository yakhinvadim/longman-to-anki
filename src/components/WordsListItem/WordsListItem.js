import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'

import DeleteIcon from '@material-ui/icons/Delete'
import Clear from '@material-ui/icons/Clear'
import CloudOff from '@material-ui/icons/CloudOff'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './WordsListItem.css'

export default class WordsListItem extends PureComponent {
    static propTypes = {
        word: PropTypes.string.isRequired,
        cards: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
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
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className="WordsListItem__header">
                    <Tooltip
                        title={
                            <>
                                ●●● – indicates the top 3000 words
                                <br />
                                ●●○ – indicates the next most important 3000
                                words
                                <br />
                                ●○○ – indicates the less frequent yet important
                                3000 words
                                <br />
                                ○○○ – indicates other words
                            </>
                        }
                    >
                        <div className="WordsListItem__icon">
                            {cards[0].frequency}
                        </div>
                    </Tooltip>
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
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
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

    renderFailedWord = (word, icon, description) => (
        <ExpansionPanel
            className="WordsListItem__listItem"
            key={`${word} fail`}
        >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className="WordsListItem__header">
                    <div className="WordsListItem__icon">{icon}</div>
                    <div className="WordsListItem__word">{word}</div>
                    <div className="WordsListItem__description">
                        {description}
                    </div>
                    {this.renderDeleteButton(word)}
                </div>
            </ExpansionPanelSummary>
        </ExpansionPanel>
    )

    render() {
        if (this.props.cards === 'offline') {
            return this.renderFailedWord(
                this.props.word,
                <CloudOff />,
                'No internet connection. The word will be loaded when you are back online'
            )
        }

        if (this.props.cards === undefined) {
            return this.renderLoadingWord(this.props.word)
        }

        if (this.props.cards === 'word not found') {
            return this.renderFailedWord(
                this.props.word,
                <Clear />,
                'Word not found'
            )
        }

        if (this.props.cards.length === 0) {
            return this.renderFailedWord(
                this.props.word,
                <Clear />,
                'Word exists, but cards not found (we do not make cards from Business Dictionary)'
            )
        }

        return this.renderFetchedWord(this.props.cards)
    }
}
