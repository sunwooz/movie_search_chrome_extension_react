import React, { Component } from 'react';

import SearchTextInput from './SearchTextInput';
import SearchFormSubmitButton from './SearchFormSubmitButton';
import Movie from './Movie';
import style from './styles/SearchForm.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SearchForm extends Component {

  constructor(props, context) {
    super();
    this.state = {
      search_text: ''
    };
  };

  handleUserInput = (obj) => {
    this.setState(obj);
  };

  addMovie(data) {
    this.props.handleMovieChange(data)
    // console.log(this.props.handleMovieChange(data));
    console.log('Movie Added');
    // console.log(data);
    // console.log(this.props);
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
      // console.log('We got response back');
      this.addMovie(data);
    });

    // fetch(combined_url, {
    //   method: 'GET'
    // }).then( (data) => {
    //   // console.log('We got response back');
    //   this.addMovie(data);
    // });
  };

  render() {

    return (
      <div>
        <form onSubmit={this.handleFormSubmit} key={1}>
          <SearchTextInput onUserInput={this.handleUserInput} />
          <SearchFormSubmitButton />
        </form>
      </div>
    );
  };
}