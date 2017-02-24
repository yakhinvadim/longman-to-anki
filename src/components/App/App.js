import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ankifyWords from '../../utils/ankifyWords/ankifyWords';
import Header from '../Header/Header';
import ImportOptions from '../ImportOptions/ImportOptions';
import DownloadButton from '../DownloadButton/DownloadButton';

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
                <Header/>

                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        marginBottom: 20
                    }}
                >
                    <TextField
                        hintText="example, bear, mouse"
                        floatingLabelText="Type some words, you want to learn"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        fullWidth
                    />
                    <RaisedButton
                        label="Compose cards"
                        primary
                        type='submit'
                    />
                </form>

                <TextField
                    hintText="Text for anki cards will appear here"
                    multiLine
                    fullWidth
                    value={this.state.wordData}
                    rowsMax={10}
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
