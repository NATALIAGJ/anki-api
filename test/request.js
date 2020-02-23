const axios = require('axios')

const urlServer = 'http://localhost:8000/'
const version = 'api/'

exports.requestGet = async function (url) {
  try {
    const resp = await axios.get(`${urlServer}${version}${url}`)
    return resp
  } catch (error) {
    return error.response
  }
}

exports.requestPost = async function (url, data) {
  try {
    const resp = await axios.post(`${urlServer}${version}${url}`, { ...data })
    return resp
  } catch (error) {
    return error.response
  }
}

exports.requestPut = async function (url, data) {
  try {
    const resp = await axios.put(`${urlServer}${version}${url}`, { ...data })
    return resp
  } catch (error) {
    return error.response
  }
}

exports.requestDelete = async function (url) {
  try {
    const resp = await axios.delete(`${urlServer}${version}${url}`)
    return resp
  } catch (error) {
    return error.response
  }
}
