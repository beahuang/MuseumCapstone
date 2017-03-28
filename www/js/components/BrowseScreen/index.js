import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';
import { Link } from 'react-router-dom';


const api_key = config.HARVARD_ART_MUSEUM_API_KEY;

export default class BrowseScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: 'On view',
      popularItems: []
    };
  }

  componentWillMount() {
    axios.get(`http://api.harvardartmuseums.org/object?apikey=${api_key}&hasimage=1`)
    .then( ( res ) => {
      this.setState({
        popularItems:  res.data.records
      });
    });
  }

  render() {
    return (
      <div>
        <Link to='/search-results'>
          <input type='search' name='browse' placeholder='Search Collection'/>
        </Link>
        <div>
          <p>{ this.state.title }</p>
        </div>
        <ul className='browse-screen__container'>
          {
            this.state.popularItems.map( ( item, i ) => {
              return (
                <li className='browse-screen__item' key={ i }>
                  <img className='browse-screen__image' src={ item.primaryimageurl }/>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
