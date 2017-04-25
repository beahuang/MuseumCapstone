import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';

import CompassIcon from '../../icons/Compass';
import TimelineIcon from '../../icons/Timeline';
import MapIcon from '../../icons/Map';
import BrowseIcon from '../../icons/Browse';

class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div>
        { this.props.isTourActive ?
          <nav className='nav--in-tour'>
            <div className='nav__progress-bar'>
              {
                this.props.tourItems.map( ( item, i ) => {
                  return (
                    <div className='nav__progress-bar--item' key={ i }>
                      <Link className='nav__progress-bar--link' to={ `/piece/${ item.id }` }/>
                    </div>
                  )
                })
              }
            </div>
            <ul>
              <li><NavLink to='/map' activeClassName='active'><MapIcon/></NavLink></li>
              <p>Western Fashion: Fabric and Finery<br/>Stop 1 of { this.props.tourItems.length }</p>
              <li><NavLink to='/browse' activeClassName='active'><BrowseIcon/></NavLink></li>
            </ul>
          </nav>
          :
          <nav>
            <ul>
              <li><NavLink exact to='/' activeClassName='active'><CompassIcon style={ { padding: '3.5px' } }/>Tours</NavLink></li>
              <li><NavLink to='/timeline' activeClassName='active'><TimelineIcon/>Timeline</NavLink></li>
              <li><NavLink to='/map' activeClassName='active'><MapIcon/>Map</NavLink></li>
              <li><NavLink to='/browse' activeClassName='active'><BrowseIcon/>Browse</NavLink></li>
            </ul>
          </nav>
        }
      </div>
    )
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

export default connect( mapStateToProps, mapDispatchToProps )( Navigation );
