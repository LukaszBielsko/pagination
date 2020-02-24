import React from "react";
import PropTypes from "prop-types";

import "../App.css";
import { numberGraterThenZero } from "../utils";

const PaginationButton = ({ pageNumber, click, currentPageIndex }) => (
  <div
    className={`pagination-button ${
      pageNumber === currentPageIndex ? "pagination-button-active" : null
    }`}
    data-test="pagination-button"
    id={pageNumber}
    onClick={click}
  >
    <p>{pageNumber + 1}</p>
  </div>
);

PaginationButton.propTypes = {
  click: PropTypes.func.isRequired,
  currentPageIndex: numberGraterThenZero,
  pageNumber: numberGraterThenZero
};

export default PaginationButton;
