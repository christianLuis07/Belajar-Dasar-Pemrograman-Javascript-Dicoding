// with es6
class SuperClass {
  constructor(name) {
    this.name = name;
  }
}

class SubClass extends SuperClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const person = new SubClass("Christian", 19);
console.log(person.name); // Christian
console.log(person.age); // 19

class something extends SubClass {
  constructor(name) {
    super(name);
  }
}

const somethingPerson = new something("Christian");
console.log(somethingPerson.name);

// another example of inheritance
class Smartphones {
  constructor(color, brand, model) {
    (this.color = color), (this.brand = brand), (this.model = model);
  }

  charge() {
    console.log(`${this.model} Charging...`);
  }
}

class Ios extends Smartphones {
  constructor(color, brand, model) {
    super(color, brand, model);
  }

  AirDrop() {
    console.log(`${this.model} AirDrop...`);
  }
}

class Android extends Smartphones {
  constructor(color, brand, model) {
    super(color, brand, model);
  }
  SplitScreen() {
    console.log(`${this.model} SplitScreen...`);
  }
}

const smartphone = new Ios("black", "Apple", "Iphone 12");
smartphone.charge();
smartphone.AirDrop();

const smartphone2 = new Android("White", "Samsung", "Galaxy 23");
smartphone2.charge();
smartphone2.SplitScreen();

console.log(smartphone instanceof Android); // false
console.log(smartphone instanceof Ios); // true

console.log(smartphone2 instanceof Android); // true
console.log(smartphone2 instanceof Ios); // false

// before es6
/*
console.log("=== before es6 ===");
function SmartPhones(color, brand, model) {
  this.color = color;
  this.brand = brand;
  this.model = model;
}

SmartPhones.prototype.charging = function() {
  console.log(`Charging ${this.model}`);
};

function iOS(color, brand, model) {
  SmartPhones.call(this, color, brand, model);
}

iOS.prototype = Object.create(SmartPhones.prototype);
iOS.prototype.constructor = iOS;

iOS.prototype.airDrop = function() {
  console.log('iOS have a behavior AirDrop');
};

function Android(color, brand, model) {
  SmartPhones.call(this, color, brand, model);
}

Android.prototype = Object.create(SmartPhones.prototype);
Android.prototype.constructor = Android;

Android.prototype.splitScreen = function() {
  console.log('Android have a Split Screen');
};

const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop

android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen
*/
