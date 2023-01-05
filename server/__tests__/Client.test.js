const request = require('supertest')
const app = require('../server')



//founction get All:

describe('POST /api/auth/login', () => {


    test('should respond status 400 if email or password empty', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: '',
            password: ''
        })

        expect(res.statusCode).toBe(400)
    });












})