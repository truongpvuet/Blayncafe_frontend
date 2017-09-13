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
import ListEventsActions from '../Redux/ListEventsRedux'

export function * getListEvents (api, action) {
  // make the call to the api
  const accessToken = yield select(state => state.auth.accessToken)
  if (!accessToken) {
    yield put(ListEventsActions.listEventsFailure())
    return
  }
  const { response, error } = yield call(api.getlistEvents, accessToken.accessToken)
  // success?
  if (!error) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    const listJoinedEventResult = yield call(api.getJoinedEvents, accessToken.accessToken)
    if (!listJoinedEventResult.error) {
      yield put(ListEventsActions.listEventsSuccess({
        events: response,
        joinedEvents: listJoinedEventResult.response
      }))
    } else {
      yield put(ListEventsActions.listEventsSuccess(response))
    }
  } else {
    yield put(ListEventsActions.listEventsFailure())
  }
}
