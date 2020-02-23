import React, { Component } from "react";
import { range } from "lodash";

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

  handleClick = e => {
    const targetPage = e.currentTarget.id;
    this.setState({
      currentPageIndex: targetPage - 1
    });
  };

  isActive = el => {
    const { currentPageIndex } = this.state;
    if (el - 1 === currentPageIndex) {
      return "active-pagination";
    }
  };

  paginate = (pages, firstIndex, lastIndex) => {
    return pages.slice(firstIndex, lastIndex).map(el => {
      /* 
        below as component 
        pass in handleClick as prop

        pass elemnent as index or sth like that 
        name is a paginationButton
      */
      return (
        <div
          onClick={this.handleClick}
          className={`page-number ${this.isActive(el)}`}
          id={el}
          key={el}
        >
          <p>{el}</p>
        </div>
      );
    });
  };

  render() {
    const { currentPageIndex, pages } = this.state;
    const { offset } = this.props;

    // too much logic in render comp
    // extract algorithm to a method
    // let pagination = createPagination(pages)
    let pagination, firstIndex, lastIndex;
    const pageRange = offset * 2 + 1;

    if (pages.length < pageRange) {
      pagination = this.paginate(pages);
    } else if (currentPageIndex - offset < 0) {
      // render whole page range when first pages reached
      firstIndex = 0;
      lastIndex = pageRange;
      pagination = this.paginate(pages, firstIndex, lastIndex);
    } else if (currentPageIndex + offset >= pages.length) {
      // render whole page range when last pages reached
      lastIndex = pages.length;
      firstIndex = lastIndex - pageRange;
      pagination = this.paginate(pages, firstIndex, lastIndex);
    } else {
      // render 'middle' page range
      firstIndex = currentPageIndex - offset;
      lastIndex = currentPageIndex + offset + 1;
      pagination = this.paginate(pages, firstIndex, lastIndex);
    }

    // too much pagination - not DRY code
    // i might as well do it on the very end with only one
    // pagination = this.paginate(pages, firstIndex, lastIndex);

    return (
      <div className="pagination">
        <button
          // onClick={this.prevPageHanlder}
          onClick={() => this.changePageButtonHandler("prev")}
          disabled={currentPageIndex === 0}
        >
          Prev
        </button>
        {pagination}
        <button
          // onClick={this.nextPageHandler}
          onClick={() => this.changePageButtonHandler("next")}
          disabled={currentPageIndex === pages.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
}

// export default Pagination; // export default on the top
