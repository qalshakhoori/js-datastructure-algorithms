// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Time complexity: O(n)
// Space complexity: O(n)
// This function uses a frequency counter to check for duplicates in arguments:
// 1. Create an empty object to store arguments
// 2. Iterate through arguments
// 3. If argument is not in object, add it and increment count
// 4. If argument is in object, return true
// 5. Return false if no duplicates found
function areThereDuplicates() {
  let obj = {};
  for (let arg of arguments) {
    if (!obj[arg]) {
      obj[arg] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// Time complexity: O(n)
// Space complexity: O(n)
// This function uses a set to check for duplicates in arguments:
// 1. Create a new Set from arguments
// 2. Compare size of Set to length of arguments
// 3. If sizes are different, return true (duplicates found)
// 4. Return false (no duplicates found)
function areThereDuplicatesWithSet() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicatesWithSet(1, 2, 3)); // false
console.log(areThereDuplicatesWithSet(1, 2, 2)); // true

console.log(areThereDuplicatesWithSet('a', 'b', 'c', 'a')); // true

// Time complexity: O(n log n)
// Space complexity: O(1)
// This function sorts arguments and checks for duplicates:
// 1. Sort arguments
// 2. Iterate through arguments
// 3. If current argument is same as next argument, return true
// 4. Return false if no duplicates found
function areThereDuplicatesWithSort() {
  let args = Array.from(arguments).sort();
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }
  return false;
}
