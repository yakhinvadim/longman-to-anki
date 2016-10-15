import React from 'react';
import ankifyWords from '../../utils/ankifyWords/ankifyWords';
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

    ankifyWords(this.state.inputValue)
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
          <input
            name='words'
            type='text'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>

        <div className="word-data">
          {this.state.wordData}
        </div>
      </div>
    );
  }
}
