import { WordFetchResult } from '../../types.d'

const getCardsData = (
    words: string[],
    wordsFetchResult: {
        [key: string]: WordFetchResult
    }
) => {
    const cardsData = words
        .reverse()
        .map(word => wordsFetchResult[word])
        .filter(Array.isArray)
        .reduce(
            (allCardsData, currentWordCardsData) =>
                currentWordCardsData
                    ? allCardsData.concat(...currentWordCardsData)
                    : allCardsData,
            []
        )

    return cardsData
}

export default getCardsData
