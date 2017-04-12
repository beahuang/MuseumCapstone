import React from 'react';

export default class SVG extends React.Component {
  render() {
    return <svg width="22" height="11" viewBox="0 0 22 11" xmlns="http://www.w3.org/2000/svg" { ...this.props }>
    <path d="M20.328 10.42c-.253 0-.496-.097-.68-.27l-8.51-8-8.51 8c-.26.245-.633.332-.975.228-.343-.103-.604-.382-.685-.73-.082-.348.03-.713.29-.958l8.89-8.31c.56-.528 1.438-.528 2 0l8.89 8.31c.3.28.397.714.247 1.096-.15.38-.518.633-.927.634h-.03z"/>
    </svg>
  }
}
