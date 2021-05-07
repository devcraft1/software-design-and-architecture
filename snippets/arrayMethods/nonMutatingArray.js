/* Non-mutating Arrays have the ability to modify the original and return a new array
They include:
1. ForEach
2. Map
3. 
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
