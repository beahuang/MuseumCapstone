import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import TourScreen from '../TourScreen';
import TimelineScreen from '../TimelineScreen';
import MapScreen from '../MapScreen';
import BrowseScreen from '../BrowseScreen';

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={TourScreen} />
        <Route path='/timeline' component={TimelineScreen} />
        <Route path='/map' component={MapScreen} />
        <Route path='/browse' component={BrowseScreen} />
      </Router>
    )
  }
}
