import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <ul>
      <li><Link to='/tours'>Tours</Link></li>
      <li><Link to='/timeline'>Timeline</Link></li>
      <li><Link to='/map'>Map</Link></li>
      <li><Link to='/browse'>Browse</Link></li>
    </ul>
  )
}
