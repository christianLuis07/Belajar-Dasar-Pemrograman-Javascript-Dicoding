// tipe data dari array adalah object
const array = ["Dicoding", 8, true];
console.log(typeof array); // object

// Membuat array
console.log("=== With object constructor ===");
const users = new Array();
const numbers = new Array(5);

// Menggunakan sintaks Array.from
const foo = Array.from("Vanessa");
console.log(foo); // [ 'V', 'a', 'n', 'e', 's', 's', 'a' ]

// another case of Array.from
const usersExample = new Array("John", "Jane", "Jack", "Jill");
const customerExample = Array.from(usersExample);
console.log(customerExample); // [ 'John', 'Jane', 'Jack', 'Jill' ]

// Menggunakan sintaks array literal
const arrayLiterals = [];
const fruitsLiterals = ["Apple", "Orange", "Banana", true === "true"];
console.log(fruitsLiterals); // [ 'Apple', 'Orange', 'Banana', false ]

// Mengakses Element Array
const arrayElementsAccess = ["You", 8, true];
console.log(arrayElementsAccess[1] === "8" || arrayElementsAccess[2]); // true

// Manipulasi Nilai Array

// Menggunakan Indexing
let arrayIndexingChange = ["I", "Love", "JavaScript"];
arrayIndexingChange[2] = "You";
arrayIndexingChange.push("V");
console.log(arrayIndexingChange); // [ 'I', 'Love', 'You', 'V' ]

// Menggunakan push
let arrayPushChange = ["I", "Love", "JavaScript"];
arrayPushChange.push("V");
arrayPushChange[2] = "You";
console.log(arrayPushChange); // [ 'I', 'Love', 'You', 'V' ]

// menghapus element Data Array
let arrayPopChange = ["I", "Love", "JavaScript", "V"];
delete arrayPopChange[2];
// Menghapus total element dan data
arrayPopChange.splice(2, 1);
console.log(arrayPopChange); // [ 'I', 'Love', 'V' ]
// Menghapus element terakhir
arrayPopChange.pop();
console.log(arrayPopChange); // [ 'I', 'Love' ]
// Menghapus element pertama
arrayPopChange.shift();
console.log(arrayPopChange); // [ 'Love' ]

// Array Destructuring
const arrayDestructuring = ["Dicoding", 8, true];
const [name, age, isMarried] = arrayDestructuring;
console.log(name); // Dicoding

// Array Method

// Reverse
const arrayReverse = ["Dicoding", 8, true];
arrayReverse.reverse();
console.log(arrayReverse); // [ true, 8, 'Dicoding' ]

// Sort
const arraySort = ["Dicoding", "JavaScript", "Android", "iOS"];
arraySort.sort();
console.log(arraySort); // [ 'Android', 'Dicoding', 'JavaScript', 'iOS' ]
const angkaSort = [10, 1, 3, 2, 20];
angkaSort.sort();
console.log(angkaSort); // [ 1, 10, 2, 20, 3 ]
