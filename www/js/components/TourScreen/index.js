import React, { Component } from 'react';

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
        <h1>{ this.state.title }</h1>
      </div>
    );
  }
}
