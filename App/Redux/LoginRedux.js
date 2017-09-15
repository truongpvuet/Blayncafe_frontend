import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['accessToken', 'userProfile'],
  loginFailure: null,
  logout: null,
  signUpRequest: ['studentInfo'],
  signUpSuccess: null,
  signUpFailure: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  accessToken: null,
  userProfile: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { accessToken, userProfile } = action
  return state.merge({ fetching: false, error: null, accessToken, userProfile })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const logout = state =>
  state.merge(INITIAL_STATE)

export const signupRequest = state =>
  state.merge({ fetching: true })

export const signupSuccess = state =>
  state.merge({ fetching: false })

export const signupFailure = state =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,
  [Types.SIGN_UP_REQUEST]: signupRequest,
  [Types.SIGN_UP_SUCCESS]: signupSuccess,
  [Types.SIGN_UP_FAILURE]: signupFailure
})
