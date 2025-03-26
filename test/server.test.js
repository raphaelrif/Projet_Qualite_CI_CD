const request = require("supertest");
const app = require("../server"); // Importer l'app sans démarrer le serveur

test("GET / doit répondre 'Hello CI/CD !'", async () => {
    const res = await request(app).get("/"); // Pas besoin de app.address
    expect(res.text).toBe("Hello CI/CD !");
});
