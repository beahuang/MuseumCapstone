import React, { Component } from 'react'
import BeaconPiece from '../../components/BeaconPiece';
import axios from 'axios';
import config from '../../config';

const AUTH_TOKEN = config.IBEACON_TOKEN;
const api_key = config.HARVARD_ART_MUSEUM_API_KEY;

const gimbalHeroku = axios.create({
  baseURL: 'https://rocky-basin-65329.herokuapp.com/',
});

export default class WanderContainer extends Component {
  constructor() {
    super();
    this.state = {
      position: null,
      beaconPieces: [],
      beaconData: []
    }
  }

  componentWillMount() {
    if ( 'geolocation' in navigator ) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.setState({
          position: pos.coords
        });
        this.filterBeaconsBy( 30 );
      })
    }
    this.getBeacons();
  }

  getBeacons() {
    gimbalHeroku.get('/')
    .then( res => {
      this.setState({
        beaconData: res.data
      });
    });
  }


  filterBeaconsBy( feet ) {
    let filteredBeacons = this.state.beaconData.filter( beacon => {
      let lat = beacon.latitude ? beacon.latitude : beacon.gimbal_latitude;
      let long = beacon.longitude ? beacon.longitude : beacon.gimbal_longitude;
      let distance = this.distance( lat, long, this.state.position.latitude, this.state.position.longitude );

      return distance < feet;
    })

    let beaconPieces = filteredBeacons.reduce( ( acc, val ) => {
      acc.push( val.beacon_attributes.objectnumber );
      return acc;
    }, []);

    this.getBeaconPieces( beaconPieces );
  }

  getBeaconPieces( beaconPieces ) {
    let objectQuery = beaconPieces.join(' OR ');
    axios.get(`/object?apikey=${ api_key }&objectnumber=${ objectQuery }`)
    .then( res => {
      this.setState({
        beaconPieces: res.data.records
      });
    });
  }

  // helper function that returns distance in feet
  distance( lat1, lon1, lat2, lon2 ) {
    let radlat1 = Math.PI * lat1/180;
    let radlat2 = Math.PI * lat2/180;
    let theta = lon1 - lon2;
    let radtheta = Math.PI * theta/180;
    let dist = Math.sin( radlat1 ) * Math.sin( radlat2 ) + Math.cos( radlat1 ) * Math.cos( radlat2 ) * Math.cos( radtheta );
    dist = Math.acos( dist );
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515 * 5280;

    return dist
  }

  render () {
    return (
      <div className='wander-container'>
        <div className='wander-content'>
          {
            this.state.position ? <h1 className='wander--title'>Pieces closest to you:</h1>
          : <h1 className='wander--title'>Getting your location...</h1>
          }
          {
            this.state.beaconPieces.map( ( piece, i ) => {
              return (
                <BeaconPiece piece={ piece } key={ i }/>
              )
            })
          }
        </div>
      </div>
    )
  }
}
