import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';

import ReactModal from 'react-modal';

import PieceScreen from '../../components/PieceScreen';
import ArrivalModal from '../../components/ArrivalModal';

import config from '../../config';

const api_key = config.HARVARD_ART_MUSEUM_API_KEY;
axios.defaults.baseURL = 'http://api.harvardartmuseums.org';

class Piece extends Component {
  constructor() {
    super();
    this.state = {
      showModal: true
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  componentWillMount() {
    axios.get(`/object/${this.props.match.params.id}?apikey=${ api_key }`)
    .then((res) => {
      if (!res.data.error) {
        this.setState({
          piece : res.data
        })
      } else {
        this.setState({ error : res.data.error })
      }
    })

    if ( this.props.location.state ) {
      this.setTourStates();
    }
  }

  setTourStates() {
    this.props.setTourActive( true );
    this.props.createTour( this.props.location.state.stops );
  }

  render() {
    return (
      <div>
        { this.props.isTourActive && this.state.piece ?
          <div>
            <ReactModal
               isOpen={ this.state.showModal }
               contentLabel='You Have Arrived'
               className='arrival-modal__wrapper'
               overlayClassName='arrival-modal__background'
            >
              <ArrivalModal piece={ this.state.piece } onClose={ this.handleCloseModal }/>
            </ReactModal>
            <PieceScreen piece={ this.state.piece }/>
          </div>
          : this.state.piece ?
            <PieceScreen piece={ this.state.piece }/> :
            this.state.error }

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

export default connect( mapStateToProps, mapDispatchToProps )( Piece );
