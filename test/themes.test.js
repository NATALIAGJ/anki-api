/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const uuidv1 = require('uuid/v1')
const { expect } = require('chai')
const { requestGet, requestPost, requestPut, requestDelete } = require('./request')

let theme = {
  id: uuidv1(),
  theme: 'new theme'
}
describe('themes', function () {
  it('it should has status code 200 when list themes', async () => {
    const res = await requestGet('themes')
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when add theme', async () => {
    const res = await requestPost('themes', theme)
    console.log('RES........', res.data)
    theme = res.data.payload
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when add theme', async () => {
    const res = await requestGet(`themes/${theme._id}`)
    console.log('RES........', res.data)
    theme = res.data.payload
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when update theme', async () => {
    const res = await requestPut(`themes/${theme._id}`, theme)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when delete theme', async () => {
    const res = await requestDelete(`themes/${theme.id}`)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })
})
