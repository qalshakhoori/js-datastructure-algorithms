# JavaScript Big O Notation Examples

This project demonstrates various Big O notation concepts using JavaScript, focusing on time complexity analysis for common operations on arrays and objects.

The repository contains examples that illustrate different time complexities, from constant-time O(1) operations to linear-time O(n) operations. 
These examples serve as a practical guide for understanding how algorithm efficiency is measured and how different approaches to solving problems can impact performance.

## Repository Structure

The repository is organized as follows:

- `BigO/`: Main directory containing all JavaScript files
  - `1-add.js`: Demonstrates different approaches to adding numbers and their time complexities
  - `2-arrays.js`: Showcases time complexities of various array operations
  - `3-objects.js`: Illustrates time complexities of object operations

## Usage Instructions

### Installation

1. Ensure you have Node.js installed (version 12.0.0 or higher)
2. Clone this repository:
   ```
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```
   cd <project-directory>
   ```

### Running the Examples

To run any of the example files, use the Node.js runtime:

```bash
node BigO/1-add.js
node BigO/2-arrays.js
node BigO/3-objects.js
```

### Code Examples

#### Adding Numbers (from 1-add.js)

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToFormula(n) {
  return (n * (n + 1)) / 2;
}

// Measure performance
let t1 = performance.now();
addUpToFormula(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// Additional functions: printUpTo(n) and printUpToFive(n)
```

This example demonstrates two methods of adding numbers from 1 to n, showcasing the difference between O(n) and O(1) time complexities. It also includes functions for printing numbers.

#### Array Operations (from 2-arrays.js)

```javascript
let names = ['Michael', 'Melissa', 'Andrea'];
let values = [true, {}, [], 2, 'awesome'];

// O(1) operations: push, pop, shift, unshift, splice, sort
names.push('qalshakhoori');

// O(n) operations: concat, slice, splice, forEach, map, filter, reduce, indexOf, includes
names.forEach((name) => {
  console.log(name);
});

let array1 = [1, 3, 4];
let array2 = [4, 6, 5];

// O(n) operation
console.log(array1.concat(array2));
```

This code demonstrates various array operations and their respective time complexities.

#### Object Operations (from 3-objects.js)

```javascript
let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// O(1) operation
console.log(instructor.hasOwnProperty('firstName'));

// O(n) operations
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
console.log(Object.keys(instructor));

// Iterating over object keys
for (let key in Object.keys(instructor)) {
  console.log(key);
}
```

This example shows different object operations and their time complexities, including iterating over object keys.

### Troubleshooting

If you encounter any issues while running the examples, ensure that:

1. You have the correct version of Node.js installed
2. You are in the correct directory when running the files
3. The file permissions are set correctly

For more detailed error messages, you can run Node.js with the `--trace-warnings` flag:

```bash
node --trace-warnings BigO/1-add.js
```

This will provide more context for any warnings or errors that occur during execution.

## Data Flow

The data flow in this project is straightforward:

1. Each JavaScript file defines functions or operations
2. These functions are then executed or demonstrated
3. Results or performance metrics are logged to the console

```
[Define Functions/Operations] -> [Execute Examples] -> [Log Results/Metrics]
```

This simple flow allows for easy understanding and analysis of the Big O concepts demonstrated in each file.