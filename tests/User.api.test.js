const request = require('supertest')
const app = require('../app/')
const dotenv = require('dotenv')
dotenv.config()

describe('API Login', () => {
  it('Success login', async () => {
    const user = {
      email: 'fikri@binar.co.id',
      password: '123456',
    }
    const response = await request(app).post('/v1/auth/login').send(user)
    expect(response.statusCode).toBe(201)
  })

  it('Failed login : wrong password', async () => {
    const failedUser = {
      email: 'fikri@binar.co.id',
      password: '1234656',
    }
    const response = await request(app).post('/v1/auth/login').send(failedUser)
    expect(response.statusCode).toBe(401)
  })

  it('Failed login : email not registered', async () => {
    const failedUser = {
      email: 'joko@binar.co.id',
      password: '1234656',
    }
    const response = await request(app).post('/v1/auth/login').send(failedUser)
    expect(response.statusCode).toBe(404)
  })
})

describe('API Register', () => {
  it('Success register', async () => {
    const newUser = {
      name: 'Rizki',
      email: 'rizki12@binar.co.id',
      password: '1234567',
    }
    const response = await request(app).post('/v1/auth/register').send(newUser)
    expect(response.statusCode).toBe(201)
  })

  it('Failed register : email already taken', async () => {
    const failedNewUser = {
      name: 'fikri',
      email: 'fikri@binar.co.id',
      password: '123456',
    }
    const response = await request(app)
      .post('/v1/auth/register')
      .send(failedNewUser)
    expect(response.statusCode).toBe(422)
  })
})
