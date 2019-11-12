const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../server/app");
chai.use(chaiHttp);

describe("#Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });
  describe("/api/restaurants endpoint", () => {
    it("gets all the restaurants in the database", async () => {
      const res = await request.get("/api/restaurants");
      expect(JSON.parse(res.text)[0]).to.include({
        business_id: "44YFU284Z3KDEy25QyVoUw",
        name: "Nee House Chinese Restaurant",
        address: "13843 N Tatum Blvd, Ste 15",
        city: "Phoenix",
        state: "AZ",
        postal_code: "85032"
      });
    });
  });
});
