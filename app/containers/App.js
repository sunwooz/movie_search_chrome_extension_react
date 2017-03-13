import React, { Component, PropTypes } from 'react';
import SearchForm from '../components/SearchForm';
import Movie from '../components/Movie';
import style from './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  render() {

    return (
      <div>
        <SearchForm />
        <Movie title={this.state.title} />
      </div>
    );
  };
}
