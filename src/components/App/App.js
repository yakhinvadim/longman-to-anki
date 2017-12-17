import React from 'react'
import * as R from 'ramda'
import debounce from 'lodash.debounce'
import AnkiExport from 'anki-apkg-export'
import { saveAs } from 'file-saver'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeCard from '../../core/makeCard/makeCard'

import splitByWord from '../../utils/splitByWord/splitByWord'
import maybePluralize from '../../utils/maybePluralize/maybePluralize'
import wordToData from '../../utils/wordToData/wordToData'
import getDateString from '../../utils/getDateString/getDateString'

import GithubCorner from 'react-github-corner'
import LinearProgress from 'material-ui/LinearProgress'
import Header from '../Header/Header'
import DownloadButton from '../DownloadButton/DownloadButton'
import ResultCards from '../ResultCards/ResultCards'
import UserWords from '../UserWords/UserWords'
import DeckName from '../DeckName/DeckName'

import './App.css'

const sanitizeForFilename = R.pipe(R.replace(/ /g, ''), R.replace(/,/g, '_'))

const template = {
    css: `
			.card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }
			.lta-example { font-style: italic; } 
			.lta-form { font-weight: bold; }
		`
}

export default class App extends React.Component {
    state = {
        inputValue: '',
        wordsDataArr: [],
        deckName: 'English words'
    }

    handleDeckNameChange = event => {
        this.setState({
            deckName: event.target.value
        })
    }

    handleInputChange = async event => {
        const inputValue = event.target.value

        this.setState({
            inputValue
        })

        this.debouncedComposeCards()
    }

    debouncedComposeCards = debounce(() => {
        this.setState({ wordsDataArr: [] })

        const words = splitByWord(this.state.inputValue)

        R.map(wordToData, words).forEach(async (request, i) => {
            const wordData = await request

            this.setState(prevState => {
                const newWordsDataArr = [...prevState.wordsDataArr]
                newWordsDataArr[i] = wordData
                return {
                    wordsDataArr: newWordsDataArr
                }
            })
        })
    }, 500)

    handleDownload = event => {
        event.preventDefault()

        const deck = new AnkiExport(this.state.deckName, template)

        const cardsArr = R.pipe(
            R.filter(Boolean), // reject items from wordsDataArr, which didn't recieve response yet
            R.map(normalizeWordData),
            R.flatten,
            R.reject(R.isEmpty),
            R.map(makeCard)
        )(this.state.wordsDataArr)

        cardsArr.forEach(card => {
            deck.addCard(card.front, card.back)
        })

        deck
            .save()
            .then(file => saveAs(file, `${this.state.deckName}.apkg`))
            .catch(console.error)
    }

    render() {
        const cardsArr = R.pipe(
            R.filter(Boolean), // reject non-existent word items and items, which didn't recieve response yet
            R.map(normalizeWordData),
            R.flatten,
            R.reject(R.isEmpty),
            R.map(makeCard),
            R.map(card => `${card.front}#${card.back}`)
        )(this.state.wordsDataArr)

        const cards = R.join('\n')(cardsArr)

        const wordsTotalNumber = this.state.wordsDataArr.length
        const cardsTotalNumber = cardsArr.length

        const wordsTotal = maybePluralize(wordsTotalNumber, 'word')
        const cardsTotal = maybePluralize(cardsTotalNumber, 'card')

        const totals = `${wordsTotal}, ${cardsTotal}`

        const date = getDateString()

        const wordsAmount = splitByWord(this.state.inputValue).length
        const wordsFetched = R.filter(Boolean)(this.state.wordsDataArr).length

        return (
            <div className="App">
                <GithubCorner
                    href="https://github.com/yakhinvadim/longman-to-anki"
                    bannerColor="#3f51b5"
                />

                <Header />

                <LinearProgress
                    mode="determinate"
                    value={wordsFetched}
                    max={wordsAmount}
                />

                <UserWords
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />

                {cards && <ResultCards value={cards} />}

                <DeckName
                    value={this.state.deckName}
                    onChange={this.handleDeckNameChange}
                />

                <div className="App__download-section">
                    <span className="App__total">
                        {totals}
                    </span>
                    <DownloadButton
                        fileContent={encodeURIComponent(cards)}
                        fileName={`longman-to-anki_${date}_${sanitizeForFilename(
                            totals
                        )}`}
                        onClick={this.handleDownload}
                        disabled={!cards}
                    />
                </div>
            </div>
        )
    }
}
