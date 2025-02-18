function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(selectionSort([29, 8, 37, 45]));
console.log(selectionSort([29, 8, 37, 45, 1, 0, 2, 3, 4, 5, 6, 7]));

function selectionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[min]) < 0) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7], (a, b) => b - a));
console.log(selectionSort([29, 8, 37, 45], (a, b) => b - a));
console.log(selectionSort([29, 8, 37, 45, 1, 0, 2, 3, 4, 5, 6, 7]));
var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(selectionSort(kitties, strComp));

var moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
