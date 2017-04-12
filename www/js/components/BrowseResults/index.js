import React, { Component } from 'react';
import AddPieceModal from '../AddPieceModal';

export default class BrowseResults extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: null
    }
  }

  setActiveItem =  item => {
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
        <div>
          <h1>{ this.props.searchTerm ? this.props.searchTerm : 'Near You' }</h1>
        </div>
        <ul className='browse-screen__container'>
          {
            this.props.browsableItems.map( ( item, i ) => {
              return (
                <li className='browse-screen__item' key={ i }
                  onClick={ evt => this.setActiveItem( item ) }>
                  <img className='browse-screen__image' src={ item.primaryimageurl }/>
                </li>
              )
            })
          }
        </ul>
        { this.state.activeItem ?
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
