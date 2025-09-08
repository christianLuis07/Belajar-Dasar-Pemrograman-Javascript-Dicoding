// arrow function
let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const covertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = covertCelsiusToFahrenheitUsingRegularFunction(90);
console.log("Hasil Konversi", temperatureInFahrenheit);
// Hasil Konversi 194

// Deklarasi Function dengan Arrow
// convertCelsiusToFahrenheitUsingArrowFunction adalah identifier
// (temperature) adalah parameter
// => adalah Fat Arrow
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log("Hasil Konversi", temperatureInFahrenheit);
// Hasil Konversi 194

// Arrow Function yang di Refactor
let temperatureInFahrenheitRefactored;

// Arrow Function lebih ringkas
const convertCelsiusToFahrenheitUsingArrowFunctionRefactored = (temperature) =>
  (9 / 5) * temperature + 32;

temperatureInFahrenheitRefactored =
  convertCelsiusToFahrenheitUsingArrowFunctionRefactored(90);
console.log("Hasil Konversi", temperatureInFahrenheitRefactored);
// Hasil Konversi 194
