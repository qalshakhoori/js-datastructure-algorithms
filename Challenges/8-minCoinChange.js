//Write a function minCoinChange that takes two arguments:
// an array of coin denominations (coins) and a target amount number (amount).
// The provided array of coins is sorted in ascending order,
// starting from the smallest coin denomination to the largest.
// Your task is to return an array representing
// the minimum number of coins needed to make the given amount.
// The result should be an array of the actual coins used, not their count or sum.
// To achieve this, you should start by considering the largest denominations
// first and use them as much as possible before moving to smaller denominations.
// As a consequence of this, the result array should be sorted in descending order,
// starting from the largest coin denomination to the smallest.

function minCoinChange(coins, amount) {
  const result = [];
  for (let i = coins.length - 1; i >= 0; i--) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      result.push(coins[i]);
    }
  }
  return result;
}

console.log(minCoinChange([1, 2, 3, 4, 5], 11));
console.log(minCoinChange([5, 10, 15, 20, 25], 85));
console.log(minCoinChange([1, 5, 6, 9], 11));

//Write a function called coinChange which accepts two parameters:
// an array of denominations and a value. The function should return
// the number of ways you can obtain the value from the given
// collection of denominations. You can think of this as figuring out
// the number of ways to make change for a given value from a supply of coins.

function coinChange(denominations, value) {
  const dp = new Array(value + 1).fill(0);
  dp[0] = 1;
  for (let coin of denominations) {
    for (let i = coin; i <= value; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[value];
}

const denominations = [1, 5, 10, 25];
console.log(coinChange(denominations, 1)); // 1
console.log(coinChange(denominations, 2)); // 1
console.log(coinChange(denominations, 5)); // 2
console.log(coinChange(denominations, 10)); // 4
console.log(coinChange(denominations, 25)); // 13
console.log(coinChange(denominations, 45)); // 39
console.log(coinChange(denominations, 100)); // 242
console.log(coinChange(denominations, 145)); // 622
console.log(coinChange(denominations, 1451)); // 425663
console.log(coinChange(denominations, 14511)); // 409222339
