import request from 'superagent'

const BASE_API = 'http://52.77.212.240:3000/api'

export const getlistEvents = (accessToken) =>
  request.get(`${BASE_API}/event`)
    .set({ 'STUDENT-API-KEY': accessToken })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

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
