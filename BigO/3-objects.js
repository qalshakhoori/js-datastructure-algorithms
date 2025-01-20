let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// instructor.hasOwnProperty - O(1)
console.log(instructor.hasOwnProperty('firstName'));

// Object.values - O(n)
console.log(Object.values(instructor));

// Object.entries - O(n)
console.log(Object.entries(instructor));

// Object.keys - O(n)
for (let key in Object.keys(instructor)) {
  console.log(key);
}
