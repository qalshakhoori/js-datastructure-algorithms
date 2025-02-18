# JavaScript Sorting Algorithms Implementation

This project implements various sorting algorithms in JavaScript, providing a comprehensive collection of common sorting techniques.

The repository contains implementations of several sorting algorithms, each in its own file. These implementations serve as educational resources for understanding different sorting techniques and their JavaScript implementations. The algorithms range from simple ones like Bubble Sort to more complex ones like Quick Sort and Radix Sort.

Each sorting algorithm is implemented with clear, well-commented code, making it easy to understand the logic and flow of the algorithm. Additionally, many implementations include variations that allow for custom comparator functions, enabling sorting of complex data types or in custom orders.

## Repository Structure

```
.
└── Sorting/
    ├── 1.JavascriptSort.js
    ├── 2.BubbleSort.js
    ├── 3.SelectionSort.js
    ├── 4.InsertionSort.js
    ├── 5.MergeSort.js
    ├── 6.QuickSort.js
    └── 7.RadixSort.js
```

- `1.JavascriptSort.js`: Demonstrates the usage of JavaScript's built-in sort method.
- `2.BubbleSort.js`: Implements the Bubble Sort algorithm.
- `3.SelectionSort.js`: Implements the Selection Sort algorithm.
- `4.InsertionSort.js`: Implements the Insertion Sort algorithm.
- `5.MergeSort.js`: Implements the Merge Sort algorithm.
- `6.QuickSort.js`: Implements the Quick Sort algorithm.
- `7.RadixSort.js`: Implements the Radix Sort algorithm.

## Usage Instructions

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd Sorting
   ```

### Running the Algorithms

To run any of the sorting algorithms, use Node.js:

```
node <filename>.js
```

For example, to run the Bubble Sort algorithm:

```
node 2.BubbleSort.js
```

### Customizing Sort Behavior

Many of the sorting implementations allow for custom comparator functions. To use a custom comparator, pass it as an argument to the sorting function. For example:

```javascript
function customComparator(a, b) {
  // Custom comparison logic
  return a - b;
}

const sortedArray = bubbleSort(myArray, customComparator);
```

### Example Usage

Here's an example of using the Quick Sort algorithm with a custom comparator:

```javascript
const arr = [5, 2, 9, 1, 7, 6, 3];

function descendingOrder(a, b) {
  return b - a;
}

console.log(quickSort(arr, descendingOrder));
// Output: [9, 7, 6, 5, 3, 2, 1]
```

## Data Flow

1. Input: The sorting functions take an unsorted array as input.
2. Processing: The array elements are compared and swapped according to the specific algorithm's logic.
3. Output: The function returns the sorted array.

```
[Unsorted Array] -> [Sorting Algorithm] -> [Sorted Array]
```

Note: Some algorithms (like Merge Sort) create new arrays during the sorting process, while others (like Bubble Sort) modify the original array in-place.

## Troubleshooting

- If you encounter stack overflow errors with recursive algorithms like Quick Sort or Merge Sort on large arrays, consider using an iterative implementation or increasing the stack size.
- For performance issues with large datasets, consider using more efficient algorithms like Merge Sort or Quick Sort instead of simpler ones like Bubble Sort or Selection Sort.

To enable verbose logging for debugging:

```javascript
const DEBUG = true;

function sort(arr) {
  if (DEBUG) console.log(`Sorting array: ${arr}`);
  // Sorting logic here
  if (DEBUG) console.log(`Sorted array: ${arr}`);
  return arr;
}
```

## Performance Optimization

- For small arrays (typically less than 10 elements), simpler algorithms like Insertion Sort may perform better due to less overhead.
- For larger arrays, use more efficient algorithms like Merge Sort or Quick Sort.
- Consider using the built-in JavaScript `sort()` method for general-purpose sorting, as it's often optimized for the specific JavaScript engine.

To profile the performance:

```javascript
console.time('sortingTime');
const sortedArray = sort(myArray);
console.timeEnd('sortingTime');
```

This will output the time taken for the sorting operation, allowing you to compare different algorithms or optimizations.