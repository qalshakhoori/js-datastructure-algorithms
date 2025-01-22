# JavaScript Problem-Solving Functions

This project contains JavaScript functions for solving common programming problems.

The repository includes two main functions: a simple addition function and a character counting function. These functions demonstrate basic problem-solving techniques and provide utility for common programming tasks.

The addition function (`sum`) takes two numbers as input and returns their sum. It's a straightforward implementation of basic arithmetic in JavaScript.

The character counting function (`charCount`) is more complex. It takes a string as input and returns an object containing the count of each alphanumeric character in the string. This function demonstrates string manipulation, object handling, and character validation techniques in JavaScript.

## Repository Structure

```
.
└── Problem-Solving
    ├── 1-add.js
    └── 2-charCount.js
```

- `1-add.js`: Contains the `sum` function for adding two numbers.
- `2-charCount.js`: Contains the `charCount` function for counting characters in a string.

## Usage Instructions

### Installation

No installation is required. These are standalone JavaScript functions that can be run in any JavaScript environment.

### Getting Started

To use these functions, you can include them in your JavaScript project or run them directly in a JavaScript console.

#### Sum Function

```javascript
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2)); // Output: 3
```

#### Character Count Function

```javascript
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
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

console.log(charCount('Hello')); // Output: {h: 1, e: 1, l: 2, o: 1}
```

### Common Use Cases

1. Adding two numbers:
   ```javascript
   let result = sum(5, 7);
   console.log(result); // Output: 12
   ```

2. Counting characters in a string:
   ```javascript
   let charCounts = charCount('Hello World!');
   console.log(charCounts); // Output: {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
   ```

### Testing & Quality

To ensure the functions are working correctly, you can run the following test cases:

```javascript
console.log(sum(1, 2) === 3);
console.log(sum(-1, 1) === 0);
console.log(sum(0, 0) === 0);

console.log(JSON.stringify(charCount('aaaa')) === JSON.stringify({a: 4}));
console.log(JSON.stringify(charCount('hello')) === JSON.stringify({h:1, e:1, l:2, o:1}));
console.log(JSON.stringify(charCount('')) === JSON.stringify({}));
```

### Troubleshooting

1. Issue: The `charCount` function is not counting spaces or numbers.
   - Problem: The `isAlphaNumeric` function is designed to only count alphanumeric characters.
   - Solution: If you want to count all characters, remove the `isAlphaNumeric` check:

     ```javascript
     function charCount(str) {
       let result = {};
       for (let i = 0; i < str.length; i++) {
         let char = str[i].toLowerCase();
         result[char] = ++result[char] || 1;
       }
       return result;
     }
     ```

2. Issue: Performance concerns with `charCount` for very long strings.
   - Problem: The function iterates over each character in the string, which can be slow for very long strings.
   - Solution: For better performance with long strings, consider using a more efficient data structure or algorithm, such as a Trie or a streaming approach.

### Debugging

To enable debug mode, you can add console.log statements in the functions:

```javascript
function charCount(str) {
  console.log('Input string:', str);
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    console.log('Processing character:', char);
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
      console.log('Updated result:', result);
    }
  }
  console.log('Final result:', result);
  return result;
}
```

### Performance Optimization

For the `charCount` function, you can monitor the execution time for different input sizes:

```javascript
console.time('charCount');
charCount('your_input_string_here');
console.timeEnd('charCount');
```

Baseline performance expectations:
- For strings up to 1000 characters, the function should complete in less than 10ms on modern hardware.
- For strings up to 1,000,000 characters, the function should complete in less than 1000ms on modern hardware.

If performance is a concern, consider using a more efficient data structure or algorithm for very large inputs.

## Data Flow

The data flow in these functions is straightforward:

1. For the `sum` function:
   Input numbers -> Addition operation -> Output sum

2. For the `charCount` function:
   Input string -> Character iteration -> Character validation -> Character counting -> Output object

```
[Input String] -> [Character Iteration] -> [isAlphaNumeric Check] -> [Character Counting] -> [Result Object]
```

Note: The `charCount` function processes each character of the input string sequentially, lowercases it, checks if it's alphanumeric, and updates the count in the result object.