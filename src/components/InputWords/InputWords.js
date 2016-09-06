import React from 'react';

export default class InputWords extends React.Component {
  render() {
    return (
      <input
        name='words'
        type='text'
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    );
  }
}
