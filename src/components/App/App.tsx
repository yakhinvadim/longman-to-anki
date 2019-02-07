import React from 'react'
import uniq from 'lodash/uniq'

import Grid from '@material-ui/core/Grid'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeCards from '../../utils/makeCards/makeCards'

import splitByWord from '../../utils/splitByWord/splitByWord'
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

    componentDidUpdate() {
        localStorage.state = JSON.stringify(this.state)
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

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleDeckNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            deckName: event.target.value
        })
    }

    handleEnterPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault()
            this.handleSubmit(event)
        }
    }

    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const newWords = splitByWord(this.state.inputValue)
        newWords.forEach(this.downloadAndSaveWordData)

        this.setState({
            words: uniq([...newWords, ...this.state.words]),
            inputValue: ''
        })
    }

    downloadAndSaveWordData = async (word: string) => {
        this.setState(prevState => ({
            wordsFetchStatusOrCardsData: {
                ...prevState.wordsFetchStatusOrCardsData,
                [word]: WordIsLoading
            }
        }))

        const wordData = await wordToData(word)

        this.setState(prevState => ({
            wordsFetchStatusOrCardsData: {
                ...prevState.wordsFetchStatusOrCardsData,
                [word]: wordData.status || normalizeWordData(wordData.payload)
            }
        }))
    }

    handleDeleteButtonClick = (wordToDelete: string) => (
        e: React.MouseEvent
    ) => {
        this.setState(prevState => {
            const wordsFetchStatusOrCardsData = {
                ...prevState.wordsFetchStatusOrCardsData
            }
            delete wordsFetchStatusOrCardsData[wordToDelete]

            return {
                words: prevState.words.filter(word => word !== wordToDelete),
                wordsFetchStatusOrCardsData
            }
        })
    }

    handleDownload = (event: React.MouseEvent) => {
        this.setState({
            isDeckBeingDownloaded: true
        })

        const cards = makeCards(
            this.state.words,
            this.state.wordsFetchStatusOrCardsData
        )

        downloadAndSaveDeck(this.state.deckName, cards)
            .then(() => {
                this.setState({
                    isDeckBeingDownloaded: false
                })
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className="App">
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
