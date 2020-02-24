import React from "react";
import PropTypes from "prop-types";

import "./App.css";
import Pagination from "./components/Pagination";
import { createComponentsWithProps, randomPaginationProps } from "./utils";

const App = ({ componentsCount }) => {
  const paginationComponents = createComponentsWithProps(
    componentsCount,
    Pagination,
    randomPaginationProps
  );

  return <div className="App">{paginationComponents}</div>;
};

App.propTypes = {
  componentsCount: PropTypes.number.isRequired
};

export default App;
