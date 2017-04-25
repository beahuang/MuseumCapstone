import React, { Component } from 'react'

class ArrivalModal extends Component {
  render() {
    // <button onClick={ () => this.props.onClose() }>Close Modal</button>

    return (
      <div>
        You have arrived at {this.props.piece.title}
      </div>
    );
  }
}

export default ArrivalModal;
