// Memanggil Function
let paramater = prompt("Masukkan suhu dalam celcius : ");

function convertCelciusToFahrenheit(temperatureInCelsius) {
  temperatureInCelsius = parseInt(temperatureInCelsius);
  const temperatureInFahrenheit = (9 / 5) * temperatureInCelsius + 32;
  console.log("Hasil konversi :", temperatureInFahrenheit);
}

convertCelciusToFahrenheit(paramater);

// Hoisting function
greetWorld();

function greetWorld() {
  console.log("Hello World");
}
