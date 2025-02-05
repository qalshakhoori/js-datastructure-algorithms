function recursiveRange(num) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(0)); // 0
console.log(recursiveRange(1)); // 1
