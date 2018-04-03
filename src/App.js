import React, { Component } from 'react';
import './App.css';


import { Search }     from './Search.js';
import { ResultsCard }   from './ResultsCard.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
      location: {},
      current: {},
      tomorrow: {},
      tab: "Today",
      showResults: false, 
    }
  }

  // componentDidMount() {
  //   console.log(api);
  //   this.fetchData();
  // }

  fetchData = async (e) => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    // const country = e.target.elements.country.value;
    const api = `http://api.apixu.com/v1/forecast.json?key=1a87c78087cb46c696f05814182703&q=${zip}&days=7`;
    const api_call = await fetch(api);
    const data = await api_call.json();

    this.setState(
      {
        current: this.setCurrentObject(data),
        tomorrow: this.setTomorrowObject(data),
        location: this.setLocationObject(data),
        forecast: data.forecast.forecastday,
        showResults: true,
      },
    );
    console.log(this.state.showResults);
  }

  setTomorrowObject = (data) => {
    let tomorrow = Object.assign({}, this.state.tomorrow);
    tomorrow.epoch = data.forecast.forecastday[1].date_epoch;
    tomorrow.high = data.forecast.forecastday[1].day.maxtemp_f;
    tomorrow.low = data.forecast.forecastday[1].day.mintemp_f;
    tomorrow.info = data.forecast.forecastday[1].day.condition.text;
    tomorrow.icon = data.forecast.forecastday[1].day.condition.icon;
    return tomorrow;
  }

  setLocationObject = (data) => {
    let location = Object.assign({}, this.state.location);
    location.city = data.location.name;
    location.state = data.location.region;
    return location;
  }

  setCurrentObject = (data) => {
    let current = Object.assign({}, this.state.current);
    current.epoch = data.location.localtime_epoch;
    current.time = this.formatTime(data.location.localtime);
    current.temp = data.current.temp_f;
    current.high = data.forecast.forecastday[0].day.maxtemp_f;
    current.low = data.forecast.forecastday[0].day.mintemp_f;
    current.info = data.current.condition.text;
    current.icon = data.current.condition.icon;
    return current;
  }

  formatTime = (t) => {
    const timeStr = t;
    const arr = timeStr.split(" ");
    const timeArr = arr[1].split(":");
    let amPm;
    if(timeArr[0] > 12) {
      timeArr[0] %= 12;
      amPm = " PM";
    } else {
      amPm = " AM"
    }
    const time = timeArr.join(":") + amPm;
    return time;
  }


  render() {

    var results;
      if (this.state.showResults) {
          results = <ResultsCard current={this.state.current} location={this.state.location} tomorrow={this.state.tomorrow} forecast={this.state.forecast}/>;
      } else {
          results = null;
      }

    return (
      <div className="App">
        <Search fetchData={this.fetchData} showResults={this.state.showResults}/>
        {results}
      </div>
    );
  }
}

export default App;

