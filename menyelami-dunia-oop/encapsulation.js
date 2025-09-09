// encapsulation
class CoffeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.temperature = 90;
  }

  makeCoffe() {
    console.log("Making coffe... With degree: " + this.temperature);
  }
}

const coffe = new CoffeMachine(100);
coffe.temperature = 60;
coffe.makeCoffe(); // Making coffe... With degree: 60

// jika tidak menerapkan proses encapsulation maka nilai temperature bisa diubah di luar class;

// jika menerapkan encapsulation maka nilai temperature tidak bisa diubah di luar class;

// cara menerapkan encapsulation dengan getter dan setter
class CoffeMachineEncapsultion {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperature = 90;
  }

  set temperature(temperature) {
    console.log("Kamu tidak bisa mengubah temperature");
  }

  get temperature() {
    return this._temperature;
  }
}

const coffeEncapsulation = new CoffeMachineEncapsultion(100);
coffeEncapsulation.temperature = 60;
console.log(
  "Setelah memakai getter dan setter",
  coffeEncapsulation.temperature
);

// cara membuat nilai benar benar tidak bisa diubah
class CoffeEncapsulationNotChange {
  #temperature = 90;
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("Kamu tidak bisa mengubah temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}

const coffeEncapsulationNotChange = new CoffeEncapsulationNotChange(100);
coffeEncapsulationNotChange.temperature = 60;
console.log(
  "Setelah memakai getter dan setter",
  coffeEncapsulationNotChange.temperature
);
