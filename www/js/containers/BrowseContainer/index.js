import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';
import { Link } from 'react-router-dom';

import BrowseResults from '../../components/BrowseResults';
import BrowseSearch from '../../components/BrowseSearch';

const api_key = config.HARVARD_ART_MUSEUM_API_KEY;

export default class BrowseContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Near you',
      popularItems: [],
      popularSearches: [
        'van gogh',
        'red',
        'chalk',
        'Hellenistic period',
        'Korean',
        '17th century',
        'Furniture'
      ],
      searching: false
    };
  }

  componentWillMount() {
    axios.get(`http://api.harvardartmuseums.org/object?apikey=${ api_key }&hasimage=1`)
    .then( ( res ) => {
      this.setState({
        popularItems:  res.data.records
      });
    });
  }

  setSearching = ( bool ) => {
    this.setState({
      searching: bool
    });
  }

  render() {
    if ( this.state.searching ) {
      return (
        <BrowseSearch
          popularSearches={ this.state.popularSearches }
          setSearching={ this.setSearching }
        />
      )
    } else {
      return (
        <BrowseResults
          setSearching={ this.setSearching }
          popularItems={ this.state.popularItems }
        />
      )
    }
  }
}
