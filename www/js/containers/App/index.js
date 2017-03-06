import React, { Component } from 'react';
import * as firebase from 'firebase';

import Navigation from '../../components/Navigation';

const config = {
  apiKey: process.env.API_KEY,
  authorDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
        <Navigation />
      </div>
    )
  }
}
