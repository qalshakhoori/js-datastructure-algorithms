// Write a function called averagePair.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Complexity: O(n)
// Space complexity: O(1)
// Multiple pointers pattern
// This function uses a two-pointer approach to find a pair of numbers that sum to zero:
// 1. Start with left pointer at beginning and right pointer at end of sorted array
// 2. Calculate the average of the values at left and right pointers
// 3. If average is equal to target, we found our pair - return true
// 4. If average is less than target, we need a larger average so move left pointer right
// 5. If average is greater than target, we need a smaller average so move right pointer left
// 6. Continue until pointers meet or pair is found

function averagePair(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// Test cases
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.log(averagePair([1, 2, 3], 4)); // false
