// write a function that takes in a sorted array of integers and returns the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Naive solution
// Time complexity: O(n^2)
// Space complexity: O(1)
// This function uses a nested loop to find a pair of numbers that sum to zero:
// 1. Iterate through array with first pointer
// 2. Iterate through array with second pointer starting at next index
// 3. If sum of values at pointers is 0, return pair
// 4. If no pair is found, return undefined
// This solution is inefficient because it has a time complexity of O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]

// Refactored
// Time complexity: O(n)
// Space complexity: O(1)
// Multiple pointers pattern
// This function uses a two-pointer approach to find a pair of numbers that sum to zero:
// 1. Start with left pointer at beginning and right pointer at end of sorted array
// 2. Calculate sum of values at left and right pointers
// 3. If sum is 0, we found our pair - return it
// 4. If sum is positive, we need a smaller sum so move right pointer left
// 5. If sum is negative, we need a larger sum so move left pointer right
// 6. Continue until pointers meet or pair is found
function sumZeroWithMultiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZeroWithMultiplePointers([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Naive solution
// Time complexity: O(n)
// Space complexity: O(n)
// This function uses an object to count unique values in the array:
// 1. Create an empty object to store unique values
// 2. Iterate through array
// 3. If value is not in object, add it and increment count
// 4. Return count of unique values
function countUniqueValues(arr) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7

// Refactored
// Time complexity: O(n)
// Space complexity: O(1)
// Multiple pointers pattern
// This function uses a two-pointer approach to count unique values in a sorted array:
// 1. Start with left pointer at beginning and right pointer at next index
// 2. If values at pointers are different, increment count and move left pointer
// 3. If values at pointers are same, move right pointer
// 4. Continue until right pointer reaches end of array
// 5. Return count of unique values
function countUniqueValuesWithMultiplePointers(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValuesWithMultiplePointers([])); // 0
console.log(countUniqueValuesWithMultiplePointers([1])); // 1
console.log(countUniqueValuesWithMultiplePointers([1, 1, 1, 1, 1, 2])); // 2
console.log(
  countUniqueValuesWithMultiplePointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7
console.log(countUniqueValuesWithMultiplePointers([-2, -1, -1, 0, 1])); // 4
