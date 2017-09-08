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

import { call, put, select } from 'redux-saga/effects'
import UserProfileActions from '../Redux/UserProfileRedux'

export function * getUserProfile (api, action) {
  // make the call to the api
  const accessToken = yield select(state => state.auth.accessToken)
  const { error, response } = yield call(api.getuserProfile, accessToken.accessToken)

  // success?
  if (!error) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(UserProfileActions.userProfileSuccess(response))
  } else {
    yield put(UserProfileActions.userProfileFailure(error))
  }
}
