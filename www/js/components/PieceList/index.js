import React, { PropTypes } from 'react'

class PieceList extends React.Component {
  constructor() {
    super()
    this.state = {
      pieces: []
    }
  }

  /**
   * ~Lifecycle hook~
   *
   * Most-related pieces should not all be in the first column.
   * so instead of
   * [ 0 1 2 3 4  ] -> [ 0 3
   *                     1 4
   *                     2 - ]
   * we can arrive at  [ 0 1
   *                     2 3
   *                     4 - ]
   * and continue to use Flexbox columns for the masonry-like grid.
   */
  componentWillReceiveProps(newProps) {
    const { pieces } = newProps

    const evenMembers = pieces.filter((x, i) => i % 2 === 0)
    const oddMembers = pieces.filter((x, i) => i % 2 === 1)

    this.setState({
      pieces: [ ...evenMembers, ...oddMembers ]
    })
  }

  render() {
    const width = (window.innerWidth - 75);

    return (
      <ul className='piece-list__container'>
        { this.state.pieces ?
          this.state.pieces.map(( piece, i ) => {
            return (
              <li key={ i }>
                <img className='piece-list__image' src={ `${piece.primaryimageurl}?width=${width}` }/>
              </li>
            )
          }) :
          'No pieces, sorry.' }
      </ul>
    )
  }
}

export default PieceList;

PieceList.propTypes = {
  pieces: PropTypes.array
};
