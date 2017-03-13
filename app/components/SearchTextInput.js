import React, { Component } from 'react';


export default class SearchTextInput extends Component {

  handleChange = (e) => {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  };

  render() {
    return (
      <div className="input-group">
        <input className="form-control" name="search_text" type="text" placeholder="text here" onChange={this.handleChange} />
      </div>
    )
  };

}