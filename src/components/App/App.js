import React from 'react';
import R from 'ramda';
import debounce from 'lodash.debounce';
import splitByWord from '../../utils/splitByWord/splitByWord';
import wordToCards from '../../core/wordToCards/wordToCards';

import Header from '../Header/Header';
import ImportOptions from '../ImportOptions/ImportOptions';
import DownloadButton from '../DownloadButton/DownloadButton';
import ResultCards from '../ResultCards/ResultCards';
import UserWords from '../UserWords/UserWords';
import Totals from '../Totals/Totals';

import './App.css';

export default class App extends React.Component {
    state = {
        inputValue: '',
        cardsArr: [],
        showImportOptions: false
    }

    handleInputChange = async (event) => {
        const inputValue = event.target.value;

        this.setState({
            inputValue
        })
        
        this.debouncedComposeCards();
    }

    debouncedComposeCards = debounce(
        async () => {
            const words = splitByWord(this.state.inputValue);

            let cardsArr = [];
            let i = 0;

            for (let word of words) {
                const wordCards = await wordToCards(word);
                cardsArr[i] = wordCards;
            
                this.setState({
                    cardsArr
                });

                i++;
            }
        }, 500
    )

    handleDownload = () => {
        this.setState({
            showImportOptions: true
        })
    }

    render() {
        const cards = R.pipe(
            R.reject(R.isEmpty),
            R.join('\n')
        )(this.state.cardsArr);
        
        const wordsTotal = R.pipe(
            R.reject(R.isEmpty),
            R.length
        )(this.state.cardsArr);

        const cardsTotal = R.match(/\n/g)(cards).length;

        return (
            <div className='App'>
                <Header />
                
                <UserWords
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />

                <ResultCards
                    value={cards}
                />

                <div  className='App__download-section'>
                    <Totals
                        wordsTotal={wordsTotal}
                        cardsTotal={cardsTotal}
                    />
                    <DownloadButton
                        fileContent={encodeURIComponent(cards)}
                        fileName={`longman-to-anki ${this.state.inputValue}`}
                        onClick={this.handleDownload}
                        disabled={!cards}
                    />
                </div>

                {this.state.showImportOptions && <ImportOptions />}
            </div>
        );
    }
}
