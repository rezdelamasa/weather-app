import React, { Component } from 'react';
import './WeatherCard.css';

export class WeatherCard extends Component {

  epochToDay(ms) {
    const d = new Date((ms + 36000) * 1000);
    // console.log(d);
    const str = d.toString();
    // console.log(str);
    const arr = str.split(" ");
    console.log(arr);
    return arr[0];
  }
  render() {
    return(
      <li className="weather-card">
        <div>
          <h1>{this.epochToDay(this.props.forecast.date_epoch)}</h1>
          <img src={this.props.forecast.day.condition.icon} alt="weather icon" className="weather-card-icon" />
          <p>{Math.round(this.props.forecast.day.maxtemp_f)} | {Math.round(this.props.forecast.day.mintemp_f)}</p>
        </div>
      </li>
    );
  }
}