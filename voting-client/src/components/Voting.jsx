import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Winner from './Winner'
import Vote from './Vote'

export default class Voting extends Component {
  render () {
    return <div>
      {this.props.winner
        ? <Winner ref='winner' winner={this.props.winner} />
        : <Vote {...this.props} />}
    </div>
  }
}

function mapStateToProps (state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

Voting.propTypes = {
  winner: PropTypes.string
}

export const VotingContainer = connect(mapStateToProps)(Voting)
