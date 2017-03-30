import React, { Component } from 'react';

import CompassIcon from '../../icons/Compass';

function TourHeader(props) {
  return(
    <div className='tour-item'>
      <div className='tour-item-left'>
        <h2 className='tour-item-title'>{props.title}</h2>

        <div className='tour-item-row'>
          <div className='tour-item-icon'>
            <CompassIcon/>
          </div>

          <h3 className='tour-item-desc'>Tour</h3>
          <hr/>
          <div className='tour-item-times'>
            3:40pm
          </div>
        </div>

        <p className='tour-item-piece-count'>
          30 minutes<br/>
          {props.pieceCount} pieces
        </p>
      </div>
      <div className='tour-item-img'>
        <img src='img/featured.png'/>
      </div>
    </div>
  )
}

function Tour(props) {
  return(
    <div className='tour'>
      <h4 className='tour-date'>Your Journey from February 14<sup>th</sup>, 2017</h4>
      <TourHeader
        title={props.title}
        pieceCount={props.pieceCount}/>
    </div>
  )
}

export default class TimelineScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='timeline'>
        <h3 className='timeline-title'>My Timeline</h3>
        <Tour
          title='Tour Title'
          pieceCount='20'/>
      </div>
    );
  }
}
