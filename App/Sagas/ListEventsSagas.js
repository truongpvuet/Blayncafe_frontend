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
  const { response, error } = yield call(api.getlistEvents)
  // success?
  if (!error) {
    yield put(ListEventsActions.listEventsSuccess({events: response}))
    // const accessToken = yield select(state => state.auth.accessToken)
    // if (!accessToken) {
    //   return
    // }
    // const listJoinedEventResult = yield call(api.getJoinedEvents, accessToken.accessToken)
    // if (!listJoinedEventResult.error) {
    //   yield put(ListEventsActions.listEventsSuccess({
    //     events: response,
    //     joinedEvents: listJoinedEventResult.response
    //   }))
    // }
  } else {
    yield put(ListEventsActions.listEventsFailure())
  }
}

export function * getListAttendedEvents (api, action) {
  const accessToken = yield select(state => state.auth.accessToken)
  if (!accessToken) {
    yield put(ListEventsActions.listAttendedEventFailure())
    return
  }
  const { response, error } = yield call(api.getAttendedEvents, accessToken.accessToken)
  if (!error) {
    yield put(ListEventsActions.listAttendedEventSuccess(response))
  } else {
    yield put(ListEventsActions.listAttendedEventFailure())
  }
}
