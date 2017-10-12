import request from 'superagent'
import RNFetchBlob from 'react-native-fetch-blob'
const Buffer = require('buffer').Buffer

export const BASE_API = 'http://52.77.212.240:3000/api'
export const BASE_URL = 'http://52.77.212.240:3000'
export const getlistEvents = (accessToken) =>
  request.get(`${BASE_API}/event`)
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body.results }))
    .catch(error => ({ error }))

export const getJoinedEvents = (accessToken) =>
  request.get(`${BASE_API}/student/event`)
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const joinEvent = (accessToken, eventId) => {
  return request.post(`${BASE_API}/student/event/join`)
    .query({ eventId })
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))
}

export const cancelEvent = (accessToken, eventId) => {
  return request.post(`${BASE_API}/student/event/cancel`)
    .query({ eventId })
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))
}

export const getuserProfile = (accessToken) =>
  request.get(`${BASE_API}/student/info`)
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const doLogin = (username, password) =>
  request.get(`${BASE_API}/student/login`)
    .query({ username, password })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const getProfile = (accessToken) =>
  request.get(`${BASE_API}/student/info`)
    .set({ 'STUDENT-API-KEY': accessToken.accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const updateProfile = (accessToken, profile) =>
  request.post(`${BASE_API}/student/info`)
    .send(profile)
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const getAttendedEvents = (accessToken) =>
  request.get(`${BASE_API}/student/event`)
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const doRegister = (studentInfo) =>
  request.post(`${BASE_API}/student/register`)
    .send(studentInfo)
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const getBlaynHistory = (accessToken) =>
  request.get(`${BASE_API}/student/logs`)
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

// export const uploadImage = (image) =>
//   request.post(`http://localhost:3000/api/image/upload`)
//     .set({ 'Content-Type': 'multipart/form-data' })
//     .attach('image', image)
//     .then(response => ({ response: response.body }))
//     .catch(error => ({ error }))

export const uploadImage = (image) => {
  return (
    RNFetchBlob.fetch('POST', `${BASE_API}/image/upload`, {
      'Content-Type': 'multipart/form-data'
    }, [{ name: 'image', filename: 'aa.png', data: image }])
    .then(response => ({ response: response.json() }))
    .catch(error => ({ error }))
  )
}

export const isValidEmail = (email) =>
  request.get(`${BASE_API}/student/isValidEmail`)
    .query({ email })
    .then(response => ({ response: response.text }))
    .catch(error => ({ error }))

export const changePassword = (email, password) =>
  request.post(`${BASE_API}/student/changePassword`)
    .query({ email, password })
    .then(response => ({ response: response.text }))
    .catch(error => ({ error }))

export const fetchSponsorList = () =>
  request.get(`${BASE_API}/sponsor`)
    .then(response => ({ response: response.body.results }))
    .catch(error => ({ error }))
