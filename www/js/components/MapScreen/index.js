import React, { Component } from 'react';
import Navigation from '../../components/Navigation';

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Map Screen',
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
