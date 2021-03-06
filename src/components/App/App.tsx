import React, { useState, useEffect, useCallback, useMemo } from 'react'
import uniq from 'lodash/uniq'

import Grid from '@material-ui/core/Grid'

import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'
import makeAnkiCard from '../../core/makeAnkiCard/makeAnkiCard'
import getCardsData from '../../utils/getCardsData/getCardsData'
import splitByWord from '../../utils/splitByWord/splitByWord'
import wordToData from '../../utils/wordToData/wordToData'
import saveAnkiDeck from '../../utils/saveAnkiDeck/saveAnkiDeck'
import saveCsvFile from '../../utils/saveCsvFile/saveCsvFile'
import getCardsCount from '../../utils/getCardsCount/getCardsCount'

import Header from '../Header/Header'
import DownloadSection from '../DownloadSection/DownloadSection'
import ResultCards from '../ResultCards/ResultCards'
import UserWords from '../UserWords/UserWords'
import DeckName from '../DeckName/DeckName'

import { WordIsLoading, WordFetchError, WordFetchResult } from '../../types.d'

import './App.css'

function App() {
    const [wordsInput, setWordsInput] = useState('')
    const [words, setWords] = useState([] as string[])
    const [wordsFetchResult, setWordsFetchResult] = useState({} as {
        [key: string]: WordFetchResult
    })
    const [deckName, setDeckName] = useState('English words')
    const [isDeckBeingDownloaded, setIsDeckBeingDownloaded] = useState(false)

    useEffect(() => {
        try {
            if (localStorage.words) {
                setWords(JSON.parse(localStorage.words))
            }
            if (localStorage.wordsFetchResult) {
                setWordsFetchResult(JSON.parse(localStorage.wordsFetchResult))
            }
            if (localStorage.deckName) {
                setDeckName(JSON.parse(localStorage.deckName))
            }
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        localStorage.words = JSON.stringify(words)
    }, [words])

    useEffect(() => {
        localStorage.wordsFetchResult = JSON.stringify(wordsFetchResult)
    }, [wordsFetchResult])

    useEffect(() => {
        localStorage.deckName = JSON.stringify(deckName)
    }, [deckName])

    const handleOnline = useCallback(() => {
        words
            .filter(word => wordsFetchResult[word] === WordFetchError.Offline)
            .forEach(downloadAndSaveWordData)
    }, [words, wordsFetchResult])

    useEffect(() => {
        if (navigator.onLine) {
            handleOnline()
        }
    }, [handleOnline])

    useEffect(() => {
        window.addEventListener('online', handleOnline)
        return () => window.removeEventListener('online', handleOnline)
    }, [handleOnline])

    const handleWordsInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setWordsInput(event.target.value)
    }

    const handleEnterPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault()
            handleWordsSubmit(event)
        }
    }

    const handleWordsSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const newWords = splitByWord(wordsInput)
        newWords.forEach(downloadAndSaveWordData)

        setWordsInput('')
        setWords(prevWords => uniq([...newWords, ...prevWords]))
    }

    const downloadAndSaveWordData = async (word: string) => {
        setWordsFetchResult(prevWordsFetchResult => ({
            ...prevWordsFetchResult,
            [word]: WordIsLoading
        }))

        const wordData = await wordToData(word)

        setWordsFetchResult(prevWordsFetchResult => ({
            ...prevWordsFetchResult,
            [word]: wordData.status || normalizeWordData(wordData.payload)
        }))
    }

    const handleDeleteButtonClick = useCallback(
        (wordToDelete: string) => (e: React.MouseEvent) => {
            setWordsFetchResult(prevWordsFetchResult => {
                const newWordsFetchResult = { ...prevWordsFetchResult }
                delete newWordsFetchResult[wordToDelete]
                return newWordsFetchResult
            })

            setWords(prevWords =>
                prevWords.filter(word => word !== wordToDelete)
            )
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

    const handleDownloadAnkiButtonClick = useCallback(() => {
        setIsDeckBeingDownloaded(true)

        const ankiCards = getCardsData(words, wordsFetchResult).map(
            makeAnkiCard
        )

        saveAnkiDeck(deckName, ankiCards)
            .then(() => {
                setIsDeckBeingDownloaded(false)
            })
            .catch(console.error)
    }, [deckName, words, wordsFetchResult])

    const handleDownloadCsvButtonClick = useCallback(() => {
        const cardsData = getCardsData(words, wordsFetchResult)

        saveCsvFile(deckName, cardsData)
    }, [deckName, words, wordsFetchResult])

    const handleClearWordsButtonClick = useCallback(() => {
        setWords([])
        setWordsFetchResult({})
    }, [])

    return (
        <div className="App">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Header />
                </Grid>

                <Grid item xs={12}>
                    <UserWords
                        value={wordsInput}
                        onChange={handleWordsInputChange}
                        onKeyDown={handleEnterPress}
                        onSubmit={handleWordsSubmit}
                    />
                </Grid>

                <Grid item xs={12}>
                    <ResultCards
                        words={words}
                        wordsFetchResult={wordsFetchResult}
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
                        onDownloadAnkiButtonClick={
                            handleDownloadAnkiButtonClick
                        }
                        onDownloadCsvButtonClick={handleDownloadCsvButtonClick}
                        onClearWordsButtonClick={handleClearWordsButtonClick}
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
