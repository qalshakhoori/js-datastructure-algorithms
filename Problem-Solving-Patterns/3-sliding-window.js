// write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Naive solution
// Time complexity: O(n^2)
// Space complexity: O(1)
// This function uses a nested loop to calculate the maximum sum of n consecutive elements in the array:
// 1. Create a variable to store the maximum sum
// 2. Iterate through array with first pointer
// 3. Iterate through array with second pointer starting at next index
// 4. Calculate sum of n consecutive elements
// 5. Update maximum sum if new sum is greater
// 6. Return maximum sum
// This solution is inefficient because it has a time complexity of O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let maximum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > maximum) {
      maximum = temp;
    }

    // console.log(temp, maximum);
  }

  return maximum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13

// Refactored
// Time complexity: O(n)
// Space complexity: O(1)
// Sliding window pattern
// This function uses a sliding window approach to calculate the maximum sum of n consecutive elements in the array:
// 1. Create a variable to store the maximum sum
// 2. Create a variable to store the sum of the first n elements
// 3. If array length is less than n, return null
// 4. Calculate the sum of the first n elements
// 5. Set maximum sum to the sum of the first n elements
// 6. Iterate through array starting at n
// 7. Subtract the first element and add the next element
// 8. Update maximum sum if new sum is greater
// 9. Return maximum sum

function maxSubarraySumBySlidingWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySumBySlidingWindow([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySumBySlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySumBySlidingWindow([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySumBySlidingWindow([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySumBySlidingWindow([], 4)); // null
