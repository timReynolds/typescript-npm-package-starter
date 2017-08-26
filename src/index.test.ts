import Example from "./index";

describe("index", () => {
  let sut;

  beforeEach(() => {
    sut = new Example();
  });

  test("When calling hello, should return world", () => {
    expect(sut.hello()).toBe("World");
  });
});
