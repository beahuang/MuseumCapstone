import React from 'react';
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.7 45.6" { ...this.props }><path d="M37.3 45.6c-.3 0-.7-.1-1-.2l-12.4-6.5-12.4 6.5c-.7.4-1.6.3-2.3-.2-.7-.5-1-1.3-.9-2.1l2.4-13.8-10-9.8c-.6-.6-.8-1.4-.5-2.2.3-.8.9-1.3 1.7-1.5l13.9-2L22 1.2C22.3.5 23 0 23.9 0s1.6.5 1.9 1.2L32 13.8l13.9 2c.8.1 1.5.7 1.7 1.5.3.8 0 1.6-.5 2.2L37 29.3l2.4 13.8c.1.8-.2 1.6-.9 2.1-.3.3-.8.4-1.2.4zm-13.4-9l13.4 7h.2l.1-.1L35 28.6 45.7 18s.1-.1 0-.2c0-.1-.1-.1-.1-.1l-14.9-2.2L24 2.1s0-.1-.1-.1-.1.1-.1.1l-6.7 13.5-15 2.2s-.1 0-.1.1v.1l10.8 10.5-2.6 14.9s0 .1.1.1c.1.1.1 0 .2 0l13.4-6.9z" /></svg>;
  }

}