// function factorial(n) {
//   let total = 1;
//   for (let i = n; i < n; i--) {
//     total *= i;
//   }
// }

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
