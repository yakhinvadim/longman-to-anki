import React, { useState } from 'react'
import uniq from 'lodash/uniq'

import Grid from '@material-ui/core/Grid'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeCards from '../../utils/makeCards/makeCards'
import splitByWord from '../../utils/splitByWord/splitByWord'
import wordToData from '../../utils/wordToData/wordToData'
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

// componentDidMount() {
//     if (localStorage.state) {
//         const newState = JSON.parse(localStorage.state)
//         newState.isDeckBeingDownloaded = false

//         try {
//             this.setState(newState, () => {
//                 if (navigator.onLine) {
//                     this.handleOnline()
//                 }
//             })
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     window.addEventListener('online', this.handleOnline)
// }

// componentWillUnmount() {
//     window.removeEventListener('online', this.handleOnline)
// }

// componentDidUpdate() {
//     localStorage.state = JSON.stringify(this.state)
// }

// handleOnline = () => {
//     this.state.words.forEach(word => {
//         if (
//             this.state.wordsFetchStatusOrCardsData[word] ===
//             WordFetchError.Offline
//         ) {
//             this.downloadAndSaveWordData(word)
//         }
//     })
// }

function App() {
    const [deckName, setDeckName] = useState('English words')
    const [inputValue, setInputValue] = useState('')
    const [words, setWords] = useState([] as string[])
    const [
        wordsFetchStatusOrCardsData,
        setWordsFetchStatusOrCardsData
    ] = useState({} as { [key: string]: WordFetchStatusOrCardsData })
    const [isDeckBeingDownloaded, setIsDeckBeingDownloaded] = useState(false)

    function handleDeckNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDeckName(event.target.value)
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const newWords = splitByWord(inputValue)
        newWords.forEach(downloadAndSaveWordData)

        setInputValue('')
        setWords(uniq([...newWords, ...words]))
    }

    function handleEnterPress(event: React.KeyboardEvent) {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault()
            handleSubmit(event)
        }
    }

    async function downloadAndSaveWordData(word: string) {
        setWordsFetchStatusOrCardsData({
            ...wordsFetchStatusOrCardsData,
            [word]: WordIsLoading
        })

        const wordData = await wordToData(word)

        setWordsFetchStatusOrCardsData({
            ...wordsFetchStatusOrCardsData,
            [word]: wordData.status || normalizeWordData(wordData.payload)
        })
    }

    function handleDeleteButtonClick(wordToDelete: string) {
        return (e: React.MouseEvent) => {
            const newWordsFetchStatusOrCardsData = {
                ...wordsFetchStatusOrCardsData
            }
            delete newWordsFetchStatusOrCardsData[wordToDelete]

            setWordsFetchStatusOrCardsData(newWordsFetchStatusOrCardsData)
            setWords(words.filter(word => word !== wordToDelete))
        }
    }

    function handleDownload(event: React.MouseEvent) {
        setIsDeckBeingDownloaded(true)

        const cards = makeCards(words, wordsFetchStatusOrCardsData)

        downloadAndSaveDeck(deckName, cards)
            .then(() => {
                setIsDeckBeingDownloaded(false)
            })
            .catch(console.error)
    }

    return (
        <div className="App">
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Header />
                </Grid>

                <Grid item xs={12}>
                    <UserWords
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleEnterPress}
                        onSubmit={handleSubmit}
                    />
                </Grid>

                <Grid item xs={12}>
                    <ResultCards
                        words={words}
                        wordsFetchStatusOrCardsData={
                            wordsFetchStatusOrCardsData
                        }
                        onDeleteButtonClick={handleDeleteButtonClick}
                    />
                </Grid>

                <Grid item xs={12}>
                    <DeckName
                        value={deckName}
                        onChange={handleDeckNameChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <DownloadSection
                        onClick={handleDownload}
                        isLoading={isDeckBeingDownloaded}
                        wordsAndCardsCount={getWordsAndCardsCount(
                            words,
                            wordsFetchStatusOrCardsData
                        )}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
