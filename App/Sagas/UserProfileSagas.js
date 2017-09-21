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
  if (!accessToken) {
    yield put(UserProfileActions.userProfileFailure('You are not logged in'))
    return
  }
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

export function * updateProfile (api, action) {
  const { payload: { profile, image } } = action
  if (image.profile) {
    const uploadProfileResult = yield call(api.uploadImage, image.profile)
    if (!uploadProfileResult.error) {
      profile['profileImage'] = `${api.BASE_URL}${uploadProfileResult.response.imageUrl}`
    }
  }
  const accessToken = yield select(state => state.auth.accessToken)
  const { error, response } = yield call(api.updateProfile, accessToken.accessToken, profile)

  if (!error) {
    yield put(UserProfileActions.submitInfoSuccess(response))
  } else {
    yield put(UserProfileActions.submitInfoFailure())
  }
}

export function * getBlaynHistory (api, action) {
  const accessToken = yield select(state => state.auth.accessToken)
  if (!accessToken) {
    yield put(UserProfileActions.userHistoryFailure('You are not logged in'))
    return
  }
  const { error, response } = yield call(api.getBlaynHistory, accessToken.accessToken)
  console.log(error, response)
  if (!error) {
    yield put(UserProfileActions.userHistorySuccess(response))
  } else {
    yield put(UserProfileActions.userHistoryFailure())
  }
}
