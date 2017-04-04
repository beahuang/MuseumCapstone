import React, { Component } from 'react';

import CameraIcon from '../../icons/Camera';

class PieceScreen extends Component {
  _buttonRow() {
    return (
      <div className='piece-sc-button-row'>
        <button><CameraIcon/></button>
      </div>
    )
  }


  render() {
    const { props: { piece } } = this

    const width = window.innerWidth * 2;

    return (
      <div className='piece-screen'>
        <div
          className='piece-sc-header'
          style={ piece.primaryimageurl ?
            { 'backgroundImage': `url(${piece.primaryimageurl}?height=800&width=${width})` } :
            { 'backgroundColor': '#666' } }
        >
          <div className='piece-sc-header-content'>
            <h1>{ piece.title }</h1>
            <h4> { piece.people ? `${piece.people[0].name}, ` : ''} { piece.dated } </h4>
            {this._buttonRow()}
          </div>
        </div>
      </div>
    )
  }
}

export default PieceScreen;
