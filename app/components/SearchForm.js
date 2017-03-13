import React, { Component } from 'react';
import SearchTextInput from './SearchTextInput';
import SearchFormSubmitButton from './SearchFormSubmitButton';
import style from './SearchForm.css';

export default class SearchForm extends Component {

	constructor(props, context) {
		super();
		this.state = {
			search_text: ''
		};
	};

	handleUserInput = (obj) => {
		// console.log(obj);
		this.setState(obj);
	};

	renderMovieInfo(data) {
		this.setState(data);
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
			this.renderMovieInfo(data);
		});
	};

  render() {

   	return (
   		<form onSubmit={this.handleFormSubmit} >
      	<SearchTextInput onUserInput={this.handleUserInput} />
      	<SearchFormSubmitButton />
      </form>
    );
  };
}