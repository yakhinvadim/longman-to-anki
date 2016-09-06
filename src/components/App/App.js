import React from 'react';
import InputWords from '../InputWords/InputWords.js';
import './App.css';

export default class App extends React.Component {
  state = {
    inputValue: ''
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <form>
        <InputWords
          value={this.state.inputValue}
          handleChange={this.handleInputChange}
        />
      </form>
    );
  }
}
