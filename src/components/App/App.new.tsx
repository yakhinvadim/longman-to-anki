import React, { useState, useCallback, useMemo } from 'react'
import uniq from 'lodash/uniq'

import Grid from '@material-ui/core/Grid'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeCards from '../../utils/makeCards/makeCards'
import splitByWord from '../../utils/splitByWord/splitByWord'
import wordToData from '../../utils/wordToData/wordToData'
import downloadAndSaveDeck from '../../utils/downloadAndSaveDeck/downloadAndSaveDeck'
import getCardsCount from '../../utils/getCardsCount/getCardsCount'

import Header from '../Header/Header'
import DownloadSection from '../DownloadSection/DownloadSection'
import ResultCards from '../ResultCards/ResultCards'
import UserWords from '../UserWords/UserWords'
import DeckName from '../DeckName/DeckName'

import { WordIsLoading, WordFetchResult } from '../../types.d'

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
//             this.state.wordsFetchResult[word] ===
//             WordFetchError.Offline
//         ) {
//             this.downloadAndSaveWordData(word)
//         }
//     })
// }

function App() {
    const [inputValue, setInputValue] = useState('')
    const [words, setWords] = useState([] as string[])
    const [wordsFetchResult, setWordsFetchResult] = useState({} as {
        [key: string]: WordFetchResult
    })
    const [deckName, setDeckName] = useState('English words')
    const [isDeckBeingDownloaded, setIsDeckBeingDownloaded] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleEnterPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault()
            handleSubmit(event)
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const newWords = splitByWord(inputValue)
        newWords.forEach(downloadAndSaveWordData)

        setInputValue('')
        setWords(uniq([...newWords, ...words]))
    }

    const downloadAndSaveWordData = async (word: string) => {
        setWordsFetchResult({
            ...wordsFetchResult,
            [word]: WordIsLoading
        })

        const wordData = await wordToData(word)

        setWordsFetchResult({
            ...wordsFetchResult,
            [word]: wordData.status || normalizeWordData(wordData.payload)
        })
    }

    const handleButtonClick = useCallback(
        (wordToDelete: string) => (e: React.MouseEvent) => {
            const newWordsFetchResult = {
                ...wordsFetchResult
            }
            delete newWordsFetchResult[wordToDelete]

            setWordsFetchResult(newWordsFetchResult)
            setWords(words.filter(word => word !== wordToDelete))
        },
        []
    )

    const handleDeckNameChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setDeckName(event.target.value)
        },
        []
    )

    const cardsCount = useMemo(() => getCardsCount(wordsFetchResult), [
        wordsFetchResult
    ])

    const handleDownload = useCallback((event: React.MouseEvent) => {
        setIsDeckBeingDownloaded(true)

        const cards = makeCards(words, wordsFetchResult)

        downloadAndSaveDeck(deckName, cards)
            .then(() => {
                setIsDeckBeingDownloaded(false)
            })
            .catch(console.error)
    }, [])

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
                        wordsFetchResult={wordsFetchResult}
                        onDeleteButtonClick={handleButtonClick}
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
                        cardsCount={cardsCount}
                        wordsCount={words.length}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
