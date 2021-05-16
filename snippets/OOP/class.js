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
