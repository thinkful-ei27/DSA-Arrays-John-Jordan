'use strict';

function urlify(str) {
  const replacer = '%20';
  const string = str.split('');

  for (let i = 0; i <= string.length; i++) {
    if (string[i] === ' ') {
      string[i] = replacer;
    }
  }

  return string.join('');
}

// Runtime Complexity = O(n)
// No optimization needed

// console.log(urlify('tester tester'));
// console.log(urlify('www.thinkful.com /tauh ida parv een'));

function filter(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(filter([1, 2, 3, 4, 5, 6, 7]));

// Runtime Complexity = O(n)
// No optimization needed

function maxSum(arr) {
  let counter = 0;
  let sumArray = [];

  for (let i = 0; i < arr.length; i++) {
    counter += arr[i];
    sumArray.push(counter);
  }
  return Math.max(...sumArray);
}

// console.log(maxSum([1, -2, 3, 4, -5, 6, 7]));

// Runtime Complexity = O(n)
// No optimization needed

function mergeArrays(arr1, arr2) {
  const newArr = arr1.concat(arr2).sort((a, b) => a - b);
  console.log(newArr);
}

// mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

// Runtime Complexity = O(log(n))
// No optimization ever needed in history evvvver!!!!!

function removeCharacters(str, badbois) {
  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = 0; j < badbois.length; j++) {
      if (str[i] === badbois[j]) {
        str = str.replace(`${str[i]}`, '');
      }
    }
  }
  return str;
}
// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// Runtime Complexity = O(n^2)
// In dire need of optimization

function products(arr) {
  let answers = [];
  // Create shallow copy of array without current index
  // const shallow = (num) => arr.filter(item => item !== num);

  // for (let i = 0; i<arr.length; i++) {
  //   const newShallow = shallow(arr[i]);
  //   answers.push(newShallow.reduce((acc, cv) => acc*cv));
  // }
  const multipy = arr.reduce((curr, next) => curr*next);

  for (let i = 0; i<arr.length; i++) {
    answers.push(multipy/arr[i]);
  }

  console.log(answers);
}

// products([1, 3, 9, 4]);

// Runtime complexity = O(n^2)
// Yeah we optimized

function search2dArray(array) {
  let zeroArray = [];
  const zeroes = array.map(arr => {
    for (let i = 0; i<arr.length; i++) {
      if (arr[i] === 0) {
        if (!zeroArray.includes(i)) {
          zeroArray.push(i);
        }
      }
    }
    return zeroArray;
  });
  const rowZeroes = array.map(arr => {
    let anyZero = arr.indexOf(0); // if Undefined, keep as is
    if (anyZero === -1) {
      return arr;
    } else {
      return arr.map(number => number * 0);
    }
  });
  return rowZeroes.map(arr => {
    const zer = zeroes[0];
    zer.forEach(z => arr[z] = 0);
    return arr;
  });
}

const nums = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

console.log(search2dArray(nums));

// Runtime complexity = O(n factorial)
// This could be significantly optimized with recursion (we think)