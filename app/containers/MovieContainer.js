import React, { Component } from 'react';

import Movie from '../components/Movie';
import SearchForm from '../components/SearchForm';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import update from 'immutability-helper';

export default class MovieContainer extends Component {

  constructor(props, context) {
    super();
    this.state = {
      current_movie: {}
    };
  };

  renderMovie = (data) => {
    var movie = update(this.state.current_movie, {
      current_movie: {$set: data}
    });

    this.setState({
      current_movie: movie.current_movie
    });
  };

  render() {

    return (
      <div>
        <SearchForm handleMovieChange={this.renderMovie} />
        <ReactCSSTransitionGroup 
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <Movie movie={this.state.current_movie} key={Math.floor(Math.random() * 100)} />
        </ReactCSSTransitionGroup>
      </div>
    );
  };
}