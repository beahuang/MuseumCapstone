import React, { Component } from 'react'
import axios from 'axios';
import config from '../../config';

import beacons from './beacons';

const AUTH_TOKEN = config.IBEACON_TOKEN;

const gimbal = axios.create({
  baseURL: 'https://manager.gimbal.com/',
});
gimbal.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default class WanderContainer extends Component {
  constructor() {
    super();
    this.state = {
      position: {
        latitude: 'loading...',
        longitude: 'loading...'
      },
      beacons: beacons
    }
  }

  componentWillMount() {
    if ( 'geolocation' in navigator ) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.setState({
          position: pos.coords
        })
      })
    }
  }

  componentDidMount() {
    // gimbal.get('/api/beacons')
    // .then( res => {
    //   console.log( res );
    // });
    console.log( this.state.beacons );
  }

  distance( lat1, lon1, lat2, lon2 ) {
  	let radlat1 = Math.PI * lat1/180;
  	let radlat2 = Math.PI * lat2/180;
  	let theta = lon1 - lon2;
  	let radtheta = Math.PI * theta/180;
  	let dist = Math.sin( radlat1 ) * Math.sin(radlat2) + Math.cos( radlat1 ) * Math.cos( radlat2 ) * Math.cos( radtheta );
  	dist = Math.acos( dist );
  	dist = dist * 180/Math.PI;
  	dist = dist * 60 * 1.1515;

  	return dist
  }

  render () {
    return (
      <div>
        <p>Latitude: { this.state.position.latitude }</p>
        <p>Longitude: { this.state.position.longitude }</p>
        {
          this.state.beacons.map( ( beacon, i ) => {
            return (
              <div key={ i }>
                <p>{ beacon.name }</p>
                <p>Latitude: { beacon.gimbal_latitude }</p>
                <p>Longitude: { beacon.gimbal_longitude }</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
