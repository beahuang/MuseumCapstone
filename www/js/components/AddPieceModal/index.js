import React from 'react';
import Arrow from '../../icons/Arrow.js';

export default function AddPieceModal( props ) {
  return (
    <div className='modal--add-piece'>
      <Arrow className='arrow--purple arrow--down' style={{ float: 'right' }}
        onClick={ () => { props.setActiveItem( null ) } }/>
      <h3>{ props.title }</h3>
      <div className='modal--image'>
        <img className='browse-screen__image' src={ props.activeItem.primaryimageurl }/>
      </div>
      <div className='modal--content'>
        <p>{ props.activeItem.title }</p>
        <div className='button' onClick={ () => { props.updateTourList( props.activeItem ) } }>Add Piece</div>
      </div>
    </div>
  );
}
