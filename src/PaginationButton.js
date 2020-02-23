import React from "react";
import "./App.css";

export default ({ pageNumber, click, currentPageIndex }) => (
  <div
    onClick={click}
    className={`pagination-button ${
      pageNumber === currentPageIndex + 1 ? "pagination-button-active" : null
    }`}
    id={pageNumber}
  >
    <p>{pageNumber}</p>
  </div>
);
