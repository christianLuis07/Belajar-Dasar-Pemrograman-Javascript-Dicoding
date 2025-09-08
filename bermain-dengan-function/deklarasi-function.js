// syntax function adalah Function Keyword
// sedangkan greetWorld adalah identifier
// di dalam kurung {} adalah function body
function greetWorld() {
  console.log("Hello World");
}

function convertCelciusToFahrenheit(temperatureInCelsius) {
  const temperatureInFahrenheit = (9 / 5) * temperatureInCelsius + 32;

  console.log("Hasil konversi :", temperatureInFahrenheit);
}

convertCelciusToFahrenheit(30);
