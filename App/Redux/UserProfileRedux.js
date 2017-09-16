import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userProfileRequest: null,
  userProfileSuccess: ['payload'],
  userProfileFailure: null,
  submitInfoRequest: ['payload'],
  submitInfoSuccess: ['payload'],
  submitInfoFailure: null,
  userHistoryRequest: null,
  userHistorySuccess: ['payload'],
  userHistoryFailure: null
})

export const UserProfileTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  history: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

export const submitRequest = (state) =>
  state.merge({ fetching: true, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

export const submitSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}
// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const submitFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const historyRequest = (state) =>
  state.merge({ fetching: true, history: null })

export const historySuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, history: payload, error: null })
}

export const historyFailure = (state) =>
  state.merge({ fetching: false, history: null, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_PROFILE_REQUEST]: request,
  [Types.USER_PROFILE_SUCCESS]: success,
  [Types.USER_PROFILE_FAILURE]: failure,
  [Types.SUBMIT_INFO_REQUEST]: submitRequest,
  [Types.SUBMIT_INFO_SUCCESS]: submitSuccess,
  [Types.SUBMIT_INFO_FAILURE]: submitFailure,
  [Types.USER_HISTORY_REQUEST]: historyRequest,
  [Types.USER_HISTORY_SUCCESS]: historySuccess,
  [Types.USER_HISTORY_FAILURE]: historyFailure
})
