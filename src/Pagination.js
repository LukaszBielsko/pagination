import React, { Component } from "react";
import { range } from "lodash";

class Pagination extends Component {
  state = {
    pages: [],
    currentPageIndex: null
  };

  componentDidMount() {
    const { pages: pagesCount, currentPage } = this.props;
    const pages = range(1, pagesCount + 1);
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

  nextPageHandler = () => {
    this.setState(({ currentPageIndex }) => {
      return {
        currentPageIndex: this.checkPageRange(currentPageIndex + 1)
      };
    });
  };

  prevPageHanlder = () => {
    this.setState(({ currentPageIndex }) => ({
      currentPageIndex: this.checkPageRange(currentPageIndex - 1)
    }));
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

    return (
      <div className="pagination">
        <button
          onClick={this.prevPageHanlder}
          disabled={currentPageIndex === 0}
        >
          Prev
        </button>
        {pagination}
        <button
          onClick={this.nextPageHandler}
          disabled={currentPageIndex === pages.length - 1}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
