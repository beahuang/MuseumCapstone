import React, { Component } from 'react';

export default class TourScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Tour Screen',
    };
  }

  render() {
    return (
      <div>
        <p>{ this.state.title }</p>
      </div>
    );
  }
}
