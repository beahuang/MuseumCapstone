import React, { Component } from 'react';

export default function BrowseResults( props ) {
  return (
    <div>
      <input className='browse-input' type='search' readOnly placeholder='Search Collection'
        onClick={ () => { props.setSearching( true ) } }
        value={ props.searchTerm ? props.searchTerm : '' }/>
      <div>
        <h1>{ props.searchTerm ? props.searchTerm : 'Near You' }</h1>
      </div>
      <ul className='browse-screen__container'>
        {
          props.browsableItems.map( ( item, i ) => {
            return (
              <li className='browse-screen__item' key={ i }
                onClick={ evt => props.updateTourList( item ) }>
                <img className='browse-screen__image' src={ item.primaryimageurl }/>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
