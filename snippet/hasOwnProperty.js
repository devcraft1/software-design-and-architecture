
const person = {'first_name': 'bill','age':20};
if ( person.hasOwnProperty('first_name') ) {
    console.log('person has a first_name property')
}else{console.log('false')}


const persons = {	
    first_name: "Bob",
  last_name: "Dylan"
};
console.log(persons.hasOwnProperty('first_name'))
console.log(persons.hasOwnProperty('age')); 