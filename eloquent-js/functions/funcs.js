// // defining functions
// const square = function(x) {
//   return x * x;
// }
// console.log(square(12)); // returns 144


const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result
}
console.log(power(2, 10)); // returns 1024


// variable scoping
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); // returns 60
}
// y defined with let, not visible here:
// console.log(x + y + z); // err: y is not defined
console.log(x + z);


// nested scopes
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += 's';
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, 'can', 'chickpeas');
  ingredient(0.25, 'cup', 'tahini');
  ingredient(1, 'lemon', 'juiced');
  ingredient(1, 'clove', 'garlic');
  ingredient(2, 'T', 'olive oil');
}
hummus(3.5);


// declaration notation
function square(x) {
  return x * x;
}
console.log(square(12)); // returns 144


// arrow function notation
const squareArrow = (x) => {
  return x * x;
}
console.log(squareArrow(12)); // returns 144


// the call stack
function greet(who) {
  console.log(`Hello ${who}`);
}
greet('Harry');
console.log('Bye!');
