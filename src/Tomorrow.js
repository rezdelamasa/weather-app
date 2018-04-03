import React, { Component } from 'react';
import './Tomorrow.css';

export class Tomorrow extends Component {

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
        <h1>{this.epochToDay(this.props.tomorrow.epoch) + ", " + this.props.tomorrow.time}</h1>
        <h2>High: {Math.round(this.props.tomorrow.high)} | Low: {Math.round(this.props.tomorrow.low)}</h2>
        <img src={this.props.tomorrow.icon} alt="weather icon" className="tomorrow-icon" />
        <p>{this.props.tomorrow.info}</p>
      </div>
    );
  }
}