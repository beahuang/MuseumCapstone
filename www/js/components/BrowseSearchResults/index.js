import React, { Component } from 'react';

export default class BrowseScreen extends Component {
  constructor() {
    super();
    this.state = {
      popularSearch: [
        'van gogh',
        'red',
        'chalk',
        'Hellenistic period',
        'Korean',
        '17th century',
        'Furniture'
      ]
    };
  }

  render() {
    return (
      <div>
        <input type='search' name='browse' placeholder='Search Collection'/>
        <div>
          <h2>Search by keyword, title, artist, object number, or gallery number</h2>
          <ul>
            {
              this.state.popularSearch.map( ( searchTerm, i ) => {
                return <li className="featured-card--tag" key={ i }>{ searchTerm }</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
