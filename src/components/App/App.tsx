import React from 'react'
import GithubCorner from 'react-github-corner'
import uniq from 'lodash/uniq'

import Grid from '@material-ui/core/Grid'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeCard from '../../core/makeCard/makeCard'

import splitByWord from '../../utils/splitByWord/splitByWord'
import maybePluralize from '../../utils/maybePluralize/maybePluralize'
import wordToData from '../../utils/wordToData/wordToData'
import assertUnreachable from '../../utils/assertUnreachable/assertUnreachable'
import downloadAndSaveDeck from '../../utils/downloadAndSaveDeck/downloadAndSaveDeck'
import getWordsAndCardsCount from '../../utils/getWordsAndCardsCount/getWordsAndCardsCount'

import Header from '../Header/Header'
import DownloadSection from '../DownloadSection/DownloadSection'
import ResultCards from '../ResultCards/ResultCards'
import UserWords from '../UserWords/UserWords'
import DeckName from '../DeckName/DeckName'

import {
    WordIsLoading,
    WordFetchError,
    WordFetchStatusOrCardsData
} from '../../types.d'

import './App.css'

interface State {
    words: string[]
    inputValue: string
    wordsFetchStatusOrCardsData: {
        [key: string]: WordFetchStatusOrCardsData
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
            const newState = JSON.parse(localStorage.state)
            newState.isDeckBeingDownloaded = false

            try {
                this.setState(newState, () => {
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
            if (
                this.state.wordsFetchStatusOrCardsData[word] ===
                WordFetchError.Offline
            ) {
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

        const cards = this.state.words
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
                downloadAndSaveDeck(this.state.deckName, cards)
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
                        <UserWords
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleEnterPress}
                            onSubmit={this.handleSubmit}
                        />
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
                        <DownloadSection
                            onClick={this.handleDownload}
                            isLoading={this.state.isDeckBeingDownloaded}
                            wordsAndCardsCount={getWordsAndCardsCount(
                                this.state.words,
                                this.state.wordsFetchStatusOrCardsData
                            )}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
