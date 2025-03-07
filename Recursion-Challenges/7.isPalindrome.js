function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] === str.slice(-1)) {
    // compares the first and last characters
    return isPalindrome(str.slice(1, -1));
  }

  return false;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('a')); // true
