// membuat map
const myMap = new Map();

const productMap = new Map([
  ["shoes", 500],
  ["cap", 350],
  ["jeans", 250],
]);

console.log(productMap); // Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }

// Menyimpan nilai di Map
const saveMap = new Map();
saveMap.set("shoes", 500);
saveMap.set("cap", 350);
saveMap.set(600, "jeans");
console.log(saveMap); // Map(3) { 'shoes' => 500, 'cap' => 350, 600 => 'jeans' }

// Mengakses nilai di Map
const accessMap = new Map();
accessMap.set(500, "shoes");
accessMap.set("cap", 350);
console.log(accessMap.get(500)); // shoes

// meghapus nilai di Map
const deleteMap = new Map();
deleteMap.set("shoes", 500);
deleteMap.set("cap", 350);
deleteMap.delete("shoes");
console.log(deleteMap); // Map(1) { 'cap' => 350 }
