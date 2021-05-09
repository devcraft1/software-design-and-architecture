/* Non-mutating 
These are array methods that do not change the original array instead return a new array.
They include:
1. ForEach
2. Concat
3. Join
4. Map
5. IndexOf
6. Every
7. Some
8. Filter
9. Reduce
10. LastIndexOf
11. Slice
*/

// FOR EACH
// forEach with 2 arguments
const avengers = ['thor', 'captain america', 'hulk'];
avengers.forEach((item, index)=>{
	console.log(index, item)
})

// forEach with 3 arguments 
let colors = ['red', 'blue', 'green'];
colors.forEach(function(color, index, sourceArr) {
	console.log(index, color, sourceArr,)
});

// CONCAT

let arr1 = [0, 1, 2];
let arr2 = [3, 5, 7];
let primes = arr1.concat(arr2);
console.log(primes)

// JOIN
var array = ["Joe", "Kevin", "Peter"];
array.join(); 
array.join("-"); 
array.join(""); 
array.join(". "); 
// MAP

// INDEXOF

// EVERY

// SOME

// FILTER

// REDUCE

// LASTINDEXOF

// SLICE