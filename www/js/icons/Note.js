import React from 'react';
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.2 40.5" { ...this.props }><path d="M36.3 0H10.9C4.9 0 0 4.9 0 10.9v28.5c0 .5.4.9.9 1 .2.1.3.1.5.1s.5-.1.7-.2l9.6-5.9h24.6c6 0 10.9-4.9 10.9-10.9V10.9c0-6-4.9-10.9-10.9-10.9zm8.9 23.5c0 4.9-4 8.9-8.9 8.9H11.2L2 38V10.9C2 6 6 2 10.9 2h25.4c4.9 0 8.9 4 8.9 8.9v12.6z" /><path d="M41.3 9.6H10.1c-.6 0-1 .4-1 1s.4 1 1 1h31.1c.6 0 1-.4 1-1s-.4-1-.9-1zM35.4 15.3H10.1c-.6 0-1 .4-1 1s.4 1 1 1h25.3c.6 0 1-.4 1-1s-.4-1-1-1zM31.1 21.1h-21c-.6 0-1 .4-1 1s.4 1 1 1H31c.6 0 1-.4 1-1s-.4-1-.9-1z" /></svg>;
  }

}