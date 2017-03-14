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
        <p>{movie.Runtime}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Director}</p>
        <p>{movie.Writer}</p>
        <p>{movie.Actors}</p>
        <p>{movie.Plot}</p>
        <p>{movie.Language}</p>
        <p>{movie.Country}</p>
        <p>{movie.Awards}</p>
        <img src={movie.Poster} />
      </div>
    )
  };

};