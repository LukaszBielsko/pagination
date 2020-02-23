import React, { Component } from "react";
import { range } from "lodash";

import PaginationButton from "./PaginationButton";

export default class Pagination extends Component {
  state = {
    pages: [],
    currentPageIndex: null
  };

  componentDidMount() {
    const { pages: pagesCount, currentPage } = this.props;
    const pages = range(1, pagesCount + 1); // start from 0 - but why? since it is pages range and it cant start from 0
    this.setState({
      pages,
      currentPageIndex: currentPage - 1
    });
  }

  checkPageRange = currentPageIndex => {
    const { pages } = this.props;
    if (currentPageIndex < 0) {
      return 0;
    } else if (currentPageIndex > pages - 1) {
      return pages - 1;
    }
    return currentPageIndex;
  };

  changePageButtonHandler = type => {
    if (type === "prev") {
      this.setState(({ currentPageIndex }) => ({
        currentPageIndex: this.checkPageRange(currentPageIndex - 1)
      }));
    } else if (type === "next") {
      this.setState(({ currentPageIndex }) => ({
        currentPageIndex: this.checkPageRange(currentPageIndex + 1)
      }));
    }
  };

  paginationButtonClickHandler = element => {
    const targetPage = element.currentTarget.id;
    this.setState({
      currentPageIndex: targetPage - 1
    });
  };

  paginate = (pages, firstIndex, lastIndex) => {
    return pages.slice(firstIndex, lastIndex).map(el => {
      return (
        <PaginationButton
          key={el}
          click={this.paginationButtonClickHandler}
          pageNumber={el}
          currentPageIndex={this.state.currentPageIndex}
        />
      );
    });
  };

  createPagination = (pages, currentPage, offset) => {
    let firstIndex, lastIndex;
    const pageRange = offset * 2 + 1;

    if (pages.length < pageRange) {
      return this.paginate(pages);
    } else if (currentPage - offset < 0) {
      // render whole page range when first pages reached
      firstIndex = 0;
      lastIndex = pageRange;
    } else if (currentPage + offset >= pages.length) {
      // render whole page range when last pages reached
      lastIndex = pages.length;
      firstIndex = lastIndex - pageRange;
    } else {
      // render 'middle' page range
      firstIndex = currentPage - offset;
      lastIndex = currentPage + offset + 1;
    }
    return this.paginate(pages, firstIndex, lastIndex);
  };

  render() {
    const { currentPageIndex, pages } = this.state;
    const { offset } = this.props;

    const pagination = this.createPagination(pages, currentPageIndex, offset);

    return (
      <div className="pagination">
        <button
          onClick={() => this.changePageButtonHandler("prev")}
          disabled={currentPageIndex === 0}
        >
          Prev
        </button>
        {pagination}
        <button
          onClick={() => this.changePageButtonHandler("next")}
          disabled={currentPageIndex === pages.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
}
