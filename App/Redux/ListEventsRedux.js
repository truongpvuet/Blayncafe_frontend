import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  listEventsRequest: null,
  listEventsSuccess: ['payload'],
  listEventsFailure: null,
  listAttendedEventRequest: null,
  listAttendedEventSuccess: ['payload'],
  listAttendedEventFailure: null
})

export const ListEventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  payload: null,
  attended: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const attendedEventRequest = state =>
  state.merge({ fetching: true, payload: null })

// successful api lookup
export const attendedEventSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, attended: payload })
}

// Something went wrong somewhere.
export const attendedEventFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_EVENTS_REQUEST]: request,
  [Types.LIST_EVENTS_SUCCESS]: success,
  [Types.LIST_EVENTS_FAILURE]: failure,
  [Types.LIST_ATTENDED_EVENT_REQUEST]: attendedEventRequest,
  [Types.LIST_ATTENDED_EVENT_SUCCESS]: attendedEventSuccess,
  [Types.LIST_ATTENDED_EVENT_FAILURE]: attendedEventFailure
})
