import { WordFetchStatusOrCardsData } from '../../types.d'

const getWordsAndCardsCount = (
    words: string[],
    wordsFetchStatusOrCardsData: {
        [key: string]: WordFetchStatusOrCardsData
    }
) => {
    const wordsCount = words.length
    const cardsCount = Object.values(wordsFetchStatusOrCardsData)
        .filter(Array.isArray)
        .reduce((totalCardsCount, currentWordCards) => {
            return (
                totalCardsCount +
                (currentWordCards ? currentWordCards.length : 0)
            )
        }, 0)

    return {
        wordsCount,
        cardsCount
    }
}

export default getWordsAndCardsCount
