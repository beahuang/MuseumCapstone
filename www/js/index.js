require('../scss/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './components/Router';

const app = document.getElementById('app');
ReactDOM.render( <Router/>, app );
