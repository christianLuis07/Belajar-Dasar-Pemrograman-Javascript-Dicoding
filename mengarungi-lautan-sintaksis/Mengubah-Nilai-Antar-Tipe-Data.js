// mengubah ke string
console.log("=== Mengubah ke String ===");
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = String(boolean);

console.log(strNumber); // "123"
console.log(strBoolean); // "true"
console.log(typeof strNumber); // "string"
console.log(typeof strBoolean); // "string"
console.log(" ");

// mengubah ke number
console.log("=== Mengubah ke Number ===");
const strToNumber = "123";
const strToFloat = "3.14";

const intNumber = parseInt(strToNumber);
const floatNumber = parseFloat(strToFloat);

console.log(intNumber); // 123
console.log(floatNumber); // 3.14
console.log(" ");
console.log(typeof intNumber); // "number"
console.log(typeof floatNumber); // "number"

console.log(" ");
const cm = "2c0cm";
const px = "6`4px";

const intCm = parseInt(cm);
const intPx = parseInt(px);

console.log(intCm);
console.log(intPx);

console.log(" ");
const cmToFloat = "20.55cm";
const pxToFloat = "64.99px";

const floatCm = parseFloat(cmToFloat);
const floatPx = parseFloat(pxToFloat);

console.log(floatCm);
console.log(floatPx);

console.log(" ");

// mengubah ke boolean
console.log("=== Mengubah ke Boolean ===");
const strToBoolean = "true";

console.log(Boolean(strToBoolean === "false" && "false" && "true"));

const numberToBoolean = 1;
const stringToBoolean = "Test";
const emptyToBoolean = null;

const boolFromNumber = Boolean(numberToBoolean);
const boolFromString = Boolean(stringToBoolean);
const boolFromEmpty = Boolean(emptyToBoolean);

console.log(boolFromNumber === true && false === false); // true
console.log(boolFromString !== true); // false
console.log(boolFromEmpty ?? true); // true

// Konversi Implisit
console.log(" === Konversi Implisit ===");
const age = 20;
const message = "Umur saya adalah " + age;

console.log(message); // "Umur saya adalah 20"

const strNumberImplicit = "123";
const result = strNumberImplicit * Boolean(2);
console.log(result); // 246;
console.log(typeof result); // "number"

const bool = true;
const resultOfBool = false + (bool - true);
console.log(resultOfBool);
console.log(typeof resultOfBool); // "number"
