import React, { Component } from 'react';
import SearchTextInput from './SearchTextInput';
import style from './SearchForm.css';

export default class SearchForm extends Component {

	constructor(props, context) {
		super();
		this.state = {
			movie_name: ''
		};
	};

	handleUserInput(obj) {
		// console.log(obj);
		this.setState(obj);
	};


  render() {

   	return (
      <SearchTextInput onUserInput={this.handleUserInput} />
    );
  };
}