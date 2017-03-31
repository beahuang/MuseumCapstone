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
      searchTerm: '',
      browsableItems: [],
      popularSearches: [
        'van gogh',
        'red',
        'chalk',
        'Hellenistic period',
        'Korean',
        '17th century',
        'Furniture'
      ],
      tourList: [],
      searching: false
    };
  }

  componentWillMount() {
    this.updateBrowsableItems('');
  }

  updateBrowsableItems( term ) {
    axios.get(`http://api.harvardartmuseums.org/object?apikey=${ api_key }&hasimage=1&keyword=${term}`)
    .then( ( res ) => {
      this.setState({
        browsableItems:  res.data.records
      });
    });
  }

  setSearching = ( bool ) => {
    this.setState({
      searching: bool
    });
  }

  setSearchTerm = ( term ) => {
    this.setState({
      searchTerm: term
    });
    this.updateBrowsableItems( term );
  }

  updateTourList = ( item ) => {
    console.log( item );
  }

  render() {

    return this.state.searching ?

    <BrowseSearch
      setSearching={ this.setSearching }
      setSearchTerm={ this.setSearchTerm }
      popularSearches={ this.state.popularSearches }
      searchTerm={ this.state.searchTerm }
    />
    :
    <BrowseResults
      setSearching={ this.setSearching }
      updateTourList={ this.updateTourList }
      browsableItems={ this.state.browsableItems }
      searchTerm={ this.state.searchTerm }
    />
  }
}
