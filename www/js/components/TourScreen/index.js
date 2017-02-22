import React, { Component } from 'react';
import Navigation from '../../components/Navigation';

export default class TourScreen extends Component {
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
