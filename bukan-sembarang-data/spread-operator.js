// spread operator pada object
console.log("=== Object Spread Operator ===");
const obj1 = { name: "Dicoding", lastName: "Indonesia" };
const obj2 = { address: "Jakarta" };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { name: 'Dicoding', lastName: 'Indonesia', address: 'Jakarta' }

// menyalin object
const originalObj = { name: "Dicoding", age: 9 };
const copiedObj = { ...originalObj };
console.log(copiedObj); // { name: 'Dicoding', age: 9 }

// spread operator pada array
console.log("=== Array Spread Operator ===");
const array1 = ["Dicoding"];
const array2 = ["Indonesia", "Jl. Jend. Sudirman No. 20"];
const newArray = [...array1, ...array2];
console.log(newArray); // [ 'Dicoding', 'Indonesia', 'Jl. Jend. Sudirman No. 20'

const originalArr = ["apple", "banana", "cherry"];
const copiedArr = [...originalArr];
console.log(copiedArr); // [ 'apple', 'banana', 'cherry' ]
