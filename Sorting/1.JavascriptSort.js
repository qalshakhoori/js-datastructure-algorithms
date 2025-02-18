// Javascript built in sort method
// Comparing function takes two parameters and returns negative, positive or zero numbers
// Negative means a should come before b
// Positive means a should come after b
// Zero means order should stay the same

function numberComparer(num1, num2) {
  return num1 - num2;
}

console.log([6, 4, 15, 10].sort(numberComparer));
