// write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater
// than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Complexity: O(n) - Sliding Window
// 1. Create a variable called minLength and set it to Infinity
// 2. Create a variable called sum and set it to 0
// 3. Create a variable called start and set it to 0
// 4. Loop through the array
// 5. Add the current element to sum
// 6. If sum is greater than or equal to the integer passed to the function
// 7. Set minLength to the minimum of minLength and the current index minus start plus 1
// 8. Subtract the start element from sum
// 9. Increment start
// 10. If sum is less than the integer passed to the function and start is equal to the length of the array
// 11. Return minLength if it is not equal to Infinity, otherwise return 0

function minSubArrayLen(arr, num) {
  let minLength = Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (start < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (sum < num && end < arr.length) {
      sum += arr[end];
      end++;
    }

    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (sum >= num) {
      minLength = Math.min(minLength, end - start);
      sum -= arr[start];
      start++;
    }

    // else we can't come to an answer and need to break out of loop
    else {
      break;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
