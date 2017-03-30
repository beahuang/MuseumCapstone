import React, { Component } from 'react';
import moment from 'moment';

import CompassIcon from '../../icons/Compass';
import CameraIcon from '../../icons/Camera';
import StarIcon from '../../icons/Star';
import NoteIcon from '../../icons/Note';

function TourHeader(props) {
  const times = moment(props.timedate).format('h:mm a');

  return(
    <div className='tour-item'>
      <div className='tour-header-left'>
        <h2 className='tour-item-title'>{props.title}</h2>

        <div className='tour-item-row'>
          <div className='tour-item-icon'>
            <CompassIcon/>
          </div>

          <h3 className='tour-item-desc'>Tour</h3>
        </div>

        <hr/>
        <div className='tour-item-times'>{times}</div>

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

function TourItem(props) {
  const times = moment(props.timedate).format('h:mm a');

  /**
   * Returns the little inline icon to the left of each tourItem
   * @param  {string} type          Either 'Photo', 'Favorite', or 'Note'.
   *                                Probably is from props.type
   * @return {React Component}      SVG icon.
   */
  function _renderIcon(type) {
    switch (type) {
      case 'Photo':
        return <CameraIcon/>;
      case 'Favorite':
        return <StarIcon/>;
      case 'Note':
        return <NoteIcon/>;
      default:
        break;
    }
  }

  function _renderFaveInfo() {
    return(
      <div className='tour-item-fav-desc'>
        <h3>The Soup Critic</h3>
        <p>Raoul Hausmann,<br/>
            1919-20</p>
      </div>
    );
  }

  function NotePartial(props) {
    const imgUrl = 'url(' + props.img + ')';

    return(
      <div className='tour-item-note'
        style={{backgroundImage: imgUrl}}>
        <p>{props.note}</p>
      </div>
    );
  }

  return(
    <div className='tour-item'>
      <div className='tour-item-left'>
        <div className='tour-item-row'>
          <div className='tour-item-icon'>
            {_renderIcon(props.type)}
           </div>
          <h3 className='tour-item-desc'>{props.type}</h3>
        </div>
        <hr/>
        <div className='tour-item-times'>{times}</div>
      </div>
      {
        props.type == 'Note' ?
        <NotePartial note={props.note} img={props.img} />
        :
        <div className='tour-item-img'>
          <img src='img/theme.png'/>
          { props.type == 'Favorite' ? _renderFaveInfo() : ''}
        </div>
      }

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
      {props.children}
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
          pieceCount='20'>
          <TourItem
            timedate='2017-02-17 15:45'
            type='Photo'/>
          <TourItem
            timedate='2017-02-17 15:45'
            type='Favorite'/>
          <TourItem
            timedate='2017-02-17 15:45'
            type='Note'
            img='img/mood.png'
            note='Hello world. This should be overlayed on top'/>
        </Tour>
      </div>
    );
  }
}
