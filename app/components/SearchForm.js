import React, { Component } from 'react';
import update from 'immutability-helper';
import SearchTextInput from './SearchTextInput';
import SearchFormSubmitButton from './SearchFormSubmitButton';
import Movie from './Movie';
import style from './styles/SearchForm.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SearchForm extends Component {

  constructor(props, context) {
    super();
    this.state = {
      search_text: '',
      current_movie: {}
    };
  };

  handleUserInput = (obj) => {
    this.setState(obj);
  };

  renderMovieInfo(data) {
    var movie = update(this.state.current_movie, {
      current_movie: {$set: data}
    });

    this.setState({
      current_movie: movie.current_movie
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    var search_text = this.state.search_text;
    var sanitized_search_text = search_text.replace(/\s/g, "+");
    var url = "http://www.omdbapi.com/?t=";
    var combined_url = url + sanitized_search_text + "&y=&plot=short&r=json&tomatoes=true";

    fetch(combined_url, {
      method: 'GET'
    }).then(function(response) {
      return response.json();
    }).then( (data) => {
      console.log('We got response back');
      this.renderMovieInfo(data);
    });
  };

  render() {

    return (
      <div>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} >

          <form onSubmit={this.handleFormSubmit} >
            <SearchTextInput onUserInput={this.handleUserInput} />
            <SearchFormSubmitButton />
          </form>

          <Movie movie={this.state.current_movie} />

        </ReactCSSTransitionGroup>
        
      </div>
    );
  };
}