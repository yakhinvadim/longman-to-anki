import makeCard from '../../core/makeCard/makeCard'
import { WordFetchStatusOrCardsData } from '../../types.d'

const makeCards = (
    words: string[],
    wordsFetchStatusOrCardsData: {
        [key: string]: WordFetchStatusOrCardsData
    }
) => {
    const cards = words
        .reverse()
        .map(word => wordsFetchStatusOrCardsData[word])
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
