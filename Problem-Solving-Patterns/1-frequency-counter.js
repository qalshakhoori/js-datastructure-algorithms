// write a function that return true if every value in the first array has its corresponding value squared in the second array

// not the best approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false

// better approach
function sameByFreqCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

// console.log(sameByFreqCounter([1, 2, 3], [4, 1, 9])); // true
// console.log(sameByFreqCounter([1, 2, 3], [1, 9])); // false
// console.log(sameByFreqCounter([1, 2, 1], [4, 4, 1])); // false
// console.log(sameByFreqCounter([1, 2, 3], [1, 4, 9])); // true

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

// more better way
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
