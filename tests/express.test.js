const supertest = require("supertest");
const app = require("../app");

describe("Testing the root path", () => {
  test("Correct staus code", async () => {
    const response = await supertest(app).get("/api");
    expect(response.statusCode).toBe(200);
  });
});

describe("Testing the testRouter", () => {
  test("Correct response data", async () => {
    const response = await supertest(app).get("/api/test");
    expect(response.text).toContain("HAI MARK");
  });
});

describe("Testing the movieRouter", () => {
  test("Returns searched movie", async () => {
    const response = await supertest(app).get("/api/movies/detailed-movie/100");
    expect(response.statusCode).toBe(200);
    expect(response.body.title).toMatch(/lock, stock/i);
  });
});

describe("Testing the randomRouter", () => {
  test("Returns a movie", async () => {
    const response1 = await supertest(app).get("/api/random");
    const response2 = await supertest(app).get("/api/random");
    expect(response1.statusCode).toBe(200);
    expect(response2.statusCode).toBe(200);
    expect(response1.body.title).not.toBe(response2.body.title);
  });
});
