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

const cards = {
  id: uuidv1(),
  sideA: 'side A',
  sideB: 'side B',
  subtheme: '_id'
}

describe('cards', function () {
  it('it should has status code 200 when add theme', async () => {
    const res = await requestPost('themes', theme)
    subtheme.theme = res.data.payload._id
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })
  it('it should has status code 200 when add subtheme', async () => {
    const res = await requestPost('subthemes', subtheme)
    cards.subtheme = res.data.payload._id
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })
  it('it should has status code 200 when list cards by subtheme', async () => {
    const res = await requestGet('cards', { subtheme: cards.subtheme })
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when add cards', async () => {
    const res = await requestPost('cards', cards)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when update cards', async () => {
    const res = await requestPut('cards', cards)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })

  it('it should has status code 200 when delete cards', async () => {
    const res = await requestDelete(`cards/${cards.id}`)
    console.log('RES........', res.data)
    expect(res.status).to.equal(200)
    expect(res.data).not.to.be.empty
  })
})
