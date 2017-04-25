import React, { Component } from 'react'

class ArrivalModal extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 1 }
  }

  componentWillMount() {
    this.startTimer();
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({ count: (this.state.count + 1) })
  }

  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(() => this.tick(), 1000) // milliseconds
  }

  stopTimer () {
    clearInterval(this.timer)
  }

  render() {
    // <button onClick={ () => this.props.onClose() }>Close Modal</button>

    return (
      <div>
        You have arrived at {this.props.piece.title}

        <div className='timer'>
          <h1>{this.state.count}</h1>
          <div>
            <button
              className='button'
              onClick={ () => this.startTimer() }>Start</button>
            <button
              className='button'
              onClick={ () => this.stopTimer() }>Stop</button>
          </div>

          <p>
            What do you see?<br/>
            Does this remind you of anything?<br/>
            Notice anything out of place?<br/>
            Who do you think this is?
          </p>
        </div>
      </div>
    );
  }
}

export default ArrivalModal;
