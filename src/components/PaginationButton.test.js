import PaginationButton from "../components/PaginationButton";
import { findByTestAttribute, setup } from "../utils";

describe("PaginationButton", () => {
  describe("render", () => {
    const props = {
      pageNumber: 10,
      currentPageIndex: 1,
      click: () => null
    };
    const wrapper = setup(PaginationButton, props);

    it("renders without error", () => {
      const paginationButtonComponent = findByTestAttribute(
        wrapper,
        "pagination-button"
      );
      expect(paginationButtonComponent.length).toBe(1);
    });
    it("renders page number", () => {
      const innerText = parseInt(wrapper.text());
      expect(innerText).toBe(props.pageNumber + 1);
    });
    it("renders active page number", () => {
      const customProps = {
        pageNumber: 1,
        currentPageIndex: 1,
        click: () => null
      };
      const wrapper = setup(PaginationButton, customProps);
      expect(
        wrapper.hasClass("pagination-button pagination-button-active")
      ).toBe(true);
    });
  });
});
