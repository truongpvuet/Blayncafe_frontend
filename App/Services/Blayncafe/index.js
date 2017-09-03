import request from 'superagent'

const BASE_API = 'http://52.77.212.240:3000/api'

export const getlistEvents = () =>
  request.get(`${BASE_API}/event`)
    .set({ 'STUDENT-API-KEY': 'thangntt' })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))

export const getuserProfile = () =>
  request.get(`${BASE_API}/student/info`)
    .set({ 'STUDENT-API-KEY': 'thangntt' })
    .then(response => ({ response: response.body }))
    .catch(error => ({ error }))
