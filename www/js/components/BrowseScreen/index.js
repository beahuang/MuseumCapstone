import React, { Component } from 'react';

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
      </div>
    );
  }
}
