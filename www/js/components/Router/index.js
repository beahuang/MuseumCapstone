import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../../components/Navigation';

import TourScreen from '../TourScreen';
import TimelineScreen from '../TimelineScreen';
import MapScreen from '../MapScreen';
import BrowseContainer from '../../containers/BrowseContainer';


export default function() {
  return (
    <Router>
      <div>
        <Route path="/" render={ matchProps =>
            <Switch>
              <Route exact path="/" render={ matchProps => <TourScreen { ...matchProps }/> }/>
              <Route path="/timeline" render={ matchProps => <TimelineScreen { ...matchProps }/> }/>
              <Route path="/map" render={ matchProps => <MapScreen { ...matchProps }/> }/>
              <Route path="/browse" render={ matchProps => <BrowseContainer { ...matchProps }/> }/>
            </Switch>
          } />
        <Route path="/" component={ Navigation } />
      </div>
    </Router>
  );
}
