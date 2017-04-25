import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Navigation from '../../containers/Navigation';

import HomeScreen from '../HomeScreen';
import TimelineScreen from '../TimelineScreen';
import MapScreen from '../MapScreen';
import BrowseContainer from '../../containers/BrowseContainer';
import TourOverview from '../../containers/TourOverviewContainer';
import CustomizeTour from '../../containers/CustomizeTourContainer';
import WanderContainer from '../../containers/WanderContainer';
import PieceContainer from '../../containers/Piece';

const ConnectedRouter = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <div>
        <Route path="/" render={ matchProps =>
            <Switch>
              <Route exact path="/" render={ matchProps => <HomeScreen { ...matchProps }/> }/>
              <Route path="/timeline" render={ matchProps => <TimelineScreen { ...matchProps }/> }/>
              <Route path="/map" render={ matchProps => <MapScreen { ...matchProps }/> }/>
              <Route path="/browse" render={ matchProps => <BrowseContainer { ...matchProps }/> }/>
              <Route path='/tour' render={ matchProps => <TourOverview { ...matchProps }/> } />
              <Route path='/customize-tour' render={ matchProps => <CustomizeTour { ...matchProps }/> } />
              <Route path='/wander' render={ matchProps => <WanderContainer { ...matchProps }/> } />
              <Route path='/piece/:id' render={ matchProps => <PieceContainer { ...matchProps }/> } />
            </Switch>
          } />
        <Navigation/>
      </div>
    </Router>
  </Provider>
);

export default ConnectedRouter;
