// Object Class
class Hello {
  person(name) {
    this.name = name;
  }
  // Constructor - Important except for JSX
  constructor(name) {
    this.person(name);
    console.log(`Hello ${this.name}`);
  }
}

const helloInstance = new Hello("john doe");
console.log(helloInstance);

// Object method
/// OBJECTS IN JAVASCRIPT
const testScore = {
  damon: 89,
  shawn: 91,
  keenan: 80,
  kim: 89,
};

Object.keys(testScore); // gives all keys
Object.values(testScore); // gives all values
Object.entries(testScore); // gives nested arrays of key-value pairs
