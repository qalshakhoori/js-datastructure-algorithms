// write a function called sameFrequency. given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities: Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < strNum1.length; i++) {
    let num = strNum1[i];
    lookup[num] ? (lookup[num] += 1) : (lookup[num] = 1);
  }

  for (let i = 0; i < strNum2.length; i++) {
    let num = strNum2[i];
    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }

  for (let key in lookup) {
    if (lookup[key] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(123, 321)); // true
console.log(sameFrequency(123, 322)); // false
console.log(sameFrequency(123, 333)); // false
console.log(sameFrequency(123, 3333)); // false
console.log(sameFrequency(123, 33333)); // false
