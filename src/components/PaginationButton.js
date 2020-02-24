import React from "react";
import PropTypes from "prop-types";

import "../App.css";

const PaginationButton = ({ pageNumber, click, currentPageIndex }) => (
  <div
    onClick={click}
    className={`pagination-button ${
      pageNumber === currentPageIndex ? "pagination-button-active" : null
    }`}
    id={pageNumber}
  >
    <p>{pageNumber + 1}</p>
  </div>
);

PaginationButton.propTypes = {
  click: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number.isRequired
};

export default PaginationButton;
