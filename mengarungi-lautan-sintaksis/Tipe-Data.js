// STRING
console.log("String Content Start Here");
const nama = "Christian";
console.log(JSON.stringify(nama)); // "Christian"

const somethingSpecial = "about";
console.log(somethingSpecial + JSON.stringify("You"));

console.log("String Content End Here");
console.log("\n");
// End of String

// NUMBER
console.log("Number Content Start Here");
const umur = 20;
console.log(JSON.stringify(umur)); // 20

const pi = 3.14;
console.log(JSON.stringify(pi)); // 3.14

const Number = 20;
console.log(Number / 0);

console.log("Number Content End Here");
console.log("\n");
// End of Number

// BOOLEAN
console.log("Boolean Content Start Here");
const isStudent = false;
console.log(JSON.stringify(isStudent)); // false

console.log("Boolean Content End Here");
console.log("\n");
// End of Boolean

// Null
console.log("Null Content Start Here");
let message = undefined;
console.log(message + undefined); // NaN

let messageTesting = null;
console.log(messageTesting + null); // 0

let something = null;
console.log(something === true);

console.log("Null Content End Here");
console.log("\n");
// End of Null
