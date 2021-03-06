import React, { Component } from 'react';
import AddPieceModal from '../AddPieceModal';
import { Link } from 'react-router-dom';

export default class BrowseResults extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: null
    }
  }

  setActiveItem = item => {
    this.setState({
      activeItem: item
    })
  }

  render() {
    return (
      <div className='browse-screen__wrapper'>
        <input className='browse-input' type='search' readOnly placeholder='Search Collection'
          onClick={ () => { this.props.setSearching( true ) } }
          value={ this.props.searchTerm ? this.props.searchTerm : '' }/>
        <div className='browse-screen__header-container'>
          <h1 className='browse-screen__header' >{ this.props.searchTerm ? this.props.searchTerm : 'Near You' }</h1>
          { this.props.searchTerm
            ? 
              <p className='browse-screen__filter' onClick={ () => { this.props.setOnView( false ) } }>filter</p>
              
            : null
          }
        </div>
        <ul className='browse-screen__container'>
          {
            this.props.browsableItems.map( ( item, i ) => {
              return (
                <li className='browse-screen__item' key={ i }
                  onClick={ evt => this.setActiveItem( item ) }>
                  {
                    this.props.isTourActive
                    ? <img className='browse-screen__image' src={ item.primaryimageurl }/>
                    : <Link to={`/piece/${item.objectid}`}>
                        <img className='browse-screen__image' src={ item.primaryimageurl }/>
                      </Link>
                  }
                </li>
              )
            })
          }
        </ul>
        { this.props.isTourActive && this.state.activeItem ?
          <AddPieceModal
            activeItem={ this.state.activeItem }
            title='Add this piece to your tour?'
            updateTourList={ this.props.updateTourList }
            setActiveItem={ this.setActiveItem }
          />
          : null
        }
      </div>
    );
  }
}
