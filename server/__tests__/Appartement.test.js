const supertest = require('supertest');
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
    const res = await request(app).get('/api/appartement/getAllAppartement').send({
    });
    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({ error: 'Appartement is not founded' })
});

})


// fonction to create  Appartement:

    // test('Please fill all required fields !', async () => {
    //     const res = await request(app).post('api/Appartement/createAppartement').send({
          
    //         namberDappartement:"A367",
    //         residence:""

    //     })

    //     expect(res.statusCode).toBe(400)
    // });




    // test add appartement 
    describe("post api/Appartement/createAppartement/  ",() =>{
        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).post("api/Appartement/createAppartement/").send({
                residence:"6677",
                namberDappartement:"",
            })
            expect(response.statusCode).toBe(400)
        })

        test("should res with a 200 status code",async () =>{
            const response = await supertest(app).post("api/Appartement/createAppartement/").send({
                namberDappartement:"A3677",
                residence:"idriss",
               
            })
            expect(response.statusCode).toBe(200)
        })
    })


    //------------------- test delete appartement -----------------

    describe("delete /api/Appartement/deleteAppartement/   ",() =>{
        test("should res with a 400 status code",async () =>{
            const response = await supertest(app).delete("/api/Appartement/deleteAppartement/63c3d95c9e3481de0f475c33").send({
            
            })
            expect(response.statusCode).toBe(200)
        })
    })








