import myFunction from "./anotherFile.mjs";
import result from "./anotherFile.mjs";
import { name, email, age } from "./anotherFile.mjs";
import * as anotherFile from "./anotherFile.mjs";
import { myFunction as userFunction } from "./user.mjs";
import { myFunction as customerFunction } from "./customer.mjs";

myFunction();
result();
userFunction();
customerFunction();

console.log("\n", name, "\n", email, "\n", age);
console.log(anotherFile.name, anotherFile.email, anotherFile.age);
