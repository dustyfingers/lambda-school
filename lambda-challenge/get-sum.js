function getSumOfDigits(num) {
  let stringOfNumber = num.toString();
  let total = 0;
  for (let i = 0; i < stringOfNumber.length; i++) {
    let individualNumber = parseInt(stringOfNumber.charAt(i));
    total += individualNumber;
  }
  return total;
}

/* Do not modify code below this line */

console.log(getSumOfDigits(42), '<-- should be 6');
