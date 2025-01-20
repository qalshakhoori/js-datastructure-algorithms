function addUpTo(n) {
  // This function uses a loop to sum up numbers from 1 to n.
  // Performance implication: Time complexity is O(n) because it iterates through all numbers from 1 to n.
  // This means the execution time increases linearly with the input size.
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToFormula(n) {
  // This function uses a mathematical formula to sum up numbers from 1 to n.
  // Performance implication: Time complexity is O(1) because it performs a constant number of operations regardless of n.
  // This means the execution time remains constant even as the input size increases.
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
// addUpTo(10000000000);
addUpToFormula(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function printUpTo(n) {
  // This function prints numbers from 1 to n.
  // Performance implication: Time complexity is O(n) because it iterates through all numbers from 1 to n.
  // This means the execution time increases linearly with the input size.
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function printUpToFive(n) {
  // This function prints numbers from 1 to n.
  // Performance implication: Time complexity is O(1) because it performs a constant number of operations regardless of n.
  // This means the execution time remains constant even as the input size increases.
  for (let i = 1; i <= Math.max(n, 5); i++) {
    console.log(i);
  }
}
