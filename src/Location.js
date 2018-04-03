import React, { Component } from 'react';
import './Location.css';

export class Location extends Component {

  render() {
    return(
      <div>
        <h1>{this.props.location.city}, {this.props.location.state}</h1>
      </div>
    );
  }
}