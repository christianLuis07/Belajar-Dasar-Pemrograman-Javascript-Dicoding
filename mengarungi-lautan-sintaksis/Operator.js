// Unary Operator
console.log("=== Unary Operator ===");
let age = 20;

typeof age; // "number"

// Binary Operator
console.log("=== Binary Operator ===");
5 + 4; //9
10 / 2;

// Ternary Operator
console.log("=== Ternary Operator ===");
age = 30;
age <= 17
  ? console.log("Anda masih anak-anak")
  : console.log("Anda sudah dewasa");

// Assignment Operator
console.log("=== Assignment Operator ===");
const name = "Vanessa";
let location = "Medan";

location = "Jakarta";
console.log(location);

// Arithmetic Operator
console.log("=== Arithmetic Operator ===");
// Modulus
let modulus = 10 % 5;
console.log(modulus); // 0

// Increment
console.log(" === Increment ===");
let numbers = [];
for (let increment = 0; increment <= 10; increment++) {
  numbers.push(increment);
}

console.log(numbers.join(", ")); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// Decrement
console.log(" === Decrement ===");
let DecrementNumbers = [];
for (let decrement = 0; decrement >= -10; decrement--) {
  DecrementNumbers.push(decrement);
}

console.log(DecrementNumbers.join(", ")); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

//  Eksponensial
console.log(" === Eksponensial ===");
let operand1 = 2;
let operand2 = 10;
let exponent = operand1 ** operand2;

// Comparison Operator
console.log("=== Comparison Operator ===");

// == && ===
console.log("=== == && === ===");
console.log(3 == "3"); // true

console.log(3 === "3"); // false

console.log("someone" == "Someone"); // false

// != && !==
console.log("=== != && !== ===");
console.log(3 != "3"); // false

console.log(3 !== 3); // false
console.log(3 !== "3"); // true

// >, <, >=, <=
console.log("=== >, <, >=, <= ===");
console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

// Logical Operator
console.log("=== Logical Operator ===");
// && (AND)
console.log("=== && (AND) ===");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log("3" + 3 === 33 && true); // false

// || (OR)
console.log("=== || (OR) ===");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log("3" + "3" === 33 || false);

// ! (NOT)
console.log("=== ! (NOT) ===");
console.log(!true);
console.log(!false);

// String Operator
console.log("=== String Operator ===");
let firstName = "Vanessa";
let lastName = "Putri";
let fullName = firstName + " " + lastName;
console.log(fullName); // "Vanessa Putri"
