import React from "react";
import "./App.css";

import Pagination from "./Pagination";

const randomNumbers = max => {
  return Math.floor(1 + Math.random() * Math.floor(max));
};

const randomProps = () => {
  const pages = randomNumbers(50);
  const currentPage = randomNumbers(pages);
  const offset = randomNumbers(8);
  return { currentPage, pages, offset };
};

const App = props => {
  return (
    <div className="App">
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
      <Pagination {...randomProps()} />
    </div>
  );
};

export default App;
