# JavaScript Recursion Challenges

This repository contains a collection of JavaScript functions that demonstrate various recursive algorithms and problem-solving techniques.

The project aims to provide practical examples of recursion in JavaScript, covering a wide range of common programming challenges. Each function is implemented using recursive techniques, showcasing the power and elegance of recursive problem-solving.

These challenges are designed to help developers improve their understanding of recursion and its applications in JavaScript programming. The functions cover topics such as mathematical operations, string manipulation, array transformations, and object traversal.

## Repository Structure

The repository is organized as follows:

- `1.power.js`: Calculates the power of a number using recursion
- `2.factorial.js`: Computes the factorial of a number recursively
- `3.productOfArray.js`: Calculates the product of all elements in an array
- `4.recursiveRange.js`: Computes the sum of all integers from 0 to a given number
- `5.fib.js`: Generates the nth Fibonacci number
- `6.reverse.js`: Reverses a string using recursion
- `7.isPalindrome.js`: Checks if a string is a palindrome
- `8.someRecursive.js`: Determines if an array contains an element that satisfies a given condition
- `9.flatten.js`: Flattens a nested array structure
- `10.capitalizeFirst.js`: Capitalizes the first letter of each string in an array
- `11.nestedEvenSum.js`: Calculates the sum of all even numbers in a nested object
- `12.capitalizeWords.js`: Capitalizes all words in an array of strings
- `13.stringifyNumbers.js`: Converts all numbers in a nested object to strings
- `14.collectStrings.js`: Collects all string values from a nested object

## Usage Instructions

### Installation

To use these recursive functions in your project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Recursion-Challenges.git
   ```
2. Navigate to the project directory:
   ```
   cd Recursion-Challenges
   ```
3. You can now import and use the functions in your JavaScript files.

### Getting Started

To use a specific function, import it into your JavaScript file:

```javascript
const power = require('./1.power.js');

console.log(power(2, 3)); // Output: 8
```

### Examples

Here are a few examples of how to use some of the recursive functions:

1. Calculate the power of a number:

```javascript
const power = require('./1.power.js');

console.log(power(2, 0)); // Output: 1
console.log(power(2, 4)); // Output: 16
```

2. Check if a string is a palindrome:

```javascript
const isPalindrome = require('./7.isPalindrome.js');

console.log(isPalindrome('awesome')); // Output: false
console.log(isPalindrome('tacocat')); // Output: true
```

3. Flatten a nested array:

```javascript
const flatten = require('./9.flatten.js');

console.log(flatten([1, [2, [3, 4], [[5]]]])); // Output: [1, 2, 3, 4, 5]
```

### Testing & Quality

To ensure the correctness of the recursive functions, you can create test cases for each function. Here's an example of how you might test the `power` function:

```javascript
const power = require('./1.power.js');

console.assert(power(2, 0) === 1, 'power(2, 0) should return 1');
console.assert(power(2, 2) === 4, 'power(2, 2) should return 4');
console.assert(power(2, 4) === 16, 'power(2, 4) should return 16');
```

### Troubleshooting

If you encounter any issues while using these recursive functions, consider the following:

1. Stack Overflow: Recursive functions can cause stack overflow errors if the recursion depth is too large. If you encounter this issue, try to optimize the function or consider using an iterative approach for very large inputs.

2. Infinite Recursion: Ensure that your recursive functions have proper base cases to prevent infinite recursion.

3. Performance: Some recursive solutions may be less efficient than their iterative counterparts for large inputs. Consider the input size and performance requirements of your application.

## Data Flow

The recursive functions in this repository generally follow this data flow:

1. Function receives input parameters
2. Base case check
3. If base case is not met, perform recursive call with modified parameters
4. Combine or process results from recursive calls
5. Return final result

```
Input → Base Case Check → Recursive Call → Process Results → Return
                ↑                   |
                |___________________|
```

Each function implements this flow differently based on its specific purpose and the problem it solves.