import React from 'react';

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
        <input
          name="words"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}
