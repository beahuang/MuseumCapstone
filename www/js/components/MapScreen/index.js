import React, { Component } from 'react';

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
      </div>
    );
  }
}
