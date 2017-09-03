import { takeLatest } from 'redux-saga/effects'
// import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'
import * as API from '../Services/Blayncafe'

/* ------------- Types ------------- */

// import { StartupTypes } from '../Redux/StartupRedux'
// import { GithubTypes } from '../Redux/GithubRedux'
import { ListEventsTypes } from '../Redux/ListEventsRedux'
import { UserProfileTypes } from '../Redux/UserProfileRedux'

/* ------------- Sagas ------------- */

// import { startup } from './StartupSagas'
// import { getUserAvatar } from './GithubSagas'
import { getListEvents } from './ListEventsSagas'
import { getUserProfile } from './UserProfileSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // // some sagas only receive an action§
    // takeLatest(StartupTypes.STARTUP, startup),

    // // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    takeLatest(ListEventsTypes.LIST_EVENTS_REQUEST, getListEvents, api),
    takeLatest(UserProfileTypes.USER_PROFILE_REQUEST, getUserProfile, api)
  ]
}
