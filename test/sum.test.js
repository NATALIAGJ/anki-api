const request = require('supertest')
const app = require('../index')

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app).get('/')
    console.log(res)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})
