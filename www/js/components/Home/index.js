import React, { Component } from 'react';
import Navigation from '../Navigation';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'What do you want to see today?',
    };
  }

  render() {
    return (
      <div>
        <p>{ this.state.title }</p>
        <Navigation/>
      </div>
    );
  }
}
