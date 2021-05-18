const arr = [1, 2, 3, 4, 5, 6];
if (arr.includes(1)) {
  console.log("is included");
}

const array = ["string", "number", "boolean", "null", "object"];
if (array.includes("strin")) {
  console.log("is included");
} else if (!array.includes("strin")) {
  console.log("strin can not be found in array");
}

const list =[1,3,5,5,6,7,8,8,9,5]
for (let count = 0; count < 90; count++) {
console.log(list[count])
}