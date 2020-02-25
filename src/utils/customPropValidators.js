export const numberIsGraterThenZero = (props, propName, componentName) => {
  if (typeof props[propName] != "number") {
    return new Error(
      `Invalid type of ${propName} supplied to ${componentName}. EXPECTED TYPE: NUMBER, Received: ${(typeof propName).toUpperCase()}.`
    );
  } else if (props[propName] < 0) {
    return new Error(
      `Invalid value of ${propName} supplied to ${componentName}. Expected value to be higher then -1`
    );
  }
};

export const numberIsZeroOrGreater = (props, propName, componentName) => {
  if (typeof props[propName] != "number") {
    return new Error(
      `Invalid type of ${propName} supplied to ${componentName}. EXPECTED TYPE: NUMBER, Received: ${(typeof propName).toUpperCase()}.`
    );
  } else if (props[propName] < 0 && props[propName] !== 0) {
    return new Error(
      `Invalid value of ${propName} supplied to ${componentName}. Expected value to be equal to or higher then 0
      ${props[propName]}`
    );
  }
};

// function numberIsZeroOrGreater(number) {
//   if ((number < 0 )||( number === 0))   return true;
//   else return false;
// }
