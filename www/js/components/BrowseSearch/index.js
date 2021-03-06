import React, { Component } from 'react';
import CloseIcon from '../../icons/Close.js';

export default function BrowseSearch( props ) {
  return (
    <div className='browse-screen__wrapper'>
      <CloseIcon className='browse-search--close' onClick={ () => { props.setSearching( false ) } }/>
      <input
        className='browse-input' type='search' placeholder='Search Collection' autoFocus
        defaultValue={ props.searchTerm ? props.searchTerm : '' }
        onFocus={ evt => {
          evt.target.value = '';
        }}
        onKeyPress={ evt => {
          if ( evt.key === 'Enter' ) {
            props.setSearchTerm( evt.target.value );
            props.setSearching( false );
          }
        }}
        onBlur={ evt => {
          if ( evt.target.value === '' ) {
            props.setSearchTerm( evt.target.value );
          }
        }}
        />
      <div>
        <p className="search-prompt">Search by keyword, title, artist, object number, or gallery number</p>
        <ul>
          {
            props.popularSearches.map( ( searchTerm, i ) => {
              return(
                <li className="featured-card--tag search-suggestion" key={ i }
                  onClick={ () => {
                    props.setSearchTerm( searchTerm );
                    props.setSearching( false );
                  }}>
                  { searchTerm }
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
