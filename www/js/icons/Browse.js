import React from 'react';

export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="381 291 30 30" { ...this.props }><path d="M402.6 300.9l-6-6.6c-.2-.2-.4-.3-.6-.3-.2 0-.4.1-.6.3l-6 6.6h-5.1V318h23.5v-17.1h-5.2zm-6.6-5.8l5.2 5.7h-10.4l5.2-5.7zm10.7 21.9h-21.4v-15.1h21.4V317z" /><path d="M391.7 314.6c.1 0 .3-.1.4-.1l3.3-3.3c1.6 1.1 3.8.6 4.9-1s.6-3.8-1-4.9c-1.6-1.1-3.8-.6-4.9 1-.9 1.3-.8 3 .2 4.2l-3.3 3.3c-.2.2-.2.5 0 .7.1 0 .2.1.4.1zm3.8-8.2c1-1 2.6-1 3.6 0s1 2.6 0 3.6-2.6 1-3.6 0-1-2.6 0-3.6z" /></svg>;
  }
}
