import React from 'react';
import R from 'ramda';
import getWords from '../../utils/getWords/getWords';
import wordToCards from '../../utils/wordToCards/wordToCards';

import Header from '../Header/Header';
import ImportOptions from '../ImportOptions/ImportOptions';
import DownloadButton from '../DownloadButton/DownloadButton';
import ResultCards from '../ResultCards/ResultCards';
import UserWords from '../UserWords/UserWords';

import './App.css';

export default class App extends React.Component {
    state = {
        inputValue: '',
        cards: '',
        showImportOptions: false
    }

    handleInputChange = async (event) => {
        const inputValue = event.target.value;

        this.setState({
            inputValue
        })
        
        const words = getWords(inputValue);

        let cardsArr = [];
        let i = 0;

        for (let word of words) {
            const wordCards = await wordToCards(word);
            cardsArr[i] = wordCards;
            const cards = R.join('\n')(cardsArr);
        
            this.setState({
                cards
            });

            i++;
        }
    }

    handleDownload = () => {
        this.setState({
            showImportOptions: true
        })
    }

    render() {
        return (
            <div className='App'>
                <Header />
                
                <UserWords
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />

                <ResultCards
                    value={this.state.cards}
                />

                <DownloadButton
                    fileContent={encodeURIComponent(this.state.cards)}
                    fileName={`longman-to-anki ${this.state.inputValue}`}
                    onClick={this.handleDownload}
                    disabled={!this.state.cards}
                />

                {this.state.showImportOptions && <ImportOptions />}
            </div>
        );
    }
}
