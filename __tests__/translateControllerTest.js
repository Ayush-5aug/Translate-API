const request = require('supertest')
const app1 = require('../utils/app');

const app = app1.createServer();

describe("POST /users", () => {
  describe("not given a text and destinationLanguage", () => {

    jest.setTimeout(60000);
    it("should respond with a 500 status code", async () => {
      const res = await request(app)
      .post('/api/translateText')
      .send()
      expect(res.status).toBe(500);
    })
  })
})