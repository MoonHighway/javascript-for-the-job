let total = 22;

function addTip(tip) {
  total += tip;
}

console.log("total: ", total);
addTip(10);
console.log("addTip changes the total: ", total);

// Pure Functions

function withTip(tip, total) {
  return tip + total;
}

console.log("the new total: ", total);
console.log("withTip doesn't change the total: ", withTip(10, total));
console.log("total remains the same: ", total);

const add = (a, b) => a + b;
let result = add(1, 2);
console.log("result: ", result);

function makePlural(count, word) {
  if (count === 1) return word;
  return `${word}s`;
}

console.log('makePlural(3, "cat"): ', makePlural(3, "cat"));
console.log('makePlural(1, "cat"): ', makePlural(1, "cat"));

// Predicates: Pure functions that return a boolean

function isRed(color) {
  return color.toLowerCase().trim() === "red";
}

console.log("isRed(green): ", isRed("green"));

const isAdult = (age) => age >= 18;

console.log("isAdult(42): ", isAdult(42));
