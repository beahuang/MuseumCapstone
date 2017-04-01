import React from 'react';
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.5 38.5" { ...this.props }><path d="M37 7.2L35.4 0H12.9l-1.6 7.2H9.2V3.3H1.9v3.9H0v31.2h48.5V7.2H37zM3.9 5.3h3.4v1.5H3.9V5.3zm42.6 31.2H2V9.2h11L14.6 2h19.3l1.6 7.2h11.1v27.3z" /><path d="M24.3 8.6c-7 0-12.7 5.7-12.7 12.7S17.3 34 24.3 34 37 28.3 37 21.3 31.3 8.6 24.3 8.6zm0 23.5c-5.9 0-10.7-4.8-10.7-10.7 0-5.9 4.8-10.7 10.7-10.7S35 15.4 35 21.3c0 5.9-4.8 10.8-10.7 10.8z" /></svg>;
  }

}