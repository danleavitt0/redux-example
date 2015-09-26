import {List, Map} from 'immutable'

const setState = (state, newState) => state.merge(newState)

function vote (state, entry) {
  const currentPair = state.getIn(['vote', 'pair'])
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry)
  } else {
    return state
  }
}

function resetVote (state) {
  const hasVoted = state.get('hasVoted')
  const currentPair = state.getIn(['vote', 'pair'], List())
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted')
  } else {
    return state
  }
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state))
    case 'VOTE':
      return vote(state, action.entry)
    case 'RESET':
      return state.remove('winner')
                  .remove('hasVoted')
  }
  return state
}
