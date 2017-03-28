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
          <p className="search-prompt">Search by keyword, title, artist, object number, or gallery number</p>
          <ul>
            {
              this.state.popularSearch.map( ( searchTerm, i ) => {
                return <li className="featured-card--tag search-suggestion" key={ i }>{ searchTerm }</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
