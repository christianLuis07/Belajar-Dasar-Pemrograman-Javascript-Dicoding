// Overriding
// Overriding constructor
console.log("=== overriding constructor ===");
class Smartphones {
  constructor(color, brand, model) {
    (this.color = color), (this.brand = brand), (this.model = model);
  }

  charge() {
    console.log(`${this.model} Charging...`);
  }
}

class Android extends Smartphones {
  // overriding constructor
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charge() {
    console.log(`Charging ${this.model} with fast charger...`);
  }

  SplitScreen() {
    console.log("Android Mempunyai Split Screen...");
  }
}

const androidExample = new Android(
  "White",
  "Samsung",
  "Galaxy S21",
  "Smart Phone"
);
androidExample.SplitScreen();
androidExample.charge();

// overriding method
console.log("=== overriding method ===");
class SmartphonesMethod {
  constructor(color, brand, model) {
    (this.color = color), (this.brand = brand), (this.model = model);
  }

  charge() {
    console.log(`${this.model} Charging...`);
  }
}

class AndroidMethod extends SmartphonesMethod {
  // overriding constructor
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  charge() {
    // Memanggil method charging dari SuperClass (SmartphonesMethod)
    super.charge();
    console.log(`Charging ${this.model} with fast charger...`);
  }

  SplitScreen() {
    console.log("Android Mempunyai Split Screen...");
  }
}

const androidExampleMethod = new AndroidMethod(
  "White",
  "Samsung",
  "Galaxy S21",
  "Smart Phone"
);
androidExampleMethod.SplitScreen();
androidExampleMethod.charge();
