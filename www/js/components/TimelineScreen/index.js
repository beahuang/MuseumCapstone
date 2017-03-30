import React, { Component } from 'react';
import moment from 'moment';

import CompassIcon from '../../icons/Compass';

function TourHeader(props) {
  const times = moment(props.timedate).format('h:mm a');

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
          <div className='tour-item-times'>{times}</div>
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
  const date = moment(props.timedate).format('MMMM Do, YYYY');

  return(
    <div className='tour'>
      <h4 className='tour-date'>Your Journey from {date}</h4>
      <TourHeader
        title={props.title}
        timedate={props.timedate}
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
          timedate='2017-02-17 15:40'
          pieceCount='20'/>
      </div>
    );
  }
}
