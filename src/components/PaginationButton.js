import React from "react";
import PropTypes from "prop-types";

import "../App.css";
import { numberGraterThenZero } from "../utils";

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
  pageNumber: numberGraterThenZero,
  currentPageIndex: numberGraterThenZero
};

export default PaginationButton;
