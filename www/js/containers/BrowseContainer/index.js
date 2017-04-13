import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';

import BrowseResults from '../../components/BrowseResults';
import BrowseSearch from '../../components/BrowseSearch';

const api_key = config.HARVARD_ART_MUSEUM_API_KEY;
axios.defaults.baseURL = 'http://api.harvardartmuseums.org';

class BrowseContainer extends Component {
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
      searching: false
    };
  }

  componentWillMount() {
    this.updateBrowsableItems();
  }

  updateBrowsableItems( term = '', isOnView = false ) {
    let keyword = term ? `&keyword=${term}`: '';
    let onView = isOnView ? '&gallery=any': '';
    axios.get(`/object?apikey=${ api_key }&hasimage=1${keyword}${onView}`)
    .then( res => {
      this.setState({
        browsableItems:  res.data.records
      });
    });
  }

  setSearching = bool => {
    this.setState({
      searching: bool
    });
  }

  setSearchTerm = term => {
    this.setState({
      searchTerm: term
    });
    this.updateBrowsableItems( term );
  }

  updateTourList = item => {
    this.props.addToTour( item );
  }

  setOnView = bool => {
    this.updateBrowsableItems( this.state.searchTerm, bool );
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
      setOnView={ this.setOnView }
      browsableItems={ this.state.browsableItems }
      searchTerm={ this.state.searchTerm }
      tourItems={ this.props.tourItems }
      isTourActive={ this.state.isTourActive }
    />
  }
}

function mapStateToProps( state ) {
  return {
    tourItems: state.tourItems,
    isTourActive: state.isTourActive
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( ActionCreators, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( BrowseContainer );
