import React, { Component } from "react";
import { range } from "lodash";

import PaginationButton from "./PaginationButton";
import { numberGraterThenZero } from "../utils";

class Pagination extends Component {
  state = {
    pages: [],
    currentPageIndex: null
  };

  componentDidMount() {
    const { pagesCount, currentPage } = this.props;
    const pages = range(0, pagesCount);
    this.setState({
      pages,
      currentPageIndex: currentPage - 1
    });
  }

  checkPageRange = currentPageIndex => {
    const { pages } = this.state;
    if (currentPageIndex < 0) {
      return 0;
    } else if (currentPageIndex > pages.length) {
      return pages.length;
    }
    return currentPageIndex;
  };

  changePageButtonHandler = btnType => {
    if (btnType === "prev") {
      this.setState(({ currentPageIndex }) => ({
        currentPageIndex: this.checkPageRange(currentPageIndex - 1)
      }));
    } else if (btnType === "next") {
      this.setState(({ currentPageIndex }) => ({
        currentPageIndex: this.checkPageRange(currentPageIndex + 1)
      }));
    }
  };

  paginationButtonClickHandler = element => {
    const targetPage = element.currentTarget.id;
    this.setState({
      currentPageIndex: parseInt(targetPage)
    });
  };

  populatePaginationButtons = (pages, firstIndex, lastIndex) => {
    return pages.slice(firstIndex, lastIndex).map(element => {
      return (
        <PaginationButton
          key={element}
          click={this.paginationButtonClickHandler}
          pageNumber={element}
          currentPageIndex={this.state.currentPageIndex}
        />
      );
    });
  };

  createPagination = (pages, currentPageIndex, offset) => {
    const pageRange = offset * 2 + 1;
    let firstIndex, lastIndex;

    if (pages.length < pageRange) {
      return this.populatePaginationButtons(pages);
    } else if (currentPageIndex - offset < 0) {
      // render whole page range when first pages reached
      firstIndex = 0;
      lastIndex = pageRange;
    } else if (currentPageIndex + offset >= pages.length) {
      // render whole page range when last pages reached
      lastIndex = pages.length;
      firstIndex = lastIndex - pageRange;
    } else {
      // render 'middle' page range
      firstIndex = currentPageIndex - offset;
      lastIndex = currentPageIndex + offset + 1;
    }
    return this.populatePaginationButtons(pages, firstIndex, lastIndex);
  };

  render() {
    const { currentPageIndex, pages } = this.state;
    const { offset } = this.props;

    const pagination = this.createPagination(pages, currentPageIndex, offset);

    return (
      <div className="pagination">
        <button
          className="change-page-btn"
          onClick={() => this.changePageButtonHandler("prev")}
          disabled={currentPageIndex === 0}
        >
          Prev
        </button>
        {pagination}
        <button
          className="change-page-btn"
          onClick={() => this.changePageButtonHandler("next")}
          disabled={currentPageIndex === pages.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
}

Pagination.propTypes = {
  offset: numberGraterThenZero,
  pagesCount: numberGraterThenZero,
  currentPage: numberGraterThenZero
};

export default Pagination;
