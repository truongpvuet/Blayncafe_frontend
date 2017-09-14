import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setEventDetail: ['data', 'registered'],
  joinEventRequest: ['eventId'],
  joinEventSuccess: null,
  joinEventFailed: ['message']
})

export const EventDetailTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  registered: false,
  joining: false,
  errorMessage: null
})

/* ------------- Reducers ------------- */

// set event detail
export const setEventDetail = (state, action) => {
  let { data, registered } = action
  return state.merge({ data, registered })
}

export const joinEventRequest = (state, action) =>
  state.merge({ joining: true })

export const joinEventSuccess = (state, action) =>
  state.merge({ joining: false, registered: true })

export const joinEventFailed = (state, action) =>
  state.merge({ joining: false, errorMessage: action.message })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_EVENT_DETAIL]: setEventDetail,
  [Types.JOIN_EVENT_REQUEST]: joinEventRequest,
  [Types.JOIN_EVENT_SUCCESS]: joinEventSuccess,
  [Types.JOIN_EVENT_FAILED]: joinEventFailed
})
