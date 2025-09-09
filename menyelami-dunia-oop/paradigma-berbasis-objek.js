// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function () {
  console.log(`${this.name} sedang makan`);
};

// another example constructor function
const person1 = new Person("Christian", 19);
const person2 = new Person("Dicoding", 9);

console.log(person1.name); // Christian
console.log(person2.name); // Dicoding

person1.eat();
person2.eat();

// class
console.log("=== Class ===");
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} sedang makan`);
  }
}

const person3 = new Person2("Christian", 19);
console.log(person3.name); // Christian
person3.eat();

class Person1 {}
console.log(typeof Person1); // function
