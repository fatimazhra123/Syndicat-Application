const request = require('supertest')
const app = require('../server')


describe('get /api/Appartement/getAllAppartement', () => {

// test('should respond status 200 good!!!All Appartement get it ', async () => {
//     const res = await request(app).get('/api/Appartement/getAllAppartement').send({
//         namberDappartement: "A124",
//         residence: "kasssraoui",
//     })

//     expect(res.statusCode).toBe(200)
//   });

    test('should respond status 400 Appartement is not founded', async () => {
        const res = await request(app).get('/api/Appartement/getAllAppartement').send({
          

        })

        expect(res.statusCode).toBe(400)
    });

})