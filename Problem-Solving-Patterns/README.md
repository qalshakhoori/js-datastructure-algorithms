# JavaScript Problem-Solving Patterns

This project demonstrates four essential problem-solving patterns in JavaScript: Frequency Counter, Multiple Pointers, Sliding Window, and Divide and Conquer.

These patterns are fundamental techniques used to solve complex algorithmic problems efficiently. Each pattern is implemented with examples to illustrate its application and benefits in terms of time and space complexity.

The repository contains implementations of various algorithms that showcase how these patterns can be used to optimize solutions for common programming challenges. It serves as a practical guide for developers looking to improve their problem-solving skills and write more efficient code.

## Repository Structure

```
Problem-Solving-Patterns/
├── 1-frequency-counter.js
├── 2-multiple-pointers.js
├── 3-sliding-window.js
└── 4-divide-and-conquer.js
```

- `1-frequency-counter.js`: Demonstrates the Frequency Counter pattern with examples of comparing array elements and checking for anagrams.
- `2-multiple-pointers.js`: Illustrates the Multiple Pointers pattern with examples of finding pairs that sum to zero and counting unique values in a sorted array.
- `3-sliding-window.js`: Shows the Sliding Window pattern with an example of finding the maximum sum of consecutive elements in an array.
- `4-divide-and-conquer.js`: Presents the Divide and Conquer pattern with an example of binary search implementation.

## Usage Instructions

### Installation

1. Ensure you have Node.js installed on your system (version 12.0.0 or higher recommended).
2. Clone this repository to your local machine:
   ```
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```
   cd Problem-Solving-Patterns
   ```

### Running the Examples

To run any of the example files, use the Node.js runtime:

```
node <filename>.js
```

For instance, to run the Frequency Counter examples:

```
node 1-frequency-counter.js
```

### Examples

1. Frequency Counter Pattern:
   ```javascript
   function validAnagram(str1, str2) {
     if (str1.length !== str2.length) {
       return false;
     }

     const lookup = {};

     for (let i = 0; i < str1.length; i++) {
       let letter = str1[i];
       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
     }

     for (let i = 0; i < str2.length; i++) {
       let letter = str2[i];
       if (!lookup[letter]) {
         return false;
       } else {
         lookup[letter] -= 1;
       }
     }

     return true;
   }

   console.log(validAnagram('anagram', 'nagaram')); // true
   console.log(validAnagram('rat', 'car')); // false
   ```

2. Multiple Pointers Pattern:
   ```javascript
   function sumZeroWithMultiplePointers(arr) {
     let left = 0;
     let right = arr.length - 1;
     while (left < right) {
       let sum = arr[left] + arr[right];
       if (sum === 0) {
         return [arr[left], arr[right]];
       } else if (sum > 0) {
         right--;
       } else {
         left++;
       }
     }
   }

   console.log(sumZeroWithMultiplePointers([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
   ```

3. Sliding Window Pattern:
   ```javascript
   function maxSubarraySumBySlidingWindow(arr, num) {
     if (arr.length < num) return null;

     let maxSum = 0;
     let tempSum = 0;

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

   console.log(maxSubarraySumBySlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)); // 17
   ```

4. Divide and Conquer Pattern:
   ```javascript
   function searchByDivideAndConquer(arr, val) {
     let min = 0;
     let max = arr.length - 1;

     while (min <= max) {
       let middle = Math.floor((min + max) / 2);
       let currentElement = arr[middle];

       if (currentElement < val) {
         min = middle + 1;
       } else if (currentElement > val) {
         max = middle - 1;
       } else {
         return middle;
       }
     }
     return -1;
   }

   console.log(searchByDivideAndConquer([1, 2, 3, 4, 5, 6], 4)); // 3
   ```

### Troubleshooting

If you encounter any issues while running the examples:

1. Ensure you're using a compatible version of Node.js.
2. Check for any syntax errors in the code.
3. Verify that you're in the correct directory when running the files.

For debugging:

- Use `console.log()` statements to print intermediate values and understand the flow of the algorithms.
- Node.js's built-in debugger can be used for more complex debugging scenarios. Run your script with the `--inspect` flag:
  ```
  node --inspect <filename>.js
  ```
  Then open Chrome and navigate to `chrome://inspect` to access the debugging tools.

## Data Flow

The data flow in these problem-solving patterns typically follows this sequence:

1. Input: The algorithm receives an input (usually an array or string).
2. Processing: The input is processed using the specific pattern:
   - Frequency Counter: Creates objects to compare frequencies of values.
   - Multiple Pointers: Uses two or more pointers to traverse the input.
   - Sliding Window: Maintains a subset of data as it moves through the input.
   - Divide and Conquer: Breaks the input into smaller pieces, solves them, and combines the results.
3. Output: The algorithm produces a result based on the problem requirements.

```
Input Data -> Pattern-Specific Processing -> Output Result
     ^                    |
     |                    v
  (Possible iteration or recursion)
```

Each pattern optimizes this flow differently to achieve better time or space complexity compared to naive solutions.