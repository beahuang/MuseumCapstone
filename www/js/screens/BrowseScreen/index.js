import React, { Component } from 'react';
import Navigation from '../../components/Navigation';

export default class BrowseScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Browse Screen',
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
