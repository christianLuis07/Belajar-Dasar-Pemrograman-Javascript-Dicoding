// function non recursive
function generateArray(n) {
  const result = [];
  for (let counter = 0; counter <= n; counter += 2) {
    result.push(counter);
  }
  return result;
}

console.log(generateArray(5 * 2));

// function recursive
function generateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray(n - 1), n];
}

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]
