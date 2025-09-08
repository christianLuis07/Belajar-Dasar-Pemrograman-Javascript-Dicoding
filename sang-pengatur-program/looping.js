// not using loop
const foods = ["Nasi Goreng", "Pasta", "Sate"];

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

// with loop
// for loop
/*
for (variabel awal; test kondisi; increment) {
  // do something
}
*/
console.log("=== For Loop ===");
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

// for in
console.log("=== For In ===");
const person = { name: "Fulan", origin: "Jakarta", birthday: 2024 };

for (let isi in person) {
  console.log(`${isi} bernilai ${person[isi]}`);
}

// for of
console.log("=== For Of ===");
const cities = ["Jakarta", "Bandung", "Surabaya"];
for (let city of cities) {
  console.log(city);
}

// While loop
/* 
while (condition) 
     statement
*/
let i = 0;

console.log("=== While Loop ===");
while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}`);
  i++;
}

// do-While loop
/* 
do {
  statement
} while (condition)
*/
let j = 0;

console.log("=== Do-While Loop ===");
do {
  console.log(`Angka ke-${j} adalah ${j}`);
  j++;
} while (j < 5);

// control statement break
console.log("=== Control Statement Break ===");
for (let k = 0; k < 5; k++) {
  if (k === 3) {
    break;
  }
  console.log(`Angka ke-${k} adalah ${k}`);
}

// control statement continue
console.log("=== Control Statement Continue ===");
for (let l = 0; l < 5; l++) {
  if (l === 3) {
    continue;
  }
  console.log(`Angka ke-${l} adalah ${l}`);
}
