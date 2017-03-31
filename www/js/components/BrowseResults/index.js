import React from 'react';

export default function BrowseResults( props ) {
  return (
    <div>
      <input type='search' name='browse' placeholder='Search Collection'
        onClick={ () => { props.setSearching( true ) } }/>
      <div>
        <h1>Near You</h1>
      </div>
      <ul className='browse-screen__container'>
        {
          props.popularItems.map( ( item, i ) => {
            return (
              <li className='browse-screen__item' key={ i }>
                <img className='browse-screen__image' src={ item.primaryimageurl }/>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
