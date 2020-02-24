export const numberGraterThenZero = (props, propName, componentName) => {
  if (typeof props[propName] != "number") {
    return new Error(
      `Invalid type of ${propName} supplied to ${componentName}. Expected type: NUMBER`
    );
  } else if (props[propName] < 0) {
    return new Error(
      `Invalid type of ${propName} supplied to ${componentName}. Expected type: NUMBER, to be higher then -1`
    );
  }
};
