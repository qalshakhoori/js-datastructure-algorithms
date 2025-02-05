function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' },
  })
); // 10

console.log(nestedEvenSum({})); // 0
console.log(nestedEvenSum({ a: 1, b: 2, c: 3 })); // 2
console.log(nestedEvenSum({ a: 1, b: { b: 2, bb: { b: 3, bb: { b: 2 } } } })); // 4
console.log(
  nestedEvenSum({ a: 1, b: { b: 2, bb: { b: 3, bb: { b: 2 } } }, c: 3 })
); // 4
console.log(
  nestedEvenSum({
    a: 1,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' },
  })
); //10
