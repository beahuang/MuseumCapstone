import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../../containers/App';

import TourScreen from '../TourScreen';
import TimelineScreen from '../TimelineScreen';
import MapScreen from '../MapScreen';
import BrowseScreen from '../BrowseScreen';
import BrowseSearchResults from '../BrowseSearchResults';

export default function() {
  return (
    <Router history={ hashHistory } >
      <Route path="/" component={ App }>
        <IndexRoute component={ TourScreen } />
        <Route path='timeline' component={ TimelineScreen } />
        <Route path='map' component={ MapScreen } />
        <Route path='browse' component={ BrowseScreen } />
        <Route path='/search-results' component={ BrowseSearchResults } />
      </Route>
    </Router>
  );
}
