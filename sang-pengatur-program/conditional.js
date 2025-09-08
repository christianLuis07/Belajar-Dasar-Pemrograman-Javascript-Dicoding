// if
const gajian = true;

console.log("Berjalan-jalan di mal");
if (!gajian) {
  console.log("Makan di restoran mal");
}
console.log("Pulang ke rumah");

// another if
const score = 80;

if (score >= 80) {
  console.log("Selamat, Anda lulus ujian!");
} else {
  console.log("Maaf, Anda belum lulus ujian.");
}

// another if again
const scoreAgain = 85;

if (scoreAgain > 90) {
  console.log("Selamat, Anda mendapatkan nilai A!");
} else if (scoreAgain > 80) {
  console.log("Selamat, Anda lulus ujian!");
} else {
  console.log("Maaf, Anda belum lulus ujian.");
}

// Ternary Operator
/* 
1.Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
2.Ekspresi yang dieksekusi jika kondisinya benar.
3.Ekspresi yang dieksekusi jika kondisi salah.
*/
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// Switch Case
const fruit = "christian";

switch (fruit) {
  case "banana":
    console.log("I am a banana.");
    break;
  case "apple":
    console.log("I am an apple.");
    break;
  case "orange":
    console.log("I am an orange.");
    break;
  case "strawberry":
    console.log("I am a strawberry.");
    break;
  default:
    console.log("I am not a fruit. I am a programmer.");
}

// another case of switch case and if
const day = new Date().getDay();
console.log(day);

if (day === 0) {
  console.log("Minggu");
} else if (day === 1) {
  console.log("Senin");
} else if (day === 2) {
  console.log("Selasa");
} else if (day === 3) {
  console.log("Rabu");
} else if (day === 4) {
  console.log("Kamis");
} else if (day === 5) {
  console.log("Jumat");
} else if (day === 6) {
  console.log("Sabtu");
} else {
  console.log("Hari tidak valid");
}

const daySwitch = new Date().getDay();

switch (daySwitch) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Hari tidak valid");
}

// If break not declared in switch cased
const number = 2;

switch (number) {
  case 1:
    console.log("Ini 1");
    break;
  case 2:
    console.log("Ini 2");
  case 3:
    console.log("Ini 3");
    break;
  default:
    console.log("Ini default");
}
