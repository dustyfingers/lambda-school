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
// ^^^               ^^^
// not in function
//    in greet
//         in console.log
//    in greet
// not in function
//    in console.log
// not in function


// optional function arguments
function squareThree(x) { return x * x; }
console.log(squareThree(4, true, 'alfredo sauce')); // returns 16


function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10)); // returns -10
console.log(minus(10, 2)); // returns 8


// exponent defaults to 2 if no parameter given
function powerTwo(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(powerTwo(4)); // returns 16
console.log(powerTwo(2, 10)); //returns 1024

// Consider this puzzle: by starting from the number 1 and repeatedly
// either adding 5 or multiplying by 3, an infinite set of numbers can be produced.
// How would you write a function that, given a number, tries to find a sequence
// of such additions and multiplications that produces that number?

// here is a recursive solution
// I DONT GET THIS YET, NEED TO STUDY THIS MORE
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, '1');
}
console.log(findSolution(24));
console.log(findSolution(153));


// repetitive function!!
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);


// same thing above refactored
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInvRefactor(cows, chickens, pigs){
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInvRefactor(7, 4, 22);



// CHALLENGE PROBLEMS!
function countBs(string) {
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      count += 1;
    }
  }
  return count;
}
console.log(countBs('BBC'));
console.log(countBs('Bad bad'));
console.log(countBs('got'));


function countChar(string, char) {
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count += 1;
    }
  }
  return count;
}
console.log(countChar('got', 'g'));
console.log(countChar('got', 'a'));
