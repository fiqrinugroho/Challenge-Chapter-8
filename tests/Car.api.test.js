const request = require('supertest')
const app = require('../app')

const dotenv = require('dotenv')
dotenv.config()

describe('API get all cars', () => {
  it('success get all data cars', async () => {
    const response = await request(app).get('/v1/cars')
    expect(response.statusCode).toBe(200)
  })
})

describe('API get car By ID', () => {
  it('success get data car', async () => {
    const response = await request(app).get('/v1/cars/20')
    expect(response.statusCode).toBe(200)
  })
})

describe('API delete car by ID', () => {
  it('Unauthorized', async () => {
    const response = await request(app).delete('/v1/cars/20')
    expect(response.statusCode).toBe(401)
  })
  it('Failed delete car', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw'
    const response = await request(app)
      .delete('/v1/cars/209')
      .set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(401)
  })
})
