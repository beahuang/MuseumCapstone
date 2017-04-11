require('../scss/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './components/Router';
import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

const store = createStore(
  reducer,
  applyMiddleware( logger )
)

const app = document.getElementById('app');
ReactDOM.render( <Router store={ store }/>, app );
