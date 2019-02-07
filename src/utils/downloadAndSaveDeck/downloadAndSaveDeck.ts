import { saveAs } from 'file-saver'
import { Card } from '../../types.d'

const template = {
    css: `
            .card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }
            .lta-example { font-style: italic; } 
            .lta-form { font-weight: bold; }
        `
}

const downloadAndSaveDeck = async (deckName: string, cards: Card[]) =>
    fetch('https://micro-anki-yakhinvadim.now.sh/', {
        body: JSON.stringify({ cards, deckName, template }),
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.blob())
        .then(blob => saveAs(blob, `${deckName}.apkg`))

export default downloadAndSaveDeck
