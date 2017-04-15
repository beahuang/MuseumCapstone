import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const api_key = config.HARVARD_ART_MUSEUM_API_KEY;
axios.defaults.baseURL = 'http://api.harvardartmuseums.org';

const objectNumbers = ['1951.60', '1943.100', '1945.27'];

export default class TourOverview extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      stops: []
    }
  }

  componentWillMount() {
    if ( this.props.location.state ) {
      const tags = this.props.location.state.tags.join(', ');
      this.setState({
        featuredImg: `./img/${this.props.location.state.src}`,
        title: this.props.location.state.title,
        tags: tags
      });
    } else {
      this.setState({
        featuredImg: './img/featured.png',
        title: 'Title',
        tags: 'Design',
        description: 'Practice, style, and trends define fashion. Fashion in turn defines the people that wear it. Who is wearing what and why? Whether the ninth or the nineteenth century identity is channeled through clothing. Class, power, and prestige are communicated through color, material, and cut. From Tuxedos to tunics each piece of clothing communicates something unique about who these people are and what they want to present. The tour will focus on the subjects and how their clothing illustrates who they want to represent'
      })
    }
    this.getStops();
  }

  getStops() {
    let objectQuery = objectNumbers.join(' OR ');
    axios.get(`/object?apikey=${ api_key }&objectnumber=${objectQuery}`)
    .then( res => {
      this.setState({
        stops:  res.data.records
      });
    });
  }

  render() {
    return (
      <div>
        <img src={ this.state.featuredImg }/>
        <h2>{ this.state.title }</h2>
        <p>{ this.state.tags }</p>
        <div className='button'>Start Tour</div>
        <div className='button'><Link to='customize-tour'>Customize Tour</Link></div>
        <p>{ this.state.description }</p>
        <div>
          <h3>Tour Overview</h3>
          {
            this.state.stops.map( ( stop, i ) => {
              return (
                <div key={ i }>
                  <img src={ stop.primaryimageurl } width='80'/>
                  <h3>{ stop.title }</h3>
                  <span>{ stop.people[0].name }, { stop.accessionyear }</span>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
