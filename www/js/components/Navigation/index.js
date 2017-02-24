import React from 'react';
import { Link, IndexLink } from 'react-router';

import CompassIcon from '../../icons/Compass';
import TimelineIcon from '../../icons/Timeline';
import MapIcon from '../../icons/Map';
import BrowseIcon from '../../icons/Browse';

export default function() {
  return (
    <nav>
      <ul>
        <li><IndexLink to='/' activeClassName='active'><CompassIcon/>Tours</IndexLink></li>
        <li><Link to='/timeline' activeClassName='active'><TimelineIcon/>Timeline</Link></li>
        <li><Link to='/map' activeClassName='active'><MapIcon/>Map</Link></li>
        <li><Link to='/browse' activeClassName='active'><BrowseIcon/>Browse</Link></li>
      </ul>
    </nav>
  )
}
