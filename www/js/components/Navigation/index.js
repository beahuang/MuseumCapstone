import React from 'react';
import { Link } from 'react-router';

import CompassIcon from '../../icons/Compass';
import TimelineIcon from '../../icons/Timeline';
import MapIcon from '../../icons/Map';
import BrowseIcon from '../../icons/Browse';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/' activeClassName='active'><CompassIcon/>Tours</Link></li>
        <li><Link to='/timeline' activeClassName='active'><TimelineIcon/>Timeline</Link></li>
        <li><Link to='/map' activeClassName='active'><MapIcon/>Map</Link></li>
        <li><Link to='/browse' activeClassName='active'><BrowseIcon/>Browse</Link></li>
      </ul>
    </nav>
  )
}
