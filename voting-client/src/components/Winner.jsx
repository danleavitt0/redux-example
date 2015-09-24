import React, {PropTypes, Component} from 'react'

export default class Winner extends Component {
  render () {
    let {winner} = this.props
    return (
      <div className='winner'>
        Winner is {winner}
      </div>
    )
  }
}

Winner.propTypes = {
  winner: PropTypes.string
}
