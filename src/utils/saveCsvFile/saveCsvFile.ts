import { saveAs } from 'file-saver'
import { Parser } from 'json2csv'
import { CardData } from '../../types'

const saveCsvFile = (deckName: string, cardsData: CardData[]) => {
    const json2csvParser = new Parser({
        fields: [
            'headword',
            'form',
            'example',
            'definition',
            'pronunciation',
            'partOfSpeech',
            'situation',
            'geography',
            'synonym',
            'antonym',
            'frequency'
        ],
        withBOM: true
    })
    const csv = json2csvParser.parse(cardsData)
    const blob = new Blob([csv], { type: 'text/csv' })

    saveAs(blob, `${deckName}.csv`)
}

export default saveCsvFile
