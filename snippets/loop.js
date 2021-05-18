var colors=["red","blue","green"];
for (let i = 0; i < colors.length; i++) { 
  console.log(colors[i]);
}

var listItem = [
    {name: 'myName1', gender: 'male'},
    {name: 'myName2', gender: 'female'},
    {name: 'myName3', gender: 'male'},
    {name: 'myName4', gender: 'female'},
  ]

for (const iterator of listItem) {
    console.log(iterator.name+ ' and '+ iterator.gender);
}