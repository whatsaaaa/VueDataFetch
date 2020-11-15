"use strict";
const expect = require("chai").expect;
const vueFetch = require("../dist/index.js").default;

describe("vueFetch function test", () => {
  it("Should be loading", () => {
    const response = vueFetch("https://jsonplaceholder.typicode.com/posts");
    expect(response).to.be.an("Object");
    expect(response.loading).to.equal(true);
    expect(response.error).to.equal(null);
    expect(response.data).to.equal(null);
  });
});
