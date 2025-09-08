// Membuat object
// age adalah key
// 8 adalah value
// isi user adalah Properti
const user = {
  name: "Dicoding",
  lastName: "Indonesia",
  age: 8,
};
const products = { name: "Sepatu", price: 150000 };

user.age = 9;

// Mengakses seluruh properti object
console.log(user);

// mengakses salah satu properti object
console.log(user.age);

// mengakses dengan menggunakan square bracket
console.log(user["lastName"]);

// mengakses dengan object destructuring
const { name, lastName } = user;
console.log(name, lastName);

// More about object destructuring
const someone = {
  id: 1,
  email: "somebody@me.com",
  name: "Somebody",
  nickname: "Some",
  username: "somebody123",
  password: "sombodysecret",
};

const { id, email } = someone;
console.log(id, email);

// menghapus properti di object
const contoh = {
  name: "Olivia",
  "last name": "Rodrigo",
  age: 22,
};

delete contoh.age;
console.log(contoh);
contoh.age = 22;
delete contoh["last name"];
console.log(contoh);
