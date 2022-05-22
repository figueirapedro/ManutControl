const Server = require("../main.js");
const db = require('./db')
const supertest = require("supertest")
const request = supertest(Server)
const apiString = "http://localhost:3000/api/v1"

jest.setTimeout(8000)

describe("Criando Funcionario ", () => {
    it('can be created correctly', async done => {
        expect(async done => {
            const res = await request.get('http://localhost:3000/api/v1/funcionario')
            expect(res.start).toBe(200)
            done()
        })
    })
})