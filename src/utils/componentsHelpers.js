import React from "react";

// reusable function for creating given number of components
export const createComponentsWithProps = (
  componentsCount,
  Component,
  createPropsFunction
) => {
  let components = [];
  for (let index = 0; index < componentsCount; index++) {
    const componentsProps = createPropsFunction();
    // console.log("comp", <Component {...componentsProps} key={index} />);
    components.push(<Component {...componentsProps} key={index} />);
  }
  return components;
};

export const randomNumbers = max => {
  return Math.floor(1 + Math.random() * max);
};

export const randomPaginationProps = () => {
  const pagesCount = randomNumbers(50);
  const currentPage = randomNumbers(pagesCount);
  const offset = randomNumbers(8);
  return { currentPage, pagesCount, offset };
};
