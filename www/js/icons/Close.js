import React from 'react';

export default class SVG extends React.Component {
  render() {
    return (
      <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" { ...this.props }>
        <path d="M16.446 18l-6.425-6.3L3.597 18 .842 15.3 7.267 9 .842 2.7 3.596 0l6.425 6.3L16.447 0 19.2 2.7 12.775 9l6.425 6.3" fill="#B7B7B7" fillRule="evenodd"/>
      </svg>
    )
  }
}
