// condition ? ifTrue : ifFalse
const condition = 12 + 3;
const result1 = condition == 15 ? true : false;
const result2 = condition == 1 ? true : false;
console.log(` Result1 is ${result1} while result2 ${result2}`);

// with function
function example(data) {
  return condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
}
// Equivalent to:
function example(data) {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
