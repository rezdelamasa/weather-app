import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {

  render() {
    return(
      <div>
      	<button className="navbar-button active today-button" value="today">Today</button>
      	<button className="navbar-button tomorrow-button" value="tomorrow">Tomorrow</button>
      	<button className="navbar-button forecast-button" value="forecast">7 Days</button>
      </div>
    );
  }
}