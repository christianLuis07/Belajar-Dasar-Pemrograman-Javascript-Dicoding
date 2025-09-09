/*
berikut dibawah ini adalah bebearap fungsi untu menerapkan prinsip immutability
Array.push: menambahkan elemen di akhir dari sebuah array.
Array.pop: menghapus elemen terakhir dari sebuah array.
Array.shift: menghapus elemen pertama dari sebuah array.
Array.unshift: menambahkan elemen di awal dari sebuah array.
Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
Array.reverse: membalikkan urutan elemen dari sebuah array.
Array.sort: mengurutkan elemen dari sebuah array.
Object.assign: memodifikasi properti dari object.

*/

function max(arrayOfNumbers) {
  return arrayOfNumbers.sort((a, b) => a - b).shift();
}

const numbers = [10, 23, 24, 7, 42, 18];
console.log(numbers.sort());
const largest = max(numbers);
console.log(largest);

function registerEmail(person, email) {
  return Object.assign(person, { email });
}

const person = {
  name: "Christian",
  username: "chrisstianluis_",
};

const personWithEmail = registerEmail(person, "christian@gmail.com");
console.log(person);
console.log(personWithEmail);

// melakukan duplikasi alih-alih mengubah aslinya
function max(arrayOfNumbers) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
  return [...arrayOfNumbers].sort((a, b) => a - b).pop();
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbersSpreadOperator = [10, 23, 24, 7, 42, 18];
const largestSpreadOperator = max(numbersSpreadOperator);

console.log(largestSpreadOperator);
console.log(numbersSpreadOperator);

const personSpread = {
  name: "Christian",
  username: "chrisstianluis_",
};

const personWithEmailSpread = registerEmail(
  personSpread,
  "christian@gmail.com"
);

// immutable array method
// array.map
["Harry", "Ron", "Hermione"].map((name) => {});

const oldArray = ["Harry", "Ron", "Hermione"];
const newArray = oldArray.map((name) => `${name}!`);

console.log(newArray);
console.log(oldArray);

// array.filter
const truthyArray = [1, "", "Halo", 0, null, "Christian", 14].filter((item) =>
  Boolean(item)
);
console.log(typeof truthyArray);
console.log(truthyArray);

// another example array.filter
const students = [
  {
    name: "Christian",
    score: 90,
  },
  {
    name: "Something",
    score: 80,
  },
  {
    name: "Another",
    score: 70,
  },
  {
    name: "Else",
    score: 60,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score >= 50
);

console.log(eligibleForScholarshipStudents);

// Array reduce
// array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [
//   initialValue,
// ]);

// [...] adalah opsional parameter\
const studentsReduce = [
  {
    name: "christian",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScoreReduce = studentsReduce.reduce(
  (acc, student) => acc + student.score,
  0
);

console.log(totalScoreReduce);

// object freeze
const user = {
  name: "John",
  email: "john@dicoding.com",
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
// user.email = "doe@dicoding.com";

// another example of object freeze
function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@dicoding.com",
  preferences: {
    newsletter: true,
    notifications: "weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

deepFreeze(complexUser);

// Diabaikan
// complexUser.preferences.address.city = "Los Angeles";

console.log(complexUser.preferences.address.city); // Output: 'New York'
