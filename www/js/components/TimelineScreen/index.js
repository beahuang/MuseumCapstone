import React, { Component } from 'react';

import CompassIcon from '../../icons/Compass';

function JourneyItem(props) {
  return(
    <div className='journey-item'>
      <div className='journey-item-left'>
        <h2 className='journey-item-title'>Title Here.</h2>

        <div className='journey-item-row'>
          <div className='journey-item-icon'>
            <CompassIcon/>
          </div>

          <h3 className='journey-item-desc'>type</h3>
          <hr/>
          <div className='journey-item-times'>
            3:40pm
          </div>
        </div>

        <p className='journey-item-piece-count'>
          30 minutes<br/>
          20 pieces
        </p>
      </div>
      <div className='journey-item-img'>
        <img src='img/featured.png'/>
      </div>
    </div>
  )
}

export default class TimelineScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Timeline Screen',
    };
  }

  render() {
    return (
      <div className='timeline'>
        <h3 className='timeline-title'>My Timeline</h3>
        <div className='journey'>
          <h4 className='journey-date'>Your Journey from February 14<sup>th</sup>, 2017</h4>
          <JourneyItem/>
        </div>
      </div>
    );
  }
}
