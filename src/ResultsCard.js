import React, { Component } from 'react';
import './ResultsCard.css';

import { Forecast }   from './Forecast.js';
import { Current }    from './Current.js';
import { Tomorrow }   from './Tomorrow.js';
import { Location }   from './Location.js';
import { Navbar }     from './Navbar.js';

export class ResultsCard extends Component {

  render() {
		return(
      <div className="results-card">
        <Location location={this.props.location} />
        <Navbar />
        <Current current={this.props.current} />
        <Tomorrow tomorrow={this.props.tomorrow}/>
        <Forecast forecast={this.props.forecast}/>
      </div>
	  );
	}
}