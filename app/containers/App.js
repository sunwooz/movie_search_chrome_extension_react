import React, { Component, PropTypes } from 'react';
import SearchForm from '../components/SearchForm';
import Movie from '../components/Movie';
import style from './App.css';

export default class App extends Component {

  render() {

    return (
      <div>
        <SearchForm />
      </div>
    );
  };
}
