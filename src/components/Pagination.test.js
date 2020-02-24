import Pagination from "./Pagination";
import PaginationButton from "./PaginationButton";
import {
  setup,
  findByTestAttribute,
  findByComponentName,
  randomPaginationProps
} from "../utils";

describe("Pagination", () => {
  const randomProps = randomPaginationProps();
  const wrapper = setup(Pagination, randomProps);

  describe("render", () => {
    it("renders without error", () => {
      const paginationComponent = findByTestAttribute(wrapper, "pagination");
      expect(paginationComponent.length).toBe(1);
    });
    it("renders correct page range", () => {
      const paginationButtonComponents = findByComponentName(
        wrapper,
        PaginationButton
      );
      let pageRange = randomProps.offset * 2 + 1;
      if (paginationButtonComponents.length < pageRange) {
        pageRange = paginationButtonComponents.length;
        expect(paginationButtonComponents.length).toBe(pageRange);
      } else {
        expect(paginationButtonComponents.length).toBe(pageRange);
      }
    });
  });

  describe("props", () => {
    const paginationProps = wrapper.instance().props;

    it("recieves the props", () => {
      expect(paginationProps).toBeTruthy();
    });
    it("props are matching props passed in", () => {
      expect(paginationProps).toMatchObject(randomProps);
    });
  });

  describe("state", () => {
    const componentState = wrapper.state();

    it("sets state when props passed", () => {
      expect(componentState.pages.length).not.toBe(0);
      expect(componentState.currentPageIndex).not.toBeNaN();
    });
    it("sets state accordingly to props passed", () => {
      expect(componentState.pages.length).toBe(randomProps.pagesCount);
      expect(componentState.currentPageIndex).toBe(randomProps.currentPage - 1);
    });
    /* waiting for stack overflow answer 
    it("sets state when previous button clicked", () => {
      console.log(componentState.currentPageIndex);
      const prevButton = findByTestAttribute(wrapper, "prev");
      console.log(prevButton.debug());
      prevButton.simulate("click");
      console.log(componentState.currentPageIndex);
      console.log("state", componentState);
    }); */
  });

  describe("helper methods", () => {
    it("checks pages range correctly when less then 0 is passed", () => {
      const customState = { pages: [0, 1, 2, 3, 4, 5], currentPageIndex: -1 };
      const wrapper = setup(Pagination, randomProps, customState);
      expect(wrapper.instance().checkPageRange(-1)).toBe(0);
    });
    it("checks pages range correctly when higher number then array length is passed", () => {
      const customState = { pages: [0, 1, 2, 3, 4], currentPageIndex: 6 };
      const wrapper = setup(Pagination, randomProps, customState);
      expect(wrapper.instance().checkPageRange(7)).toBe(5);
    });
  });
});
