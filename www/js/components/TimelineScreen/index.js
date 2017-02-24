import React, { Component } from 'react';

export default class TimelineScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Timeline Screen',
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
