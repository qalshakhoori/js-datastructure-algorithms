# JavaScript Search Algorithms Implementation

This project implements three common search algorithms in JavaScript: Linear Search, Binary Search, and Naive String Search.

The repository contains efficient and reusable implementations of these search algorithms, providing developers with ready-to-use functions for various searching tasks. Each algorithm is implemented in a separate file, making it easy to understand, use, and integrate into other projects.

These search algorithms are fundamental to computer science and are widely used in various applications, from simple data lookups to complex data processing tasks. By providing clear and well-commented implementations, this project aims to serve as both a practical tool for developers and an educational resource for those learning about search algorithms.

## Repository Structure

The repository is organized as follows:

```
.
└── Search/
    ├── 1.linearSearch.js
    ├── 2.binarySearch.js
    └── 3.naiveSearch.js
```

- `1.linearSearch.js`: Contains the implementation of the linear search algorithm.
- `2.binarySearch.js`: Contains the implementation of the binary search algorithm.
- `3.naiveSearch.js`: Contains the implementation of the naive string search algorithm.

## Usage Instructions

### Installation

No installation is required. You can simply clone the repository or download the individual JavaScript files as needed.

### Getting Started

To use these search algorithms in your project, follow these steps:

1. Copy the desired search algorithm file(s) into your project directory.
2. Import the function(s) into your JavaScript file:

```javascript
const linearSearch = require('./1.linearSearch.js');
const binarySearch = require('./2.binarySearch.js');
const naiveSearch = require('./3.naiveSearch.js');
```

### Linear Search

The linear search algorithm searches for a target value in an array by checking each element sequentially.

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(arr, 7));  // Output: 6
console.log(linearSearch(arr, 11)); // Output: -1
console.log(linearSearch(arr, 1));  // Output: 0
```

### Binary Search

The binary search algorithm efficiently searches for a target value in a sorted array by repeatedly dividing the search interval in half.

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 2)); // Output: 1
console.log(binarySearch(arr, 3)); // Output: 2
console.log(binarySearch(arr, 5)); // Output: 4
console.log(binarySearch(arr, 6)); // Output: -1
```

### Naive String Search

The naive string search algorithm searches for occurrences of a short string within a longer string.

```javascript
const long = "wowomgzomg";
const short = "omg";
console.log(naiveSearch(long, short)); // Output: 2
```

### Performance Considerations

- Linear Search: O(n) time complexity, where n is the number of elements in the array.
- Binary Search: O(log n) time complexity for sorted arrays, making it more efficient for large datasets.
- Naive String Search: O(n*m) time complexity, where n is the length of the long string and m is the length of the short string.

## Data Flow

The data flow for each search algorithm is as follows:

1. Input: The search function receives the necessary parameters (array/string to search in, value/string to search for).
2. Processing: The algorithm performs its search operation based on its specific logic.
3. Output: The function returns the result (index of found item or count of occurrences).

```
Input -> Search Algorithm -> Output
```

For the Binary Search, the flow includes an additional step of checking if the input array is sorted.

Notes:
- Ensure that the input array for Binary Search is sorted in ascending order.
- The Naive String Search is case-sensitive.