// Bubble sort puts the largest element at the front and repeat unitl all the elements are sorted

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP
        // var temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleSort([29, 8, 37, 45]));

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let noSwap;

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7], (a, b) => b - a));
console.log(bubbleSort([29, 8, 37, 45], (a, b) => b - a));
