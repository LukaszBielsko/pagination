import React from "react";
import "./App.css";

import Pagination from "./Pagination";

import { createComponentsWithProps, randomPaginationProps } from "./utils";

export default ({ componentsCount }) => {
  const paginationComponents = createComponentsWithProps(
    componentsCount,
    Pagination,
    randomPaginationProps
  );

  return <div className="App">{paginationComponents}</div>;
};
