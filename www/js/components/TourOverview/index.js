import React, { Component } from 'react';

export default class TourOverview extends Component {
  constructor( props ) {
    super( props );
  }

  componentWillMount() {
    if ( this.props.location.state ) {
      const tags = this.props.location.tags.join(', ');

      this.setState({
        featuredImg: this.props.location.state.src,
        title: this.props.location.state.title,
        tags: tags
      });
    } else {
      this.setState({
        featuredImg: './img/featured.png',
        title: 'Title',
        tags: 'Design',
        description: 'Practice, style, and trends define fashion. Fashion in turn defines the people that wear it. Who is wearing what and why? Whether the ninth or the nineteenth century identity is channeled through clothing. Class, power, and prestige are communicated through color, material, and cut. From Tuxedos to tunics each piece of clothing communicates something unique about who these people are and what they want to present. The tour will focus on the subjects and how their clothing illustrates who they want to represent',
        stops: [
          {
            harvardId: 124,
            pieceTitle: 'One piece',
            pieceBy: 'Paul Klee',
            year: '1969',
            image: './img/1-klee.jpg'
          },
          {
            harvardId: 125,
            pieceTitle: 'Two piece',
            pieceBy: 'Paul Klee',
            year: '1969',
            image: './img/2-klee.jpg'
          },
          {
            harvardId: 126,
            pieceTitle: 'Red piece',
            pieceBy: 'Paul Klee',
            year: '1969',
            image: './img/3-klee.jpg'
          },
          {
            harvardId: 127,
            pieceTitle: 'Blue piece',
            pieceBy: 'Paul Klee',
            year: '1969',
            image: './img/4-klee.jpg'
          }
        ]
      })
    }
  }

  render() {
    return (
      <div>
        <img src={ this.state.featuredImg }/>
        <h2>{ this.state.title }</h2>
        <p>{ this.state.tags }</p>
        <div className='button'>Start Tour</div>
        <div className='button'>Customize Tour</div>
        <p>{ this.state.description }</p>
        <div>
          <h3>Tour Overview</h3>
          {
            this.state.stops.map( ( stop, i ) => {
              return (
                <div key={ i }>
                  <img src={ stop.image } width='80'/>
                  <h3>{ stop.pieceTitle }</h3>
                  <span>{ stop.pieceBy }, { stop.year }</span>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
