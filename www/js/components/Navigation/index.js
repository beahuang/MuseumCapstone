import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/' activeClassName='active'>Tours</Link></li>
        <li><Link to='/timeline' activeClassName='active'>Timeline</Link></li>
        <li><Link to='/map' activeClassName='active'>Map</Link></li>
        <li><Link to='/browse' activeClassName='active'>Browse</Link></li>
      </ul>
    </nav>
  )
}
