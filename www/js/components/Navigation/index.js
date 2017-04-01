import React from 'react';
import { NavLink } from 'react-router-dom';

import CompassIcon from '../../icons/Compass';
import TimelineIcon from '../../icons/Timeline';
import MapIcon from '../../icons/Map';
import BrowseIcon from '../../icons/Browse';

export default function() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to='/' activeClassName='active'><CompassIcon style={{padding: '3.5px'}}/>Tours</NavLink></li>
        <li><NavLink to='/timeline' activeClassName='active'><TimelineIcon/>Timeline</NavLink></li>
        <li><NavLink to='/map' activeClassName='active'><MapIcon/>Map</NavLink></li>
        <li><NavLink to='/browse' activeClassName='active'><BrowseIcon/>Browse</NavLink></li>
      </ul>
    </nav>
  )
}
