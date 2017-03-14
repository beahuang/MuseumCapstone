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
        <img className="featured-card--img" src={ src }/>
        <div className="featured-card--info">
          <h3 className="featured-card--name">{ props.text }</h3>
          <ul className="featured-card--tags">
            {
              props.tags.map( ( tag, i ) => {
                return <li className="featured-card--tag" key={ i }>{ tag }</li>
              })
            }
          </ul>
          <div className="featured-card--button">{ props.buttonText }</div>
        </div>
      </div>
    </a>
  );
};
