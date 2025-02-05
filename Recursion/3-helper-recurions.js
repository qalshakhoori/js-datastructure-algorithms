function collectOdds(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(nums);

  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // [1, 3, 5, 7, 9, 11]
console.log(collectOdds([2, 4, 6, 8, 10])); // []
