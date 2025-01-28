// Write a function called isSubsequence. Given two strings, check whether the characters in the first string form a
// subsequence of the characters in the second string. In other words, the function should check whether
// the characters in the first string appear somewhere in the second string, without their order changing.

// Complexity: O(n)
// Space complexity: O(1)
// Multiple pointers pattern
// This function uses a two-pointer approach to check if the characters in the first string form a subsequence of the characters in the second string:
// 1. Start with left pointer at beginning of first string and right pointer at beginning of second string
// 2. If characters at left and right pointers match, move left pointer right
// 3. If left pointer reaches end of first string, we found a subsequence - return true
// 4. If right pointer reaches end of second string, we did not find a subsequence - return false
// 5. Otherwise, move right pointer right

function isSubsequence(str1, str2) {
  let left = 0;
  let right = 0;
  while (right < str2.length) {
    if (str1[left] === str2[right]) {
      left++;
    }
    if (left === str1.length) {
      return true;
    }

    if (right === str2.length - 1) {
      return false;
    }

    right++;
  }

  return false;
}

// Test cases
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('', 'acb')); // true
console.log(isSubsequence('abc', '')); // false
