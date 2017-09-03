import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setEventDetail: ['data']
})

export const EventDetailTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null
})

/* ------------- Reducers ------------- */

// set event detail
export const setEventDetail = (state, action) => {
  let { data } = action
  return state.merge({ data })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_EVENT_DETAIL]: setEventDetail
})
