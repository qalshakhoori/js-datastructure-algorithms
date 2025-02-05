function collectStrings(obj) {
  const result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] == 'object') {
      result.push(...collectStrings(obj[key]));
    }
  }

  return result;
}

console.log(
  collectStrings({
    stuff: 'foo',
    data: {
      val: {
        thing: {
          info: 'bar',
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: 'baz',
            },
          },
        },
      },
    },
  })
);
