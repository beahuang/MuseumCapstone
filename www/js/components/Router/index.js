import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Navigation from '../../components/Navigation';

import TourScreen from '../TourScreen';
import TimelineScreen from '../TimelineScreen';
import MapScreen from '../MapScreen';
import BrowseContainer from '../../containers/BrowseContainer';

const ConnectedRouter = ({ store }) => (
  <Provider store={ store }>
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
  </Provider>
);

export default ConnectedRouter;
