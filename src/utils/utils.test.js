import {
  createComponentsWithProps,
  randomPaginationProps,
  randomNumbers
} from ".";

describe("Utils", () => {
  describe("test helpers", () => {
    it("returns array of length corresponding to props passed", () => {
      const randomComponentsCount = randomNumbers(30);
      const array = createComponentsWithProps(
        randomComponentsCount,
        "div",
        randomPaginationProps
      );
      expect(array.length).toBe(randomComponentsCount);
    });
  });
});
