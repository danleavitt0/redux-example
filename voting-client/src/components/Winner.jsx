import React, {PropTypes, Component} from 'react'
import {ResetContainer} from './Reset'

export default class Winner extends Component {
  render () {
    let {winner} = this.props
    return (
      <div className='winner'>
        Winner is {winner}
        <ResetContainer/>
      </div>
    )
  }
}

Winner.propTypes = {
  winner: PropTypes.string
}
