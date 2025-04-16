# Dynamic Programming Fibonacci Calculator: Efficient Number Sequence Generation

This project implements two different approaches to calculate Fibonacci numbers: a recursive solution and an optimized memoized version. The implementation provides developers with a clear comparison between basic recursion and dynamic programming optimization techniques, demonstrating significant performance improvements for larger sequence calculations.

The project showcases fundamental dynamic programming concepts through the Fibonacci sequence implementation. While the recursive solution provides a straightforward and intuitive approach, the memoized version demonstrates how dynamic programming can dramatically improve performance by storing and reusing previously calculated values, making it possible to efficiently compute even large Fibonacci numbers that would be impractical with simple recursion.

## Repository Structure
```
Dynamic-Programming/
├── DP_Fibonnaci_Memoized.js   # Optimized Fibonacci implementation using memoization
└── DP_Fibonnaci_Recursive.js   # Basic recursive Fibonacci implementation
```

## Usage Instructions
### Prerequisites
- Node.js (version 12.0.0 or higher)
- JavaScript runtime environment

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd Dynamic-Programming
```

2. No additional dependencies are required as the implementation uses pure JavaScript.

### Quick Start
To run either implementation:

```bash
# For memoized version
node DP_Fibonnaci_Memoized.js

# For recursive version
node DP_Fibonnaci_Recursive.js
```

### More Detailed Examples

1. Using the Memoized Version:
```javascript
const fib = require('./DP_Fibonnaci_Memoized.js');

console.log(fib(10));  // Output: 55
console.log(fib(100)); // Output: 354224848179262000000
```

2. Using the Recursive Version:
```javascript
const fib = require('./DP_Fibonnaci_Recursive.js');

console.log(fib(10));  // Output: 55
// Note: Avoid using large numbers with recursive version
```

### Troubleshooting

Common Issues:

1. Stack Overflow with Recursive Version
   - Problem: `RangeError: Maximum call stack size exceeded`
   - Cause: Attempting to calculate large Fibonacci numbers using the recursive version
   - Solution: Use the memoized version for numbers larger than 40

2. Performance Issues
   - Problem: Slow calculation times with recursive version
   - Diagnostic: Time the execution
   ```javascript
   console.time('fib');
   console.log(fib(40));
   console.timeEnd('fib');
   ```
   - Solution: Switch to memoized version for better performance

## Data Flow
The Fibonacci calculation process follows a simple but powerful pattern of number sequence generation where each number is the sum of the previous two numbers.

```ascii
Input(n) --> [Check Base Case] --> [Calculate f(n-1) + f(n-2)] --> Output(nth Fibonacci)
                    |                         ^
                    |                         |
            [Memoized Version]        [Store Results in Memo]
```

Key Component Interactions:
1. Base case handling (n ≤ 2) returns 1 directly
2. Recursive calls calculate smaller Fibonacci numbers
3. Memoization stores calculated values in an array
4. Subsequent calls check memo before calculation
5. Results are propagated up the call stack
6. Memory usage grows linearly with input size in memoized version
7. Time complexity is O(n) for memoized vs O(2^n) for recursive version