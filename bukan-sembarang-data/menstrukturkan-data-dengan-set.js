// Membuat set
let mySet = new Set();
mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }

//Menyimpan nilai di set
const saveSet = new Set();
saveSet.add(1);
saveSet.add("Apple");
console.log(saveSet); // Set(2) { 1, 'Apple' }

// mengakses nilai di set
const accessSet = new Set([1, 2, 3, 4, 5]);

for (const item of accessSet) {
  console.log(item); // 1 2 3 4 5
}

accessSet.forEach((value) => console.log(value)); // 1 2 3 4 5

let result = "";
for (let item of accessSet) {
  result += item + " "; // 1 2 3 4 5
}
console.log(result.trim());

// Menghapus Nilai di Set
const deleteSet = new Set();
set.add(1);
set.add("Apple");
set.delete(1);
console.log(set); // Set(1) { 'Apple' }
