import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <p>hey</p>
        <p>hey hey hey</p>
      </div>
    );
  }
}
