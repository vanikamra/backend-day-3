const fetch = require("node-fetch");

const BASE_URL = "http://localhost:3002";

// Basic Auth for admin:password
const basicAuthHeader =
  "Basic " + Buffer.from("admin:password").toString("base64");

describe("API Gateway Tests", () => {
  it("should fetch user data (authorized)", async () => {
    const response = await fetch(`${BASE_URL}/users/1`, {
      headers: { Authorization: basicAuthHeader },
    });

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty("id");
    // optional if your id is a string:
    // expect(data.id).toBe("1");
  });

  it("should fetch product data", async () => {
    const response = await fetch(`${BASE_URL}/products/1`);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty("id");
  });

  it("should return 404 for invalid user (authorized)", async () => {
    const response = await fetch(`${BASE_URL}/users/999`, {
      headers: { Authorization: basicAuthHeader },
    });

    expect(response.status).toBe(404);
  });

  it("should return 401 when missing auth", async () => {
    const response = await fetch(`${BASE_URL}/users/1`);
    expect(response.status).toBe(401);
  });
});
