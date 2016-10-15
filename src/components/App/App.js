import React from 'react';
import R from 'ramda';
import ankifyWordData from '../../utils/ankifyWordData/ankifyWordData';
import composeWordData from '../../utils/composeWordData/composeWordData';
import composeQuery from '../../utils/composeQuery/composeQuery';

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
    const urls = words.map(composeQuery);

    Promise.all(
      urls.map(
        url => fetch(url).then(res => res.text())
      )
    )
      .then(R.pipe(
        R.map(
          R.pipe(
            composeWordData,
            ankifyWordData
          )
        ),
        R.join('\n')
      ))
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
