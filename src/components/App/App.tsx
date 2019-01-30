import React from 'react'
import { saveAs } from 'file-saver'
import GithubCorner from 'react-github-corner'
import { Detector } from 'react-detect-offline'
import uniq from 'lodash/uniq'

import Grid from '@material-ui/core/Grid'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeCard from '../../core/makeCard/makeCard'

import splitByWord from '../../utils/splitByWord/splitByWord'
import maybePluralize from '../../utils/maybePluralize/maybePluralize'
import wordToData from '../../utils/wordToData/wordToData'
import assertUnreachable from '../../utils/assertUnreachable/assertUnreachable'

import Header from '../Header/Header'
import DownloadButton from '../DownloadButton/DownloadButton'
import ResultCards from '../ResultCards/ResultCards'
import UserWords from '../UserWords/UserWords'
import DeckName from '../DeckName/DeckName'

import { WordIsLoading, WordFetchError, CardData } from '../../types.d'

import './App.css'

const template = {
    css: `
			.card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }
			.lta-example { font-style: italic; } 
			.lta-form { font-weight: bold; }
		`
}

interface State {
    words: string[]
    inputValue: string
    wordsFetchStatusOrCardsData: {
        [key: string]: WordIsLoading | WordFetchError | CardData[]
    }
    deckName: string
    isDeckBeingDownloaded: boolean
}

export default class App extends React.Component<{}, State> {
    state: State = {
        words: [],
        inputValue: '',
        wordsFetchStatusOrCardsData: {},
        deckName: 'English words',
        isDeckBeingDownloaded: false
    }

    componentDidMount() {
        if (localStorage.state) {
            try {
                this.setState(JSON.parse(localStorage.state), () => {
                    if (navigator.onLine) {
                        this.handleOnline()
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }

        window.addEventListener('online', this.handleOnline)
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.handleOnline)
    }

    handleOnline = () => {
        this.state.words.forEach(word => {
            if (this.state.wordsFetchStatusOrCardsData[word] === 'offline') {
                this.downloadAndSaveWordData(word)
            }
        })
    }

    componentDidUpdate() {
        localStorage.state = JSON.stringify(this.state)
    }

    handleDeckNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            deckName: event.target.value
        })
    }

    handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleDeleteButtonClick = (wordToDelete: string) => (
        e: React.MouseEvent
    ) => {
        this.setState(prevState => {
            const newWordsFetchStatusOrCardsData = {
                ...prevState.wordsFetchStatusOrCardsData
            }
            delete newWordsFetchStatusOrCardsData[wordToDelete]

            return {
                words: prevState.words.filter(word => word !== wordToDelete),
                wordsFetchStatusOrCardsData: newWordsFetchStatusOrCardsData
            }
        })
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (this.state.inputValue === '') {
            return
        }

        const isMultilineInputValue = /\n/.test(this.state.inputValue)
        const newWords = isMultilineInputValue
            ? splitByWord(this.state.inputValue)
            : [this.state.inputValue]

        const newWordsFetchStatusOrCardsData = {
            ...this.state.wordsFetchStatusOrCardsData
        }

        newWords.forEach(word => {
            newWordsFetchStatusOrCardsData[word] = WordIsLoading
        })

        this.setState(
            prevState => ({
                words: uniq([...newWords, ...prevState.words]),
                inputValue: '',
                wordsFetchStatusOrCardsData: newWordsFetchStatusOrCardsData
            }),
            () => {
                this.state.words.map(this.downloadAndSaveWordData)
            }
        )
    }

    downloadAndSaveWordData = (word: string) => {
        const cardsAreAlreadyDownloaded = Array.isArray(
            this.state.wordsFetchStatusOrCardsData[word]
        )
        const wordIsAlreadyNotFound =
            this.state.wordsFetchStatusOrCardsData[word] ===
            WordFetchError.NotFound

        if (cardsAreAlreadyDownloaded || wordIsAlreadyNotFound) {
            return
        }

        this.setState(
            prevState => ({
                wordsFetchStatusOrCardsData: {
                    ...prevState.wordsFetchStatusOrCardsData,
                    [word]: WordIsLoading
                }
            }),
            async () => {
                const wordData = await wordToData(word)

                if (wordData.status === WordFetchError.Offline) {
                    this.setState(prevState => ({
                        wordsFetchStatusOrCardsData: {
                            ...prevState.wordsFetchStatusOrCardsData,
                            [word]: WordFetchError.Offline
                        }
                    }))
                } else if (wordData.status === WordFetchError.NotFound) {
                    this.setState(prevState => ({
                        wordsFetchStatusOrCardsData: {
                            ...prevState.wordsFetchStatusOrCardsData,
                            [word]: WordFetchError.NotFound
                        }
                    }))
                } else if (wordData.payload) {
                    this.setState(prevState => ({
                        wordsFetchStatusOrCardsData: {
                            ...prevState.wordsFetchStatusOrCardsData,
                            [wordData.payload.headword]: normalizeWordData(
                                wordData.payload
                            )
                        },
                        words: prevState.words.map(item =>
                            item === word ? wordData.payload.headword : item
                        )
                    }))
                } else {
                    assertUnreachable(wordData.status)
                }
            }
        )
    }

    handleDownload = (event: React.MouseEvent) => {
        event.preventDefault()

        const cardsArr = this.state.words
            .reverse()
            .map(word => this.state.wordsFetchStatusOrCardsData[word])
            .filter(Array.isArray)
            .reduce(
                (allCardsData, currentWordCardsData) =>
                    currentWordCardsData
                        ? allCardsData.concat(...currentWordCardsData)
                        : allCardsData,
                []
            )
            .map(makeCard)

        this.setState(
            {
                isDeckBeingDownloaded: true
            },
            () => {
                fetch('https://micro-anki-yakhinvadim.now.sh/', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        cards: cardsArr,
                        deckName: this.state.deckName,
                        template: template
                    })
                })
                    .then(res => res.blob())
                    .then(blob => saveAs(blob, `${this.state.deckName}.apkg`))
                    .then(() => {
                        this.setState({
                            isDeckBeingDownloaded: false
                        })
                    })
                    .catch(console.error)
            }
        )
    }

    handleEnterPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault()
            this.handleSubmit(event)
        }
    }

    render() {
        const wordsTotalCount = this.state.words.length
        const cardsTotalCount = Object.values(
            this.state.wordsFetchStatusOrCardsData
        )
            .filter(Array.isArray)
            .reduce((totalCardsCount, currentWordCards) => {
                return (
                    totalCardsCount +
                    (currentWordCards ? currentWordCards.length : 0)
                )
            }, 0)

        const wordsTotal = maybePluralize(wordsTotalCount, 'word')
        const cardsTotal = maybePluralize(cardsTotalCount, 'card')

        const totals = `${wordsTotal}, ${cardsTotal}`

        return (
            <div className="App">
                <GithubCorner
                    href="https://github.com/yakhinvadim/longman-to-anki"
                    bannerColor="#3f51b5"
                />

                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>

                    <Grid item xs={12}>
                        <form onSubmit={this.handleSubmit}>
                            <UserWords
                                value={this.state.inputValue}
                                onChange={this.handleInputChange}
                                onKeyDown={this.handleEnterPress}
                            />
                        </form>
                    </Grid>

                    <Grid item xs={12}>
                        <ResultCards
                            words={this.state.words}
                            wordsFetchStatusOrCardsData={
                                this.state.wordsFetchStatusOrCardsData
                            }
                            onDeleteButtonClick={this.handleDeleteButtonClick}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <DeckName
                            value={this.state.deckName}
                            onChange={this.handleDeckNameChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <div className="App__download-section">
                            <span className="App__total">{totals}</span>
                            <Detector
                                polling={false}
                                render={({ online }: { online: boolean }) => (
                                    <DownloadButton
                                        onClick={this.handleDownload}
                                        disabled={!cardsTotalCount}
                                        isOnline={online}
                                        isLoading={
                                            this.state.isDeckBeingDownloaded
                                        }
                                    />
                                )}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
