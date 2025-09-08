// greeWorld adalah identifier
// function merupakan function keyword
// message adalah parameter
const greetWorld = function (message) {
  console.log("Hello World!");
};

greetWorld("Hello Everyone!");

// function convert celsius to fahrenheit
const Masukan = prompt("Masukkan suhu dalam celcius : ");
const convertCelsiusToFahrenheit = function (temperatureInCelsius) {
  const result = (9 / 5) * temperatureInCelsius + 32;
  return result;
};

const temperatureInFahrenheit = convertCelsiusToFahrenheit(parseInt(Masukan));
console.log(temperatureInFahrenheit);

// Function First-Class Citizen
function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function calculate(operation, a, b) {
  return operation(a, b);
}

function gonnaCalculateSomething(operation, a, b) {
  return operation(a, b);
}

const result = calculate(multiply, 5, 10);
console.log(result); // Output: 50

const resultAdd = gonnaCalculateSomething(add, 5, 10);
console.log(resultAdd); // Output: 15

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10)); // Output: 20
