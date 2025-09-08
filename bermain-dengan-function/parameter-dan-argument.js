// temperature adalah parameter
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log("Hasil konversi:", temperatureInFahrenheit);
}

// jika kita memanggil function seperti dibawah ini maka hasilnya adalah NaN
convertCelsiusToFahrenheit(); // Hasil konversi: NaN

// jika kita memanggil function seperti dibawah ini maka hasilnya adalah 86
convertCelsiusToFahrenheit(30); // Hasil konversi: 86

function convertCelsiusToFahrenheitWithDefaultParameter(temperature = 50) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log(
    "Hasil konversi dengan default parameter:",
    temperatureInFahrenheit
  );
}

// jika kita memanggil function seperti dibawah ini maka hasilnya adalah 122
convertCelsiusToFahrenheitWithDefaultParameter(); // Hasil konversi dengan default parameter: 122

// jika kita memanggil function seperti dibawah ini maka hasilnya adalah 86
convertCelsiusToFahrenheitWithDefaultParameter(30); // Hasil konversi dengan default parameter: 86
