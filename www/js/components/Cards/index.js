import React from 'react';
import { Link } from 'react-router-dom';

export function Card( props ) {
  const src = props.src ? './img/' + props.src : '';

  return (
    <Link to='/tour'>
      <div className={ src ? 'card--image' : 'card--text' }>
        { src && <img src={ src } /> }
        <p>{ props.title }</p>
      </div>
    </Link>
  );
};

export function FeaturedCard( props ) {
  const src = './img/' + props.src;

  return (
    <Link to={{ pathname: '/tour', state: { ...props } }}>
      <img className="featured-card--img" src={ src }/>
      <div className="featured-card--info">
        <h3 className="featured-card--name">{ props.title }</h3>
        <ul className="featured-card--tags">
          {
            props.tags.map( ( tag, i ) => {
              return <li className="featured-card--tag" key={ i }>{ tag }</li>
            })
          }
        </ul>
        <div className="featured-card--button">{ props.buttonText }</div>
      </div>
    </Link>
  );
};
