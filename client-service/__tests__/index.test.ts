import supertest from "supertest";

import app from "../src/index";

describe("Test service api", () => {

    test("Load mock data in db", async () => {
        const res = await supertest(app).get("/api/v1/mock");
        expect(res.body).toMatchObject({ "status": "ok" });
    });

    test("Get orders", async () => {
        const res = await supertest(app).get("/api/v1/data");
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("data");
        expect(res.body.data).toHaveProperty("orders");
        // expect(res.body.data.orders[0]).toHaveProperty("id");
    });

});