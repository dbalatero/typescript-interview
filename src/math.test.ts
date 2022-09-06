import { add } from "./math";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(3, 4)).toEqual(7);
  });
});
