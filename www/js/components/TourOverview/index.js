import React, { Component } from 'react';

function TourItemRow( stop, i ) {
  return (
    <div key={ i }>
      <h3>{stop.pieceTitle}</h3>
      <span>{stop.pieceBy}, {stop.year}</span>
    </div>
  )
}

export default class TourOverview extends Component {

  render() {
    // in a perfect world, would be passed into this.props.tour
    const mockTourObject = {
      title: 'Art, Design and the Bauhaus',
      stops: [
        {
          harvardId: 124,
          pieceTitle: 'One piece',
          pieceBy: 'Paul Klee',
          year: '1969'
        },
        {
          harvardId: 125,
          pieceTitle: 'Two piece',
          pieceBy: 'Paul Klee',
          year: '1969'
        },
        {
          harvardId: 126,
          pieceTitle: 'Red piece',
          pieceBy: 'Paul Klee',
          year: '1969'
        },
        {
          harvardId: 127,
          pieceTitle: 'Blue piece',
          pieceBy: 'Paul Klee',
          year: '1969'
        }
      ]
    };

    return (
      <div>
        <h2>{mockTourObject.title}</h2>
        <button>Add to Tour</button>
        <button>End Tour</button>
        {mockTourObject.stops.map( (stop, i) => TourItemRow(stop, i))}
        <button>Start Tour</button>
      </div>
    );
  }
}
