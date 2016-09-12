import React from 'react';
import { flatten } from 'ramda';

import composeDictionaryEntry from '../../utils/composeDictionaryEntry/composeDictionaryEntry';
import getCorrectUrls from '../../utils/getCorrectUrls';

import InputWords from '../InputWords/InputWords';
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

    const words = this.state.inputValue.split(',').map(item => item.trim());
    const correctUrls = words.map(word => getCorrectUrls(word));


    Promise.all(
      correctUrls
    )
      .then(urls => Promise.all(
        flatten(urls).map(
          url => fetch(url)
            .then(res => res.text())
        )
      ))
      .then(bodies => bodies.map(composeDictionaryEntry))
      .then(entries => entries.reduce(
        (card, cards) => `${cards}${card}`
      ), '')
      .then(result => this.setState({
        wordData: result
      }))
      .catch(err => console.log(err));
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
