function flatten(arr) {
  const result = [];

  function helper(input) {
    if (input.length === 0) {
      return result;
    }

    if (Array.isArray(input[0])) {
      helper(input[0]);
    } else {
      result.push(input[0]);
    }

    helper(input.slice(1));
  }

  helper(arr);

  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
