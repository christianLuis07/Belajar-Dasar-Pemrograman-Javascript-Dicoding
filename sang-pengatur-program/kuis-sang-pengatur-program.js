function categorizeNumber(input) {
  //* 1. Jika input bukan number, bangkitkan (throw) error.
  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }

  //* 5. Jika input adalah nol, kembalikan dengan nilai "Nol".
  else if (input === 0) {
    return "Nol";
  }

  //* 6. Jika input negatif, kembalikan dengan nilai "Negatif".
  else if (input < 0) {
    return "Negatif";
  }

  //* 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
  else if (isPrime(input)) {
    return "Prima";
  }

  //* 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
  else if (input % 2 === 0) {
    return "Genap";
  }

  //* 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
  else {
    return "Ganjil";
  }
}

// Fungsi bantu cek bilangan prima
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Contoh
console.log(categorizeNumber(15)); // "Ganjil"
console.log(categorizeNumber(12)); // "Genap"
console.log(categorizeNumber(17)); // "Prima"
console.log(categorizeNumber(0)); // "Nol"
console.log(categorizeNumber(-5)); // "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message);
} // "Input harus berupa bilangan bulat"
