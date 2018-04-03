import React, { Component } from 'react';
import './Forecast.css';
import { WeatherCard } from './WeatherCard.js';

export class Forecast extends Component {

  createList = (d) => {
    // console.log(d);
    const array = d;
    console.log(array);
    const listItems = array.map((obj) => 
      <WeatherCard forecast={obj} key={obj.date_epoch} />
    );
    return listItems;
  }

  render() {
    return(
      <div>
        <ul className="forecast-list">
          {this.createList(this.props.forecast)}
        </ul>
      </div>
    );
  }
}