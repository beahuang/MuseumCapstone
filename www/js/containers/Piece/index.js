import React, { PropTypes, Component } from 'react';
import axios from 'axios';

import config from '../../config';

const api_key = config.HARVARD_ART_MUSEUM_API_KEY;
axios.defaults.baseURL = 'http://api.harvardartmuseums.org';

import PieceScreen from '../../components/PieceScreen'

class Piece extends Component {
  constructor() {
    super();
    this.state = { };
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
  }

  render() {
    return (
      <div>
        { this.state.piece ?
          <PieceScreen piece={ this.state.piece }/> :
          this.state.error }
      </div>
    )
  }
}

export default Piece;
