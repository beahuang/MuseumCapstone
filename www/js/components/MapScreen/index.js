import React, { Component } from 'react';

import AmenitiesIcon from '../../icons/Map-Amenities';
import BathroomIcon from '../../icons/Map-Bathrooms';

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      floorLevel: '2',
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
        className={this.state.floorLevel === floor ? 'current' : ''}
        key={floor}
        onClick={() => this._setFloor(floor)}>
        {floor}
      </button>
    );
  }

  render() {
    return (
      <div>
        <div className='button-row'>
          {this._renderButtonRow()}
        </div>
        <hr/>
        <h2 className='tc'>Need to find something?</h2>

        <img className='w-100' src={`../../www/img/maps/floor-${this.state.floorLevel}.svg`}/>

      </div>
    );
  }
}

module.exports = MapScreen;
