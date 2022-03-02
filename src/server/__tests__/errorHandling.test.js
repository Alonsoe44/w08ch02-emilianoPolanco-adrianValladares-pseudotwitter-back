const request = require("supertest");
const app = require("../index");

describe("Given any the app", () => {
  describe("When a endpoint is not found", () => {
    test("Then a 404 should be returned", async () => {
      await request(app).post("/unkownendpoint-lñdsfa").expect(404);
    });
  });
});
