/* Non-mutating: These are array methods that do not change the original array rather return a new array.
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

// JOIN

// MAP

// INDEXOF

// EVERY

// SOME

// FILTER

// REDUCE
