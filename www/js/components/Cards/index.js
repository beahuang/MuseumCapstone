import React from 'react';

export function Card( props ) {
  const src = props.src ? './img/' + props.src : '';

  return (
    <a href={ props.link }>
      <div className={ src ? 'card--image' : 'card--text'}>
        { src && <img src={ src } /> }
        <p>{ props.text }</p>
      </div>
    </a>
  );
};

export function FeaturedCard( props ) {
  const src = './img/' + props.src;

  return (
    <a href={ props.link }>
      <div>
        <img src={ src }/>
        <div className="featured-card-info">
          <h3>{ props.text }</h3>
          <ul>
            {
              props.tags.map( ( tag, i ) => {
                return <li key={ i }>{ tag }</li>
              })
            }
          </ul>
          <div>{ props.buttonText }</div>
        </div>
      </div>
    </a>
  );
};
