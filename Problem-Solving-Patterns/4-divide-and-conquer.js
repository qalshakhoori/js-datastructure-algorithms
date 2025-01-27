// divide and conquer pattern
// this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// this pattern can tremendously decrease time complexity

// given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1

// naive solution
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
console.log(search([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(search([1, 2, 3, 4, 5, 6], 3)); // 2

// refactored solution
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
console.log(searchByDivideAndConquer([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(searchByDivideAndConquer([1, 2, 3, 4, 5, 6], 11)); // -1
console.log(searchByDivideAndConquer([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(searchByDivideAndConquer([1, 2, 3, 4, 5, 6], 3)); // 2
