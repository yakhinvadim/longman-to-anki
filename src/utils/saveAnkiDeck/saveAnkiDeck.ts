import { saveAs } from 'file-saver'
import { Card } from '../../types.d'

const template = {
    css: `
            .card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }
            .lta-example { font-style: italic; } 
            .lta-form { font-weight: bold; }
        `
}

const saveAnkiDeck = (deckName: string, cards: Card[]) =>
    fetch(
        'https://cors-anywhere.herokuapp.com/https://vercel-anki-deck.now.sh/api/create',
        {
            body: JSON.stringify({ cards, deckName, template }),
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
    )
        .then(res => res.blob())
        .then(blob => saveAs(blob, `${deckName}.apkg`))

export default saveAnkiDeck
