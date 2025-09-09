// impure function
console.log("=== Impure Function ===");
let value = 0;

function addWidth(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWidth(5); // Output: Current value is 5
const result2 = addWidth(10); // Output: Current value is 15

// pure function
console.log("=== Pure Function ===");
function addWidthPure(value, addingValue) {
  return value + addingValue;
}

const result1Pure = addWidthPure(value, 5); // Output: 5
console.log(`result1Pure: ${result1Pure}`);
const result2Pure = addWidthPure(result1Pure, 10); // Output: 15
console.log(`result2Pure: ${result2Pure}`);

const result3Pure = addWidthPure(result2Pure, 20); // Output: 35
console.log(`result3Pure: ${result3Pure}`);

console.log(result1Pure, result2Pure, result3Pure);

// another example impure function
console.log("=== Another Example Impure Function ===");
// mengubah nilai variable global
let count = 0;
function increment() {
  count++;
}

// mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// menggubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}

// Menulis ke berkas
const fs = require("fs");

function writeToFile(data) {
  fs.writeFileSync("output.txt", data);
}

// another example pure function
console.log("=== Another Example Pure Function ===");
// menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
  return users.filter((user) => user.isActive).map((user) => user.username);
}

// membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: address.street,
      city: address.city,
      country: address.country,
    },
  };
}

// menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
  return {
    ...defaultSettings,
    ...userSettings,
  };
}
