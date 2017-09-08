/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation'

export function * doLogin (api, action) {
  const { username, password } = action
  // make the call to the api
  const {error, response} = yield call(api.doLogin, username, password)

  // success?
  if (!error) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    // const accessToken = select(state => state.auth.accessToken)
    const result = yield call(api.getProfile, response)
    if (!result.error) {
      yield put(LoginActions.loginSuccess(response, result.response))
      yield put(NavigationActions.navigate({ routeName: 'HomeScreen' }))
    }
  } else {
    yield put(LoginActions.loginFailure())
  }
}

export function * doBackHome () {
  yield put(NavigationActions.navigate({ routeName: 'HomeScreen' }))
}
