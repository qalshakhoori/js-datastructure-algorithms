// Write a function that takes a string and returns counts of each character in the string.

console.log(charCount('aaaa')); // {a: 4}
console.log(charCount('hello')); // {h:1, e:1, l:2, o:1}

console.log(charCount('my phone number is 182763')); // spaces and numbers are characters too
console.log(charCount('Hello hi')); // all lowercase

console.log(charCount('')); // {}

function charCount(str) {
  // make object to return at end
  let result = {};

  // loop over string for each character
  for (let i = 0; i < str.length; i++) {
    // get the character
    let char = str[i].toLowerCase();

    // if character is something else (space, period, etc.) don't do anything
    // if (!/[a-z0-9]/.test(char)) {
    //   // if the char is a number/letter AND is a key in object, add one to count
    //   if (result[char] > 0) {
    //     result[char]++;
    //   }
    //   // if the char is a number/letter AND not in object, add it and set value to 1
    //   else {
    //     result[char] = 1;
    //   }
    // }

    // regex performance is not good, so we can use a helper function
    // if (/[a-z0-9]/.test(char)) {
    //   result[char] = ++result[char] || 1;
    // }

    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  // retunr object at end
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
