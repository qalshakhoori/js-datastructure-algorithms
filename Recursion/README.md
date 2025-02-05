# JavaScript Recursion Examples and Techniques

This project demonstrates various recursion techniques in JavaScript, providing practical examples and implementations of recursive functions.

The repository contains a collection of JavaScript files that showcase different aspects of recursion, including basic examples, factorial calculation, helper method recursion, and pure recursion. These examples serve as a learning resource for developers looking to understand and implement recursive algorithms in JavaScript.

Each file in the project focuses on a specific concept or technique, allowing users to explore and understand recursion step by step. The examples range from simple countdown functions to more complex operations like collecting odd numbers from an array using different recursive approaches.

## Repository Structure

```
.
└── Recursion
    ├── 1-intro-examples.js
    ├── 2-factorial.js
    ├── 3-helper-recurions.js
    ├── 4-pure-recursion.js
    └── README.md
```

- `1-intro-examples.js`: Contains introductory examples of recursive functions.
- `2-factorial.js`: Demonstrates the calculation of factorial using recursion.
- `3-helper-recurions.js`: Illustrates the helper method recursion technique.
- `4-pure-recursion.js`: Shows an example of pure recursion without helper methods.

## Usage Instructions

### Installation

No installation is required for this project. You only need a JavaScript runtime environment, such as Node.js, to run the examples.

Prerequisites:
- Node.js (version 12.0.0 or higher)

### Running the Examples

To run any of the example files, use the following command in your terminal:

```bash
node Recursion/filename.js
```

Replace `filename.js` with the name of the file you want to run.

### Examples

1. Introduction to Recursion (`1-intro-examples.js`):

```javascript
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(10);
```

This will output the countdown from 10 to 1, followed by "All done!".

2. Factorial Calculation (`2-factorial.js`):

```javascript
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

3. Collecting Odd Numbers (`3-helper-recurions.js`):

```javascript
function collectOdds(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(nums);
  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [1, 3, 5, 7, 9]
```

### Troubleshooting

Common issues and solutions:

1. Stack Overflow Error:
   - Problem: When running recursive functions with large inputs, you may encounter a "Maximum call stack size exceeded" error.
   - Solution: Implement tail-call optimization or consider using an iterative approach for very large inputs.

2. Infinite Recursion:
   - Problem: If the base case is not properly defined, the function may recurse indefinitely.
   - Solution: Ensure that your recursive function has a well-defined base case that will eventually be reached.

Debugging:
- Use `console.log()` statements within your recursive functions to track the flow of execution and variable values.
- Set breakpoints in your IDE or use the Node.js debugger to step through the recursive calls.

Performance Optimization:
- For functions that may be called with the same arguments multiple times, consider implementing memoization to cache results and improve performance.
- Be mindful of the space complexity of your recursive solutions, especially when dealing with large inputs.

## Data Flow

The data flow in recursive functions typically follows this pattern:

1. The function is called with an initial input.
2. The function checks for the base case(s).
3. If the base case is not met, the function processes the current input and makes a recursive call with a modified input.
4. Steps 2-3 repeat until the base case is reached.
5. Once the base case is reached, the function returns a value.
6. The returned values propagate back up through the call stack, potentially being modified at each level.
7. The final result is returned to the original caller.

```
[Initial Input] -> [Check Base Case] -> [Process Input] -> [Recursive Call]
                          |                                      |
                          |                                      v
                          |                               [Modified Input]
                          |                                      |
                          v                                      |
                    [Return Result] <---- [Propagate Results] <--+
```

Note: In helper method recursion, there's an additional outer function that maintains state across recursive calls of the inner helper function.