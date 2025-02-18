// BigO : O(n)
// Linear search looks into each item of the array if it equals the required value

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
