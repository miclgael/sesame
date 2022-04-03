import { updateUri } from "../src/helpers/updateUri";

describe("URI conversions", () => {
  it("Swaps domain, maintains dir + queries", () => {
    const uri = updateUri(
      "http://localhost:3000/foo?bar=baz",
      "http://localhost:4000"
    );
    expect(uri).toBe("http://localhost:4000/foo?bar=baz");
  });
});
