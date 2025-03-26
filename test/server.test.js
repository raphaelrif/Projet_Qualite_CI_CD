const request = require("supertest");
const app = require("../server");

test("GET / doit répondre 'Hello CI/CD !'", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello CI/CD !");
});