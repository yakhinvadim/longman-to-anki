import React from 'react';
import InputWords from '../InputWords/InputWords.js';
import './App.css';

export default class App extends React.Component {
  state = {
    inputValue: '',
    wordData: ''
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchWordData(this.state.inputValue)
  }

  fetchWordData = (word) => {
    fetch(`https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2F${word}%22&diagnostics=true`)
      .then(resp => resp.text())
      .then(data => this.setState({
        wordData: data
      }))
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <InputWords
            value={this.state.inputValue}
            handleChange={this.handleInputChange}
          />
        </form>

        <div className="word-data">
          {this.state.wordData}
        </div>
      </div>
    );
  }
}
