// contoh sederhana
const error = new Error("Terjadi kesalahan");
console.log(error); // Error: Terjadi kesalahan

// contoh sederhana pada sistem pembayaran
// const price = 100;
// const paid = 80;

// if (paid < price) {
//   throw new Error("Pembayaran Kurang");
// }

// try-catch
try {
  console.log("Memulai Program");
  console.log("Mengakhiri Program");
} catch (err) {
  console.log("Karena tidak ada error, blok ini tidak akan dijalankan");
}

// another example try-catch
try {
  console.log("Memulai Program");
  throw new Error("Error: Program Dihentikan");
  console.log("Mengakhiri Program");
} catch (err) {
  console.log("Terjadi kesalahan:", err.message);
}

// try-catch-finnaly
try {
  console.log("ini try block");
} catch (err) {
  console.log("ini catch block");
} finally {
  console.log("ini finally block");
}

// another try-catch-finnaly
console.log("=== another try-catch-finnaly ===");
try {
  console.log("ini try block");
  throw new Error("Terjadi kesalahan");
} catch (err) {
  console.log("ini catch block");
} finally {
  console.log("ini finally block");
}
