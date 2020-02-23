import React from "react";

const randomNumbers = max => {
  return Math.floor(1 + Math.random() * max);
};

// reusable function for creating given number of components
export const createComponentsWithProps = (
  componentsCount,
  Component,
  createPropsFunction
) => {
  let components = [];
  for (let index = 0; index < componentsCount; index++) {
    const componentsProps = createPropsFunction();
    components.push(<Component {...componentsProps} />);
  }
  return components;
};

export const randomPaginationProps = () => {
  const pages = randomNumbers(50);
  const currentPage = randomNumbers(pages);
  const offset = randomNumbers(8);
  return { currentPage, pages, offset };
};
