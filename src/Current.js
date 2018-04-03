import React, { Component } from 'react';
import './Current.css';

export class Current extends Component {

  epochToDay = (ms) => {
    const d = new Date((ms) * 1000);
    // console.log(d);
    const str = d.toString();
    // console.log(str);
    const arr = str.split(" ");
    console.log(arr);
    return arr[1] + " " + arr[2];
  }

  render() {
    return(
      <div>
        <h1>{this.epochToDay(this.props.current.epoch) + ", " + this.props.current.time}</h1>
        <h2>High: {Math.round(this.props.current.high)} | Low: {Math.round(this.props.current.low)}</h2>
        <h1>{Math.round(this.props.current.temp)}</h1>
        <img src={this.props.current.icon} alt="weather icon" className="current-icon" />
        <p>{this.props.current.info}</p>
      </div>
    );
  }
}