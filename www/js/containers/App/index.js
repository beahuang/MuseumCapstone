import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import HomeScreen from '../../components/Home';
import TourScreen from '../../components/TourScreen';
import TimelineScreen from '../../components/TimelineScreen';
import MapScreen from '../../components/MapScreen';
import BrowseScreen from '../../components/BrowseScreen';

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={HomeScreen} />
        <Route path='/tours' component={TourScreen} />
        <Route path='/timeline' component={TimelineScreen} />
        <Route path='/map' component={MapScreen} />
        <Route path='/browse' component={BrowseScreen} />
      </Router>
    )
  }
}
