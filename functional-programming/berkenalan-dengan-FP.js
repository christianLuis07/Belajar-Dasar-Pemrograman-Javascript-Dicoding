// Impertative Programming
const names = ["Dicoding", "Indonesia"];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]} Merupakan index ke-${i}`);
}

console.log(newNamesWithExcMark[0]);

// Declarative Programming
const namesDeclarative = ["Dicoding", "Indonesia"];

const newNamesWithExcMarkDeclarative = names.map((name, index) => `${name}`);

console.log(newNamesWithExcMarkDeclarative);
