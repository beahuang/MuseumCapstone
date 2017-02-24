import React from 'react';

export default function( props ) {
  const src = './images/' + props.src;
  const tags = props.tags;
  const text = props.text;

  return (
    <div>
      <img src={ src }/>
      <div>
        <p>{ props.text }</p>
      </div>
    </div>
  );
};
