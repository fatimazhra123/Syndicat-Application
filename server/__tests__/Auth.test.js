const app = require('../server')
const request = require('supertest')


describe('POST /api/auth/login', () => {

    test('should respond status 400 if email or password empty', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: '',
            password: ''
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if email not valid', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'hagaf97050@diratu.com',
            password: 'pass'
        })

        expect(res.statusCode).toBe(400)
    });

    test('should respond status 400 if email or password incorect', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'gmail@gmail.com',
            password: 'password'
        })

        expect(res.statusCode).toBe(400)
    })

    test('should respond status code 200 if user successfuly logined', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: 'kawtar@gmail.com',
            password: 'pass'
        })
        expect(res.statusCode).toBe(200)

    })

});

