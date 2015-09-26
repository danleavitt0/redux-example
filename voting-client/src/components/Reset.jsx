import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

export default class Reset extends Component {

  render () {
    let {reset} = this.props
    return <button onClick={() => reset()}>Reset</button>
  }
}

function mapStateToProps (state) {
  return {
    winner: state.get('winner')
  }
}

export const ResetContainer = connect(
  mapStateToProps,
  actionCreators
)(Reset)
