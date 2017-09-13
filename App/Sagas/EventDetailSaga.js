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
import EventDetailActions from '../Redux/EventDetailRedux'

export function * joinEvent (api, action) {
  const { eventId } = action
  const accessToken = yield select(state => state.auth.accessToken)
  if (!accessToken) {
    yield put(EventDetailActions.joinEventFailed('You are not logged in'))
    return
  }
  // make the call to the api
  const result = yield call(api.joinEvent, accessToken.accessToken, eventId)

  // success?
  if (!result.error) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(EventDetailActions.joinEventSuccess())
  } else {
    yield put(EventDetailActions.joinEventFailed())
  }
}
