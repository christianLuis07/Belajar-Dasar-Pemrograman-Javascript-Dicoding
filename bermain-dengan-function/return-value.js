const result = console.log("Hello World");
console.log(result); // Output: Hello World \n undefined
console.log(" ");

let somethingThatILike = prompt("Masukkan angka Pertama :");
let somethingThatILike2 = prompt("Masukkan angka Kedua :");

// function with return value
function sumNumbers(a, b) {
  const results = a + b;
  return results;
}

const iWantToSeeTheResult = sumNumbers(
  parseInt(somethingThatILike),
  parseInt(somethingThatILike2)
);

console.log("Hasil penjumlahan adalah : ", iWantToSeeTheResult);
