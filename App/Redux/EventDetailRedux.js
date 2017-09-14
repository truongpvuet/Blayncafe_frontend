import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setEventDetail: ['data', 'registered'],
  joinEventRequest: ['eventId'],
  joinEventSuccess: null,
  joinEventFailed: ['message'],
  cancelEventRequest: ['eventId'],
  cancelEventSuccess: null,
  cancelEventFailed: ['message']
})

export const EventDetailTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  registered: false,
  fetching: false,
  errorMessage: null
})

/* ------------- Reducers ------------- */

// set event detail
export const setEventDetail = (state, action) => {
  let { data, registered } = action
  return state.merge({ data, registered })
}

export const joinEventRequest = (state, action) =>
  state.merge({ fetching: true })

export const joinEventSuccess = (state, action) =>
  state.merge({ fetching: false, registered: true })

export const joinEventFailed = (state, action) =>
  state.merge({ fetching: false, errorMessage: action.message })

export const cancelEventRequest = (state, action) =>
  state.merge({ fetching: true })

export const cancelEventSuccess = (state, action) =>
  state.merge({ fetching: false, registered: false })

export const cancelEventFailed = (state, action) =>
  state.merge({ fetching: false, errorMessage: action.message })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_EVENT_DETAIL]: setEventDetail,
  [Types.JOIN_EVENT_REQUEST]: joinEventRequest,
  [Types.JOIN_EVENT_SUCCESS]: joinEventSuccess,
  [Types.JOIN_EVENT_FAILED]: joinEventFailed,
  [Types.CANCEL_EVENT_REQUEST]: cancelEventRequest,
  [Types.CANCEL_EVENT_SUCCESS]: cancelEventSuccess,
  [Types.CANCEL_EVENT_FAILED]: cancelEventFailed
})
