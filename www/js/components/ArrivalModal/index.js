import React, { Component } from 'react'

class ArrivalModal extends Component {
  render() {
    return (
      <div>
        {this.props.piece.title}
        <button onClick={ () => this.props.onClose() }>Close Modal</button>
      </div>
    );
  }
}

export default ArrivalModal;
