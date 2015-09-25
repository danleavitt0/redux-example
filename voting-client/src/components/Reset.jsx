import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

export default class Reset extends Component {
  render () {
    <div onClick={() => this.props.reset()}>Reset</div>
  }
}

Reset.propTypes = {
  reset: PropTypes.function
}

export const ResetContainer = connect(
  actionCreators
)(Reset)
