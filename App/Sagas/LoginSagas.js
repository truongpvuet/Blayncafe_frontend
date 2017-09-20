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
import { Actions } from 'react-native-router-flux'
import LoginActions from '../Redux/LoginRedux'
import UserprofileActions from '../Redux/UserProfileRedux'
import EventListActions from '../Redux/ListEventsRedux'

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
      yield put(UserprofileActions.userProfileRequest())
      yield put(EventListActions.listEventsRequest())
      yield call(() => Actions.pop())
    }
  } else {
    yield put(LoginActions.loginFailure())
  }
}

export function * doBackHome () {
  yield call(() => Actions.pop())
}

// const createData = (photoUri, url) => {
//   const data = new FormData()
//   data.append('name', 'image') // you can append anyone.
//   data.append('image', {
//     uri: photoUri,
//     type: 'image/jpeg', // or photo.type
//     name: 'testPhotoName'
//   })
//   return fetch(url, {
//     method: 'post',
//     body: data
//   }).then(res => {
//     console.log(res)
//     return res
//   }).catch(error => ({ error }))
// }

export function * doRegister (api, action) {
  const { studentInfo, images } = action
  const uploadStudentInfo = {
    familyName: studentInfo.familyName,
    giveName: studentInfo.giveName,
    sex: studentInfo.sex,
    dateOfBirth: studentInfo.dateOfBirth,
    department: studentInfo.department,
    password: studentInfo.password,
    email: studentInfo.email,
    admissionYear: studentInfo.admissionYear || 2017,
    studentNumber: studentInfo.studentNumber,
    remark: '',
    address: studentInfo.address || '',
    phoneNumber: studentInfo.phoneNumber || ''
  }
  let profileImageUrlResponse, studentCardUrlResponse
  if (images.profile) {
    profileImageUrlResponse = yield call(api.uploadImage, images.profile)
  }
  if (images.studentCard) {
    studentCardUrlResponse = yield call(api.uploadImage, images.studentCard)
  }
  if (profileImageUrlResponse && profileImageUrlResponse.error) {
    yield put(LoginActions.signUpFailure(profileImageUrlResponse.error))
    return
  }
  if (studentCardUrlResponse && studentCardUrlResponse.error) {
    yield put(LoginActions.signUpFailure(studentCardUrlResponse.error))
    return
  }
  uploadStudentInfo['profileImage'] = profileImageUrlResponse ? `${api.BASE_URL}${profileImageUrlResponse.response.imageUrl}` : ''
  uploadStudentInfo['studentCard'] = studentCardUrlResponse ? `${api.BASE_URL}${studentCardUrlResponse.response.imageUrl}` : ''
  const { error } = yield call(api.doRegister, uploadStudentInfo)
  if (!error) {
    yield put(LoginActions.signUpSuccess())
    yield call(() => Actions.signupSucess())
  } else {
    yield put(LoginActions.signUpFailure())
  }
}
