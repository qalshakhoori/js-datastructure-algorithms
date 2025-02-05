function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }

  let element = arr[0];
  if (element) {
    element = element[0].toUpperCase() + element.slice(1);
  }

  return [element].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']
console.log(capitalizeFirst(['car'])); // ['Car']
console.log(capitalizeFirst([]));
console.log(capitalizeFirst(['', 'car', 'taco', 'banana'])); // ['', 'Car', 'Taco', 'Banana']
