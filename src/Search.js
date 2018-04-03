import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {

  render() {
    return(
      <form className="search" onSubmit={this.props.fetchData}>
        <input className="search-field" type="text" placeholder="Zip" name="zip" required />
        <input className="search-submit" type="submit" name="submit" />
      </form>
    );
  }
}