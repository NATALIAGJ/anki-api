/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const uuidv1 = require('uuid/v1')
const { expect } = require('chai')
const { requestGet, requestPost, requestPut, requestDelete } = require('./request')

const theme = {
  id: uuidv1(),
  subtheme: 'new theme'
}

const subtheme = {
  id: uuidv1(),
  subtheme: 'new subtheme',
  theme: '_id'
}
describe('subthemes', function () {
  it('it should has status code 200 when add theme', async () => {
    const res = await requestPost('themes', theme)
    subtheme.theme = res.data.payload._id
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })
  it('it should has status code 200 when list subthemes', async () => {
    const res = await requestGet('subthemes')
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when add subtheme', async () => {
    const res = await requestPost('subthemes', subtheme)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when update subtheme', async () => {
    const res = await requestPut('subthemes', subtheme)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when delete subtheme', async () => {
    const res = await requestDelete(`subthemes/${subtheme.id}`)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })
})
