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

import assertUnreachable from '../../utils/assertUnreachable/assertUnreachable'

import {
    WordIsLoading,
    WordFetchError,
    CardData,
    WordFetchResult
} from '../../types.d'

import './WordsListItem.css'

interface Props {
    word: string
    fetchStatusOrCardData: WordFetchResult
    onDeleteButtonClick: (word: string) => (e: React.MouseEvent) => void
}

export default class WordsListItem extends PureComponent<Props> {
    renderRow = (cardData: CardData) => (
        <TableRow key={cardData.example + cardData.definition}>
            <TableCell className="WordsListItem__tableCell">
                {cardData.form}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.example || '—'}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.definition}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.pronunciation || '—'}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.partOfSpeech || '—'}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.situation || '—'}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.geography || '—'}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.synonym || '—'}
            </TableCell>
            <TableCell className="WordsListItem__tableCell">
                {cardData.antonym || '—'}
            </TableCell>
        </TableRow>
    )

    renderTable = (cardsData: CardData[]) => (
        <div className="WordsListItem__tableWrapper">
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Form
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Example
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Definition
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Pronunciation
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Part of speech
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Situation
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Geography
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Synonym
                        </TableCell>
                        <TableCell className="WordsListItem__tableHeadCell">
                            Antonym
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{cardsData.map(this.renderRow)}</TableBody>
            </Table>
        </div>
    )

    renderDeleteButton = (word: string) => (
        <IconButton
            className="WordsListItem__delete"
            onClick={this.props.onDeleteButtonClick(word)}
            data-qa="words-list-item__delete"
        >
            <DeleteIcon />
        </IconButton>
    )

    renderFetchedWord = (cardsData: CardData[]) => (
        <ExpansionPanel
            className="WordsListItem__listItem"
            key={`${cardsData[0].headword} loaded`}
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
                            {cardsData[0].frequency}
                        </div>
                    </Tooltip>
                    <div className="WordsListItem__word">
                        <span data-qa="words-list-item__fetched-word">
                            {cardsData[0].headword}
                        </span>
                        &nbsp;
                        <span className="WordsListItem__counter">
                            ({cardsData.length})
                        </span>
                    </div>
                    <div className="WordsListItem__description">
                        {cardsData[0].definition}
                    </div>
                    {this.renderDeleteButton(this.props.word)}
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {this.renderTable(cardsData)}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )

    renderLoadingWord = () => (
        <ExpansionPanel
            className="WordsListItem__listItem"
            key={`${this.props.word} load`}
        >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className="WordsListItem__header">
                    <div className="WordsListItem__icon">
                        <CircularProgress size={24} thickness={2} />
                    </div>
                    <div
                        className="WordsListItem__word"
                        data-qa="words-list-item__loading-word"
                    >
                        {this.props.word}
                    </div>
                    <div className="WordsListItem__description">...</div>
                    {this.renderDeleteButton(this.props.word)}
                </div>
            </ExpansionPanelSummary>
        </ExpansionPanel>
    )

    renderFailedWord = (
        word: string,
        icon: JSX.Element,
        description: string
    ) => (
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

    renderOfflineWord = () =>
        this.renderFailedWord(
            this.props.word,
            <CloudOff />,
            'No internet connection. The word will be loaded when you are back online'
        )

    renderNotFoundWord = () =>
        this.renderFailedWord(this.props.word, <Clear />, 'Word not found')

    renderNoCardsWord = () =>
        this.renderFailedWord(
            this.props.word,
            <Clear />,
            'Word exists, but cards not found (we do not make cards from Business Dictionary)'
        )

    render() {
        const { fetchStatusOrCardData } = this.props

        if (fetchStatusOrCardData === WordIsLoading) {
            return this.renderLoadingWord()
        } else if (fetchStatusOrCardData === WordFetchError.Offline) {
            return this.renderOfflineWord()
        } else if (fetchStatusOrCardData === WordFetchError.NotFound) {
            return this.renderNotFoundWord()
        } else if (Array.isArray(fetchStatusOrCardData)) {
            if (fetchStatusOrCardData.length === 0) {
                return this.renderNoCardsWord()
            } else {
                return this.renderFetchedWord(fetchStatusOrCardData)
            }
        } else {
            assertUnreachable(fetchStatusOrCardData)
        }
    }
}
