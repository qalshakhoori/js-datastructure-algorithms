let names = ['Michael', 'Melissa', 'Andrea'];
let values = [true, {}, [], 2, 'awesome'];

// Big o of Arrays
// Arrays - O(1) - push, pop, shift, unshift, splice, sort
names.push('qalshakhoori');

// Arrays - O(n) - concat, slice, splice, forEach, map, filter, reduce, indexOf, includes
names.forEach((name) => {
  console.log(name);
});

let array1 = [1, 3, 4];
let array2 = [4, 6, 5];

console.log(array1.concat(array2)); // O(n)
