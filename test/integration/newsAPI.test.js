const request = require("supertest");
const { app } = require("../../app");
const { expect } = require("chai");

describe("Tests for News Entity Endpoint in the API", () => {
  let server;
  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it("Should return a 200 and Return the news for the expected sport ID", async () => {
    const response = await request(app).get("/sport/news");
    const expectedNewsSportIDObj = {
      newsId: 2,
      title: "DLF Invests heavily on IPL",
      description: "DLF Invests heavily on IPL",
      tourId: 1,
      sportId: 1,
    };
    const newsBySportIDObj = await response.body[0];
    expect(response.status).toBe(200);
    expect(newsBySportIDObj).toBe(expectedNewsSportIDObj);
  });

  it("Should return a 200 and Return the news for the expected match ID", async () => {
    const response = await request(app).get("/match/news");
    const expectedNewsMatchIDObj = {
      newsId: 1,
      title: "Will CSK Win?",
      description: "Will CSK Win?",
      matchId: 2,
    };
    const newsByMatchIdObj = await response.body[0];
    expect(response.status).toBe(200);
    expect(newsByMatchIdObj).toBe(expectedNewsMatchIDObj);
  });

  it("Should return a 200 and Return the news for the expected tour ID", async () => {
    const response = await request(app).get("/tour/news");
    const expectedNewsTourIdObj = {
      newsId: 2,
      title: "DLF Invests heavily on IPL",
      description: "DLF Invests heavily on IPL",
      tourId: 1,
    };
    const newsByTourIdObj = await response.body[0];
    expect(response.status).toBe(200);
    expect(newsByTourIdObj).toBe(expectedNewsTourIdObj);
  });
});
