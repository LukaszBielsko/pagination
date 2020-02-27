import React from "react";

import "./App.css";
import Pagination from "./components/Pagination";

import {
  createComponentsWithProps,
  numberIsGraterThenZero,
  randomPaginationProps
} from "./utils";

const App = ({ componentsCount }) => {
  const paginationComponents = createComponentsWithProps(
    componentsCount,
    Pagination,
    randomPaginationProps
  );

  return (
    <div data-test="app" className="App">
      {paginationComponents}
    </div>
  );
};

App.propTypes = {
  componentsCount: numberIsGraterThenZero
};

export default App;
