import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    console.log('Movie is rendering ' + Object.getOwnPropertyNames( this.props.movie ) );
    var movie = this.props.movie;
    return (
      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Year}</p>
        <p>{movie.Released}</p>
      </div>
    )
  };

};