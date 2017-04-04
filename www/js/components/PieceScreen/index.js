import React, { Component } from 'react'

class PieceScreen extends Component {

  render() {
    return (
      <div className='piece-screen'>
        { this.props.piece.title }
      </div>
    )
  }
}

export default PieceScreen;
