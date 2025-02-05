function someRecursive(arr, cb) {
  if (arr.length === 0) {
    return false;
  }

  if (cb(arr[0])) {
    return true;
  }

  return someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([1, 2, 3, 4], (val) => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8, 9], (val) => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8], (val) => val % 2 !== 0)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
