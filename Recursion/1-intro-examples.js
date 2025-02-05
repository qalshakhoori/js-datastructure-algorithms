// Write a function called countDown that accepts a number and counts down from that number to 0.
// The function should print the current number and then count down from that number to 0.
// Once the number reaches 0, the function should print 'All done!'.

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(10);

// Write a function called sumRange. It will take a number and return the sum of all numbers from 1
// up to the number passed to the function.

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4)); // 10
console.log(sumRange(10)); // 55
