import React, { Component } from 'react';

import IconMapAmenities from '../../icons/Map-Amenities';
import IconMapBathrooms from '../../icons/Map-Bathrooms';
import IconMapExits from '../../icons/Map-Exits';

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      floorLevel: '2',
      highlights : {
        amenities: false,
        bathrooms: false,
        exits: false,
      }
    };
  }

  /**
  * Sets global floor level, via this.setState
  * @param {string} floor
  */
  _setFloor = (floor: string) => {
    this.setState({
      floorLevel: floor
    });
  }

  /**
   * Renders the whole row of floor-changing buttons.
   * @return many <button>
   */
  _renderButtonRow() {
    let allFloors = ['L', '1', '2', '3', '4', '5'];

    return allFloors.map(floor =>
      <button
        className={ this.state.floorLevel === floor ? 'current' : '' }
        key={ floor }
        onClick={ () => this._setFloor(floor) }>
        { floor }
      </button>
    );
  }

  /**
   * Intention: toggles which map features are highlighted
   * In actuality: Changes button's highlight color
   *
   * @param  {string} mapSection    which mapSection to toggle
   */
  _toggleHighlight = (mapSection: string) => {
    this.setState((prevState, props) => {
      let { highlights } = { highlights: { } };

      highlights[mapSection] = !prevState.highlights[mapSection];
      return { highlights };
    });
  }

  render() {
    return (
      <div>
        <div className='button-row'>
          { this._renderButtonRow() }
        </div>

        <img className='w-100' src={ `../../www/img/maps/floor-${ this.state.floorLevel }.svg` }/>

        <hr/>
        <h2 className='tc'>Need to find something?</h2>

        <div className='mapHighlightFeatures'>
          <div className='toggle'>
            <button
              onClick={ () => this._toggleHighlight('amenities') }
              className={ this.state.highlights.amenities ? 'green' : '' }>
              <IconMapAmenities/>
            </button>
            Amenities
          </div>
          <div className='toggle'>
            <button
              onClick={ () => this._toggleHighlight('bathrooms') }
              className={ this.state.highlights.bathrooms ? 'blue' : '' }>
              <IconMapBathrooms/>
            </button>
            Bathrooms
          </div>
          <div className='toggle'>
            <button
              onClick={ () => this._toggleHighlight('exits') }
              className={ this.state.highlights.exits ? 'red' : '' }>
              <IconMapExits/>
            </button>
            Exits
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MapScreen;
