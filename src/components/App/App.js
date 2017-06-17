import React from 'react'
import R from 'ramda'
import debounce from 'lodash.debounce'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeCard from '../../core/makeCard/makeCard'

import splitByWord from '../../utils/splitByWord/splitByWord'
import maybePluralize from '../../utils/maybePluralize/maybePluralize'
import wordToData from '../../utils/wordToData/wordToData'
import getDateString from '../../utils/getDateString/getDateString'

import LinearProgress from 'material-ui/LinearProgress'
import Header from '../Header/Header'
import ImportOptions from '../ImportOptions/ImportOptions'
import DownloadButton from '../DownloadButton/DownloadButton'
import ResultCards from '../ResultCards/ResultCards'
import UserWords from '../UserWords/UserWords'

import './App.css'

const sanitizeForFilename = R.pipe(R.replace(/ /g, ''), R.replace(/,/g, '_'))

export default class App extends React.Component {
    state = {
        inputValue: '',
        wordsDataArr: [],
        showImportOptions: false
    }

    handleInputChange = async event => {
        const inputValue = event.target.value

        this.setState({
            inputValue
        })

        this.debouncedComposeCards()
    }

    debouncedComposeCards = debounce(() => {
        const words = splitByWord(this.state.inputValue)
        words.map(wordToData).forEach(async (request, i) => {
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

    handleDownload = () => {
        this.setState({
            showImportOptions: true
        })
    }

    render() {
        const cardsArr = R.pipe(
            R.filter(Boolean), // reject items from wordsDataArr, which didn't recieve response yet
            R.map(normalizeWordData),
            R.flatten,
            R.reject(R.isEmpty),
            R.map(makeCard)
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

                {this.state.showImportOptions && <ImportOptions />}
            </div>
        )
    }
}
