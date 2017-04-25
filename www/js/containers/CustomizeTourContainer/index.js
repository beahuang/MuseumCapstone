import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';
import Arrow from '../../icons/Arrow.js';
import { Link } from 'react-router-dom';

const api_key = config.HARVARD_ART_MUSEUM_API_KEY;
axios.defaults.baseURL = 'http://api.harvardartmuseums.org';

export default class TourOverview extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      tourDuration: 30,
      tourItems: [],
      tourTime: '30 Minutes',
      numItems: 4
    }
  }

  componentWillMount() {
    this.getTourItems();
  }

  getTourItems() {
    axios.get(`/object?apikey=${ api_key }&hasimage=1&q=imagepermissionlevel:0&size=${ this.state.numItems }`)
    .then( res => {
      this.setState({
        tourItems:  res.data.records
      });
    });
  }

  handleChange = evt => {
    let convertedtourTime = this.convertToTime( evt.target.value );
    let updatedNumItems = this.getNumItems( evt.target.value );

    this.setState({
      tourDuration: evt.target.value,
      tourTime: convertedtourTime,
      numItems: updatedNumItems
    })

    this.getTourItems();
  }

  convertToTime( time ) {
    let minutesNum = time % 60;
    let hoursNum = Math.floor( time / 60 );

    let minutesMsg = `${ minutesNum } minutes`;
    let hoursMsg = hoursNum === 1 ? `1 hour` : `${ hoursNum } hours`;

    if ( hoursNum && minutesNum ) {
      return `${ hoursMsg } and ${ minutesMsg }`;
    }
    else if ( time % 60 ) {
      return minutesMsg;
    }
    else {
      return hoursMsg;
    }
  }

  getNumItems( time ) {
    return Math.floor( time / 15 ) * 2;
  }

  render() {
    return (
      <div className='customize-tour--background'>
        <Link to='tour'><Arrow className='arrow--white arrow--left'/></Link>
        <div className='customize-tour--wrapper'>
          <p className='customize-tour--label'>Your Tour</p>
          <h1 className='customize-tour--header'>{ this.state.tourTime }</h1>
          <input
            id="tourTime"
            type="range"
            min="15" max="120"
            value={this.state.tourDuration}
            onChange={ this.handleChange }
            step="15"
            className='customize-slider'/>
          <ul className='customize-grid'>
            {
              this.state.tourItems.map( ( item, i ) => {
                return (
                  <li className='customize-grid--container' key={ i }>
                    <img className='customize-grid--img' src={ item.primaryimageurl }/>
                  </li>
                )
              })
            }
          </ul>
          <div className='center-button'>Start Tour</div>
        </div>
      </div>
    );
  }
}
