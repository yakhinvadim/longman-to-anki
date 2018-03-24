import SvgIcon from 'material-ui-next/SvgIcon'

// Tells `material-ui-icons` to use `material-ui-next/SvgIcon` module
// instead of `material-ui/SvgIcon`.
global.__MUI_SvgIcon__ = SvgIcon
/* eslint-disable import/first */
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { ListItem } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Delete from 'material-ui-icons/Delete'
import Clear from 'material-ui-icons/Clear'
import IconButton from 'material-ui/IconButton'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
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

    renderRow = card =>
        <TableRow key={card.example + card.definition} selectable={false}>
            <TableRowColumn className="WordsListItem__tableColumn">
                {card.form}
            </TableRowColumn>
            <TableRowColumn className="WordsListItem__tableColumn">
                {card.example || '—'}
            </TableRowColumn>
            <TableRowColumn className="WordsListItem__tableColumn">
                {card.definition}
            </TableRowColumn>
        </TableRow>

    renderTable = arr =>
        <ListItem disabled style={{ padding: 0, margin: 0 }} key={1}>
            <Paper className="WordsListItem__tableWrapper">
                <Table>
                    <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>Form</TableHeaderColumn>
                            <TableHeaderColumn>Example</TableHeaderColumn>
                            <TableHeaderColumn>Definition</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {arr.map(this.renderRow)}
                    </TableBody>
                </Table>
            </Paper>
        </ListItem>

    renderDeleteButton = word =>
        <IconButton
            className="WordsListItem__listItemDeleteButton"
            onClick={this.props.onDeleteButtonClick(word)}
        >
            <Delete />
        </IconButton>

    renderFetchedWord = cards =>
        <ListItem
            className="WordsListItem__listItem"
            key={`${cards[0].headword} loaded`}
            primaryText={
                <div className="WordsListItem__listItemHeader">
                    <div
                        className="WordsListItem__listItemFrequency"
                        title={frequencyTooltip}
                    >
                        {cards[0].frequency}
                    </div>
                    <div className="WordsListItem__listItemWord">
                        <span>{cards[0].headword}</span>{' '}
                        <span className="WordsListItem__listItemCounter">
                            ({cards.length})
                        </span>
                    </div>
                    <div className="WordsListItem__listItemDefinition">
                        {cards[0].definition}
                    </div>
                </div>
            }
            rightIconButton={this.renderDeleteButton(cards[0].headword)}
            primaryTogglesNestedList
            nestedItems={[this.renderTable(cards)]}
        />

    renderLoadingWord = word =>
        <ListItem
            className="WordsListItem__listItem"
            key={`${word} load`}
            leftIcon={<CircularProgress size={24} thickness={2} />}
            primaryText={
                <div className="WordsListItem__listItemHeader">
                    <div className="WordsListItem__listItemWord">{word}</div>
                    <div className="WordsListItem__listItemDefinition">...</div>
                </div>
            }
            rightIconButton={this.renderDeleteButton(word)}
        />

    renderFailedWord = (word, reason) =>
        <ListItem
            className="WordsListItem__listItem"
            key={`${word} fail`}
            leftIcon={<Clear />}
            primaryText={
                <div className="WordsListItem__listItemHeader">
                    <div className="WordsListItem__listItemWord">{word}</div>
                    <div className="WordsListItem__listItemDefinition">
                        {reason}
                    </div>
                </div>
            }
            rightIconButton={this.renderDeleteButton(word)}
        />

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
