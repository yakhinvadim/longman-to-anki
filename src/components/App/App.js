import React from 'react';
import ankifyWords from '../../utils/ankifyWords/ankifyWords';
import Header from '../Header/Header';
import ImportOptions from '../ImportOptions/ImportOptions';
import DownloadButton from '../DownloadButton/DownloadButton';
import ResultCards from '../ResultCards/ResultCards';
import UserWords from '../UserWords/UserWords';

import './App.css';

export default class App extends React.Component {
    state = {
        inputValue: '',
        wordData: '',
        showImportOptions: false
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        ankifyWords(this.state.inputValue)
            .then(result => this.setState({
                wordData: result
            }))
            .catch(err => console.log(err));
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
                    onSubmit={this.handleSubmit}    
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />

                <ResultCards
                    value={this.state.wordData}
                />

                <DownloadButton
                    fileContent={encodeURIComponent(this.state.wordData)}
                    fileName={`longman-to-anki ${this.state.inputValue}`}
                    onClick={this.handleDownload}
                    disabled={!this.state.wordData}
                />

                {this.state.showImportOptions && <ImportOptions />}
            </div>
        );
    }
}
