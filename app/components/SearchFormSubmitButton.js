import React, { Component } from 'react';


export default class SearchFormSubmitButton extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onUserFormSubmit();
  };

  render() {
    return (
      <div className="input-group">
        <input className="form-control" type="submit" />
      </div>
    )
  };

}