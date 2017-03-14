import React, { Component } from 'react';

export default class Movie extends Component {

  componentDidMount() {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>test</h1>
        <p>Score here</p>
      </div>
    )
  };
};