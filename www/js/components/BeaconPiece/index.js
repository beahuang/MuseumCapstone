import React, { Component } from 'react';

const BeaconPiece = ({ piece }) => {
  return (
    <div className='beacon-piece'>
      <h2>{ piece.title }</h2>
      <img src={ piece.primaryimageurl }/>
    </div>
  );
}

export default BeaconPiece;
