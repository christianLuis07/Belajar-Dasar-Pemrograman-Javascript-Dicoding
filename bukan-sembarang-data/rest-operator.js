// membuat rest parameter dengan menggunakan rest operator
function myFunction(...name) {
  console.log("Nama :", name);
}

myFunction("Dicoding", "Indonesia", "Everyone"); // Nama : [ 'Dicoding', 'Indonesia', 'Everyone' ]

// Another Example
function myFunctionAnotherExample(number, ...name) {
  console.log("Number :", number);
  console.log("Name :", name);
}

myFunctionAnotherExample(1, 3, "Dicoding", "Indonesia", "Everyone"); // Number : 1 Name : [ 'Dicoding', 'Indonesia', 'Everyone' ]

// Another Example with Length
function myFunctionWithLength(...name) {
  console.log(name.length);
  console.log("name", name);
}

myFunctionWithLength("Dicoding", "Indonesia", "Everyone"); // 3

// another Example in destructuring array
const favoritesPerson = [
  "You",
  "it's you",
  "or it's you again",
  "it's always you",
];

const [first, second, ...rest] = favoritesPerson;
console.log(first);
console.log(second);
console.log(rest);
