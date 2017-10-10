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
import { LoginTypes } from '../Redux/LoginRedux'
import { EventDetailTypes } from '../Redux/EventDetailRedux'
import { ImageUploadTypes } from '../Redux/ImageUploadRedux'
import { SponsorTypes } from '../Redux/SponsorRedux'

/* ------------- Sagas ------------- */

// import { startup } from './StartupSagas'
// import { getUserAvatar } from './GithubSagas'
import { getListEvents, getListAttendedEvents } from './ListEventsSagas'
import { getUserProfile, updateProfile, getBlaynHistory } from './UserProfileSagas'
import { doLogin, doBackHome, doRegister, isValidEmail, changePassword } from './LoginSagas'
import { joinEvent, cancelEvent } from './EventDetailSaga'
import { imageUpload } from './ImageUploadSagas'
import { getSponsor } from './SponsorSagas'

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
    takeLatest(ListEventsTypes.LIST_ATTENDED_EVENT_REQUEST, getListAttendedEvents, api),
    takeLatest(UserProfileTypes.USER_PROFILE_REQUEST, getUserProfile, api),
    takeLatest(UserProfileTypes.SUBMIT_INFO_REQUEST, updateProfile, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, doLogin, api),
    takeLatest(LoginTypes.LOGOUT, doBackHome),
    takeLatest(EventDetailTypes.JOIN_EVENT_REQUEST, joinEvent, api),
    takeLatest(EventDetailTypes.CANCEL_EVENT_REQUEST, cancelEvent, api),
    takeLatest(LoginTypes.SIGN_UP_REQUEST, doRegister, api),
    takeLatest(UserProfileTypes.USER_HISTORY_REQUEST, getBlaynHistory, api),
    takeLatest(ImageUploadTypes.IMAGE_UPLOAD_REQUEST, imageUpload, api),
    takeLatest(LoginTypes.IS_VALID_EMAIL, isValidEmail, api),
    takeLatest(LoginTypes.CHANGE_PASSWORD, changePassword, api),
    takeLatest(SponsorTypes.SPONSOR_REQUEST, getSponsor, api)
  ]
}
