import { WordFetchResult } from '../../types.d'

const getCardsCount = (wordsFetchResult: {
    [key: string]: WordFetchResult
}) => {
    const cardsCount = Object.values(wordsFetchResult)
        .filter(Array.isArray)
        .reduce((totalCardsCount, currentWordCards) => {
            return (
                totalCardsCount +
                (currentWordCards ? currentWordCards.length : 0)
            )
        }, 0)

    return cardsCount
}

export default getCardsCount
