import React, { PropTypes } from 'react';
import axios from 'axios';

import config from '../../config';
import PieceList from '../../components/PieceList';

const api_key = config.HARVARD_ART_MUSEUM_API_KEY;
axios.defaults.baseURL = 'http://api.harvardartmuseums.org';

class RelatedPieces extends React.Component {
  constructor() {
    super();
    this.state = {
      // piece: this.props.piece,
      relatedPieces: [ ]
    }
  }

  /**
   * A bunch of axios calls. Sets state.relatedPieces to an array of like, 10 related pieces.
   *
   * Related Pieces are:
   *  - "Related Pieces," as described by Harvard Art Museums API. But they have a really narrow
   *    definition, and they're often scans of the piece, and not on view.
   *  - Pieces by the same Artist (if...there's a named artist)
   *  ~~ and then it gets a little fishier, if there aren't enough pieces.
   *  - Pieces in the same "Period" and the same Classification
   *  - Pieces of the same Classification (painting? Drawing? Sculpture?) in the same Century and Culture
   *
   * Results from the looser search will only be added if there are less than 7 pieces. If that's
   * the case, it'll populate such that the total length of the relatedPieces array is 10.
   */
  componentWillMount() {
    const { props: { piece } } = this

    const sharedPerms = {
      gallery: 'any',
      hasimage: 1,
      apikey: api_key,
      q: 'imagepermissionlevel:0'
    }

    // First ditch attempt. This conditional branch will very likely not return anything,
    // but it's definitely worth a try.
    if (piece.relatedcount > 0 && piece.related.filter(x => (x.accesslevel > 0)).length > 0) {
      axios.get('/object', {
        params: {
          relatedto: piece.objectid,
          ...sharedPerms
        }
      })
        .then((res) => {
          this.setState((prevState) => ({
            relatedPieces : [ ...prevState.relatedPieces, ...res.data.records ]
          }))
        })
    }

    // Add all the pieces in galleries, with the same Artist
    if (piece.peoplecount > 0) {
      let searchParams = {
        size: 10 - this.state.relatedPieces.length,
        ...sharedPerms
      }

      searchParams.person = piece.people[0].personid

      axios.get('/object', {
        params: searchParams
      })
        .then((res) => {
          let returned = res.data.records.filter(x => x.objectid !== piece.objectid)

          this.setState((prevState) => ({
            relatedPieces : [ ...prevState.relatedPieces, ...returned ]
          }))
        })
    }

    // Add pieces from the same period/century and culture, if any of those are available.
    if(this.state.relatedPieces.length < 7) {
      let searchParams = {
        ...sharedPerms
      }

      if (piece.period) {
        searchParams.period = piece.period
      } else if (piece.century) {
        searchParams.century = piece.century
      }

      if (piece.culture) {
        searchParams.culture = piece.culture
      }

      axios.get('/object', {
        params: searchParams
      })
        .then((res) => {
          const existingRelatedIds = this.state.relatedPieces.map(x => x.objectid)

          // Don't add the piece itself to a list of related pieces, and deDupe existing results,
          // because we just reran a looser search.
          const returned = res.data.records.filter((x) => (
            x.objectid !== piece.objectid && existingRelatedIds.indexOf(x.objectid) < 0 ))

          this.setState((prevState) => ({
            relatedPieces : [ ...prevState.relatedPieces, ...returned ].slice(0, 10)
          }))
        })
    }
  }

  render() {
    return (
      <PieceList pieces={ this.state.relatedPieces } />
    )
  }
}

export default RelatedPieces;
