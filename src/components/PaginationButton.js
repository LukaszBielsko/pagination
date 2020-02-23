import React from "react";
import "../App.css";

export default ({ pageNumber, click, currentPageIndex }) => (
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
