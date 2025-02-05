function capitalizeWords(arr) {
  if (arr.length === 0) {
    return [];
  }

  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['hello', 'world', 'recursion'])); // ['HELLO', 'WORLD', 'RECURSION']
console.log(capitalizeWords(['hello'])); // ['HELLO']
console.log(capitalizeWords([])); // []
