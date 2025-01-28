# JavaScript Algorithm Challenges

This repository contains a collection of JavaScript algorithm challenges focusing on various problem-solving techniques and data structures.

The challenges in this repository cover a range of algorithmic concepts, including frequency counters, multiple pointers, sliding windows, and more. Each challenge is implemented as a separate JavaScript file, providing solutions to specific problems with detailed explanations and examples.

These challenges are designed to help developers improve their problem-solving skills, understand common algorithmic patterns, and practice implementing efficient solutions in JavaScript.

## Repository Structure

```
.
└── Challenges
    ├── 1-same-frequency.js
    ├── 2-are-there-duplicates.js
    ├── 3-average-pair.js
    ├── 4-is-subsequence.js
    ├── 5-max-subarray-sum.js
    ├── 6-min-subarray-length.js
    └── 7-find-longest-substring.js
```

### Key Files

- `1-same-frequency.js`: Implements a function to check if two numbers have the same frequency of digits.
- `2-are-there-duplicates.js`: Provides multiple implementations to check for duplicates in a variable number of arguments.
- `3-average-pair.js`: Implements a function to find a pair of numbers in a sorted array that average to a target value.
- `4-is-subsequence.js`: Checks if one string is a subsequence of another string.
- `5-max-subarray-sum.js`: Finds the maximum sum of a subarray with a given length.
- `6-min-subarray-length.js`: Finds the minimum length of a contiguous subarray with a sum greater than or equal to a given value.
- `7-find-longest-substring.js`: Finds the length of the longest substring with all distinct characters.

## Usage Instructions

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd javascript-algorithm-challenges
   ```

### Running the Challenges

To run a specific challenge:

1. Navigate to the Challenges directory:
   ```
   cd Challenges
   ```
2. Run the desired JavaScript file using Node.js:
   ```
   node <filename>.js
   ```

For example, to run the "Same Frequency" challenge:
```
node 1-same-frequency.js
```

### Example Usage

Here's an example of how to use the `sameFrequency` function from `1-same-frequency.js`:

```javascript
const sameFrequency = require('./1-same-frequency.js');

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
```

### Testing & Quality

Each challenge file includes test cases to verify the correctness of the implemented functions. 
You can run these tests by executing the JavaScript files as described in the "Running the Challenges" section.

### Troubleshooting

If you encounter any issues while running the challenges:

1. Ensure you have Node.js installed on your system.
2. Check that you're in the correct directory when running the files.
3. Verify that the file names haven't been changed.

If problems persist, check the Node.js console output for any error messages, which can provide clues about the issue.

## Data Flow

The challenges in this repository primarily focus on processing input data and returning results based on specific algorithms. 
Here's a general flow of how data is processed in these challenges:

1. Input: The functions receive input data (e.g., numbers, strings, arrays).
2. Processing: The input is processed using various algorithmic techniques (e.g., frequency counters, multiple pointers, sliding windows).
3. Output: The functions return the result based on the specific problem requirements.

```
[Input Data] -> [Algorithm Processing] -> [Output Result]
```

Each challenge implements this flow differently based on its specific requirements and the algorithmic approach used.