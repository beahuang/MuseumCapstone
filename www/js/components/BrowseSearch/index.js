import React from 'react';
import CloseIcon from '../../icons/Close.js';

export default function BrowseScreen( props ) {
  return (
    <div>
      <CloseIcon onClick={ () => { props.setSearching( false ) } }/>
      <input type='search' name='browse' placeholder='Search Collection'/>
      <div>
        <p className="search-prompt">Search by keyword, title, artist, object number, or gallery number</p>
        <ul>
          {
            props.popularSearches.map( ( searchTerm, i ) => {
              return <li className="featured-card--tag search-suggestion" key={ i }>{ searchTerm }</li>
            })
          }
        </ul>
      </div>
    </div>
  );
}
