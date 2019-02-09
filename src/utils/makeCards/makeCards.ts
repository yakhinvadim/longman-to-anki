import makeCard from '../../core/makeCard/makeCard'
import { WordFetchResult } from '../../types.d'

const makeCards = (
    words: string[],
    wordsFetchResult: {
        [key: string]: WordFetchResult
    }
) => {
    const cards = words
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
        .map(makeCard)

    return cards
}

export default makeCards
